import mongoose from "mongoose";

interface Name {
    first: string;
    last: string;
  }

  export enum UserType {
    ADMIN = "admin",
    MENTEE = "mentee",
    MENTOR = "mentor",
  }
 export const NameSchema=new mongoose.Schema({
  first: String,
  last: String


})

const UserSchema = new mongoose.Schema({

    _id: String,
    name: NameSchema,
    description: String,
    image: File,
    email: String,
    country: String,
    lastEntry: Date,
    companies: Array,
    linkedInProfile: String,
    phone: Number,
    initiatives: Array,
    password: String,
    type: UserType,
    fieldsOfKnowledge: Array,
    sectors:Array,
    preferedUsers: Array,
});

const users = mongoose.model('users', UserSchema);
export default users;
