using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
   public class NewPinfo
    {
        public string Name { get; set; }
        public string Date { get; set; }
        public double Score { get; set; }
        public int ID { get; set; }
        public bool Ardu { get; set; }

        public double Hands { get; set; }
        public double Look { get; set; }
        public double Voice { get; set; }
        public double Move { get; set; }

    }
}
