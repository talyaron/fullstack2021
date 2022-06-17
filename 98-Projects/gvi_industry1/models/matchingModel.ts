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
  