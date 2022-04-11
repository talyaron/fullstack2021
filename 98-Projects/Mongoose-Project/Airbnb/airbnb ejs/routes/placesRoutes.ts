import express from 'express';
const router = express.Router();
import { addPlaces } from '../controler/placesCont'
import { getToPlace } from '../controler/placesCont'
import { searchAirbnb } from '../controler/placesCont'
import { searchAirbnbByCity } from '../controler/placesCont'
import { findPlaceMap } from '../controler/placesCont'
// import { getPlaces } from '../controler/placesCont'
import { getfilteredAirBNB } from '../controler/placesCont'


router

    // .get('/getPlaces', getPlaces)
    .get('/getFiltered', getfilteredAirBNB)
    .post('/addPlaces', addPlaces)
    .get('/getToPlace/:id', getToPlace)
    .get('/search-airbnb', searchAirbnb)
    .get('/search-city', searchAirbnbByCity)
    .post('/findPlaceMap', findPlaceMap)

export default router;