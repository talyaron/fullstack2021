import express from 'express';
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.json());

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const urls = [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*",
    "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg"
]
// const images = [
//     { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spring-flowers-1613759017.jpg?crop=0.669xw:1.00xh;0.0635xw,0&resize=640:*" },
//     { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
//     { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" },
//     { img: "https://m.media-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg" }
// ]
const game = [] //esta fucionado 
function buildNewImage() {
    for (let i = 0; i < urls.length; i++) {

        let url = urls[i];
        let pairId = uid();

        game.push({ url, pairId })
    }
}
const dGame = []

function copyImage() {
    for (let i = 0; i < game.length; i++) {
        let pairId = uid();
        dGame.push(game[i], pairId)
    }
}
app.get('/get-picture', (req, res) => {
    res.send()
})
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


