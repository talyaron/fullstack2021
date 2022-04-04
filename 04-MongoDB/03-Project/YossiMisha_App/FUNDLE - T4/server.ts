import express from 'express';
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"
import wordRoutes from "./routes/wordRoutes"

const app = express();
const port = process.env.PORT || 3008;
app.use(express.static("public"));
app.use(express.json());
app.use('/users', userRoutes)
app.use('/words', wordRoutes)



// mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://michaeldubovik:michaeldubovik1991@cluster0.y9ozg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


