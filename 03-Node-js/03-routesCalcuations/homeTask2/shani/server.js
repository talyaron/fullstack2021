const express = require('express')
const app = express()
const port=process.env.PORT || 3058;

const data=[{title:"",}];

app.use(express.static('public'))

app.get('/getArticle', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    return console.log(`Express is listening to localHost:${port}`);
})
