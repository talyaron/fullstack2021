import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

app.use(express.static('public/build'))
app.use(express.json());

import textRoute from './routes/textRoute';
app.use('/api/texts', textRoute)

mongoose
  .connect(
    URI
  )
  .then(() => {
    console.log("connected to db");
 
    
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

