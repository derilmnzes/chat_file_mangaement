import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./Mongodb/Mongodb";
import userRouter from "./Routes/User";
import fileRouter from "./Routes/File";
import cors from 'cors'
import http from 'http'
import initializeSocket from "./socket/socket";
import path from "path";



const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, Authorization headers, etc.)
  };
  
  app.use(cors(corsOptions));

const server = http.createServer(app);
 initializeSocket(server);



// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/file", fileRouter);


app.use(express.static(path.join(__dirname, 'build')));

// Serve your React app on any route not covered by other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
