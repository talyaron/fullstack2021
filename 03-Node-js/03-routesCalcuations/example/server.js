const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = [
  { name: "Moshe", id: 1, gender: "male" },
  { name: "Ahron", id: 2, gender: "male" },
  { name: "Miriam", id: 3, gender: "female" },
];

app.use(express.static("public")); //middlware

app.get("/get-users", (req, res) => {
  //route

  console.log(req.query);
  const gender = req.query.gender;
  setTimeout(() => {
    if (gender) {
      console.log(gender);
      //send back only users with this gender
      const filterdUsers = data.filter((user) => user.gender === gender);

      res.send(filterdUsers);
    } else {
      res.send(data);
    }
  }, 1000);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
