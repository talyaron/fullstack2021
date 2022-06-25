import mongoose from "mongoose";
import InitiativeModel, { InitiativeSchema } from "./initiativeModel";
import company, { companySchema } from "./companyModel";
// interface Name {
//     first: string;
//     last: string;
//   }

// export enum FieldsOfKnowledge {
//   UX = "ux",
//   BUSINESS_DEVELOPMENT = "devlopment",
// }

// export enum Stage {
//   FFF = "friends and family",
//   PRE_SEED = "pre-seed",
//   SEED = "seed",
//   ROUND_A = "round a",
//   ROUND_ABOVE = "round b and above",
// }


  // export enum UserType {
  //   ADMIN = "admin",
  //   MENTEE = "mentee",
  //   MENTOR = "mentor",
  // }
  export const NameSchema = new mongoose.Schema({
    first:String,
    last: String
  })
  // export enum Sector {
  //   EDUCATION = "eduction",
  //   DIGITAL_HEALTH = "digital health",
  // }


const UserSchema = new mongoose.Schema({

    _id: String,
    name: NameSchema,
    description: String,
    image: String,
    email: String,
    country: String,
    lastEntry: Date,
    companies: companySchema,
    linkedInProfile: String,
    phone: Number,
    initiatives: InitiativeSchema,
    password: String,
    type: String,
    fieldsOfKnowledge: String,
    sectors:String,
    profession:String
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;