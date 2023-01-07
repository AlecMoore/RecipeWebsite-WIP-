using imrb.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using imrb.StoredProcedures;
using System.Net.Mail;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using System.Security.Principal;
using System.Web;
using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace imrb.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult SignIn(Login login)
        {
            string wank = WindowsIdentity.GetCurrent().Name;
            string User = HttpContext.User.Identity.Name;
            string wana = HttpContext.Request.PathBase;

            System.Security.Claims.ClaimsPrincipal currentUser = this.User;




            int UserId = StoredProcedures.StoredProcedures.GetUserIdFromEmail(login.Email);
            string hash = StoredProcedures.StoredProcedures.GetHash(UserId);
            if (Hashing.ValidatePassword(login.Password, hash))
            {
                string[] roles = new string[10];
                roles[0] = "NetworkUser";

                var user = new GenericPrincipal(new ClaimsIdentity(login.Email), roles);
                Thread.CurrentPrincipal = HttpContext.User = user;

                StoredProcedures.StoredProcedures.UpdateLastLogin(UserId);
                return Redirect("/Login/LoggedIn");
            }
            else
            {
                ModelState.AddModelError("", "Login details are incorrect");
                return View("Index");
            }
        }

        //[Authorize]
        public ActionResult LoggedIn()
        {
            return View();
        }


        public ActionResult PasswordRecovery()
        {
            return View();

        }

        [ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult PasswordRecovery(string Email)
        {
            SendPasswordRecoveryEmail(Email);

            return View();

        }
        private void SendPasswordRecoveryEmail(string Email)
        {

            int UserId = StoredProcedures.StoredProcedures.GetUserIdFromEmail(Email);
            Guid activationCode = Guid.NewGuid();
            StoredProcedures.StoredProcedures.InsertActivationCode(UserId, activationCode);
            string baseUrl = string.Format("{0}://{1}", HttpContext.Request.Scheme, HttpContext.Request.Host);
            using (MailMessage mm = new MailMessage("AllManxApp@gmail.com", Email))
            {
                mm.Subject = "Password Reset";
                string body = "<br /><br />Please click the following link to reset your password";
                body += "<br /><a href = '" + $"{baseUrl}/Login/PasswordReset?ActivationCode={activationCode}" + "'>Click here to reset your password</a>";
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
    }
}