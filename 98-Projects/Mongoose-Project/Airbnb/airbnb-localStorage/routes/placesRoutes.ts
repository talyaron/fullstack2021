import express from 'express';
const router = express.Router();

import { getToPlace } from '../controler/placesCont'
import { searchAirbnb } from '../controler/placesCont'
import {searchAirbnbByCity } from '../controler/placesCont'
import { getfilteredAirBNB } from '../controler/placesCont'



router
   

    .get('/getFiltered', getfilteredAirBNB)    
    .get('/getToPlace/:placeId', getToPlace)
    //gettoplace is req.param cause it goes according to its parameter given which here is the id to go to specfic page info
    .get('/search-airbnb', searchAirbnb)
    .post('/search-city',searchAirbnbByCity )
    

export default router;