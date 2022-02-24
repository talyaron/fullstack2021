const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = process.env.PORT || 3000

const imgList = [
    {
        title: 'amsterdam',
        source: './source/amsterdam.jpg',
        date: '2016',
        location: 'The Netherlands'
    },
    {
        title: 'Flower closeup',
        source: './source/flowers.jpg',
        date: '2016',
        location: 'Singapore'
    },
    {
        title: 'Romi and Yair on halloween',
        source: './source/romiYair.jpg',
        date: '2021',
        location: 'New Orleans'
    },
    {
        title: 'Talent Show',
        source: './source/telYehuda.jpg',
        date: '2015',
        location: 'New York'
    },
    {
        title: 'Road Side',
        source: './source/roadSide.jpg',
        date: '2016',
        location: 'Thailand'
    },
    {
        title: 'Training',
        source: './source/training.jpg',
        date: '2017',
        location: 'Israel'
    },
    {
        title: 'Vegas Trip',
        source: './source/vegasTrip.jpg',
        date: '2022',
        location: 'Las Vegas'
    },
    {
        title: 'Meiji Shrine',
        source: './source/meijiShrine.jpg',
        date: '2015',
        location: 'Japan'
    },
    {
        title: 'The disappearing lake',
        source: './source/agamNeelam.jpg',
        date: '2017',
        location: 'Israel'
    },
    {
        title: 'Eiffel',
        source: './source/eiffel.jpg',
        date: '2014',
        location: 'France'
    },
]

app.use(express.static('public'))

app.get('/photos',(req, res) => {
  res.send(imgList)
})

app.listen(port, () => {console.log(`listening on port ${port}`)})