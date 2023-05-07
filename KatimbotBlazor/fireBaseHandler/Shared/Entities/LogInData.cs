using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
  public  class LogInData
    {
        public int ID { get; set; }
        [Required(ErrorMessage = "מה המייל שלך?")]
        [EmailAddress(ErrorMessage = "נא להזין כתובת מייל תקנית")]
        public string Mail { get; set; }
        [Required(ErrorMessage = "מה הסיסמא שלך?")]
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pic { get; set; }

    }
}
