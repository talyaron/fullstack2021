import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public/build'))
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI

mongoose.connect(mongodb_uri)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
