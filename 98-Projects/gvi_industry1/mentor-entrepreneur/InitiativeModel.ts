import mongoose from "mongoose";



export enum UserType {
    ADMIN = "admin",
    MENTEE = "mentee",
    MENTOR = "mentor",
}

export enum Sector {
    EDUCATION = "eduction",
    DIGITAL_HEALTH = "digital health",
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


 export const InitiativeSchema = new mongoose.Schema({


    mentee: {
        userId: String,
        name:
        {
            first: String,
            last: String
        },
    },
    image: File,
    sector: Sector,
    title: String,
    description: String,
    mentors:{
        userId: String,
        name:{first: String,last: String},
        fieldsOfKnowledge: FieldsOfKnowledge,
    },
    stage: Stage,
    website: String,
    linkToOnepager: String,
    presntations: Array,
});

const Initiative = mongoose.model('users', InitiativeSchema);
export default Initiative;