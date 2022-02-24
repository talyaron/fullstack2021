const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const data = [{
        name: "the fresh prince of bel air",
        year: "1990",
        type: "tv",
        photo: "https://m.media-amazon.com/images/M/MV5BOGUxOWQ4MzAtMmJjYS00M2U5LWEwZTAtYTc1YmZhNjg2NDRlXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"
    },
    {
        name: "one tree hill",
        year: "2003",
        type: "tv",
        photo: "https://m.media-amazon.com/images/M/MV5BN2Y0NzRjOTQtNGNmYS00NjNiLWIwY2MtZWIyZDI5ZDhhZmI1XkEyXkFqcGdeQXVyODIxOTMwMjk@._V1_.jpg"
    },
    {
        name: "shadowhunter",
        year: "2016",
        type: "tv",
        photo: "https://m.media-amazon.com/images/M/MV5BNTU1N2ViZDctYzQwOS00ZDYyLThkMDItNmEwYTIyZTI4NGFhXkEyXkFqcGdeQXVyNTM1NDMwNDM@._V1_.jpg"
    },
    {
        name: "it takes two",
        year: "1995",
        type: "movie",
        photo: "https://m.media-amazon.com/images/M/MV5BMzdhMGU0MzEtZjg1Ny00YzE5LWE0MGQtMTNiN2UwN2I5ZDBjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_.jpg"
    },
    {
        name: "the parent trap",
        year: "1998",
        type: "movie",
        photo: "https://m.media-amazon.com/images/I/71c9JakO0iL._SL1055_.jpg"
    },
    {
        name: "step up",
        year: "2006",
        type: "movie",
        photo: "https://images-na.ssl-images-amazon.com/images/P/B000J3OTSM.jpg"
    },
]

app.use(express.static("public")) //middlware

app.get("/getUser", (req, res) => {
    console.log(req.query);
    const year = req.query.year
    const type = req.query.type
    console.log(year);
    setTimeout(() => {
        if (year) {
            console.log(year);
            const filterUsers = data.filter((user) => user.year === year)
            console.log(filterUsers);
            res.send(filterUsers)
        } else if (type) {
            console.log(type);
            const filters = data.filter((user) => user.type === type)
            console.log(filters);
            res.send(filters)
        } else {
            res.send(data);
        }
    }, 2000)
})

app.listen(port, () => {
    console.log("server listen on port", port);
})