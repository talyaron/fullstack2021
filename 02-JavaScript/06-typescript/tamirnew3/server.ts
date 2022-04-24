import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

mongoose.connect('mongodb+srv://tamirdadon:v9ZiWUUtVGD5J8wF@cluster0.ldffz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// מייבא את כל הראוטרים מהתייקיה של הראוטרים
import userRout from './routes/userRout'

app.use ('/users', userRout)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
