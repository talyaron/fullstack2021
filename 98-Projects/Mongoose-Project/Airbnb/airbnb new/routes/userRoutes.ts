import express from 'express';
const router = express.Router();
import {addPlaces} from '../controler/userCont'
import {getToPlace} from '../controler/userCont'
import {searchAirbnb} from '../controler/userCont'
import {findPlaceMap} from '../controler/userCont'
import {getPlaces} from '../controler/userCont'

router
.get('getPlaces', getPlaces)
.post('/addPlaces', addPlaces)
.get('/getToPlace', getToPlace)
.get('/search-airbnb', searchAirbnb)
.post('/findPlaceMap', findPlaceMap)

export default router;