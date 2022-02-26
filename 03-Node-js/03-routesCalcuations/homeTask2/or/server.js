const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.use(express.static("public"));

app.get('/get-articles', function (req, res) {

})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
