const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

const data = [
    { pic: `http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg`, name:`Admor-hazaken`, order:1 },
    { pic: `http://chabadpedia.co.il/images/thumb/6/6b/%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg/270px-%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg`, name:`Admor-hatzemach tzedek`, order:2 },
    { pic: `http://chabadpedia.co.il/images/thumb/8/84/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg/165px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg`, name:`Admor-hamaharash`, order:3 },
    { pic: `http://chabadpedia.co.il/images/thumb/7/7e/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png`, name:`Admor-harashab`, order:4 },
    { pic: `http://chabadpedia.co.il/images/thumb/b/b8/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png/300px-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png`, name:`Rebbe harayatz`, order:5 },
    { pic: `http://chabadpedia.co.il/images/thumb/d/d3/%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg/450px-%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg`, name:`The rebbe`, order:6 }
]

app.use(express.static("public"));

app.get('/get-pics', function (req, res) {
    res.send(``)
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
