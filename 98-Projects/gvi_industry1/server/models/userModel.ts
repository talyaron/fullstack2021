import mongoose from "mongoose";
import InitiativeModel, { InitiativeSchema } from "./initiativeModel";
import company, { companySchema } from "./companyModel";
import {MenteeSchema} from './initiativeModel'

export const NameSchema = new mongoose.Schema({
  first: String,
  last: String
})

export const FieldsOfKnowledgeSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['ux', 'devlopment'],
    default: 'ux'
  },
})

export const StageSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['fff', 'pre-seed', 'seed', 'round A', 'round b and above'],
    default: 'fff'
  },
})

export const UserTypeSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['mentee', 'admin', 'mentor'],
    default: 'mentee'
  },
})

export const SectorSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['eduction', 'digital health'],
    default: 'eduction'
  },
})


const UserSchema = new mongoose.Schema({
  name: NameSchema,
  description: String,
  image: String,
  email: {
    type:String,
    unique:true,
    required:true
  },
  initiatives: InitiativeSchema,
  mentees:[MenteeSchema],
  country: String,
  lastEntry: Date,
  companies: companySchema,
  linkedInProfile: String,
  phone: Number,
  password: String,
  type: UserTypeSchema,
  fieldsOfKnowledge: FieldsOfKnowledgeSchema,
  sectors: SectorSchema,
  profession: String
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;