import Places from '../model/placesModel'

export const getPlaces = async (req, res)=>{
    try {
        const places = await Places.find({});
        console.log(Places);
        
        console.log(places);
        
        res.send({ ok: true, places });
      } catch (error) {
        console.error(error);
        res.send({ error: "error in app.get/getPlaces" });
      } 
}
export const getfilteredAirBNB = async (req, res)=>{
  try {
      let price1=req.body;
      if (price1){
        const result= await Places.find({price:price1}); 
        res.send({ok:true,result})
        console.log(result);
      }  
      // const places = await Places.find({});
      // console.log(Places);
      
      // console.log(places);
      
      // res.send({ ok: true, places });
    } catch (error) {
      console.error(error);
      res.send({ error: "error in app.get/getPlaces" });
    } 
}


export const addPlaces = async (req,res)=>{
    try {
        let {
          name,
          summary,
          checkIn,
          checkOut,
          accommodates,
          amenities,
          bedrooms,
          beds,
          number_of_reviews,
          price,
          cancle,
          bathrooms,
          images,
          host,
          space,
          description,
          bed_type,
          reviews,
          cancellation_policy,
          address,
        } = req.body;
        const newPlace = new Places({
          name,
          summary,
          checkIn,
          checkOut,
          accommodates,
          amenities,
          bedrooms,
          beds,
          number_of_reviews,
          price,
          cancle,
          bathrooms,
          images,
          host,
          space,
          description,
          bed_type,
          reviews,
          cancellation_policy,
          address,
        });
    
        const result = await newPlace.save();
        res.send({ ok: true, result });
      } catch (error) {
        console.error(error);
        res.send({ error: error.massage });
      }
}
export const getToPlace = async (req,res)=>{
    try {
        const { placeId } = req.body;
        const __id = req.body;
        if (__id == placeId) {
          res.send(placeId);
        } else {
          throw new Error("placeId is not the same as the __id");
        }
      } catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
      }
}
export const findPlaceMap = async (req,res)=>{
   try{
    let coordinates: Array<any> = req.body;
  //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
  // initMap(center)
  res.send(coordinates);
}
catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
}
}
export const searchAirbnb = async (req, res)=>{
    try{
        const search=req.query.search;
    const checkIn=req.query.checkIn;
    const checkOut=req.query.checkOut;
    const adults=req.query.adults;
    const children=req.query.children;
    const infants=req.query.infants;
    const pets=req.query.pets;
    const foundLocation=await Places.find({address:search});
    console.log(foundLocation)
    //res.send({city:filteredCity})
    }
    catch (error) {
        console.log(error.error);
        res.send({ error: error.massage });
    }
}
