using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ChatForm {
    public class Client : Chatter{

        TcpClient tcpClient;
        BinaryReader reader;
        BinaryWriter writer;
        public Client(string name, string ipAddress, int port) {
            this.name = name;
            tcpClient = new TcpClient(ipAddress, port);
            reader = new BinaryReader(tcpClient.GetStream());
            writer = new BinaryWriter(tcpClient.GetStream());
            new Thread(Listen).Start();
        }

        public void Listen() {
            string input;
            while ((input = reader.ReadString()) != null) {
                OnMessageRecieved(input);
            }
        }

        public override void SendChat(string message) {
            writer.Write($"{name} : {message}");
        }

        public override void Close() {
            reader.Close();
            writer.Close();
            tcpClient.Close();
        }
    }
}
