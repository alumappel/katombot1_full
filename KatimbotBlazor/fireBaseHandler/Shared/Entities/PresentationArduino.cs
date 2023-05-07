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
        public int Hands { get; set; }
        public double Heart { get; set; }

        public List<double> HeartList { get; set; }
        public List<double> TempList { get; set; }
        public List <int> ResistList { get; set; }
        public double Temperature { get; set; }
    }
}
