namespace Bank {
    public class Bank {
        List<Account> accounts;
        public List<Account> Accounts {
            get { return accounts; }
        }

        private static Bank bankInstance; //Singleton pattern
        public static Bank GetInstance() {
            if (bankInstance == null) {
                bankInstance = new Bank();
            }
            return bankInstance;
        }
        private Bank() {
        }

        public void AddCheckingAccount(int maxWithdrawals, decimal fee) {
            accounts.Add(new Checking(maxWithdrawals, fee));
        }

        public void AddSavingsAccount() {
            accounts.Add(new Savings());
        }

        public Account GetAccount(int index) {
            return accounts[index];
        }
    }
}