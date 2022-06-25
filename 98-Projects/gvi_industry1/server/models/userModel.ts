import mongoose from "mongoose";
// interface Name {
//     first: string;
//     last: string;
//   }

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


  export enum UserType {
    ADMIN = "admin",
    MENTEE = "mentee",
    MENTOR = "mentor",
  }
  export const NameSchema = new mongoose.Schema({
    first:String,
    last: String
  })
  export enum Sector {
    EDUCATION = "eduction",
    DIGITAL_HEALTH = "digital health",
  }


const UserSchema = new mongoose.Schema({

    _id: String,
    name: String,
    description: String,
    image: String,
    email: String,
    country: String,
    lastEntry: Date,
    companies: String,
    linkedInProfile: String,
    phone: Number,
    initiatives: String,
    password: String,
    type: String,
    fieldsOfKnowledge: String,
    sectors:String,
});


const Mentee = mongoose.model('mentees', UserSchema);
export default Mentee;