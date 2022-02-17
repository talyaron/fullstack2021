const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/get-user", (req, res) => {
    console.log('get-user')
  res.send("this is the name of the user");
});

//route
app.get("/aaa", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server listen on port", port);
});
