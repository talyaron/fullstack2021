import express from 'express';
const router = express.Router();

import { getToPlace } from '../controler/placesCont'
import { searchAirbnb } from '../controler/placesCont'
import {searchAirbnbByCity } from '../controler/placesCont'
import { findPlaceMap } from '../controler/placesCont'
import { getfilteredAirBNB } from '../controler/placesCont'


router
    
   
    .get('/getFiltered', getfilteredAirBNB)    
    .get('/getToPlace/:placeId', getToPlace)
    .get('/search-airbnb', searchAirbnb)
    .post('/search-city',searchAirbnbByCity )
    .post('/findPlaceMap', findPlaceMap)

export default router;