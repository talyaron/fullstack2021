import express from "express";
import path from 'path'
const app = express();
const port: number = 3000;

app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
// app.set('views', path.resolve(__dirname, 'pages'))

interface User {
    name: string,
    age: number
}

const users: Array<User> = [
    { name: "aaa", age: 15 },
    { name: "bbb", age: 23 },
    { name: "ccc", age: 43 },
    { name: "ddd", age: 56 },
    { name: "eee", age: 78 }
]

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        users
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "ABOUT"
    })
})



app.listen(port, () => {
    console.log(`Server listen on port http://host:${port}`);
});

