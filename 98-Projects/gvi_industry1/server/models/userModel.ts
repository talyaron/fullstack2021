interface User {
  _id: string;
  name: Name;
  description: string;
  image?: File;
  email: string;
  country: string;
  lastEntry: Date;
  companies: Array<Company>;
  linkedInProfile: string;
  phone: string;
  initiatives: Array<Initiative>;
  password: string;
  type: UserType;
  fieldsOfKnowledge: Array<FieldsOfKnowledge>;
  sectors?:Array<Sector>
  preferedUsers: Array<User>;
}

//mongose schema


//Joi


interface Name {
  first: string;
  last: string;
}

interface Initiative {
  mentee: {
    userId: string;
    name: Name;
  };
  image: File;
  sector: Sector;
  title: string;
  description: string;
  mentors: Array<{
    userId: string;
    name: Name;
    fieldsOfKnowledge: FieldsOfKnowledge;
  }>;
  stage: Stage;
  website: string;
  linkToOnepager: string;
  presntations: Array<File>;
}

interface Company {
  _id: string;
  name: string;
}

export enum Sector {
  EDUCATION = "eduction",
  DIGITAL_HEALTH = "digital health",
}

export enum UserType {
  ADMIN = "admin",
  MENTEE = "mentee",
  MENTOR = "mentor",
}

export enum FieldsOfKnowledge {
  UX = "ux",
  BUSINESS_DEVELOPMENT = "devlopment",
}

export enum Stage {
  FFF = "friends and family",
  PRE_SEED = "pre-seed",
  SEED = "seed",
  ROUND_A = "round a",
  ROUND_ABOVE = "round b and above",
}


// BLABLA