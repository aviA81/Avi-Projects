using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace ChatForm {
    public class Server : Chatter{

        TcpListener listener;
        List<ClientConnection> clients;
        public Server(string name, int port){
            this.name = name;
            IPAddress address = IPAddress.Parse("127.0.0.1");
            listener = new TcpListener(address, port);
            listener.Start();
            clients = new List<ClientConnection>();
            new Thread(ListenForConnections).Start();
        }

        public void ListenForConnections() {
            while (true) {
                TcpClient client = listener.AcceptTcpClient();
                ClientConnection cc = new ClientConnection(client, this);
                clients.Add(cc);
            }
        }

        public void GotMessageFromClient(string message) {
            foreach(ClientConnection cc in clients) {
                cc.writer.Write(message);
            }

            OnMessageRecieved(message); //to display on UI
        }

        public void RemoveClient(ClientConnection theClient) {
            clients.Remove(theClient);
        }

        public override void Close() {
            listener.Stop();
        }

        public override void SendChat(string message) {
            GotMessageFromClient($"{name} : {message}");
        }
    }

    public class ClientConnection {
        TcpClient tcpClient;
        Server server;
        BinaryReader reader;
        public BinaryWriter writer;

        public ClientConnection(TcpClient client, Server serv) {
            this.tcpClient = client;
            this.server = serv;
            reader = new BinaryReader(tcpClient.GetStream());
            writer = new BinaryWriter(tcpClient.GetStream());
            new Thread(Listen).Start();
        }

        public void Listen() {
            try {
                string input;
                while ((input = reader.ReadString()) != null) {
                    server.GotMessageFromClient(input);
                }
            }
            catch (IOException) {
                server.RemoveClient(this);
            }

        }
    }
}
