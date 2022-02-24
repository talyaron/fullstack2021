const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const pictures = [
    { img: `https://www.erclassics.com/media/catalog/product/cache/2/thumbnail/335x224/17f82f742ffe127f42dca9de82fb58b1/p/h/photo_62536.jpg`, year: "1950" },
    { img: `https://cdntdreditorials2.azureedge.net/cache/2/e/6/c/0/6/2e6c06cff4b4b2c6d989c5d572982e858d058bfd.jpg`, year: "1970" },
    { img: `http://img.autoabc.lv/Mercedes-E-klase/Mercedes-E-klase_1989_Sedans_151126104518_3.jpg`, year: "1990"},
    { img: `https://media.carzone.co.il/eyJidWNrZXQiOiJjYXJ6b25lLW1lZGlhIiwia2V5IjoiY2Fycy9NZXJjZWRlc19CZW56L01lcmNlZGVzX0JlbnotRV9DbGFzcy1TZWRhbi00ZG9vcnMvNC83OGY2MTgxMC1kZmI1LTExZWEtYjA5YS1kYjA4MGMyMTE0OTUuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5Ijo2MCwiZm9yY2UiOnRydWV9LCJyZXNpemUiOnsiaGVpZ2h0IjoyODB9LCJub3JtYWxpemUiOnRydWV9fQ==`, year: "2010"},
]

app.use(express.static("public"));

app.get("/getPictures", (req, res) => {

    const year = req.query.year
    if (year) {
        console.log(year);
        const filteredpicture = pictures.filter((picture) => picture.year === year);
        res.send(filteredpicture)
    }
    else {
        res.send(pictures)
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});