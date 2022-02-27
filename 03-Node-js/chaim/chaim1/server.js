const express = require('express');
const { clearCookie } = require('express/lib/response');
const app = express()
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(express.static('public'))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  
  