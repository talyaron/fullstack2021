import mongoose from "mongoose";

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
    name: NameSchema,
    description: String,
    // image: File,
    email: String,
    country: String,
    lastEntry: Date,
    linkedInProfile: String,
    phone: Number,
    password: String,
    type: {
      type:String,
      enum:UserType,
    },
    fieldsOfKnowledge: {
      type:String,
      enum:FieldsOfKnowledge,
    },
    sectors:{
      type:String,
      enum:Sector,
    },
    stage:{
      type:String,
      enum:Stage,
    }
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;