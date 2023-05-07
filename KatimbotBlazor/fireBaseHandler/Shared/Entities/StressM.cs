using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
    public class StressM
    {
        public int heartAvg { get; set; }
        public double stressTime { get; set; } = 0;
        public double verystressTime { get; set; } = 0;
        public double calmTime { get; set; } = 0;
        public List<int> allR { get; set; } = new List<int>();
        public List<double> allH { get; set; } = new List<double>();

        public double heartStress { get; set; } = 0;



     public  void calcS(List <PresentationArduino> pres)
        {
            double sumH = 0;
            int countH = 0;
            for (int j = 1; j<pres.Count; j++)
            {
                PresentationArduino part = pres[j];
                List<int> re = part.ResistList;
                List<double> heart = part.HeartList;
                int size;
                if (re.Count < heart.Count)
                    size = re.Count;
                else
                    size = heart.Count;
                for (int i = 0; i< size; i++)
                {
                    if (re[i] <= 300 && heart[i]>=90)
                    {
                        verystressTime++;
                    }  
                    else if (re[i] <= 400)
                    {
                        stressTime++;
                    }  
                    else if (re[i] > 400)
                    {
                        calmTime++;
                    }
                    allR.Add(re[i]);
                    allH.Add(heart[i]);

                    if (heart[i] > 100)
                        heartStress++;
                    if (heart[i] > 50 && heart[i] < 200)
                    {
                        sumH += heart[i];
                        countH++;
                    }
                }
            }
            calmTime = Math.Round(calmTime / 15);
            calmTime /= 2;
            stressTime = Math.Round(stressTime / 15);
            stressTime /= 2;
            verystressTime = Math.Round(verystressTime / 15);
            verystressTime /= 2;
            if (countH > 0)
                heartAvg = (int)Math.Round(sumH) / countH;
            else
                heartAvg = -1;
            heartStress = Math.Round(heartStress / 15);
            heartStress /= 2;

        }

    }
}
