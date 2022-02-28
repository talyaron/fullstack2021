const express = require('express');
const app = express();
const port =  3000;

const text = [{
        title: 'reguler expressions',
        body: 'Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.'
    },
    {
        title: 'markdown',
        body: 'Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.'
    }
];

app.use(express.static("public"));

app.listen(port, () => {
    return console.log(`example app on port http://localhost:${port} `);
})

app.get('/getText', (req, res) => {
console.log (req.query);
const search = req.query.text;
if (search) {
    console.log(search);
}
    res.send(text)

});


function filterText(title){
    const regex = new RegExp(title.text,'i');

}


