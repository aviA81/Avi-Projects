namespace ChatForm {
    public partial class Form1 : Form {
        Chatter chatter;
        string newMessageText;
        public Form1() {
            InitializeComponent();
        }

        private void serverButton_Click(object sender, EventArgs e) {
            this.Text = nameText.Text;
            chatter = new Server(nameText.Text, Int32.Parse(serverPortText.Text));
            chatter.MessageRecieved += RecieveMessage;
        }

        private void clientConnectButton_Click(object sender, EventArgs e) {
            this.Text = nameText.Text;
            chatter = new Client(nameText.Text, serverText.Text, Int32.Parse(clientPortText.Text));
            chatter.MessageRecieved += RecieveMessage;
        }

        private void sendChatButton_Click(object sender, EventArgs e) {
            chatter.SendChat(sendChatText.Text);
            sendChatText.Clear();
        }

        public void RecieveMessage(object sender, MessageEventArgs e) {
            newMessageText = e.Message;
            if (chatInfoText.InvokeRequired) {
                chatInfoText.Invoke(SetText);
            }
            else {
                SetText();
            }
        }
        public void SetText() {
            chatInfoText.AppendText(newMessageText + "\n");
        }

        private void OnFormClosing(object sender, FormClosingEventArgs e) {
            chatter?.Close();
        }



        private void textBox3_TextChanged(object sender, EventArgs e) {

        }
    }
}