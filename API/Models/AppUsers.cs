using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BLS_Refresher.Models
{
    [Table("AppUsers")]
    public class AppUsers
    {
        public int CustomerID { get; set; }
        public DateTime DateAdded { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
    }
}