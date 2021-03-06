const {
    text
} = require('express');
const express = require('express');
const { links } = require('express/lib/response');
const app = express()
const port = process.env.PORT || 3000;

const data1 = [{
    
        title:'facbook',
        text1: 'face-time',

    },
    {
        title: 'instegram',
        text1: 'instafollow'
    },
    {
        title: 'tiktok',
        text1: 'timbrlend'
    }
]


app.use(express.static('public'))

app.get('/tamir', function (req, res) {
    const user = req.query.user;
    const filterdata1 = filterduser(user)
    res.send(filterdata1)
})

function filterduser(user) {
    if (user) {
        const regex = new RegExp(user, "i")
        return data1.filter((user) => regex.test(user.title))
    } else {
        return []
    }
}

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});