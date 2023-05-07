using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
public    class Score
    {

        public int myscore { get; set; }
        public Presentation presentation { get; set; }
        //משתנים שאפשר להשתמש בהם ולגשת אליהם
        public Measure HandsMeasure { get; set; }
        public Measure EyeMeasure { get; set; }
        public Measure QuietMeasure { get; set; }
        public Measure PausesMeasure { get; set; }
        public Measure PitchMeasure { get; set; }
        public Measure VolMeasure { get; set; }
        public Measure MoveMeasure { get; set; }
        public Measure HighLowMeasure { get; set; }

        public Measure Lookmeasure { get; set; }
        public Measure Voicemeasure { get; set; }

        public Looks looks { get; set; }
        //.............................................//
        //.............טווח...........................//
        //...........................................//


        List<int> handsrRange = new List<int>() { 3, 9, 30 };
        List<int> eyesRanges = new List<int>() { 2, 6, 30 };
        List<int> quietRanges = new List<int>() { 261, 421, 30000 };
        List<int> pausesRanges = new List<int>() { 2, 6, 30 };
        List<double> pitchRanges = new List<double>() { 418, 1867, 5000 };
        List<double> volRanges = new List<double>() { 0.05, 0.08, 1 };
        List<int> highorlowrange = new List<int>() { 0, 6, 30 };
        List<int> movesrange = new List<int>() { 1, 12, 30 };

        ////.............................................//
        ////.............מדדים..........................//
        ////...........................................//

        List<int> handsHelper = new List<int>();
        List<int> eyesHelper = new List<int>();
        List<int> quieHelper = new List<int>();
        List<int> pauseHelper = new List<int>();
        List<int> movesHelper = new List<int>();
        List<int> highLowHelper = new List<int>();

        List<int> pitchHelper = new List<int>();
        List<int> volHelper = new List<int>();

        List<double> allPitch = new List<double>();
        List<double> allVol = new List<double>();


        List<double> lookHelper = new List<double>();
        List<double> voiceHelper = new List<double>();


        List<double> totalScores = new List<double>();

        List<PresentationArduino> arduinos = new List<PresentationArduino>();
        List<VidAndMic> computers = new List<VidAndMic>();
        ////.............................................//
        ////.............חלוקה לפי מדד.................//
        ////...........................................//

        public void divideToMeasure()
        {
            if (presentation.info.Type =="comp")
            {
                highorlowrange = new List<int>() { 0, 6, 30 };
                eyesRanges = new List<int>() { 0, 6, 30 };
                movesrange = new List<int>() { 0, 6, 30 };
            }
            HandsMeasure = new Measure();
         EyeMeasure = new Measure();
            QuietMeasure = new Measure();
            PausesMeasure = new Measure();
            PitchMeasure = new Measure();
            VolMeasure = new Measure();
            MoveMeasure = new Measure();
            HighLowMeasure = new Measure();

            Lookmeasure = new Measure();
            Voicemeasure = new Measure();

            arduinos = presentation.arduino;
            computers = presentation.computer;
            double lookWeight = 1;
            int totalHands = 0;
             
            for (int i = 1; i < computers.Count; i++)
            {
                quieHelper.Add(computers[i].QuiteTime);
                pauseHelper.Add(computers[i].Pauses);
                movesHelper.Add(computers[i].Moves);
                int sumUpDown = computers[i].Down + computers[i].Up + computers[i].Vcenter;
                double UpDownWeight = 30 / sumUpDown;
                if (UpDownWeight > 1)
                {
                    computers[i].Down = (int)Math.Round(computers[i].Down* UpDownWeight);
                    computers[i].Up = (int)Math.Round(computers[i].Up* UpDownWeight);
                    computers[i].Vcenter= (int)Math.Round(computers[i].Vcenter* UpDownWeight);

                }
                if (computers[i].Down < 3 && computers[i].Up >= computers[i].Vcenter && presentation.info.Type!="comp")
                    lookWeight = 0.5;  
                int sumRightLeft = computers[i].Right + computers[i].Hcenter + computers[i].Left;
                double RightLeftWeight = 30 / sumRightLeft;
                if (sumRightLeft > 1)
                {
                    computers[i].Right = (int)Math.Round(computers[i].Right * RightLeftWeight);
                    computers[i].Hcenter = (int)Math.Round(computers[i].Hcenter * RightLeftWeight);
                    computers[i].Left = (int)Math.Round(computers[i].Left * RightLeftWeight);

                }
                if (presentation.info.Type == "comp")
                    eyesHelper.Add(computers[i].Right + computers[i].Left);
                else
                  eyesHelper.Add(computers[i].Changes);

                highLowHelper.Add(computers[i].Down + computers[i].Up);
                allPitch.Add(computers[i].Pitch);
                allVol.Add(computers[i].Volume);
            }
            for (int i = 1; i < arduinos.Count; i++)
            {
                handsHelper.Add(arduinos[i].Hands);
                totalHands+= arduinos[i].Hands;
            }


            handsHelper = HandsMeasure.check(handsHelper, handsrRange);
            eyesHelper = EyeMeasure.check(eyesHelper, eyesRanges);
            quieHelper = QuietMeasure.check(quieHelper, quietRanges);
            pauseHelper = PausesMeasure.check(pauseHelper, pausesRanges);
            movesHelper = MoveMeasure.check(movesHelper, movesrange);
            highLowHelper = HighLowMeasure.check(highLowHelper, highorlowrange);

            pitchHelper = PitchMeasure.checkDouble(allPitch, pitchRanges);
            volHelper = VolMeasure.checkDouble(allVol, volRanges);


            int uplook = 0;
            int vcenterlook = 0;
            int downlook = 0;
            double handsWeight = 1;

            //for (int i = 1; i < computers.Count; i++)
            //{
            //    uplook += computers[i].Up;
            //    downlook += computers[i].Down;
            //    vcenterlook += computers[i].Vcenter;
            //}
            //int lookSum = uplook + downlook + vcenterlook;
            //if (lookSum < (computers.Count - 1) * 30)
            //    lookWeight = lookSum / ((computers.Count - 1) * 30);

            //יצירת הלפרים מורכבים
            for (int i = 0; i < computers.Count - 1; i++)
            {
                 handsWeight = 1;

                int voiceSum = 0;
                int voiceOk = 0;
                double LookSum = 0;
                double LookOk = 0;

                if (eyesHelper[i] != -1)
                {
                    LookOk++;
                    LookSum += eyesHelper[i];
                }
                if (highLowHelper[i] != -1)
                {
                    LookOk+= lookWeight;
                    LookSum += highLowHelper[i]* lookWeight;
                }

                if (LookOk == 0)
                    lookHelper.Add(-1.0);
                else
                {
                    double totalS = LookSum / LookOk;
                    lookHelper.Add(totalS);
                }

                if (pitchHelper[i] != -1)
                {
                    voiceSum += pitchHelper[i];
                    voiceOk++;
                }
                if (volHelper[i] != -1)
                {
                    voiceSum += volHelper[i];
                    voiceOk++;
                }
                if (pauseHelper[i] != -1)
                {
                    voiceSum += pauseHelper[i];
                    voiceOk++;
                }
                if (quieHelper[i] != -1)
                {
                    voiceSum += quieHelper[i];
                    voiceOk++;
                }
                if (voiceOk == 0)
                    voiceHelper.Add(-1.0);
                else
                {
                    double totalS = voiceSum / voiceOk;
                    if (totalS<70)
                       voiceHelper.Add(totalS);
                    else
                        voiceHelper.Add(100);

                }
            }


            int size;
            if (arduinos.Count < computers.Count)
                size = computers.Count;
            else
                size = arduinos.Count;
            for (int i = 0; i < size - 1; i++)
            {
                double sum = 0;
                double ok = 0;

                if (i < computers.Count - 1)
                {

                    if (lookHelper[i] > -1.0)
                    {
                        sum += lookHelper[i] * lookWeight;
                        ok += lookWeight;
                    }
                    if (voiceHelper[i] > -1.0)
                    {
                        sum += voiceHelper[i];
                        ok++;
                    }
                    if (movesHelper[i] > -1)
                    {
                        sum += Convert.ToDouble(movesHelper[i]);
                        ok++;
                    }
                }

                if (i < arduinos.Count - 1)
                {
                    if (handsHelper[i] > -1)
                    {
                        //   אם לפחות 2 מדדים תקינים
                        if (sum > 2 && totalHands / (arduinos.Count - 1) < 4)
                            handsWeight = 0.5;
                        else
                            handsWeight = 1;
                        sum += handsHelper[i] * handsWeight;
                        ok += handsWeight;
                    }
                }


                if (ok > 0)
                {
                    double total = sum / ok;
                    if ((total < 70 && presentation.info.Ardu) || (total<80 && !presentation.info.Ardu ))
                        totalScores.Add(total);
                    else
                        totalScores.Add(100);
                }
            }

            double totalsum = 0;
            if (totalScores.Count > 0)
            {
                for (int i = 0; i < totalScores.Count; i++)
                    totalsum += totalScores[i] / totalScores.Count;
                myscore = (int)Math.Round(totalsum);
                if (myscore == 100)
                {
                    List<Measure> allScores = getAllScores();
                    foreach (Measure m in allScores)
                    {
                        if (m.score != -1)
                        {
                            switch (m.Mname)
                            {
                                case "שינוי כיוון מבט":
                                    totalsum -= (100 - m.score * lookWeight) * 0.1;
                                    break;
                                case "תנועות ידיים":
                                    totalsum -= (100 - m.score * handsWeight) * 0.1;
                                    break;
                                default:
                                    totalsum -= (100 - m.score) * 0.1;
                                    break;
                            }


                        }
                    }
                }
                myscore = (int)Math.Round(totalsum);

            }
            else
            {
                myscore = -1;
            }
        }
        public List<Measure> getAllScores()
        {
             Voicemeasure = new Measure() { 
            Mname = "שימוש בדיבור",
            link = "#",
            Micon = "icon-mic-icon",
            num = 0
            };
            Lookmeasure = new Measure()
            {
                Mname = "שינוי כיוון מבט",
                link = "#",
                Micon = "icon-watch-icon",
                num = 2

            };
            PitchMeasure.score= PitchMeasure.getScore();
            VolMeasure.score= VolMeasure.getScore();
            PausesMeasure.score= PausesMeasure.getScore();
            QuietMeasure.score= QuietMeasure.getScore();

            MoveMeasure.score= MoveMeasure.getScore();
            MoveMeasure.Mname = "תנועה בחלל";
            MoveMeasure.link = "#";
            MoveMeasure.Micon = "icon-foot-icon";
            MoveMeasure.num = 1;
            HandsMeasure.score= HandsMeasure.getScore();
            HandsMeasure.Mname = "תנועות ידיים";
            HandsMeasure.link = "#";
            HandsMeasure.Micon = "icon-hans-icon";
            HandsMeasure.num = 1;

            //allscores.Add(HandsMeasure.getScore());

            double LookScore = 0;
            for (int i = 0; i < lookHelper.Count; i++)
                LookScore += lookHelper[i] / lookHelper.Count;
            int totalLookScore = (int)Math.Round(LookScore);
            Lookmeasure.score = totalLookScore;
            //allscores.Add(totalLookScore);

            double VoiceScore = 0;
            for (int i = 0; i < voiceHelper.Count; i++)
                VoiceScore += voiceHelper[i] / voiceHelper.Count;
            int totalVoiceScore = (int)Math.Round(VoiceScore);
            if (totalVoiceScore == 100)
            {
                VoiceScore -= (100 - PitchMeasure.score) * 0.1;
                VoiceScore -= (100 - VolMeasure.score) * 0.1;
                VoiceScore -= (100 - PausesMeasure.score) * 0.1;
                VoiceScore -= (100 - QuietMeasure.score) * 0.1;
            }
            totalVoiceScore = (int)Math.Round(VoiceScore);
            Voicemeasure.score = totalVoiceScore;
            Measure empty = new Measure()
            {
                score = -2
            };
            List<Measure> allM = new List<Measure>() { empty, Voicemeasure, Lookmeasure, MoveMeasure, HandsMeasure };
            List<Measure> allMesures = new List<Measure>();
            
            for (int i =0; i<4; i++)
            {
                int bestP = 0;
                for (int j = 1; j < allM.Count; j++)
                    if (allM[bestP].score < allM[j].score)
                        bestP = j;
                allMesures.Add(allM[bestP]);
                allM.RemoveAt(bestP);
            }

            return allMesures;
        }

public string feedback(Measure m, List<string> feedbacks)
        {
            int score = m.feedback();
            switch (score)
            {
                case -5:
                    return "לא התקבלו נתונים על " + m.Mname;
                case -1:
                    return feedbacks[0];
                case 0:
                    return feedbacks[1];
                case 1:
                    return feedbacks[2];
                default:
                    return feedbacks[1];
            }
        }

        public void pausesfeedback()
        {
            //   List<int> pausesRanges = new List<int>() { 6, 16, 30 };
            int num = PausesMeasure.getNum();


            if (num == -1) { 
                PausesMeasure.theFeedBack = "לא התקבלו נתונים על מספר העצירות בדיבור";
                PausesMeasure.pdfFeedBack = "לא התקבלו נתונים על מספר העצירות בדיבור";
            }
           else if (num == 0) {
                PausesMeasure.theFeedBack = "לא עצרת בכלל את הדיבור שלך במהלך הפרזנטציה"; 
                PausesMeasure.pdfFeedBack = "לא היו בכלל עצירות הדיבור במהלך הפרזנטציה"; 
            }
            else {
                num*=2;
                PausesMeasure.theFeedBack = "בזמן הפרזנטציה ביצעת בממוצע "+ num.ToString()+ " עצירות בדקה";
                PausesMeasure.pdfFeedBack = "בזמן הפרזנטציה היו בממוצע "+ num.ToString()+ " עצירות בדקה";
        }
        }
        public void volfeedback()
        {
//            List<double> volRanges = new List<double>() { 0.05, 0.08, 1 };

            int psize = VolMeasure.getsize();
            int score = VolMeasure.feedback();
            if (psize == 0)
            {
                VolMeasure.theFeedBack = "לא התקבלו נתונים על עוצמת הדיבור";
                VolMeasure.pdfFeedBack = "לא התקבלו נתונים על עוצמת הדיבור";
            }
            else
            {
                if (score == -1)
                {
                    VolMeasure.theFeedBack = "במשך הפרזנטציה לא שינית מספיק את עוצמת הדיבור";
                    VolMeasure.pdfFeedBack = "במשך הפרזנטציה עוצמת הדיבור לא השתנתה מספיק";
                }
                if (score == 0)
                {
                    if (VolMeasure.score == 0) {
                        VolMeasure.theFeedBack = "במשך הפרזנטציה לא שינית מספיק את עוצמת הדיבור";
                        VolMeasure.pdfFeedBack = "במשך הפרזנטציה עוצמת הדיבור לא השתנתה מספיק";
                    }
                    else { 
                        VolMeasure.theFeedBack = "במשך הפרזנטציה דאגת לשנות את עוצמת הדיבור כדי ליצור עניין";      
                        VolMeasure.pdfFeedBack = "במשך הפרזנטציה עוצמת הדיבור השתנתה כדי ליצור עניין";      
                }
                }
                if (score == 1) { 
                    VolMeasure.theFeedBack = "במשך הפרזנטציה שינית יותר מדי את עוצמת הדיבור";
                    VolMeasure.pdfFeedBack = "במשך הפרזנטציה עוצמת הדיבור השתנתה יותר מדי ";
                }
            }
        }
        public void quietfeedback()
        {
            //List<int> quietRanges = new List<int>() { 261, 421, 30000 };

            int num = QuietMeasure.precent();

            if (num == -1) { 
                QuietMeasure.theFeedBack ="לא התקבלו נתונים על זמן השקט בפרזנטציה";
                QuietMeasure.pdfFeedBack = "לא התקבלו נתונים על זמן השקט בפרזנטציה";
            }
            else if(num == 0) {
                QuietMeasure.theFeedBack = "לא היה בכלל זמן שקט בפרזנטציה";
                QuietMeasure.pdfFeedBack = "לא היה בכלל זמן שקט בפרזנטציה";
            }
            else {
                QuietMeasure.theFeedBack = num.ToString() + "% מזמן הפרזנטציה היה זמן של שקט";
                QuietMeasure.pdfFeedBack = num.ToString() + "% מזמן הפרזנטציה היה זמן של שקט";
            }

        }
        public void pitchfeedback()
        {
//            List<double> pitchRanges = new List<double>() { 418, 1867, 5000 };
            int psize = PitchMeasure.getsize();
            int score = PitchMeasure.feedback();
            if (psize == 0)
            {
                PitchMeasure.theFeedBack = "לא התקבלו נתונים על טון הדיבור";
                PitchMeasure.pdfFeedBack = "לא התקבלו נתונים על טון הדיבור";
            }
            else
            {
                if (score == -1)
                {
                    PitchMeasure.theFeedBack = "בזמן הפרזנטציה דיברת באופן מונוטוני";
                    PitchMeasure.pdfFeedBack = "בזמן הפרזנטציה טון הדיבור היה מונוטוני";
                }
                if (score == 0)
                {
                    if (PitchMeasure.score == 0)
                    {
                        PitchMeasure.theFeedBack = "בזמן הפרזנטציה דיברת באופן מונוטוני";
                        PitchMeasure.pdfFeedBack = "בזמן הפרזנטציה טון הדיבור היה מונוטוני";
                    }
                    else
                    {
                        PitchMeasure.theFeedBack = "במשך הפרזנטציה דאגת ליצור גיוון בטון הדיבור שלך";
                        PitchMeasure.pdfFeedBack = "במשך הפרזנטציה נוצר גיוון בטון הדיבור שלך";
                    }
                }
                if (score == 1)
                {
                    PitchMeasure.theFeedBack = "במשך הפרזנטציה שינית יותר מדי את טון הדיבור שלך ";
                    PitchMeasure.pdfFeedBack = "במשך הפרזנטציה טון הדיבור השתנה יותר מדי";
                }
            }
        }
        public void handsfeedback()
        {
            //List<int> handsrRange = new List<int>() { 4, 9, 30 };
            int num = HandsMeasure.getNum();
            if (num == -1) { 
            HandsMeasure.theFeedBack = "לא התקבלו נתונים על תנועות ידיים";
            HandsMeasure.pdfFeedBack = "לא התקבלו נתונים על תנועות ידיים";
        }
            else if (num == 0) { 
            HandsMeasure.theFeedBack = "לא ביצעת תנועות ידיים במהלך הפרזנטציה";
            HandsMeasure.pdfFeedBack = "לא בוצעו תנועות ידיים במהלך הפרזנטציה";
        }
            else {
                HandsMeasure.theFeedBack = "בממוצע הזזת את הידיים  " + num.ToString() + " פעמים בדקה";
                HandsMeasure.pdfFeedBack = "בממוצע הידיים זזו " + num.ToString() + " פעמים בדקה";
            }

        }
        public void movesfeedback()
        {
            //List<int> movesrange = new List<int>() { 1, 12, 30 };

            int num = MoveMeasure.getNum();
            if (num == -1)
            {
                MoveMeasure.theFeedBack = "לא התקבלו נתונים על תנועה במרחב";
                MoveMeasure.pdfFeedBack = "לא התקבלו נתונים על תנועה במרחב";
            }
            //else if (num == 0)
            //{
            //    MoveMeasure.theFeedBack = "לא זזת במרחב במהלך הפרזנטציה";
            //    MoveMeasure.pdfFeedBack = "לא זוהתה תנועה במרחב במהלך הפרזנטציה";
            //}
            else
            {
                MoveMeasure.theFeedBack = "בממוצע זזת במרחב " + num.ToString() + " פעמים בדקה";
                MoveMeasure.pdfFeedBack = "בממוצע זוהתה תנועה  " + num.ToString() + " פעמים בדקה";
            }
        }
        public void eyesfeedback()
        {
            //            List<int> eyesRanges = new List<int>() { 2, 5, 30 };
            int num = EyeMeasure.getNum();
            int num2 = HighLowMeasure.getNum();
            double avgNums = (num + num2) / 2;
            num = (int)Math.Round(avgNums);
            EyeMeasure.pos = num;
            if (num == -1)
            {
                EyeMeasure.theFeedBack = "לא התקבלו נתונים על כיוון מבט";
                EyeMeasure.pdfFeedBack = "לא התקבלו נתונים על כיוון מבט";
            }
            else if (num == 0 && presentation.info.Type !="comp")
            {
                EyeMeasure.theFeedBack = "לא שינית בכלל את כיוון המבט שלך במהלך הפרזנטציה";
                EyeMeasure.pdfFeedBack = "כיוון המבט לא השתנה במהלך הפרזנטציה";
            }
            else
            {
                if (presentation.info.Type == "comp")
                {
                    EyeMeasure.theFeedBack = "בממוצע הסטת את המבט מהמצלמה " + num.ToString() + " שניות בדקה";
                    EyeMeasure.pdfFeedBack = "בממוצע המבט סטה מהמצלמה " + num.ToString() + " שניות בדקה";
                }
                else
                {
                    EyeMeasure.theFeedBack = "בממוצע שינית את כיוון המבט " + num.ToString() + " פעמים בדקה";
                    EyeMeasure.pdfFeedBack = "בממוצע כיוון המבט השתנה " + num.ToString() + " פעמים בדקה";
                }
            }

            if (num != -1)
            {
                double rightLook = 0;
                double leftLook = 0;
                double hcenterLook = 0;
                double uplook = 0;
                double downlook = 0;
                double vcenterlook = 0;
                int change = 0;

                for (int i = 1; i<computers.Count; i++)
                {
                    change += computers[i].Changes;
                    rightLook += computers[i].Right;
                    leftLook += computers[i].Left;
                    hcenterLook += computers[i].Hcenter;

                    uplook += computers[i].Up;
                    downlook += computers[i].Down;
                    vcenterlook += computers[i].Hcenter;
                    //int sumUpDown = computers[i].Up + computers[i].Down + computers[i].Vcenter;
                    //int sumRightLeft = computers[i].Right + computers[i].Left + computers[i].Hcenter;

                    //rightLook += computers[i].Right * 100 / ((computers.Count - 1) * sumRightLeft);
                    //leftLook += computers[i].Left * 100 / ((computers.Count - 1) * sumRightLeft);
                    //hcenterLook += computers[i].Hcenter * 100 / ((computers.Count - 1) * sumRightLeft);

                    //uplook += computers[i].Up * 100 / ((computers.Count - 1) * sumUpDown);
                    //downlook += computers[i].Down * 100 / ((computers.Count - 1) * sumUpDown);
                    //vcenterlook += computers[i].Vcenter * 100 / ((computers.Count - 1) * sumUpDown);
                    //change += computers[i].Changes;
                    //      rightLook += computers[i].Right*100/((computers.Count-1)*30);
                    //      leftLook += computers[i].Left * 100 / ((computers.Count - 1)*30);
                    //      hcenterLook += computers[i].Hcenter * 100 / ((computers.Count - 1)*30);
                    //      uplook += computers[i].Up * 100 / ((computers.Count - 1)*30);
                    //      downlook += computers[i].Down * 100 / ((computers.Count - 1)*30);
                    //      vcenterlook += computers[i].Vcenter * 100 / ((computers.Count - 1)*30);
                    //      change += computers[i].Changes;
                }

                double sumRightLeft = rightLook + leftLook + hcenterLook;
                double sumUpDown = downlook + uplook + vcenterlook;
                rightLook = rightLook * 100 / sumRightLeft;
                leftLook = leftLook * 100 / sumRightLeft;
                hcenterLook = hcenterLook * 100 / sumRightLeft;

                downlook = downlook * 100 / sumUpDown;
                uplook = uplook * 100 / sumUpDown;
                vcenterlook = vcenterlook * 100 / sumUpDown;


                looks = new Looks() {
                    Right = (int)Math.Round(rightLook),
                    Left = (int)Math.Round(leftLook),
                    Hcenter = (int)Math.Round(hcenterLook),
                    Vcenter = (int)Math.Round(vcenterlook),
                    Down = (int)Math.Round(downlook),
                    Up = (int)Math.Round(uplook),
                    Changes = change
                 };
            }
        }



public void getAllFeedback()
        {
            //קול
            pitchfeedback();
            volfeedback();
            quietfeedback();
            pausesfeedback();
            ////תנועה + ידיים
            handsfeedback();
            movesfeedback();
            ////מבט
            eyesfeedback();
            //אין כרגע- ביטחון עצמי
        }
    }
}
