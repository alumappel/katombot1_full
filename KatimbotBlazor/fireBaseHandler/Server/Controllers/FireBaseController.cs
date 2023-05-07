using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fireBaseHandler.Shared.Entities;
using System.Text.Json;
using System.Text.Json.Serialization;

using System.Net.Mail;
using SendGrid;
using SendGrid.Helpers.Mail;

using FireSharp;
using FireSharp.Config;
using FireSharp.Response;
using FireSharp.Interfaces;
using static System.Net.WebRequestMethods;
using fireBaseHandler.Server.Data;
using uploadFiles.Server.Helpers;

namespace fireBaseHandler.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FireBaseController : ControllerBase
    {
        private readonly FileStorage _fileStorage;

        public FireBaseController(FileStorage fileStorage)
        {
            _fileStorage = fileStorage;

        }


        //הגדרות חיבור
        private IFirebaseConfig ifc = new FirebaseConfig()
            {

                AuthSecret = "s8szMCm23TckTkX9VJOTC7KeiepGPxc1T4C9hxgj",
                BasePath = "https://try1-a61d1-default-rtdb.firebaseio.com/"

            };

        [HttpGet("Try/{u}/{p}")]
        public async Task<IActionResult> Try(string u, string p)
        {
            return Ok(u + p);

        }
        //........................................................................................................//
        //......................................ניהול משתמשים....................................................//
        //........................................................................................................//


        //מציאת המשתמש המחובר
        [HttpGet("FindUserActive")]
        public async Task<IActionResult> FindUserActive()
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = client.Get("Active");
                string active = res.ResultAs<String>();
                if (active != "null")
                {
                    return Ok(active);
                }
                else
                    return BadRequest("no active user");
            }
            catch
            {
                return BadRequest("Probelm");

            }
        }


        //..........................................//
        //הוספת משתמש ראשון- לכל פעם שעושים שינוי נתונים 
        //..........................................//

        [HttpGet("NewUserEmpty")]
        public async Task<IActionResult> NewEmptyUser()
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {

                LogInData user = new LogInData()
                {
                    ID = 0,
                    FirstName = "",
                    LastName = "",
                    Password = "111111",
                    Mail = "exemple@exemple.com",
                    Pic = "./images/profile.svg"
                };

                Presentation empty = new Presentation();
                PresentationInfo Iempty = new PresentationInfo()
                {
                    Name = "",
                    Score = 0,
                    Date = "",
                    ID = 0
                };
                empty.info = Iempty;
                PresentationArduino emptyA = new PresentationArduino()
                {
                    ID = 0,
                    Hands = 0,
                    HeartList = new List<double>(),
                    ResistList = new List<int>()
                    

                };
                List<PresentationArduino> Alist = new List<PresentationArduino>();
                Alist.Add(emptyA);

                VidAndMic emptyL = new VidAndMic()
                {
                    ID = 0,
                    Up = 0,
                    Down = 0,
                    Right = 0,
                    Changes = 0,
                    Left = 0,
                    Hcenter = 0,
                    Vcenter = 0,
                    Moves = 0,
                    Pauses = 0,
                    Pitch = 0,
                    QuiteTime = 0,
                    Volume = 0
                };
                List<VidAndMic> Clist = new List<VidAndMic>();
                Clist.Add(emptyL);

                empty.arduino = Alist;
                empty.computer = Clist;

                LogInData user2list = new LogInData
                {
                    Mail = user.Mail,
                    Password = user.Password
                };
                var setter = client.SetAsync("AllUsers/u" + user.ID.ToString() + "/info", user);
                setter = client.SetAsync("AllUsers/u" + user.ID.ToString() + "/presentations/p0", empty);
                setter = client.SetAsync("users/" + user.ID.ToString(), user2list);
                return Ok(user);

            }
            catch
            {
                return BadRequest("Probelm");

            }
        }


        //...........................................//
        //.....................הרשמה................// 
        //..........................................//

        [HttpPost("signup")]
        public async Task<IActionResult> adduser(NewUser user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                LogInData log = new LogInData();
                log.Mail = user.Mail.ToLower().Replace(" ","");
                List<LogInData> userslist = new List<LogInData>();
                var res = await client.GetAsync("users");
                userslist = res.ResultAs<List<LogInData>>();
                foreach (LogInData find in userslist)
                {
                    find.Mail = find.Mail.Replace(" ", "");
                    if (find.Mail.ToLower() == log.Mail.ToLower())
                    {
                        return BadRequest("exist user");
                    }
                }
                try
                {
                    int myID = userslist.Where(w => w != null).Max(w => w.ID);
                    myID++;
                    log.ID = myID;
                    log.Password = user.Password;
                    var setter = client.SetAsync("users/" + log.ID.ToString(), log);
                    log.FirstName = user.FirstName;
                    log.LastName = user.LastName;
                    log.Pic = "./images/profile.svg";

                    Presentation empty = new Presentation();
                    PresentationInfo Iempty = new PresentationInfo()
                    {
                        Name = "",
                        Score = 0,
                        Date = "",
                        ID = 0
                    };
                    empty.info = Iempty;
                    PresentationArduino emptyA = new PresentationArduino()
                    {
                        ID = 0,
                        TimeStamp = "",
                        Hands = 0,
                        HeartList = new List<double>(),
                        ResistList = new List<int>()
                    };
                    List<PresentationArduino> Alist = new List<PresentationArduino>();
                    Alist.Add(emptyA);

                    VidAndMic emptyL = new VidAndMic()
                    {
                        ID = 0,
                        Up = 0,
                        Down = 0,
                        Right = 0,
                        Changes = 0,
                        Left = 0,
                        Hcenter = 0,
                        Vcenter = 0,
                        Moves = 0,
                        Pauses = 0,
                        Pitch = 0,
                        QuiteTime = 0,
                        Volume = 0
                    };
                    List<VidAndMic> Clist = new List<VidAndMic>();
                    Clist.Add(emptyL);

                    empty.arduino = Alist;
                    empty.computer = Clist;

                    setter = client.SetAsync("AllUsers/u" + log.ID.ToString() + "/info", log);
                    setter = client.SetAsync("AllUsers/u" + log.ID.ToString() + "/presentations/p0", empty);
                    return Ok(log);

                }
                catch
                {
                    return BadRequest("problem");
                }
            }
            catch
            {
                return BadRequest("problem");
            }
        }

        //...........................................//
        //..........משתמש לפי איידי................// 
        //..........................................//


        [HttpGet("getuser/{user}")]
        public async Task<IActionResult> getuser(string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = await client.GetAsync("AllUsers/" + user + "/info");
                LogInData u = res.ResultAs<LogInData>();
                return Ok(u);
            }
            catch
            {
                return BadRequest("problem");
            }
        }



        //...........................................//
        //............./.....התחברות................// 
        //..........................................//

        [HttpPost("logIn")]
        public async Task<IActionResult> Finduser(LogInData log)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                List<LogInData> userslist = new List<LogInData>();
                var res = await client.GetAsync("users");
                userslist = res.ResultAs<List<LogInData>>();
                log.Mail = log.Mail.ToLower().Replace(" ", "");
                foreach (LogInData find in userslist)
                {
                   
                    if (find.Mail.ToLower() == log.Mail.ToLower())
                    {
                        find.Mail = find.Mail.Replace(" ", "");
                        if (find.Password == log.Password)
                        {
                            res = await client.GetAsync("AllUsers/u" + find.ID.ToString() + "/info");
                            LogInData user = res.ResultAs<LogInData>();
                            return Ok(user);
                        }
                            
                        else
                            return BadRequest("wrong password");
                    }
                }
                return BadRequest("no mail");
            }
            catch
            {
                return BadRequest("problem");
            }
        }

        [HttpGet("AllUsers")]
        public async Task<IActionResult> AllUsers()
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                List<LogInData> userslist = new List<LogInData>();
                var res = await client.GetAsync("users");
                userslist = res.ResultAs<List<LogInData>>();
                return Ok(userslist);
            }
            catch
            {
                return BadRequest("problem");
            }
        }

        [HttpGet("findPActive/{user}")]
        public async Task<IActionResult> findPActive(string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Get("AllUsers/u" + user + "/activeP");
                string p = res.ResultAs<string>();
                return Ok(p);
            }
            catch
            {
                return BadRequest("Probelm");
            }
        }

        [HttpGet("findPActiveUser")]
        public async Task<IActionResult> findPActiveUser(string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Get("Active");
                string p = res.ResultAs<string>();
                return Ok(p);
            }
            catch
            {
                return BadRequest("Probelm");
            }
        }

        //......................................................//
        //..................הוספת פרזנטציה למשתמש............//
        //....................................................//
        [HttpPost("NewPresUser/{user}/{ardu}")]
        public async Task<IActionResult> AddPuser(string user,bool ardu, PresentationInfo mypres)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = client.Get("AllUsers/" + user + "/AllPres");
                List<NewPinfo> AllPres = new List<NewPinfo>();
                try
                {
                    AllPres = res.ResultAs<List<NewPinfo>>();
                }
                catch
                {
                    AllPres = new List<NewPinfo>();
                }
                //         var res = client.Get("AllUsers/" + user + "/activeP");
                //   string p = res.ResultAs<string>();
                int pnum = 0;
                if (AllPres == null || AllPres.Count==0)
                {
                    AllPres = new List<NewPinfo>();
                    pnum = 0;
                }
                else
                {
                    try
                    {
                        pnum = AllPres[AllPres.Count - 1].ID;
                    }
                    catch
                    {
                        AllPres = new List<NewPinfo>();
                        pnum = 0;
                    }
                }
                pnum++;

                Presentation empty = new Presentation();
                PresentationInfo Iempty = new PresentationInfo()
                {
                    Name = "",
                    Score = 0,
                    Date = ""
                };
                empty.info = Iempty;
                PresentationArduino emptyA = new PresentationArduino()
                {
                    ID = 0,
                    Hands = 0,
                    HeartList = new List<double>(),
                    ResistList = new List<int>()
                };
                List<PresentationArduino> Alist = new List<PresentationArduino>();
                Alist.Add(emptyA);

                VidAndMic emptyL = new VidAndMic()
                {
                    ID = 0,
                    Up = 0,
                    Down = 0,
                    Right = 0,
                    Changes = 0,
                    Left = 0,
                    Hcenter = 0,
                    Vcenter = 0,
                    Moves = 0,
                    Pauses = 0,
                    Pitch = 0,
                    QuiteTime = 0,
                    Volume = 0
                };
                List<VidAndMic> Clist = new List<VidAndMic>();
                Clist.Add(emptyL);

                empty.arduino = Alist;
                empty.computer = Clist;
                if (mypres != null)
                {
                    mypres.ID = pnum;
                    mypres.Ardu = ardu;
                    empty.info = mypres;
                    var setter = client.SetAsync("AllUsers/" + user + "/presentations/p" + pnum.ToString(), empty);
                    setter = client.SetAsync("AllUsers/" + user + "/activeP", pnum);
                    NewPinfo newp = new NewPinfo()
                {
                    Name = mypres.Name,
                    Score = 0,
                    Hands = 0,
                    Date = mypres.Date,
                    Ardu = ardu,
                    Look = 0,
                    Move = 0,
                    Voice = 0,
                    ID = pnum
                };


              
                AllPres.Add(newp);
              
                    setter = client.SetAsync("AllUsers/" + user + "/AllPres", AllPres);

                    if (ardu)
                        setter = client.SetAsync("Active", user);
                    //return Ok(pnum);
                    return Ok(pnum);
                }
                else
                {
                    return BadRequest("בעיההה");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }
        }


        ////עיניים
        [HttpPost("AddComputerData/{u}/{p}")]
        public async Task<IActionResult> AddComputerData(string u,string p, VidAndMic data)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var res = await client.GetAsync("AllUsers/"+u+ "/presentations/p" + p + "/computer");
                if (res != null)
                {
                    List<VidAndMic> allData = res.ResultAs<List<VidAndMic>>();

                    int myID = allData.Where(w => w != null).Max(w => w.ID);
                    myID++;
                    data.ID = myID;
                    var setter = client.SetAsync("AllUsers/" + u + "/presentations/p" + p + "/computer/" + myID.ToString(), data);
                    return Ok(data);
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


        [HttpPost("InsertArduino/{u}/{p}")]
        public async Task<IActionResult> AddArduino(PresentationArduino PresentationArduino, string u,string p)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);


            List<PresentationArduino> PresentationArduinoList = new List<PresentationArduino>();

            var res = await client.GetAsync("AllUsers/" + u + "/presentations/p" + p + "/arduino");
            PresentationArduinoList = res.ResultAs<List<PresentationArduino>>();


            int myID = PresentationArduinoList.Where(w => w != null).Max(w => w.ID);
            myID++;

            PresentationArduino.ID = myID;

            try
            {
                if (PresentationArduino != null)
                {
                    var setter = client.SetAsync("AllUsers/" + u + "/presentations/p" + p + "/arduino/" + myID.ToString(), PresentationArduino);
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

        //.................................................................//
        //.........................כל המידע על הפרזנטציות................//
        //................................................................//


        [HttpGet("AllPInfo/{user}")]

        public async Task<IActionResult> GetAllInfo(string user)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {

                var res = client.Get("AllUsers/u" + user + "/activeP");
                int p = res.ResultAs<int>();
                List<PresentationInfo> AllPinfo = new List<PresentationInfo>();
                for(int i = 1; i<= p; i++)
                    {
                        var pres = client.Get("AllUsers/u" + user + "/presentations/p" + i.ToString() + "/info");
                    try
                    {
                        PresentationInfo info = pres.ResultAs<PresentationInfo>();
                       

                        AllPinfo.Add(info);
                    }
                    catch
                    {
                    }
                }
                return Ok(AllPinfo);
            }
            catch
            {
                return BadRequest("Probelm");

            }
        }


        //.................................................................//
        //.........................כל הפרזנטציות למשתמש..................//
        //................................................................//

        [HttpGet("AllPforUser/{user}")]

        public async Task<IActionResult> GetAllP(string user)
        {

            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {

                var res = client.Get("AllUsers/u" + user + "/activeP");
                int p = res.ResultAs<int>();
                List<Presentation> AllP = new List<Presentation>();
                for(int i = 1; i<= p; i++)
                    {
                        var pres = client.Get("AllUsers/u" + user + "/presentations/p" + i.ToString());
                    try
                    {
                        Presentation presi = pres.ResultAs<Presentation>();
                        string pDate = presi.info.Date;
                        if (pDate.Contains("/"))
                        {
                            string[] newP = pDate.Split("/");
                            pDate = newP[1] + "." + newP[0] + "." + newP[2];
                            presi.info.Date = pDate;
                        }

                        if (presi.computer.Count > 1)
                        {
                            if (presi.info.Score == 0)
                            {
                                Score presScore = new Score();
                                presScore.presentation = presi;
                                presScore.divideToMeasure();

                                presi.info.Score = Convert.ToDouble(presScore.myscore);
                                var setter = client.SetAsync("AllUsers/u" + user + "/presentations/p" + i.ToString() + "/info/Score", presScore.myscore);
                            }
                        }
                        if (presi.info.Score > 0)
                            AllP.Add(presi);
                        else
                        {
                            var del = client.Delete("AllUsers/u" + user + "/presentations/p" + i.ToString());
                        }


                    }
                    catch
                    {                      
                    }

                }            
                return Ok(AllP);
            }
            catch
            {
                return BadRequest("Probelm");
            }
        }


        [HttpGet("GetAllfix/{user}")]
        public async Task<IActionResult> GetAllfix(string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                var pres = client.Get("AllUsers/u" + user + "/AllPres");
                List<NewPinfo> allPres = pres.ResultAs<List<NewPinfo>>();
                List<NewPinfo> newListP = new List<NewPinfo>();
                for (int i = 0; i<allPres.Count;i++)
                {
                    NewPinfo myP = allPres[i];
                    string pDate = myP.Date;
                    if (pDate.Contains("/"))
                    {
                        string[] newP = pDate.Split("/");
                        pDate = newP[1] + "." + newP[0] + "." + newP[2];
                        myP.Date = pDate;
                    }


                    if (myP.Score ==0) {
                        try
                        {
                            var res = client.Get("AllUsers/u" + user + "/presentations/p" + myP.ID.ToString());
                            Presentation scoreP = res.ResultAs<Presentation>();
                            Score culc = new Score() { presentation = scoreP };
                            culc.divideToMeasure();
                            culc.getAllScores();
                            if (culc.myscore > 0)
                            {
                                myP.Score = culc.myscore;
                                myP.Hands = culc.HandsMeasure.score;
                                myP.Look = culc.Lookmeasure.score;
                                myP.Voice = culc.Voicemeasure.score;
                                myP.Move = culc.MoveMeasure.score;
                                newListP.Add(myP);
                            }
                            else
                            {
                                var del = client.Delete("AllUsers/u" + user + "/presentations/p" + myP.ID.ToString());
                                allPres.Remove(myP);
                            }
                        }
                        catch
                        {
                            allPres.Remove(myP);
                        }
                    }
                    else
                    {
                        newListP.Add(myP);
                    }
                }
                var setter = client.SetAsync("AllUsers/u" + user + "/AllPres", newListP);
                return Ok(newListP);
            }
            catch
            {
                return BadRequest("problem");
            }
        }


        [HttpGet("fix/{user}")]
        public async Task<IActionResult> fix( string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {

                var res = client.Get("AllUsers/u" + user + "/activeP");
                int p = res.ResultAs<int>();
                List<Presentation> AllP = new List<Presentation>();
                List<NewPinfo> allFix = new List<NewPinfo>();
                for (int i = 1; i <= p; i++)
                {
                    var pres = client.Get("AllUsers/u" + user + "/presentations/p" + i.ToString());
                    try
                    {
                        Presentation presi = pres.ResultAs<Presentation>();
                        if (presi.info.Name!="") { 
                        string pDate = presi.info.Date;
                        if (pDate.Contains("/"))
                        {
                            string[] newP = pDate.Split("/");
                            pDate = newP[1] + "." + newP[0] + "." + newP[2];
                            presi.info.Date = pDate;
                        }

                                    Score presScore = new Score();
                                    presScore.presentation = presi;
                                    presScore.divideToMeasure();
                            presScore.getAllScores();
                            presi.info.Score = Convert.ToDouble(presScore.myscore);
                                    if (presScore.myscore > 0)
                                    {
                                        NewPinfo fixP = new NewPinfo()
                                        {
                                            Name = presi.info.Name,
                                            Ardu = presi.info.Ardu,
                                            Date = presi.info.Date,
                                            ID = i,
                                            Score = presScore.myscore,
                                            Hands = presScore.HandsMeasure.score,
                                            Look = presScore.Lookmeasure.score,
                                            Move = presScore.MoveMeasure.score,
                                            Voice = presScore.Voicemeasure.score
                                        };
                                        allFix.Add(fixP);
                             
                            }
                        }
                    }
                    catch 
                    {
                    }
                  
                }

                if (allFix.Count > 0)
                {
                    var setter = client.SetAsync("AllUsers/u" + user + "/AllPres/", allFix);
                    return Ok(allFix);
                }
                else
                {
                    return BadRequest("באסה");
                }
            }
            catch
            {
                return BadRequest("Probelm");
            }
        }

        //.................................................................//
        //.........................מציאת פרזנטציה........................//
        //................................................................//

        [HttpGet("Presentation/{user}/{p}")]
        public async Task<IActionResult> GetP(string p,string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            try
            {
                var res = client.Get("AllUsers/" + user + "/presentations/p" + p);
                Presentation pres = res.ResultAs<Presentation>();
                string pDate = pres.info.Date;
                if (pDate.Contains("/"))
                {
                    string[] newP = pDate.Split("/");
                    pDate = newP[1] + "." + newP[0] + "." + newP[2];
                    pres.info.Date = pDate;
                }
                return Ok(pres);
            }
            catch
            {
                return BadRequest("Probelm");

            }

        }

        //.................................................................//
        //.........................העלאת תמונה...........................//
        //................................................................//


        [HttpPost("upload/{user}")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64 ,string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try
            {
                byte[] picture = Convert.FromBase64String(imageBase64);
                string url = await _fileStorage.SaveFile(picture, "png", "uploadedFiles");
                var setter = client.SetAsync("AllUsers/" + user + "/info/Pic", url);
                return Ok(url);
            }
            catch {
                return BadRequest("problem");
            }
        }


        //.................................................................//
        //.........................מחיקת תמונה........................//
        //................................................................//

        [HttpPost("deleteImages/{user}")]
        public async Task<IActionResult> DeleteImages([FromBody] string image,string user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            try { 
            await _fileStorage.DeleteFile(image, "uploadedFiles");
            var setter = client.SetAsync("AllUsers/" + user + "/info/Pic", "./images/profile.svg");

            return Ok("deleted");
            }
            catch
            {
                return BadRequest("problem");
            }
        }




        //.................................................................//
        //.........................מחיקת פרזנטציה........................//
        //................................................................//


        [HttpGet("DelEmpty/{user}/{p}")]
        public async Task<IActionResult> DelPresentation(string user,string p)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);
            List<NewPinfo> allPres = new List<NewPinfo>();
            try
            {
                ///AllUsers/u3/presentations/p2
               var res = client.Delete("AllUsers/" + user + "/presentations/p" + p);
                var pres = client.Get("AllUsers/" + user + "/AllPres");
                try
                {
                     allPres = pres.ResultAs<List<NewPinfo>>();
                    for (int i = 0; i< allPres.Count;i++)
                    {
                        NewPinfo delP = allPres[i];
                        if (p == delP.ID.ToString())
                        {
                            allPres.RemoveAt(i);
                            break;
                        }
                    }
                }
                catch
                {
                    return BadRequest("באסה");
                }
                var setter = client.SetAsync("AllUsers/" + user + "/AllPres", allPres);

                return Ok(allPres);
            }
            catch
            {
                return BadRequest("Probelm");

            }

        }

        //.........................................................//
        //.....................שחזור סיסמא.......................//
        //......................................................//

        [HttpPost("Mail")]

        public async Task<IActionResult> SendMessage(LogInData user)
        {
            IFirebaseClient client;
            client = new FirebaseClient(ifc);

            LogInData theuser = new LogInData();
            try
            {
                List<LogInData> userslist = new List<LogInData>();
                var res = await client.GetAsync("users");
                userslist = res.ResultAs<List<LogInData>>();
                foreach (LogInData find in userslist)
                {
                    if (find.Mail.ToLower() == user.Mail.ToLower())
                    {
                        res = await client.GetAsync("AllUsers/u" + find.ID.ToString() + "/info");
                        theuser = res.ResultAs<LogInData>();
                        break;
                    }
                }
                if (theuser.Mail.ToLower() != user.Mail.ToLower())
                    return BadRequest("no mail");
               }
            catch
            {
                return BadRequest("no mail");
              }

    string Message = "";

            try
            {
                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress("katimbot.telem@gmail.com");
                    mail.To.Add(theuser.Mail);
                    mail.Subject =theuser.FirstName + ", מצאנו את הסיסמא שלך!";
                    mail.Body = "<h3 style='font-family:Rubik; color: #321C99;direction:rtl;'>היי " + theuser.FirstName+ "!</h3>";
                    mail.Body += "<p style='font-family:Rubik;direction:rtl;'>שכחת את הסיסמא? הכל בסדר, שמרנו אותה בשבילך.</p>";
                    mail.Body += "<p style='font-family:Rubik;font-weight:600;direction:rtl;'>הסיסמא שלך היא: </p>";
                    mail.Body += "<h4 style='font-family:Rubik; color: #5346A3;direction:rtl;'>" + theuser.Password+ "</h4>";
                    mail.Body += "<p style='font-family:Rubik;direction:rtl;'>יאללה מחכים לראות את הפרזנטציה שלך <br/>";
                    mail.Body += "<a href='http://projects.telem-hit.net/2022/IOT_DanNetta/Login' style='font-family:Rubik;direction:rtl;'>חזרה לקתימבוט</a></p>";
                    mail.IsBodyHtml = true;
                    using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                    {
                        smtp.Credentials = new System.Net.NetworkCredential("katimbot.telem@gmail.com", "wpdynuezkmemkdvr");
                        smtp.EnableSsl = true;
                        smtp.Send(mail);
                        Message = "sent";
                        return Ok(theuser);
                    }
                }
            }
            catch (Exception ex)
            {
                Message = ex.Message;
                return BadRequest(Message);
            }

        }




        //.........................................................................//
        //.........................................................................//
        //.............................לא השימוש...................................//
        //.........................................................................//
        //........................................................................//
        /////////////////////////////////////////////////
        ////https://localhost:5001/api/FireBase/Presentation/p
        ////...........................................
        //[HttpGet("Presentation/{p}")]
        //public async Task<IActionResult> GetP(string p)
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);

        //    try
        //    {
        //        var res = client.Get("userPresentations/p"+p);

        //        Presentation pres = res.ResultAs<Presentation>();
        //        return Ok(pres);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }

        //}



        //////////////////////////////////////////////////////////////////////////////////////
        ////..................get..........................................................

        ////...............................................//
        ////.........קבלת מידע על הפרזנטציה..................//
        ////https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/PresentationInfo/p
        ////..............................................//




        //[HttpGet("PresentationInfo/{p}")]
        //public async Task<IActionResult> GetInfo(string p)
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);

        //    try
        //    {
        //        var res = client.Get("userPresentations/p" + p + "/info");
        //        PresentationInfo info = res.ResultAs<PresentationInfo>();
        //        return Ok(info);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }

        //}


        ////..//............................................//........מידע לכל הפרזנטציות.............//
        ////............מחזיר  רשימת פרזנטציות.......// 
        ////https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/AllPInfo
        ////.....................................//
        //[HttpGet("AllPInfo")]

        //public async Task<IActionResult> GetAllInfo()
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = client.Get("userPresentations");
        //        bool lastp = false;
        //        int p = 1;
        //        List<PresentationInfo> AllPinfo = new List<PresentationInfo>();
        //        while (!lastp)
        //        {
        //            string myp = p.ToString();
        //            if (res.Body.Contains("p" + myp))
        //            {
        //                var pres = client.Get("userPresentations/p" + p + "/info");
        //                PresentationInfo info = pres.ResultAs<PresentationInfo>();
        //                AllPinfo.Add(info);
        //                p++;
        //            }
        //            else
        //                lastp = true;
        //        }      
        //        return Ok(AllPinfo);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }
        //}

        //.......................................//
        //..........מספר פרזנטציות.............//
        //מחזיר את מספר הפרזנטציה הבאה.......// 
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/NumP
        //....................................//
        //[HttpGet("NumP")]

        //public async Task<IActionResult> GetNumP()
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = client.Get("userPresentations");
        //        bool lastp = false;
        //        int p = 1;
        //        while (!lastp)
        //        {
        //            string myp = p.ToString();
        //            if (res.Body.Contains("p" + myp))
        //            {
        //                p++;
        //            }
        //            else
        //                lastp = true;
        //        }
        //        return Ok(p);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }
        //}

        //[HttpGet("FindActive")]
        //public async Task<IActionResult> FindActive()
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = client.Get("userPresentations/Active");
        //        string active = res.ResultAs<String>();
        //        return Ok(active);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }
        //}

        //[HttpGet("camAndMic/{p}")]
        //public async Task<IActionResult> GetcamAndMic(string p)
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);

        //    try
        //    {

        //        var res = client.Get("userPresentations/p" + p + "/computer");

        //      List< VidAndMic> data = res.ResultAs<List<VidAndMic>>();
        //        return Ok(data);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }

        //}



        //////עיניים
        //[HttpPost("AddComputerData/{p}")]
        //public async Task<IActionResult> AddComputerData(string p, VidAndMic data)
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = await client.GetAsync("userPresentations/p" + p + "/computer");
        //        if (res != null)
        //        {
        //            List<VidAndMic> allData = res.ResultAs<List<VidAndMic>>();

        //            int myID = allData.Where(w => w != null).Max(w => w.ID);
        //            myID++;
        //            data.ID = myID;
        //            var setter = client.SetAsync("userPresentations/p" + p.ToString() + "/computer/" + myID.ToString(), data);
        //            return Ok(data);
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

        //[HttpPost("Activate/{p}")]
        //public async Task<IActionResult> Activate(string p)
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = await client.GetAsync("userPresentations/Active");
        //        var active = res.ResultAs<String>();
        //        if (active != "none")
        //            return Ok(active);
        //        else
        //        {
        //            var setter = client.SetAsync("userPresentations/Active", p);
        //            return Ok(p);
        //        }

        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }
        //}



        //[HttpPost("NewP")]
        //public async Task<IActionResult> AddP(PresentationInfo Presentation)
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);
        //    try
        //    {
        //        var res = client.Get("userPresentations");
        //        bool lastp = false;
        //        int p = 1;
        //        while (!lastp)
        //        {
        //            string myp = p.ToString();
        //            if (res.Body.Contains("p" + myp))
        //            {
        //                p++;
        //            }
        //            else
        //                lastp = true;
        //        }
        //        Presentation empty = new Presentation();
        //        empty.info = Presentation;

        //        PresentationArduino emptyA = new PresentationArduino()
        //        {
        //            ID = 0,
        //            TimeStamp = "",
        //            Hands = 0,
        //            Heart = 0,
        //            Temperature = 0
        //        };
        //        List <PresentationArduino> Alist = new List<PresentationArduino>();
        //        Alist.Add(emptyA);

        //        Looks emptyL = new Looks()
        //        {
        //            Up = 0,
        //            Down = 0,
        //            Right = 0,
        //            Changes = 0,
        //            Left = 0,
        //            Hcenter = 0,
        //            Vcenter = 0
        //        };
        //        List<Looks> Llist = new List<Looks>();
        //        Llist.Add(emptyL);

        //        empty.arduino = Alist;
        //        //empty.computer = Llist;

        //        if (Presentation != null)
        //        {
        //            var setter = client.SetAsync("userPresentations/p" + p.ToString(), empty);
        //            setter = client.SetAsync("userPresentations/Active", p);
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

        //.................................................//
        //.........הכנסת מידע לפרזנטציה..................//
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/InsertArduino/p
        //................................................//

        //[HttpPost("InsertArduino/{p}")]
        //public async Task<IActionResult> AddArduino(PresentationArduino PresentationArduino, string p)
        //{

        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);


        //    List<PresentationArduino> PresentationArduinoList = new List<PresentationArduino>();

        //    var res = await client.GetAsync("userPresentations/p" + p + "/arduino");
        //    PresentationArduinoList = res.ResultAs<List<PresentationArduino>>();


        //    int myID = PresentationArduinoList.Where(w => w != null).Max(w => w.ID);
        //    myID++;

        //    PresentationArduino.ID = myID;

        //    try
        //    {
        //        if (PresentationArduino != null)
        //        {
        //            var setter = client.SetAsync("userPresentations/p" + p + "/arduino/" + myID.ToString(), PresentationArduino);
        //            return Ok(PresentationArduino);

        //        }
        //        else
        //        {
        //            return BadRequest("Probelm with passed object");

        //        }

        //    }
        //    catch
        //    {
        //        return BadRequest("error");
        //    }
        //}

        ////...............................................//
        ////.........קבלת נתוני כל הפרזנטציה..................//
        ////https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/TheWholePresentation/p
        ////..............................................//

        //[HttpGet("TheWholePresentation/{p}")]
        //public async Task<IActionResult> GetPresentationA(string p)
        //{
        //    IFirebaseClient client;
        //    client = new FirebaseClient(ifc);

        //    try
        //    {
        //        var res = client.Get("userPresentations/p" + p+"/arduino");

        //        List<PresentationArduino> PresentationList = new List<PresentationArduino>();
        //        PresentationList = res.ResultAs<List<PresentationArduino>>();
        //        return Ok(PresentationList);
        //    }
        //    catch
        //    {
        //        return BadRequest("Probelm");

        //    }

        //}

        ////////////////////////////////////////////////////////////////////////////////////
        //..................del..........................................................
        //https://projects.telem-hit.net/2022/IOT_DanNetta/api/FireBase/DelEmpty/p



    }

}

