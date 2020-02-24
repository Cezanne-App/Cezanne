const http = require("http");
const express = require("express");
const socket = require("socket.io");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");
const db = require("../db/index.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", router);

app.use(express.static(__dirname + "/../client/dist"));

// Initialization
const server = http.createServer(app);
const io = socket(server);

io.on("connection", socket => {
  console.log("Bidder connected");
  socket.on('bid', bid => socket.broadcast.emit('bid', bid));
});

server.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port ${PORT}...`);
  }
});
