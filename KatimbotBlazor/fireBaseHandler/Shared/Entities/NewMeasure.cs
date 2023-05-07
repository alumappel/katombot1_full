using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
    public class NewMeasure
    {
        //בשביל המשוב
        public string Mname { get; set; }
        public string Micon { get; set; }
        public string link { get; set; }
        public string theFeedBack { get; set; }
        public string pdfFeedBack { get; set; }
        public int size { get; set; } = 0;

        public List<double> myrange { get; set; } = new List<double>();

        public int avg { get; set; }
        public double sum { get; set; } = 0;

        public int pos { get; set; }
        public double posD { get; set; }

        public int score { get; set; }

        public int precent { get; set; }
        public List<int> check(List<double> all, List<double> range)
        {
            myrange = range;
            List<int> helper = new List<int>();
            for (int i = 0; i < all.Count; i++)
            {
                if (all[i] < range[0]) {
                    helper.Add(0);
                    size++;
                    sum += all[i];
                }
                else if (all[i] <= range[1]) {
                    helper.Add(1);
                    size++;
                    sum += all[i];
                }
                else if (all[i] <= range[2]) {
                    helper.Add(0);
                    size++;
                    sum += all[i];
                }
                else {
                    helper.Add(-1);
                }

            }
            if (size > 0)
            {
                //ציון
                int sumScore = 0;
                foreach (int s in helper)
                    sumScore += s;
                double scoreH = sumScore * 100 / size;
                score = (int)Math.Round(scoreH);
                //מיקום וזה
                posD = sum / size;
                pos = (int)Math.Round(posD);
                double myavrage = posD * 2;
                avg = (int)Math.Round(myavrage);

                //אחוזים
                int pressize = size * 30000;
                double number = sum * 100 / pressize;
                precent = (int)Math.Round(number);


            }

            else
            {
                score = -1;
                pos = -1;
                posD = -1;
                precent = -1;
            }

            
            return helper;
        }

    }
}
