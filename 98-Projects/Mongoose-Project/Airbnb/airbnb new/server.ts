import express from "express";
import mongoose from "mongoose";
import path from "path";
import Places from "./model/placesModel";
// import axios from "axios";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());


app.set("view engine", "ejs"); //connectiong ejs
console.log(app.get("view engine"));
app.set("views", path.resolve(__dirname, "pages"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://shay:shayFoyer1994@cluster0.xyd5y.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("connected to db");
    Places.find({}).limit(10)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });

// const userSchema = new mongoose.Schema({
//   name: String,
//   password: String,
// });
// const Users = mongoose.model("users", userSchema);
// const Places = mongoose.model("listingsAndReviews", PlacesSchema);
// app.get("/getPlaces", async (req, res) => {
//   try {
//     const places = await Places.find({});
//     res.send({ ok: true, places });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: "error in app.get/getPlaces" });
//   }
// });
// app.post("/addPlaces", async (req, res) => {
//   try {
//     let {
//       name,
//       summary,
//       checkIn,
//       checkOut,
//       accommodates,
//       amenities,
//       bedrooms,
//       beds,
//       number_of_reviews,
//       price,
//       cancle,
//       bathrooms,
//       images,
//       host,
//       space,
//       description,
//       bed_type,
//       reviews,
//       cancellation_policy,
//       address,
//     } = req.body;
//     const newPlace = new Places({
//       name,
//       summary,
//       checkIn,
//       checkOut,
//       accommodates,
//       amenities,
//       bedrooms,
//       beds,
//       number_of_reviews,
//       price,
//       cancle,
//       bathrooms,
//       images,
//       host,
//       space,
//       description,
//       bed_type,
//       reviews,
//       cancellation_policy,
//       address,
//     });

//     const result = await newPlace.save();
//     res.send({ ok: true, result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.massage });
//   }
// });
// app.post("/addUsers", async (req, res) => {
//   try {
//     let { user, password } = req.body;
//     const newUser = new Users({ user, password });
//     const result = await newUser.save();
//     res.send({ ok: true, result });
//   } catch (error) {
//     console.error(error);
//     res.send({ error: error.massage });
//   }
// });
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
// app.get("/goToPlace", (req, res) => {
//   try {
//     const { placeId } = req.body;
//     const __id = req.body;
//     if (__id == placeId) {
//       res.send(placeId);
//     } else {
//       throw new Error("placeId is not the same as the __id");
//     }
//   } catch (error) {
//     console.log(error.error);
//     res.send({ error: error.massage });
//   }
// });
// app.post("/findPlaceMap", async (req, res) => {
//   let coordinates: Array<any> = req.body;
//   //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
//   // initMap(center)
//   res.send(coordinates);
// });
// let map: google.maps.Map;

// function initMap(center): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center,
//     zoom: 8
//   });
// }




       // ---- search in navigation bar---------

// app.get('/search-city',(req,res)=>{
//     const search=req.query.search;
//     const filteredCity=filteredCitySearch(search);
//     res.send(filteredCity)
// })
// app.get('/search-airbnb', async(req,res)=>{
//     const search=req.query.search;
//     const checkIn=req.query.checkIn;
//     const checkOut=req.query.checkOut;
//     const adults=req.query.adults;
//     const children=req.query.children;
//     const infants=req.query.infants;
//     const pets=req.query.pets;
//     const foundLocation=await Places.find({address:search});
//     console.log(foundLocation)
//     //res.send({city:filteredCity})
// })

// function filteredCitySearch(search) {
   
//     if (search) {
//       const regex = new RegExp(search, "i");
//       return data.filter((searchedTerm) => regex.test(searchedTerm.address.country));
//     } else {
//       return data
//     }
  
  
// }
import userRoutes from './routes/placesRoutes'
app.use('/places', userRoutes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
