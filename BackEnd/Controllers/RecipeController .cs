using Microsoft.AspNetCore.Mvc;

namespace imrb.Controllers
{
    public class RecipeController : Controller
    {
        public ActionResult CreateRecipe()
        {
            return View();
        }       
        
        public ActionResult ReviewRecipe()
        {
            return View();
        }        
        
        public ActionResult ViewRecipe()
        {
            return View();
        }
    }
}