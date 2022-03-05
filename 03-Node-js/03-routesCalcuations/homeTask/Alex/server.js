const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = [{
        url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80",
        id: 1,
        topic: "Nature"
    },
    {
        url: "https://picsum.photos/200/300",
        id: 2,
        topic: "Nature"
    },
    {
        url: "https://picsum.photos/200/300",
        id: 3,
        topic: "Objects"
    }
];

app.use(express.static("public"));

app.get("/get-users", (req, res) => {
    console.log(req.query);
    const pictures = req.query.data;
    setTimeout(() => {
        if (pictures) {
            console.log(pictures);
            const filterdData = data.filter((user) => user.pictures === pictures);

            res.send(filterdData);
        } else {
            res.send(data)
        }
    }, 1000);
});



app.listen(port, () => {
    return console.log(`express is listening at http://localhost:${port}`)
});