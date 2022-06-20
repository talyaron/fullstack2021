import mongoose from 'mongoose'
import {Sector, FieldsOfKnowledge} from './userModel'

const MatchingFiltersSchema = new mongoose.Schema({
    sectors: Sector,
    specialities:FieldsOfKnowledge,
    countries: [],
    typeOfEscorts: []
})


  const MatchingFilters = mongoose.model('filter', MatchingFiltersSchema);
  export default MatchingFilters;