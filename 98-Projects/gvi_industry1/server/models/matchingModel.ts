import mongoose from 'mongoose'
import {Sector, FieldsOfKnowledge} from '../../mentor-entrepreneur/InitiativeModel'

const MatchingFiltersSchema = new mongoose.Schema({
    sectors: Sector,
    specialities:FieldsOfKnowledge,
    countries: [],
    typeOfEscorts: []
})


  const MatchingFilters = mongoose.model('filter', MatchingFiltersSchema);
  export default MatchingFilters;