using imrb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace imrb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {

        //public ActionResult SignUp()
        //{
        //    return View();
        //}

        [HttpGet("[action]")]
        public int hello()
        {
            return 0;
        }

        [HttpPost("[action]")]
        public int wanker(int cunt)
        {
            return cunt;
        }

        [HttpPost("[action]")]
        public int CreateUser(int Id, string Email/*, string Password, string Username*/)
        {
        //    User user = new User(Id, Email, Password, Username);
        //    user.Password = Hashing.HashPassword(user.Password);

        //    int userId = StoredProcedures.StoredProcedures.CreateUser(user);
        //    string error = string.Empty;
            int result = 0;
            //switch (userId)
            //{
            //    case -1:
            //        error = "Username already exists.\\nPlease choose a different username.";
            //        break;
            //    case -2:
            //        error = "Supplied email address has already been used.";
            //        break;
            //    default:
            //        error = "Registration successful. Activation email has been sent. ";
            //        user.Id = userId;
            //        result = SendActivationEmail(user);
            //        break;
            //}

            //ModelState.AddModelError("", error);

            return result;
        }

        private int SendActivationEmail(User user)
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
            return 1;
        }

        //public ActionResult ConfirmEmail()
        //{
        //    return View("ConfirmEmail");
        //}

        //public ActionResult EmailActivation(Guid ActivationCode)
        //{
        //    int response = StoredProcedures.StoredProcedures.CompareActivationCode(ActivationCode);


        //    switch (response)
        //    {
        //        case 2:
        //            return Redirect("/Login/LoggedIn");

        //        default:
        //            return View();

        //    }

        //}
    }
}