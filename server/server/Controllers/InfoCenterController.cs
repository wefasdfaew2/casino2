using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace server.Controllers
{
    public class InfoCenterController : Controller
    {
        // GET: InfoCenter
        public ActionResult AboutUs()
        {
            return View();
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}