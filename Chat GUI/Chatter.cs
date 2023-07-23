using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatForm {
    public class MessageEventArgs : EventArgs {
        public string Message { get; set; }
    }
    public abstract class Chatter {
        protected string name;

        public abstract void Close();
        public abstract void SendChat(string message);

        public event EventHandler<MessageEventArgs> MessageRecieved;
        protected virtual void OnMessageRecieved(string message) {
            MessageRecieved?.Invoke(this, new MessageEventArgs() { Message = message });
        }
    }
}
