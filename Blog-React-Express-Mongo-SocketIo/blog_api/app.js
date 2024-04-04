import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import session from 'express-session';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import authentication from './routes/authentication.js';
import posts from './routes/posts.js';

const app = express();
const server = http.createServer(app);
const socketIo = new Server(server, {
  cors: 'http://localhost:3000'
});

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Replace the uri string with your connection string.
//const uri = 'mongodb://127.0.0.1:27017';
const password = process.env.mongopwd;
const uri = `mongodb+srv://guestUser:${password}@cluster0.auc60vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecatedErrors: true
  }
});

app.use(async (req, res, next) => {
  try {
    await client.connect();
    req.database = client.db('blog');
    req.socketIo = socketIo;
    next();
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use('/', authentication);
app.use('/posts', posts);

app.use(function (req, res, next) {
  const error = new Error('No such endpoint');
  error.statusCode = 404;
  next(error);
});

app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500);
  res.send(JSON.stringify(err.message));
});

socketIo.on('connect', () => {
  console.log('got connection');
});

server.listen(8080);
