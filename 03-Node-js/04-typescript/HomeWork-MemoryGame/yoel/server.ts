import express from 'express';
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());


const images = [
    { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
    {img :"https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg"},
    {img:"https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg"},
    {img:"https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg"}
]


app.post('/get-picture', (req, res) => {
    res.send(images)
})
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


