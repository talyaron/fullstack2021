import mongoose from 'mongoose'
import {Sector} from '../../mentor-entrepreneur/InitiativeModel'

const MatchingFiltersSchema = new mongoose.Schema({
    sectors: Sector


})






interface MatchingFiltersSchema {
    specialities: Array<speciality>;
    countries: Array<country>;
    TypeOfEscorts: Array<TypeOfEscort>;
}




interface SelectedMentorsSchema {
    selctedMentors: Array<SelectedMentor>
}

interface SelectedMentor {
    userName: Name,
    _id: String,
    image: File,
    sector:string,
    company:Company
    lastEntry: Date;
    linkedInProfile: string;

}

interface Name {
    first: string;
    last: string;
}

interface Company {
    _id: string;
    name: string;
  }


  const MatchingFilters = mongoose.model('filter', MatchingFiltersSchema);
  export default MatchingFilters;