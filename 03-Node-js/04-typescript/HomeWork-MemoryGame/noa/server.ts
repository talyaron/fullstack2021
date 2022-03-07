import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

let img = [
    { src: "https://cdna.wobily.com/media-gallery/ibwodsJ0AT0=/1.png", pairId: 1, id: '' },
    { src: "https://cdna.wobily.com/media-gallery/ibwodsJ0AT0=/1.png", pairId: 1, id: '' },
    { src: "https://www.cuponofesh.co.il/zimmers/pictures/cards/small/73900.jpg", pairId: 2, id: '' },
    { src: "https://www.cuponofesh.co.il/zimmers/pictures/cards/small/73900.jpg", pairId: 2, id: '' },
    { src: "https://images1.ynet.co.il/PicServer4/2014/12/09/5748090/TAMARI_3586.JPG", pairId: 3, id: '' },
    { src: "https://images1.ynet.co.il/PicServer4/2014/12/09/5748090/TAMARI_3586.JPG", pairId: 3, id: '' },
    { src: "https://www.ynet.co.il/PicServer2/02022009/1935216/TRAVEL-WLT-BEIJING-2-TB_wa.jpg", pairId: 4, id: '' },
    { src: "https://www.ynet.co.il/PicServer2/02022009/1935216/TRAVEL-WLT-BEIJING-2-TB_wa.jpg", pairId: 4, id: '' },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Asian_Elephant1.jpg/250px-Asian_Elephant1.jpg", pairId: 5, id: '' },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Asian_Elephant1.jpg/250px-Asian_Elephant1.jpg", pairId: 5, id: '' },
    { src: "https://www.lametayel.co.il/limages/4134c5bd12f0b822d00d7056143ade7d.jpg?size=1232x0&type=r", pairId: 6, id: '' },
    { src: "https://www.lametayel.co.il/limages/4134c5bd12f0b822d00d7056143ade7d.jpg?size=1232x0&type=r", pairId: 6, id: '' }
]


app.get('/get-img', (req, res) => {
   const cards = shuffleCards(img);
    res.send(cards)
});

function shuffleCards(img) {
        var m = img.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = img[m];
          img[m] = img[i];
          img[i] = t;
        }
        return img;
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
