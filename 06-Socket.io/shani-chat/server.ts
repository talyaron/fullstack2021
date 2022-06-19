const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 4000;
const cors = require("cors");


app.use(cors());
 






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
