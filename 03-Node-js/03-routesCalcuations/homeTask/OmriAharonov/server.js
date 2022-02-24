const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cars = [
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/x1966_Pontiac_GTO.jpg.pagespeed.ic_.4FnACdskZc.jpg', name:'Pontiac Coupe', year:1966},
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/1966_Mercury_Cyclone.jpg', name:'Plymouth Superbird', year:1964},
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/1968_Pontiac_Firebird.jpg', name:'Chevy Camaro', year:1969},
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/1969_Dodge_Challenger-1400x930.jpg', name:'Pontiac Firebird', year:1968},
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/1968_Dodge_Superbee.jpg', name:'Plymouth Roadrunner', year:1967},
    {img:'https://www.supercars.net/blog/wp-content/uploads/2020/03/1960_Corvette-XP-700.jpg', name:'Corvette', year:1960},
];

app.use(express.static('public'));

app.get('/muscleCars' , (req, res) => {
    const car = req.query.car
    if(car){
    const filterdCar = cars.filter(auto => auto.name === car); 
    res.send(filterdCar) 
    } else{
        res.send(cars)
    }
})

app.listen(port, () => {console.log('server listen to port',port)})