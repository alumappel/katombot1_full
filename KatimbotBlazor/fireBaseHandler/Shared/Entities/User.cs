using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
   public class User
    {
        public UserInfo info { get; set; }
        public List<Presentation> presentations { get; set; }

    }
}
