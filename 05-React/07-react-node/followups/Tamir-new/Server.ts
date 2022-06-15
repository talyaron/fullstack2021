import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public/build"));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://tamirdadon:hVk914Ue4V98gUxp@cluster0.ldffz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
  });
import userroutr from "./Routes/UserRoute";
app.use("/api/users", userroutr);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
