
const app = require('express')();
const httpServer = require('http').createServer(app)
const wsServer = require('socket.io')(httpServer, { cors: {origin: "http://localhost:3000", methods: ["GET", "POST"]}})

app.get("/", (req, res) => {
    res.json({"users":"hi"})
})


wsServer.on("connection", (socket) => {
    socket.on("join_room", (roomName) => {
      socket.join(roomName);
      socket.to(roomName).emit("welcome");
    });
    socket.on("offer", (offer, roomName) => {
      socket.to(roomName).emit("offer", offer);
    });
    socket.on("answer", (answer, roomName) => {
      socket.to(roomName).emit("answer", answer);
    });
    socket.on("ice", (ice, roomName) => {
      socket.to(roomName).emit("ice", ice);
    });
  });


app.listen(5000, () => {console.log("server started")})

