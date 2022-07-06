import mongoose from 'mongoose'

export const companySchema= new mongoose.Schema({
    userId:String,
    company:String
})

const CompanyModel = mongoose.model('companies', companySchema);
  export default CompanyModel;