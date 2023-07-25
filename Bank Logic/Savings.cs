using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank {
    public class Savings : Account {
        static decimal interestRate = 0.01m;
        public override string EndOfMonth() {
            //at the end of the month we add interest
            decimal intrest = Balance * interestRate;
            AddInterest(intrest);
            return base.EndOfMonth();
        }
    }
}
