const express = require('express')
const app = express()
const port = 3000
const data = [{
        name: 'Self-Portrait',
        year: '1606',
        category: 'Rembrandt',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg'
    },
    {
        name: 'The Prodigal Son in the Tavern',
        year: '1635',
        category: 'Rembrandt',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg/330px-Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg'
    },
    {
        name: 'Self-portrait with Bandaged Ear',
        year: '1889',
        category: 'Vincent van Gogh',
        img: 'https://www.thoughtco.com/thmb/QoEzcRVqI9z85PPw2FLCCAv0Pyg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VanGoghSelf-PortraitWithBandageCROPPEDGetty149279299-5a12199ada27150037a6f747.jpg'
    },
    {
        name: 'Vase with Cornflowers and Poppies',
        year: '1887',
        category: 'Vincent van Gogh',
        img: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=200&height=270&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FpYQZHFD78DlpNKY511TiHw%2Flarge.jpg'
    },
    {
        name: 'The Nude Maja',
        year: '1800',
        category: 'Francisco Goya',
        img: 'https://i0.wp.com/www.bruceonarthistory.com/wp-content/uploads/2018/11/Art-Goya.jpg?w=650&ssl=1'
    },
    {
        name: 'El Tres de Mayo',
        year: '1814',
        category: 'Francisco Goya',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg/778px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg'
    }
]

app.use(express.static('public'))


app.get('/get-pictures', function (req, res) {

    const category = req.query.category;
    const year = req.query.year;

    if (category) {
        const filteredPic = data.filter(pic => pic.category === category)
        res.send(filteredPic)

    } else if (year) {
        const filteredPic = data.filter(pic => pic.year === year)
        res.send(filteredPic)

    } else {
        res.send(data)
    }
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})