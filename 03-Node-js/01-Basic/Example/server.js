const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/get-user", (req, res) => {
    console.log('get-user')
  res.send("this is the name of the user");
});

//route
app.get("/aaa", (req, res) => {
  let x = 3*5;
  res.send(`Hello World ${x}`);
});

app.listen(port, () => {
  console.log("server listen on port", port);
});
