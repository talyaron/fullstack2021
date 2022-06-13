import express from 'express';
import mongoose from 'mongoose';
import Userrout from './Routes/UserRoute';
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public/build'))
app.use(express.json());

mongoose.connect('mongodb+srv://tamirdadon:G6ZddBDVq8aJougK@cluster0.ldffz.mongodb.net/?retryWrites=true&w=majority')
    .then(res => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });
app.use('/api/users', Userrout)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
