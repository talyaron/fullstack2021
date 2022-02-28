const express = require('express')
const app = express()
const port=process.env.PORT||4000
const teams=[
    {player:`Ronaldo`, team:`manchester utd`,url:`https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg`},
    {player:`Mbape`, team:`psg`},
    {player:`Bale`, team:`real amdrid`},
    {player:`Firmino`, team:`liverpoll`},
    {player:`Torres`, team:`barcelona`},
    ]
   
    app.use(express.static('public'))


app.get('/teams',  (req, res)=> {
  const search=req.query.search
  const filtering=filtereplayer(search);
  res.send(filtering)
})

function filtereplayer(search) {
  if (search) {
    const regex = new RegExp(search, "i");
    return teams.filter((searchedTerm) => regex.test(searchedTerm.player) || regex.test(searchedTerm.team)) 
  } else {
    return []
  }

}

app.listen(port,()=>{console.log(`server listen on port`,port)})