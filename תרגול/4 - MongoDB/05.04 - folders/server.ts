import express from 'express';
const app = express();
import mongoose from "mongoose";

const PORT: (string | number) = process.env.PORT || 4564;

app.use(express.static('public')) //static folder
app.use(express.json())


//DATA CONNECT
try {
    mongoose.connect("mongodb+srv://KaKa:WO3sm2Hl7eXTMN0Y@cluster0.mfqlq.mongodb.net/fullStackOct2021", () => {
        console.log(`DATA CONNECTED`)
    })
} catch (err) {
    console.log(err)
}

import usersRoute from "./routes/index";

app.use('/', usersRoute)

// const bookSchema = new mongoose.Schema({
//     username:String, 
//     password:String, 
//     howMuch:Number,
//   })
//   //create a collection 

//   const User = mongoose.model('users' , bookSchema);

//   import User from '....'

//   const result = await newUser.save();


//LISTEN TO
app.listen(PORT, () => {
    return console.log(`Listening at http://localhost:${PORT}`);
});
