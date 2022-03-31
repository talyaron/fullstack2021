import Places from "../model/placesModel";

export const getPlaces = async (req, res) => {
  try {
    const places = await Places.find({});
    // .limit(20);
    console.log(Places);

    console.log(places);

    res.send({ ok: true, places });
  } catch (error) {
    console.error(error);
    res.send({ error: "error in app.get/getPlaces" });
  }
};
export const getfilteredAirBNB = async (req, res) => {
  try {
    let price1 = req.body;
    if (price1) {
      const result = await Places.find({ price: price1 });
      res.send({ ok: true, result });
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
};

export const addPlaces = async (req, res) => {
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
};
export const getToPlace = async (req, res) => {
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
};
export const findPlaceMap = async (req, res) => {
  try {
    let coordinates: Array<any> = req.body;
    //  const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
    // initMap(center)
    res.send(coordinates);
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
  }
};
export const searchAirbnb = async (req, res) => {
  try {
    let {
      // search, 
      // checkIn, checkOut,
       adults,
        // children, infants, pets 
    } =
      req.query;

    console.log(
      // search, 
      // checkIn, checkOut, 
      adults,
      //  children, infants, pets
      );
    const places = await Places.find({accommodates:8}).limit(20);
    //  $query = array(accommodates => $userInput);
    //  {$query : Array(accommodates => `${adults}`)}

    console.log(places)
    res.send({ ok: true, places })
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
  }
};


export const searchAirbnbInTelaviv = async (req, res) => {
  
 
    // const placesInTelaviv = await Places.find({"address.country":{ $eq:"Brazil"}}).limit(20);
    const placesInTelaviv = await Places.find({address:{ country:"Brazil"}}).limit(10);
    console.log(placesInTelaviv)
    res.send({ ok: true, placesInTelaviv })
  
};

export const search = async (req, res) => {
  try {
    const places = await Places.find({});
    const search = req.query.search;
    const serchPlace = searchPlaces(search, places);
    console.log(search, " ", places);

    res.send(serchPlace);
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
  }
};
function searchPlaces(search, places) {
  if (search) {
    const regex = new RegExp(search, "i");
    return places.filter((searchedTerm) => regex.test(searchedTerm.name));
  } else {
    return places;
  }
}
