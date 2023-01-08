using imrb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace imrb.Controllers
{
    public class RegisterController : Controller
    {

        public ActionResult SignUp()
        {
            return View();
        }

        [ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult CreateUser(User user)
        {

            user.Password = Hashing.HashPassword(user.Password);

            int userId = StoredProcedures.StoredProcedures.CreateUser(user);
            string error = string.Empty;
            switch (userId)
            {
                case -1:
                    error = "Username already exists.\\nPlease choose a different username.";
                    break;
                case -2:
                    error = "Supplied email address has already been used.";
                    break;
                default:
                    error = "Registration successful. Activation email has been sent. ";
                    user.Id = userId;
                    SendActivationEmail(user);
                    return ConfirmEmail();
            }

            ModelState.AddModelError("", error);

            return View("Index");
        }

        private void SendActivationEmail(User user)
        {
            Guid activationCode = Guid.NewGuid();
            StoredProcedures.StoredProcedures.InsertActivationCode(user.Id, activationCode);
            string baseUrl = string.Format("{0}://{1}", HttpContext.Request.Scheme, HttpContext.Request.Host);
            using (MailMessage mm = new MailMessage("AllManxApp@gmail.com", user.Email))
            {
                mm.Subject = "Account Activation";
                string body = "Hello " + user.Username + ",";
                body += "<br /><br />Please click the following link to activate your account";
                body += "<br /><a href = '" + $"{baseUrl}/Register/EmailActivation?ActivationCode={activationCode}" + "'>Click here to activate your account.</a>";
                body += "<br /><br />Thanks";
                mm.Body = body;
                mm.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential("AllManxApp@gmail.com", "smmsphpvvchrlmmj");
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
            }
        }

        public ActionResult ConfirmEmail()
        {
            return View("ConfirmEmail");
        }

        public ActionResult EmailActivation(Guid ActivationCode)
        {
            int response = StoredProcedures.StoredProcedures.CompareActivationCode(ActivationCode);


            switch (response)
            {
                case 2:
                    return Redirect("/Login/LoggedIn");

                default:
                    return View();

            }

        }
    }
}