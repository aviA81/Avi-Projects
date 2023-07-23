namespace ChatForm {
    partial class Form1 {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing) {
            if (disposing && (components != null)) {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent() {
            serverBox = new GroupBox();
            serverButton = new Button();
            serverPortText = new TextBox();
            label2 = new Label();
            groupBox2 = new GroupBox();
            clientConnectButton = new Button();
            clientPortText = new TextBox();
            label4 = new Label();
            serverText = new TextBox();
            label3 = new Label();
            groupBox3 = new GroupBox();
            sendChatButton = new Button();
            sendChatText = new TextBox();
            chatInfoText = new RichTextBox();
            label1 = new Label();
            nameText = new TextBox();
            serverBox.SuspendLayout();
            groupBox2.SuspendLayout();
            groupBox3.SuspendLayout();
            SuspendLayout();
            // 
            // serverBox
            // 
            serverBox.Controls.Add(serverButton);
            serverBox.Controls.Add(serverPortText);
            serverBox.Controls.Add(label2);
            serverBox.Location = new Point(318, 12);
            serverBox.Name = "serverBox";
            serverBox.Size = new Size(399, 72);
            serverBox.TabIndex = 0;
            serverBox.TabStop = false;
            serverBox.Text = "Set as Server";
            // 
            // serverButton
            // 
            serverButton.Location = new Point(270, 21);
            serverButton.Name = "serverButton";
            serverButton.Size = new Size(112, 34);
            serverButton.TabIndex = 2;
            serverButton.Text = "Start Server";
            serverButton.UseVisualStyleBackColor = true;
            serverButton.Click += serverButton_Click;
            // 
            // serverPortText
            // 
            serverPortText.Location = new Point(67, 27);
            serverPortText.Name = "serverPortText";
            serverPortText.Size = new Size(150, 31);
            serverPortText.TabIndex = 1;
            serverPortText.Text = "613";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(25, 30);
            label2.Name = "label2";
            label2.Size = new Size(44, 25);
            label2.TabIndex = 0;
            label2.Text = "Port";
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(clientConnectButton);
            groupBox2.Controls.Add(clientPortText);
            groupBox2.Controls.Add(label4);
            groupBox2.Controls.Add(serverText);
            groupBox2.Controls.Add(label3);
            groupBox2.Location = new Point(37, 99);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(686, 74);
            groupBox2.TabIndex = 1;
            groupBox2.TabStop = false;
            groupBox2.Text = "Connect as Client";
            // 
            // clientConnectButton
            // 
            clientConnectButton.Location = new Point(525, 25);
            clientConnectButton.Name = "clientConnectButton";
            clientConnectButton.Size = new Size(112, 34);
            clientConnectButton.TabIndex = 4;
            clientConnectButton.Text = "Connect";
            clientConnectButton.UseVisualStyleBackColor = true;
            clientConnectButton.Click += clientConnectButton_Click;
            // 
            // clientPortText
            // 
            clientPortText.Location = new Point(348, 21);
            clientPortText.Name = "clientPortText";
            clientPortText.Size = new Size(150, 31);
            clientPortText.TabIndex = 3;
            clientPortText.Text = "613";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(298, 27);
            label4.Name = "label4";
            label4.Size = new Size(44, 25);
            label4.TabIndex = 2;
            label4.Text = "Port";
            // 
            // serverText
            // 
            serverText.Location = new Point(112, 21);
            serverText.Name = "serverText";
            serverText.Size = new Size(150, 31);
            serverText.TabIndex = 1;
            serverText.Text = "localhost";
            serverText.TextChanged += textBox3_TextChanged;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(25, 27);
            label3.Name = "label3";
            label3.Size = new Size(81, 25);
            label3.TabIndex = 0;
            label3.Text = "Server IP";
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(sendChatButton);
            groupBox3.Controls.Add(sendChatText);
            groupBox3.Controls.Add(chatInfoText);
            groupBox3.Location = new Point(31, 189);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(692, 259);
            groupBox3.TabIndex = 2;
            groupBox3.TabStop = false;
            groupBox3.Text = "Chat";
            // 
            // sendChatButton
            // 
            sendChatButton.Location = new Point(531, 209);
            sendChatButton.Name = "sendChatButton";
            sendChatButton.Size = new Size(112, 34);
            sendChatButton.TabIndex = 2;
            sendChatButton.Text = "Send";
            sendChatButton.UseVisualStyleBackColor = true;
            sendChatButton.Click += sendChatButton_Click;
            // 
            // sendChatText
            // 
            sendChatText.Location = new Point(6, 212);
            sendChatText.Name = "sendChatText";
            sendChatText.Size = new Size(492, 31);
            sendChatText.TabIndex = 1;
            // 
            // chatInfoText
            // 
            chatInfoText.Location = new Point(6, 39);
            chatInfoText.Name = "chatInfoText";
            chatInfoText.Size = new Size(663, 164);
            chatInfoText.TabIndex = 0;
            chatInfoText.Text = "";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(31, 9);
            label1.Name = "label1";
            label1.Size = new Size(59, 25);
            label1.TabIndex = 3;
            label1.Text = "Name";
            // 
            // nameText
            // 
            nameText.Location = new Point(106, 12);
            nameText.Name = "nameText";
            nameText.Size = new Size(150, 31);
            nameText.TabIndex = 4;
            nameText.Text = "Default Name";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(10F, 25F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(nameText);
            Controls.Add(label1);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(serverBox);
            Name = "Form1";
            Text = "Form1";
            serverBox.ResumeLayout(false);
            serverBox.PerformLayout();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private GroupBox serverBox;
        private Button serverButton;
        private TextBox serverPortText;
        private Label label2;
        private GroupBox groupBox2;
        private Button clientConnectButton;
        private TextBox clientPortText;
        private Label label4;
        private TextBox serverText;
        private Label label3;
        private GroupBox groupBox3;
        private Button sendChatButton;
        private TextBox sendChatText;
        private RichTextBox chatInfoText;
        private Label label1;
        private TextBox nameText;
    }
}