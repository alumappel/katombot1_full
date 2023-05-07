using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace fireBaseHandler.Shared.Entities
{
    public class PresentationInfo
    {
        [Required(ErrorMessage = "לא בחרת נושא")]
        [StringLength(20, ErrorMessage = "שם הפרזנטציה צריך להיות עד 20 תווים")]
        public string Name { get; set; }
        public string Date { get; set; }
        public double Score { get; set; }
        public int ID { get; set; }
        public bool Ardu { get; set; } = true;
        public string Type { get; set; }
    }
}
