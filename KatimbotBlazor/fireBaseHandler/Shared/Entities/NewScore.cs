using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
    public class NewScore
    {
        public int myscore { get; set; }
        public Presentation presentation { get; set; }

        //לחישוב כיוון המבט
        public Looks looks { get; set; } = new Looks();


        //.............................................//
        //.............טווח...........................//
        //...........................................//
        public List<double> handsrRange = new List<double>() { 3, 9, 30 };
        public List<double> eyesRanges = new List<double>() { 2, 6, 30 };
        public List<double> quietRanges = new List<double>() { 261, 421, 30000 };
        public List<double> pausesRanges = new List<double>() { 2, 6, 30 };
        public List<double> pitchRanges = new List<double>() { 418, 1867, 5000 };
        public List<double> volRanges = new List<double>() { 0.05, 0.08, 1 };
        public List<double> highorlowrange = new List<double>() { 0, 6, 30 };
        public List<double> movesrange = new List<double>() { 1, 12, 30 };

        //מחלקות עזר - לחישוב הציון
        public NewMeasure HandsMeasure { get; set; } = new NewMeasure(); 
        public NewMeasure EyeMeasure { get; set; } = new NewMeasure();
        public NewMeasure QuietMeasure { get; set; } = new NewMeasure();
        public NewMeasure PausesMeasure { get; set; } = new NewMeasure();
        public NewMeasure PitchMeasure { get; set; } = new NewMeasure();
        public NewMeasure VolMeasure { get; set; } = new NewMeasure();
        public NewMeasure MoveMeasure { get; set; } = new NewMeasure();
        public NewMeasure HighLowMeasure { get; set; } = new NewMeasure();
        public NewMeasure Lookmeasure { get; set; } = new NewMeasure();
        public NewMeasure Voicemeasure { get; set; } = new NewMeasure();

        List<PresentationArduino> arduinos = new List<PresentationArduino>();
        List<VidAndMic> computers = new List<VidAndMic>(); 

        public void divideToMeasure()
        {
            arduinos = presentation.arduino;
            computers = presentation.computer;

            //רשימות נתונים
            //קול
            List<double> allPitch = new List<double>();
            List<int> pitchHelper = new List<int>();

            List<double> allVol = new List<double>();
            List<int> volHelper = new List<int>();

            List<double> allqueit = new List<double>();
            List<int> queitHelper = new List<int>();

            List<double> allpauses = new List<double>();
            List<int> pausesHelper = new List<int>();

            //תנועה
            List<double> allMoves = new List<double>();
            List<int> movesHelper = new List<int>();

            //מבט
            List<double> allChangeLook = new List<double>();
            List<int> changeLookHelper = new List<int>();

            List<Looks> allEyes = new List<Looks>();
            List<int> rightLeftHelper = new List<int>();
            List<double> allUpDown = new List<double>();
            List<int> upDownHelper = new List<int>();

            //ידיים
            List<double> allHands = new List<double>();
            List<int> handsHelper = new List<int>();


            //הפרדת נתונים
            for (int i=1;i < computers.Count; i++)
            {
                //קול
                allPitch.Add(computers[i].Pitch);
                allVol.Add(computers[i].Volume);
                allpauses.Add(computers[i].Pauses);
                allqueit.Add(computers[i].QuiteTime);

                //תנועה
                allMoves.Add(computers[i].Moves);

                //מבט
                allChangeLook.Add(computers[i].Changes);

                //למקרה שלא נקלטו מבטים
                int sumUpDown = computers[i].Down + computers[i].Up + computers[i].Vcenter;
                double UpDownWeight = 30 / sumUpDown;
                if (UpDownWeight > 1)
                {
                    computers[i].Down = (int)Math.Round(computers[i].Down * UpDownWeight);
                    computers[i].Up = (int)Math.Round(computers[i].Up * UpDownWeight);
                    computers[i].Vcenter = (int)Math.Round(computers[i].Vcenter * UpDownWeight);
                }
                int sumRightLeft = computers[i].Right + computers[i].Left + computers[i].Hcenter;
                double RightLeftWeight = 30 / sumRightLeft;
                if (RightLeftWeight > 1)
                {
                    computers[i].Right = (int)Math.Round(computers[i].Right * RightLeftWeight);
                    computers[i].Down = (int)Math.Round(computers[i].Down * RightLeftWeight);
                    computers[i].Hcenter = (int)Math.Round(computers[i].Hcenter * RightLeftWeight);
                }

                Looks theLooks = new Looks()
                {
                    Right = computers[i].Right,
                    Left = computers[i].Left,
                    Hcenter = computers[i].Hcenter,
                    Vcenter = computers[i].Vcenter,
                    Up = computers[i].Up,
                    Down = computers[i].Down
                };
                allUpDown.Add(theLooks.Down + theLooks.Up);
                allEyes.Add(theLooks);
            }

            //ידיים
            if (arduinos.Count > 1)
            {
                for (int i = 1; i < arduinos.Count; i++)
                    allHands.Add(arduinos[i].Hands);
                handsHelper = HandsMeasure.check(allHands, handsrRange);
            }

            //יצירת הלפרים
            //קול
            pitchHelper = PitchMeasure.check(allPitch, pitchRanges);
            volHelper = VolMeasure.check(allVol, volRanges);
            pausesHelper = PausesMeasure.check(allpauses, pausesRanges);
            queitHelper = QuietMeasure.check(allqueit, quietRanges);

            //תנועה
            movesHelper = MoveMeasure.check(allMoves, movesrange);

            //מבט



            upDownHelper = HighLowMeasure.check(allUpDown, highorlowrange);
            changeLookHelper = EyeMeasure.check(allChangeLook, eyesRanges);

            //ידיים
            if(arduinos.Count>1)
               handsHelper = HandsMeasure.check(allHands, handsrRange);

            List<double> allScore = new List<double>();

            double toHigh = 1;
            for (int i = 0; i < allEyes.Count; i++)
            {
                if (allEyes[i].Down > 2 && allEyes[i].Up >= allEyes[i].Vcenter)
                    toHigh = 0.5;
                else
                    toHigh = 1;

                if (allEyes[i].Left>=3 && allEyes[i].Right >= 3)
                {
                    rightLeftHelper.Add(1);
                }
                else
                {
                    rightLeftHelper.Add(0);
                }
            }
            double totalHands = 0;
            for (int i = 0; i < allHands.Count; i++)
                totalHands += allHands[i];
          
            double handsWeight = 1;
            if (totalHands < 4)
                handsWeight = 0.5;
            //חישוב ציון
            for (int i = 0; i < computers.Count - 1; i++)
            {
                List <double> partScore = new List<double>();

                //קול
                double SumVoice = 0;
                int AllVoice = 0;
                double voiceScore;
                if (volHelper[i] > -1)
                {
                    SumVoice += volHelper[i] * 100;
                    AllVoice++;
                }
                if (pitchHelper[i] > -1)
                {
                    SumVoice += pitchHelper[i] * 100;
                    AllVoice++;
                }
                if (pausesHelper[i] > -1)
                {
                    SumVoice += pausesHelper[i] * 100;
                    AllVoice++;
                }
                if (queitHelper[i] > -1)
                {
                    SumVoice += queitHelper[i] * 100;
                    AllVoice++;
                }
                if (AllVoice > 0)
                {
                    voiceScore = SumVoice / AllVoice;
                    if (voiceScore > 70)
                        voiceScore = 100;                     
                }
                else
                    voiceScore = -1;

                //
                double moveScore;
                if (movesHelper[i] > -1)
                {
                    //תנועה
                    moveScore = 100 * movesHelper[i];
                    partScore.Add(moveScore);
                }
                else
                    moveScore = -1;

                 //מבט
                double SumLook = 0;
                double AllLook = 0;
                double lookscore;
                if (upDownHelper[i] > -1)
                {
                    SumLook += upDownHelper[i] * 100*toHigh;
                    AllLook += toHigh;
                }
                if (changeLookHelper[i] > -1)
                {
                    SumLook += changeLookHelper[i] * 100 ;
                    AllLook ++;
                }
                if (rightLeftHelper[i] > -1)
                {
                    SumLook += rightLeftHelper[i] * 100*toHigh;
                    AllLook += toHigh;
                }
                if (AllLook > 0)
                {
                     lookscore = SumLook / AllLook;
                    if (lookscore > 65)
                        lookscore = 100;
                }
                else
                    lookscore = -1;

                double handsScore;
                //יד
                if (i < handsHelper.Count)
                {
                    if (handsHelper[i] > -1)
                    {
                        handsScore = handsHelper[i] * 100;
                        partScore.Add(handsScore);
                    }
                    handsScore = -1;
                }
                else
                    handsScore = -1;


                double AllPart = 0;
                double SumAllPart = 0;

                if (voiceScore > -1)
                {
                    SumAllPart += voiceScore;
                    AllPart++;
                }
                if (moveScore> -1)
                {
                    SumAllPart += moveScore;
                    AllPart++;
                }  
                if (lookscore > -1)
                {
                    SumAllPart += lookscore*toHigh;
                    AllPart+=toHigh;
                }
                if (handsScore > -1)
                {
                    double HW = 1;
                    if (AllPart > 0)
                    {
                        if (SumAllPart / AllPart > 80)
                        {
                             HW = handsWeight;
                        }
                    }
                    SumAllPart += handsScore * HW;
                    AllPart += HW;

                }
                if (AllPart > 0) {
                    double totalScore = SumAllPart / AllPart;
                    if (totalScore < 70)
                        allScore.Add(totalScore);
                    else
                        allScore.Add(100);
                 }

            }

            double total = 0;

            if (allScore.Count > 0)
            {
                for (int i = 0; i < allScore.Count; i++)
                    total += allScore[i];
                double s = total / allScore.Count;
                myscore = (int)Math.Round(s);

            }
            else
                myscore = -1;

        }

    }
}
