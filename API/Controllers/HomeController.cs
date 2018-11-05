using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BLS_Refresher.Models;
using Microsoft.AspNetCore.Cors;

namespace BLS_Refresher.Controllers
{
    public class HomeController : Controller
    {
        private readonly BLSContext _context;
    public HomeController(BLSContext context) {
      _context = context;
    }
     //   [HttpGet("/users")]
        public JsonResult Index()
        {
            return Json(_context.Users);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [HttpPost("/")]
        public IActionResult NewUser(string firstName, string lastName, string email)
        {
            AppUsers newCustomer = new AppUsers();

            newCustomer.FirstName = firstName;
            newCustomer.LastName = lastName;
            newCustomer.EmailAddress = email;
            newCustomer.DateAdded = DateTime.Now;

            _context.Users.Add(newCustomer);
            _context.SaveChanges();

            return Json(newCustomer);
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
