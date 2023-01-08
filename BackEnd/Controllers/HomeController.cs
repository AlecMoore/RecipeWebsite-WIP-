using Microsoft.AspNetCore.Mvc;

namespace imrb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Dashboard()
        {
            return View();

        }
    }
}