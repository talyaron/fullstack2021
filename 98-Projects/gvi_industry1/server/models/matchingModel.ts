import mongoose from 'mongoose'
import {Sector, FieldsOfKnowledge} from './userModel'

const MatchingFiltersSchema = new mongoose.Schema({
    sectors: Sector,
    specialities:FieldsOfKnowledge,
    countries: [],
    typeOfMentoring: []
})


  const MatchingModel = mongoose.model('matchings', MatchingFiltersSchema);
  export default MatchingModel;