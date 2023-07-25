using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank {
    public abstract class Account {

        private decimal balance;
        public decimal Balance {
            get { return balance; }
            set { balance = value; }
        }

        private string name;
        public string Name {
            get { return name; }
            set { name = value; }
        }

        int currentTrns;
        public int CurrentTrns {
            get { return currentTrns; }
            set { currentTrns = value; }
        }

        List<Transaction> transactions = new List<Transaction>();
        public List<Transaction> Transactions {
            get { return transactions; }
            set { transactions = value; }
        }

        int thisMonthStart = 0;

        static int accountNumber;

        public Account() {
            //name is savings or checking
            name = this.GetType().Name + accountNumber++.ToString();
        }

        public virtual void Withdraw(decimal amt) {
            Withdraw(amt, TransactType.Withdraw);
        }
        public void Withdraw(decimal amt, TransactType ttype) {
            ProcessTransaction(-amt, ttype);
        }

        public void Deposit(decimal amt) {
            ProcessTransaction(amt, TransactType.Deposit);
        }

        public void AddInterest(decimal amt) {
            ProcessTransaction(amt, TransactType.Interest);
        }

        private void ProcessTransaction(decimal amt, TransactType ttype) {
            transactions[currentTrns++] = new Transaction(amt, ttype);
            balance += amt;
        }

        public virtual string EndOfMonth() {
            //call this method at the end of every month
            //it will return your balance and that months tranactions
            StringBuilder sb = new StringBuilder($"Balance is: {balance}\n");
            for (int i = thisMonthStart; i < currentTrns; i++) {
                sb.Append(transactions[i]);
                sb.Append("\n");
            }
            sb.Append("**************************************\n");
            thisMonthStart = currentTrns;
            return sb.ToString();
        }

        public override string? ToString() {
            return Name;
        }
    }
}
