using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank {
    public class Checking : Account {
        int maxWithdrawals;
        public int MaxWithdraw {
            get { return maxWithdrawals; }
            set { maxWithdrawals = value; }
        }

        decimal fee;
        public decimal Fee {
            get { return fee; }
            set { fee = value; }
        }
        int currentWithdraws;

        public Checking() : this(50, 25) {
        }

        public Checking(int maxWithdrawals, decimal fee) {
            this.maxWithdrawals = maxWithdrawals;
            this.fee = fee;
        }
        public override void Withdraw(decimal amt) {
            base.Withdraw(amt);
            currentWithdraws++;
        }

        public override string EndOfMonth() {
            //we impose a fee if there were too many withdrawals this month
            if (currentWithdraws > maxWithdrawals)
                Withdraw(fee, TransactType.Fee);
            currentWithdraws = 0;
            return base.EndOfMonth();
        }
    }
}
