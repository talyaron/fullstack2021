const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = process.env.PORT || 3000

const imgList = [
    {
        title: 'amsterdam',
        source: 'amsterdam.JPG',
        date: '04/09/2016',
        location: 'Amsterdam, The Tetherlands'
    },
    {
        title: 'Flower closeup',
        source: 'flowers.jpg',
        date: '19/09/2016',
        location: 'Singapore'
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
    {
        title: '',
        source: '',
        date: '',
        location: ''
    },
]

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port)