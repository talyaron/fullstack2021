import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 4001;
const mongoDB_URI=process.env.mongoDB_URI;
app.use(express.static('client/build'))
app.use(express.json());

mongoose.connect(mongoDB_URI)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

    
    import userRoutes from "./routes/userRoutes";
    app.use("/api/users", userRoutes);

    // app.get('/hello',(req,res)=>res.send("Hello"));
    // app.post('/hello',(req,res)=>res.send(`Hello ${req.body.name}`));
    app.use(bodyParser.json());
    // app.get("/hello/:name",(req,res)=>res.send(`Hello${req.params.name}`));

    app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
