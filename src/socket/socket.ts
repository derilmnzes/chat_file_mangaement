// socket.js
import { Server, Socket } from "socket.io";
import jwt from "jsonwebtoken";

const chatMessages = [];

const initializeSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.use((socket: any, next) => {
    console.log(socket?.handshake?.query?.token,'called')
    if (socket?.handshake?.query && socket?.handshake?.query?.token) {
      jwt.verify(
        socket?.handshake?.query?.token,
        process.env.SECRET_TOKEN_KEY,
        (err, decoded) => {
          if (err) return next(new Error("Token is not valid"));
          socket.name = decoded.name;

          next();
        }
      );
    } else {
      next(new Error("Authentication Error"));
    }
  }).on("connection", (socket: any) => {
    socket.on("chat message", (msg) => {
      const newMessage = {
        name: socket.name,
        message: msg,
      };

      chatMessages.push(newMessage);

      io.emit("chat message", {
        name: socket.name,
        message: msg,
      });
    });
    socket.on("get messages", (msg) => {
        console.log('called',chatMessages)
      io.emit("Stored message", chatMessages);
    });
    socket.on("disconnect", () => {});
  });
};

export default initializeSocket;
