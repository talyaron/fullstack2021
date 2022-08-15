import mongoose from "mongoose";
import InitiativeModel, { InitiativeSchema, MentorSchema } from "./initiativeModel";
import company, { companySchema } from "./companyModel";


export const NameSchema = new mongoose.Schema({
  first: String,
  last: String,
});

export enum FieldsOfKnowledgeSchema{  
    UX="ux",
    DEVELOPMENT= "devlopment",
}


export enum StageSchema{
  FFF="fff",
  PRE_SEED="pre-seed",
  SEED="seed",
  ROUND_A="round A",
  ROUND_B_AND_ABOVE="round b and above",
}

export enum UserTypeSchema{
  MENTEE="mentee",
  ADMIN="admin",
  MENTOR="mentor"
}

export enum Sector{
  EDUCATION = 'education',
  DIGIATL_HEALTH = "digital-health"
}

export const UserSchema = new mongoose.Schema({
  name: NameSchema,
  fullName: String,
  description: String,
  city:String,
  address:String,
  image: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  country: String,
  lastEntry: Date,
  linkedInProfile: String,
  phone: String,
  // initiatives: InitiativeSchema,
  password: String,
  type: {
    type: String,
    enum:  UserTypeSchema,
    default:  UserTypeSchema.MENTEE,
  },
  mentees:[String],
  fieldsOfKnowledge: {
    type: String,
    enum: FieldsOfKnowledgeSchema,
    default: FieldsOfKnowledgeSchema.UX,
  },
  stage:String,
  sector: {
    type: String,
    enum: Sector,
    default: Sector.EDUCATION,
  },
  escortOffer:String,
  profession: String,
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
