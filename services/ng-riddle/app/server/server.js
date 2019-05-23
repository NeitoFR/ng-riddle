// Dependencies
const fs = require("fs"),
  http = require("http"),
  https = require("https"),
  path = require("path"),
  cors = require("cors"),
  express = require("express"),
  app = express();

require("dotenv").config();
app.use(cors());
app.use(express.static(path.join(__dirname, "/..", "dist")));
console.log(path.join(__dirname, "/..", "dist"));

app.get("/", function(req, res) {
  res.sendFile("index.html", { root: "./dist" });
});

const httpServer = http.createServer(app);

httpServer.listen(process.env.PROD_SERVER_PORT, () => {
  console.log("HTTP Server running on port " + process.env.PROD_SERVER_PORT);
  console.log("http://localhost:" + process.env.PROD_SERVER_PORT);
});

// io = require("socket.io").listen(httpServer);

// io.sockets.on("connection", function(socket) {
//   console.log("Un client est connecté !");
//   socket.emit("hello", "Hello from server WS");
//   socket.on("hello", message => {
//     console.log("New message", message);
//   });
// });
