using Microsoft.AspNetCore.Mvc;

namespace imrb.Controllers
{
    public class UserProfileController : Controller
    {
        public ActionResult ProfileDashboard()
        {
            return View();

        }
    }
}