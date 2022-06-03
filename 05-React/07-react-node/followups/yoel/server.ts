import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public/build'))// I think we add ("build")
app.use(express.json());

mongoose.connect('mongodb+srv://Michael:6RmR0bWXc0hh7ybk@cluster0.ctwuo.mongodb.net/bymySelf?retryWrites=true&w=majority')
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
