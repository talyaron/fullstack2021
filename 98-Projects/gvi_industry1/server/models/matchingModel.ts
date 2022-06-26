interface MatchingFiltersSchema {
    sectors: Array<sector>;
    specialities: Array<speciality>;
    countries: Array<country>;
    TypeOfEscorts: Array<TypeOfEscort>;
}

interface sector {
    type: string;
    _id: string;
}

interface speciality {
    type: string;
    _id: string;
}

interface country {
    name: string;
    _id: string;
}

interface TypeOfEscort {
    type: string;
    _id: string;
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