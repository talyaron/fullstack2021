import mongoose from 'mongoose'
import {Sector, FieldsOfKnowledge} from '../Models/userModel'



const MatchingFiltersSchema = new mongoose.Schema({
    sectors: [String],
    specialties:[String],
    countries: [String],
    typesOfMentoring: {
      UX : String,
      BUSINESS_DEVELOPMENT :String
    }
})


//   const MatchingModel = mongoose.model('matchings', MatchingFiltersSchema);
//   export default MatchingModel;