const express = require('express');
const app = express();
const port =  2000;

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



app.get('/getText', (req, res) => {
const search = req.query.searchTerm;
const filtered = filterText(search)
    res.send(filtered)
});


function filterText(event) {

    if (event) {
        const regex = new RegExp(event, 'i');
        return text.filter((word) => regex.test(word.title) || regex.test(word.body));
    }
 
}

app.listen(port, () => {
    return console.log(`example app on port http://localhost:${port} `);
})