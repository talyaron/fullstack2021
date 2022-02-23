const { lookupService } = require('dns')
const express = require('express')
const { url } = require('inspector')
const app = express()
const port=process.env.PORT||3008

const pictures =[
  {name:`leo`,
    year:`1857`,
    url:`https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`
  },
  {
    name:`picaso`,
    year:`1977`,
     url:`https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
    ]
    
    
    app.use(express.static('public'))

   app.get('/getPics', function (req, res) {
    console.log(req.query);
    const gender=req.query.
  )
 
app.listen(port,()=>{
    console.log(`server listen on port`,port)
});
