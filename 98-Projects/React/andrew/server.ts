import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 4000;
require('dotenv').config()

app.use(express.static('client/build'))
app.use(express.json());
app.use(cookieParser());

const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(
    mongodb_uri
).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.error(err.message)
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

import userRoutes from './client/routes/userRoutes'
import postRoutes from './client/routes/postRoutes';
app.use('/api/users', userRoutes)
app.use('/users/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/users/api/posts', postRoutes)


