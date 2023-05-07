using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
  public  class VidAndMic
    {
        public int ID { get; set; }
        public int Left { get; set; }
        public int Right { get; set; }
        public int Hcenter { get; set; }
        public int Vcenter { get; set; }
        public int Up { get; set; }
        public int Down { get; set; }
        public int Changes { get; set; }
        public int Moves { get; set; }
        public int QuiteTime { get; set; }
        public int Pauses { get; set; }
        public double Pitch { get; set; }
        public double Volume { get; set; }
    }
}
