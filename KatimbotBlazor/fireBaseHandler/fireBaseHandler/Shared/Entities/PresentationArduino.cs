using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
    public class PresentationArduino
    {
        public int ID { get; set; }
        public string TimeStamp { get; set; }
        public double Hands { get; set; }
        public double Heart { get; set; }

        public double Temperature { get; set; }
    }
}
