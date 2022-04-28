import Places from "../model/placesModel";


export const getfilteredAirBNB = async (req, res) => {
  try {
    let price1 = req.body;
    if (price1) {
      const result = await Places.find({ price: price1 });
      res.send({ ok: true, result })
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



export const getToPlace = async (req, res) => {
 
  try {
    const { placeId } = req.params;
    console.log(placeId)
    if ( placeId) {
      const getplaces = await Places.findOne({_id:placeId });

      console.log(getplaces)
     res.send(getplaces);
   
    } else {
      throw new Error("placeId is not the same as the __id");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
  }
};

export const searchAirbnb = async (req, res) => {
  try {
    let {searchLocation, checkIn, checkOut, adults, children, infants, pets } =req.query;

    console.log(searchLocation, checkIn, checkOut, adults, children, infants, pets);

    let sum: any = Number(adults) + Number(children) + Number(infants) + Number(pets);
    console.log("the number of guests:" + sum);


    let dateOfCheckIn = new Date(`${checkIn}`);
    let dateOfCheckOut = new Date(`${checkOut}`);
    let differenceInTime = dateOfCheckOut.getTime() - dateOfCheckIn.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    console.log("the days between checkIn checkOut is:" + differenceInDays)


    const getplaces = await Places.find({ address_country: `${searchLocation}`, accommodates: sum }).limit(3);

    console.log(getplaces)
    res.send({ ok: true, getplaces });
    
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.massage });
  }
};

export const searchAirbnbByCity = async (req, res) => {
  
  let { city } = req.body;

  const getplaces = await Places.find({ address_country: city }).limit(3);
  
  res.send({ ok: true,getplaces });
};
