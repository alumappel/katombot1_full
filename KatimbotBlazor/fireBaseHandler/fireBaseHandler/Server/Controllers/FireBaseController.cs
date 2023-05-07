using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fireBaseHandler.Shared.Entities;
using System.Text.Json;
using System.Text.Json.Serialization;


using FireSharp;
using FireSharp.Config;
using FireSharp.Response;
using FireSharp.Interfaces;
using static System.Net.WebRequestMethods;


namespace fireBaseHandler.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FireBaseController : ControllerBase
    {

            private IFirebaseConfig ifc = new FirebaseConfig()
            {

                AuthSecret = "s8szMCm23TckTkX9VJOTC7KeiepGPxc1T4C9hxgj",
                BasePath = "https://try1-a61d1-default-rtdb.firebaseio.com/"

            };


        ////////////////////////////////////////////////////////////////////////////////////
        //..................get..........................................................

        //...............................................//
        //.........קבלת מידע על הפרזנטציה..................//
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/PresentationInfo/p
        //..............................................//

        [HttpGet("PresentationInfo/{p}")]
        public async Task<IActionResult> GetInfo(string p)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Get("userPresentations/p" + p + "/info");
                PresentationInfo info = res.ResultAs<PresentationInfo>();
                return Ok(info);
            }
            catch
            {
                return BadRequest("Probelm");

            }

        }
        //............................................//
        //..........מידע לכל הפרזנטציות.............//
        //............מחזיר  רשימת פרזנטציות.......// 
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/AllPInfo
        //.....................................//
        [HttpGet("AllPInfo")]

        public async Task<IActionResult> GetAllInfo()
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = client.Get("userPresentations");
                bool lastp = false;
                int p = 1;
                List<PresentationInfo> AllPinfo = new List<PresentationInfo>();
                while (!lastp)
                {
                    string myp = p.ToString();
                    if (res.Body.Contains("p" + myp))
                    {
                        var pres = client.Get("userPresentations/p" + p + "/info");
                        PresentationInfo info = pres.ResultAs<PresentationInfo>();
                        AllPinfo.Add(info);
                        p++;
                    }
                    else
                        lastp = true;
                }      
                return Ok(AllPinfo);
            }
            catch
            {
                return BadRequest("Probelm");

            }
        }

        //.......................................//
        //..........מספר פרזנטציות.............//
        //מחזיר את מספר הפרזנטציה הבאה.......// 
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/NumP
        //....................................//
        [HttpGet("NumP")]

        public async Task<IActionResult> GetNumP()
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = client.Get("userPresentations");
                bool lastp = false;
                int p = 1;
                while (!lastp)
                {
                    string myp = p.ToString();
                    if (res.Body.Contains("p" + myp))
                    {
                        p++;
                    }
                    else
                        lastp = true;
                }
                return Ok(p);
            }
            catch
            {
                return BadRequest("Probelm");

            }
        }

        //...............................................//
        //.........קבלת נתוני כל הפרזנטציה..................//
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/TheWholePresentation/p
        //..............................................//

        [HttpGet("TheWholePresentation/{p}")]
        public async Task<IActionResult> GetPresentation(string p)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Get("userPresentations/p" + p+"/arduino");

                List<PresentationArduino> PresentationList = new List<PresentationArduino>();
                PresentationList = res.ResultAs<List<PresentationArduino>>();
                return Ok(PresentationList);
            }
            catch
            {
                return BadRequest("Probelm");

            }

        }

        ////////////////////////////////////////////////////////////////////////////////////
        //..................post..........................................................


        ////עדכון ציון
        //[HttpPost("AddScore/{p}")]
        //public async Task<IActionResult> AddScore(string p, JsonDocument score)
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = client.Get("userPresentations/p");
        //        if (res != null)
        //        {
        //            var setter = client.SetAsync("userPresentations/p" + p.ToString() + "/info/Score", score);
        //            return Ok(p);
        //        }
        //        else
        //        {
        //            return BadRequest("Probelm");
        //        }
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }
        //}

        //............................//
        //.......פרזנטציה חדשה......//
        //..https://projects.telem-hit.net/2022/IOT_DanNetta/NewP
        //..........................//

        [HttpPost("NewP")]
        public async Task<IActionResult> AddP(PresentationInfo Presentation)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = client.Get("userPresentations");
                bool lastp = false;
                int p = 1;
                while (!lastp)
                {
                    string myp = p.ToString();
                    if (res.Body.Contains("p" + myp))
                    {
                        p++;
                    }
                    else
                        lastp = true;
                }
                PresentationArduino empty = new PresentationArduino()
                {
                    ID = 0,
                    TimeStamp = "",
                    Hands = 0,
                    Heart = 0,
                    Temperature = 0
                };
                if (Presentation != null)
                {
                    var setter = client.SetAsync("userPresentations/p" + p.ToString() + "/arduino/" + "0", empty);
                    setter = client.SetAsync("userPresentations/p" + p.ToString() + "/info/", Presentation);
                    return Ok(p);
                }
                else
                {
                    return BadRequest("Probelm");
                }
            }
            catch
            {
                return BadRequest("Probelm");

            }
        }

        //.................................................//
        //.........הכנסת מידע לפרזנטציה..................//
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/InsertArduino/p
        //................................................//

        [HttpPost("InsertArduino/{p}")]
        public async Task<IActionResult> AddArduino(PresentationArduino PresentationArduino, string p)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);


            List<PresentationArduino> PresentationArduinoList = new List<PresentationArduino>();

            var res = await client.GetAsync("userPresentations/p" + p + "/arduino");
            PresentationArduinoList = res.ResultAs<List<PresentationArduino>>();


            int myID = PresentationArduinoList.Where(w => w != null).Max(w => w.ID);
            myID++;

            string timestamp = DateTime.Now.ToLongTimeString();

            PresentationArduino.TimeStamp = timestamp;
            PresentationArduino.ID = myID;

            try
            {
                if (PresentationArduino != null)
                {
                    var setter = client.SetAsync("userPresentations/p" + p + "/arduino/" + myID.ToString(), PresentationArduino);
                    return Ok(PresentationArduino);

                }
                else
                {
                    return BadRequest("Probelm with passed object");

                }

            }
            catch
            {
                return BadRequest("error");
            }
        }


        ////////////////////////////////////////////////////////////////////////////////////
        //..................del..........................................................
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/DelEmpty/p

        [HttpDelete("DelEmpty/{p}")]
        public async Task<IActionResult> DelPresentation(string p)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Delete("userPresentations/p" + p);

                return Ok(p);
            }
            catch
            {
                return BadRequest("Probelm");

            }

        }

    }

}

