import express from 'express';
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 3003;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://igino11:kktgqbLMCE3mtTN6@cluster0.zfewx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});;


import userRoute from './routes/userRoute'
import imagesRoute from './routes/imagesRoute'

app.use('/user', userRoute);
app.use('/images', imagesRoute);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
