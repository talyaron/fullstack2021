const express = require('express')
const app = express()
const port=process.env.PORT||4000
const teams=[
    {player:`ronaldo`, team:`manchester utd`},
    {player:`mbape`, team:`psg`},
    {player:`bale`, team:`real amdrid`},
    {player:`firmino`, team:`liverpoll`},
    {player:`torres`, team:`barcelona`},
    ]
    const list=[{
        bale:`bale`,
        mbape:`mbape`,
        ronaldo:`ronaldo`,
        firmino:`firmino`,
        torres:`torres`,
    }]
    app.use(express.static('public'))


app.get('/teams',  (req, res)=> {
  res.send('Hello World')
})
app.listen(port,()=>{console.log(`server listen on port`,port)})