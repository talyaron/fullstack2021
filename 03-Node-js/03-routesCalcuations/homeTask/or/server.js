const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

const data = [
    { picUrl: `http://chabadpedia.co.il/images/d/da/%D7%9C%D7%90_%D7%94%D7%91%D7%A2%D7%A9%27%27%D7%98.jpg`, name: `הבעל שם טוב - מייסד תורת החסידות`, order: '0' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/0/0e/939.jpg/375px-939.jpg`, name: `המגיד ממזריטש`, order: '1' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg`, name: `אדמור הזקן - מייסד חסידות חבד`, order: '2' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/f/f6/%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg/375px-%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg`, name: `אדמו"ר האמצעי - אין אף תמונה או ציור שלו`, order: '3' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/6/6b/%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg/270px-%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg`, name: `אדמור הצמח צדק`, order: '4' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/8/84/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg/165px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg`, name: `אדמור המהרש`, order: '5' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/7/7e/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png`, name: `אדמור הרשב`, order: '6' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/b/b8/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png/300px-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png`, name: `הרבי הרייצ`, order: '7' },
    { picUrl: `http://chabadpedia.co.il/images/thumb/d/d3/%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg/450px-%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg`, name: `הרבי מליובוויטש`, order: '8' }
]

app.use(express.static("public"));

app.get('/get-pics', function (req, res) {
    console.log(req.query)
    const order = req.query.order
    console.log(order)
if (order){
    const fillteredPic = data.filter((pic)=>pic.order === order)
    res.send(fillteredPic)
}else{
    res.send(data)
}
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
