import express from 'express';
const app = express();
const port = process.env.PORT || 3007;

app.use(express.static('public')) //middlware

app.get('/getUsers', (req, res) => { //route
  setTimeout(()=>{
    res.send([{name:"Moshe",id:343534}]);
  },2000)
  
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});