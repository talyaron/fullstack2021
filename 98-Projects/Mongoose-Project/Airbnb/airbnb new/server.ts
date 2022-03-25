
import express from 'express';
import mongoose from "mongoose";
// import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
mongoose.connect('mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority')

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const PlacesSchema = new mongoose.Schema({
    location:String,
    price:String,
    checkIn:String,
    checkOut:String,
    amountGuest:Number,
    type:String,
    kitchen:String,
    beds:Number,
    wifi:String,
    beach:String,
    cancle:String

})

const userSchema = new mongoose.Schema({
    name:String,
    password:String
})
const Users = mongoose.model('users', userSchema) 
const Places = mongoose.model('listingsAndReviews',PlacesSchema);
app.get('/getPlaces', async (req,res)=>{
   try{
       const places = await Places.find({})
       res.send({ok:true, places});
   }
   catch (error) {
    console.error(error);
    res.send({ error: 'error in app.get/getPlaces' })

 }
})
app.post('/addPlaces', async(req,res)=>{
    try{
        let{
            location,
            price,
            checkIn,
            checkOut,
            amountGuest,
            type,
            kitchen,
            beds,
            wifi,
            beach,
            cancle
        }=req.body;
        const newPlace = new Places ({   location,
            price,
            checkIn,
            checkOut,
            amountGuest,
            type,
            kitchen,
            beds,
            wifi,
            beach,
            cancle})
            const result = await newPlace.save();
            res.send({ok:true, result})
    }
    catch(error){
        console.error(error)
        res.send({error:error.massage})
        }
})
app.post('/addUsers',async(req,res)=>{
    try{
    let {user, password} = req.body
    const newUser =new Users({user, password})
    const result = await newUser.save();
    res.send({ok:true, result})
}
catch(error){
    console.error(error)
    res.send({error:error.massage})
    }
})
// const options:any = {
//   method: 'GET',
//   url: 'https://hotels-com-free.p.rapidapi.com/pde/property-details/v1/hotels.com/106346',
//   params: {
//     rooms: '1',
//     checkIn: '2021-01-27',
//     checkOut: '2021-01-28',
//     locale: 'en_US',
//     currency: 'USD',
//     include: 'neighborhood'
//   },
//   headers: {
//     'x-rapidapi-key': 'insert-your-RapidAPI-key-here',
//     'x-rapidapi-host': 'hotels-com-free.p.rapidapi.com'
//   }
// };
// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
