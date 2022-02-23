

const express = require('express')
const app = express()
const port=process.env.PORT || 3058


const data=[
{imgUrl:"https://www.monetpaintings.org/The%20Waterlily%20Pond,%20Green%20Harmony%20Claude%20Monet.jpg?ezimgfmt=rs:400x389/rscb2/ng:webp/ngcb2",view:"pond",name:"Waterlily Pond",year:"1899"},
{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg",view:"garden",name:"Garden at Giverny",year:"1900"},
{imgUrl:"https://uploads3.wikiart.org/00143/images/claude-monet/5.jpg!Large.jpg",view:"field",name:"Field of Poppies",year:"1873"},
{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Monet_Claude%2C_The_Beach_at_Pourville%2C_1882.jpg",view:"beach",name:"Beach in Pourville",year:"1882"},
{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Monet_canal-in-amsterdam.jpg",view:"city",name:"Canal in Amsterdam",year:"1874"}
];

app.use(express.static('public'))

app.get('/getPics', function (req, res) {
  console.log(req.query) //what does req.query show?
  const view=req.query.view;
  const year=req.query.year;


  if(view){
    console.log(view);
    const filteredPaintingsByView=data.filter((painting)=>painting.view===view);
    res.send(filteredPaintingsByView);
  }else if(year){
    console.log(year);
    const filteredPaintingsByYear=data.filter((painting)=>painting.year===year);
    res.send(filteredPaintingsByYear);
    
  }else{
    res.send(data)
  }
  
  
})

app.listen(port,()=>{
    return console.log(`Express is listening to localhost:${port}`)
})