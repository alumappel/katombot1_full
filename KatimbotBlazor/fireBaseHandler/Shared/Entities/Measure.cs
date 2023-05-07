using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fireBaseHandler.Shared.Entities
{
    public class Measure
    {
        public int good { get; set; }
        public int low { get; set; }
        public int high { get; set; }
        public int invalid { get; set; }
        public int score { get; set; }

        public string Mname { get; set; }
        public string Micon { get; set; }
        public string link { get; set; }
        public string theFeedBack { get; set; }
        public string pdfFeedBack { get; set; }

        public int sum { get; set; }
        public double sumD { get; set; }
        public int size { get; set; }
        public int pos { get; set; }
        public double posD { get; set; }
        public List<int> myrange { get; set; }
        public List<double> myrangeD { get; set; }
        public int num { get; set; }

        public int getsize()
        {
            size = high + low  + good;
            return size;
        }
        public List<int> check(List<int> all, List<int> range)
        {
            myrange = range;
            sum = 0;
            good = 0;
            low = 0;
            high = 0;
            invalid = 0;
            List<int> helper = new List<int>();
            for (int i = 0; i < all.Count; i++)
            {

                if (all[i] < range[0])
                {
                    helper.Add(0);
                    low++;
                    sum += all[i];
                }
                  else if (all[i] <= range[1])
                {
                    helper.Add(100);
                    good++;
                    sum += all[i];

                }
                else if (all[i] < range[2])
                {
                    high++;
                    helper.Add(0);
                    sum += all[i];

                }
                else
                {
                    invalid++;
                    helper.Add(-1);
                    sum += all[i];
                }
            }
            return helper;
        }
        public List<int> checkDouble(List<double> all, List<double> range)
        {
            sumD = 0;
            good = 0;
            low = 0;
            high = 0;
            invalid = 0;
            myrangeD = range;
            List<int> helper = new List<int>();
            for (int i = 0; i < all.Count; i++)
            {
                if(all[i]==0 && range[0] > 0)
                {
                    invalid++;
                    helper.Add(-1);
                }
               else if (all[i] < range[0])
                {
                    helper.Add(0);
                    low++;
                    sumD += all[i];

                }
                else if (all[i] <= range[1])
                {
                    helper.Add(100);
                    good++;
                    sumD += all[i];

                }
                else if (all[i] < range[2])
                {
                    high++;
                    helper.Add(0);
                    sumD += all[i];

                }
                else
                {
                    invalid++;
                    helper.Add(-1);
                }
            }
            return helper;
        }

        public int feedback()
        {
            if (score == -1)
                return 5;
            if (high < good && low < good)
               return 0;
            if (good < high && low < high)
                return 1;
            if (high < low && good < low)
                return -1;
            return 0;         
        }
        public int getScore()
        {

            score = 0;
            int num = good + high + low;
            if (num > 0)
            {
                double total = good * 100 / num;
                score = (int)Math.Round(total);
                if (myrangeD != null)
                {
                    double m = sumD / num;
                    //m = m * 100 / myrangeD[2];
                    posD = m;
                }
            }
            else
                score = -1;
            return score;
        }

        public int precent()
        {
            getsize();
            feedback();
            if (size > 0)
            {
                int pressize = size * 30000;
                double number = sum*100 / pressize;
                pos = (int)Math.Round(number);
                return pos;
            }
            return -1;
        }
        public int getNum()
        {
            getsize();
            feedback();
            if (size > 0)
            {
                double number = sum / size;
                pos = (int)Math.Round(number);
                return pos;
            }
            return -1;
        }
    }
}
