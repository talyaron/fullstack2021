import express from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 4000;
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

const iceCreamSchema = new mongoose.Schema({
    type: String,
    topping: String
});
const IceCream = mongoose.model('ice-creams', iceCreamSchema)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/text', (req, res) => {
    res.send('text')
})
app.get('/get-ice-creams', async (req, res) => {
    const { type } = req.query
    const iceCreams = await IceCream.find({ type });
    res.send(iceCreams)
})
app.get('/get-ice-cream', async (req, res) => {
    const { id } = req.query
    const iceCream = await IceCream.findById(id);
    res.send(iceCream)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
