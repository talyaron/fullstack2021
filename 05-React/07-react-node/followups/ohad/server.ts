import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4001;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(
    mongodb_uri
).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.error(err.message)
});
app.use(express.static('client/build'))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/text', (req, res) => {
    res.send('wazzzzap')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
