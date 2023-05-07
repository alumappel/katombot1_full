using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
  public  class NewUser
    {
       
        public int ID { get; set; }
        [Required(ErrorMessage = "מה המייל שלך?")]
        [EmailAddress(ErrorMessage = "נא להזין כתובת מייל תקנית")]
        public string Mail { get; set; }
        [Required(ErrorMessage = "נא לאמת את המייל")]
        [Compare("Mail", ErrorMessage = "הכתובות צריכות להיות זהות")]
        public string ValidMail { get; set; }

        [Required(ErrorMessage = "איך קוראים לך?")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "מה השם משפחה שלך?")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "בבקשה לבחור סיסמא")]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "הסיסמאות צריכות להיות זהות")]
        [Required(ErrorMessage = "נא לאמת את הסיסמא")]
        public string ValidPassword { get; set; }
    }
}
