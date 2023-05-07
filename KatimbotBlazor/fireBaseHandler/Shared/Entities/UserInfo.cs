using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
   public class UserInfo
    {
        public int ID { get; set; }  
        public string Mail { get; set; }
        public string Password { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
