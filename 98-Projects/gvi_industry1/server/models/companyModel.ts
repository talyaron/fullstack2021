import mongoose from 'mongoose'
export const companySchema= new mongoose.Schema({
    userId:String,
    company:String
})

const company = mongoose.model('company', companySchema);
  export default company;