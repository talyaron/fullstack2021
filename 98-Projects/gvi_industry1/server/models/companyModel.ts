import mongoose from 'mongoose'

export const companySchema= new mongoose.Schema({
    userId:String, ////
    name:String, ///////
    sector:String, ///////
    stage:String, /////
    description:String, /////
    linkToOnePager:String, ////////
    website:String, /////
    presentations:String /////
})

const CompanyModel = mongoose.model('companies', companySchema);
  export default CompanyModel;