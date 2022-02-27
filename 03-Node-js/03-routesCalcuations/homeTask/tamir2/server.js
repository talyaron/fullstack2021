const express = require('express');
const {
    title
} = require('process');
const app = express()
const port = process.env.PORT || 3000;

const data1 = [{
    title: 'facbook',
    text: 'in facbook we heve a lot of friends'
}]


app.use(express.static("public"));

app.get('/tamir', function (req, res) {
        
        res.send(data1)
    }),
  
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});