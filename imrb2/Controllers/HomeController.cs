using imrb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace imrb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();

        }
    }
}