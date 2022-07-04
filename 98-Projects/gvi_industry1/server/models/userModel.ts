import mongoose from "mongoose";
import InitiativeModel, { InitiativeSchema } from "./initiativeModel";
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

const UserSchema = new mongoose.Schema({
  name: NameSchema,
  fullName: String,
  description: String,
  image: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  country: String,
  lastEntry: Date,
  companies: companySchema,
  linkedInProfile: String,
  phone: String,
  initiatives: InitiativeSchema,
  password: String,
  type: {
    type: String,
    enum:  UserTypeSchema,
    default:  UserTypeSchema.MENTEE,
  },
  fieldsOfKnowledge: {
    type: String,
    enum: FieldsOfKnowledgeSchema,
    default: FieldsOfKnowledgeSchema.UX,
  },
  sector: {
    type: String,
    enum: Sector,
    default: Sector.EDUCATION,
  },
  profession: String,
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
