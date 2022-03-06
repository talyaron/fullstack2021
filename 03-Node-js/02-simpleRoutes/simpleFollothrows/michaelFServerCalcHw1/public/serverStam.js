const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const arts = [{
        name: 'picaso',
        year: 1934,
        type: 'cubism',
        url: 'https://news.artnet.com/app/news-upload/2021/02/female-head-715x1024.jpg'
    },
    {
        name: 'hausmann',
        year: 1920,
        type: 'dadaism',
        url: 'https://upload.wikimedia.org/wikipedia/he/2/28/Raoul_Hausmann_abcd.jpg?20060829063825'
    },
    {
        name: 'russell',
        year: 1895,
        type: 'impressionism',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/John_Peter_Russell_Peonies_and_head_of_a_woman.jpg/619px-John_Peter_Russell_Peonies_and_head_of_a_woman.jpg'
    },
    {
        name: 'van-Gogh',
        year: 1885,
        type: 'post-impressionism',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/800px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg'
    },
    {
        name: 'goya',
        year: 1826,
        type: 'rococo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg/726px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg'
    },
];

app.use(express.static('public'))

app.get('/getArts', (req, res) => {
    const type = req.query.type;

    if (type !== 'all') {
        const filtered = arts.filter(art => art.type === type);
        res.send(filtered);
    } else if (type === 'all') {
        res.send(arts);
    }
});

app.get('/getRange', (req, res) => {

    const year = req.query.range;


    if (!year) {
        res.send(arts)
    } else {
        const RangedArray = arts.filter(art => art.year <= year);
        res.send(RangedArray)
    }

})

app.listen(port, () => {
    return console.log('server listening at port', port);
});