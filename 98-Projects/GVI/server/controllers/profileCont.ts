const cloudinary = require('./uploads/cloudinary')
import UserModel from "../models/userModel";
import JWT from "jwt-simple";

export async function saveImage(req, res) {

    try {
      
      const {imageFile,userId} = req.body;
      const result = await cloudinary.uploader.upload(imageFile,{
        folder:"imgs",
      })
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

      const imgUrl = result.url
      console.log(imgUrl);
      
      await UserModel.updateOne({_id:userId},{image:imgUrl})

      res.send({  ok: true ,imgUrl});

    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }

  export async function updateMentorProf(req, res) {

    try {

      const { userId , newDetails } = req.body

      const userFound = await UserModel.findOne({_id:userId})

      if(newDetails.escortOffer) {userFound.escortOffer = newDetails.escortOffer}else{
        userFound.escortOffer = userFound.escortOffer
      }
      if(newDetails.sector) {userFound.sector = newDetails.sector}else{
        userFound.sector = userFound.sector
      }
      if(newDetails.description) {userFound.description = newDetails.description}else{
        userFound.description = userFound.description
      }
      if(newDetails.stage) {userFound.stage = newDetails.stage}else{
        userFound.stage = userFound.stage
      }

      await UserModel.updateOne({_id:userId},userFound)

      res.send({  ok: true });

    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }
  
