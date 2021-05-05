require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
var io = require("socket.io").listend(server);

users=[];
connection=[];

server.listen(process.env.PORT);
console.log("Server running on port 3000");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.socket.on('connection', (socket) => {
  connection.push(socket);
  console.log("Connecetd: %s socket connected",  connection.lenght);

  //Disconect
  connection.splice(connection.indexOf(socket), 1);
  console.log("Disconnected: %s socket connected", connectio.lenght);

  //Send Message
  socket.on('send message', (data)=> {
    io.socket.emit('new message', {msg:data});
  });
});