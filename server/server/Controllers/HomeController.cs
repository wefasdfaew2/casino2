using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace server.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home";
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Menu()
        {
            return PartialView("_Menu");
        }

        public ActionResult Sportsbook()
        {
            ViewBag.Title = "Sportsbook";
            return View();
        }

        public ActionResult LiveCasino()
        {
            ViewBag.Title = "Live Casino";
            return View();
        }

        public ActionResult GameDetail()
        {
            return View();
        }

        public ActionResult Games()
        {
            ViewBag.Title = "Games";
            return View();
        }

		public ActionResult Promotion()
		{
            ViewBag.Title = "Promotion";
			return View();
		}

        public ActionResult HowToPlay()
        {
            return View();
        }
        public ActionResult Help()
        {
            ViewBag.Title = "Help";
            return View();
        }
    }
}