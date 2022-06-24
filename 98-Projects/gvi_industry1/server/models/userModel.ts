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
  // EDUCATION = "eduction",
  //   DIGITAL_HEALTH = "digital health",
  // }


const UserSchema = new mongoose.Schema({

    // _id: String,
//     name: NameSchema,
//     description: String,
//     // TODO: find how to put file in the pace of string in "image: String,"
//     image: String,
//     email: String,
//     country: String,
//     lastEntry: Date,
//     companies: Array,
//     linkedInProfile: String,
//     phone: Number,
//     initiatives: Array,
//     password: String,
//     // type: UserType,
//     fieldsOfKnowledge: Array,
//     // sectors:Sector
userName:{
    first:String, last: String},
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;