import UserModel from "../models/userModel";
import CompanyModel from "../models/companyModel";

export async function getUser(req, res) {
  try {
    const result = await UserModel.find({});
    res.send({ ok: true, result });
    console.log(result);
    // console.log(data);
 
  }
  catch{
    
  }
}

