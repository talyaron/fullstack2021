const cloudinary = require('./uploads/cloudinary')
import UserModel from "../models/userModel";
import JWT from "jwt-simple";

export async function saveImage(req, res) {

    try {
      
      const {imageFile,userId} = req.body;
      
      const result = await cloudinary.uploader.upload(imageFile,{
        folder:"imgs",
      })
      
      console.log(result);
      
      res.send({  ok: true ,result});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }


export async function changePofilePic(req, res) {

    try {

      const {userId , profileImg} = req.body
  
      const result = await cloudinary.uploader.upload(profileImg,{
        folder:"imgs",
      })

      const ImgUrl = result.url

      // const user = UserModel.findOne({_id:userId,image:ImgUrl})
      
      res.send({  ok: true ,result});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }
