const cloudinary = require('./uploads/cloudinary')
import UserModel from "../models/userModel";
import JWT from "jwt-simple";


export async function changePofilePic(req, res) {

    try {
      
      const {userId , profileImg} = req.body
  
      const result = await cloudinary.uploader.upload(profileImg,{
        folder:"imgs",  
      })
  
    //   const user = UserModel.findById(userId)
       
      res.send({  ok: true ,result});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }