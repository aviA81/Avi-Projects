using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank {
    public enum TransactType : byte {
        Unknown,
        Withdraw,
        Deposit,
        Interest,
        Fee
    }
    public class Transaction {

        private decimal amount;
        public decimal Amount {
            get { return amount; }
            set { amount = value; }
        }

        private TransactType ttype;
        public TransactType Ttype {
            get { return ttype; }
            set { ttype = value; }
        }

        private DateTime date;
        public DateTime Date {
            get { return date; }
            set { date = value; }
        }

        public Transaction(decimal amount, TransactType ttype) {
            this.amount = amount;
            this.ttype = ttype;
            date = DateTime.Now;
        }
        public override string ToString() {
            return $"Amt: {Math.Abs(Amount)}, Type: {Ttype}, Date: {Date.ToString("F")}";
        }
    }
}
