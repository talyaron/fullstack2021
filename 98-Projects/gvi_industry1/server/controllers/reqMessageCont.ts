import requestMessageModel from "../models/requestMessageModel";
const secret = process.env.JWT_SECRET;

import JWT from "jwt-simple";


import axios from "axios";

import UserModel from "../models/userModel";

//======================================================================================
export const requestMessage = async (req: any, res: any) => {
    try {
      const { userInfo } = req.cookies;
      const payload = JWT.decode(userInfo, secret);
      const senderUserId = payload.id;
      console.log(req.body);
      const {userId ,message} = req.body;

       const recipientUser = await UserModel.findById(userId);
       console.log(recipientUser);
      if (!recipientUser) throw new Error("couldnt find the user in the DB");
  
    //   const { email, name, image } = recipient;

       const senderUser = await UserModel.findById(senderUserId);
       if (!senderUser) throw new Error("couldnt find the user in the DB");
       else{
        console.log("saving to DB")
  
    //   const { email, name, image } = selectedUser;

    // let newReqMessage: any;
      
    
        const newRequestMessagesDB = new requestMessageModel({
            sender: senderUser.name,
            recipient: recipientUser.name,
            text: message
        
        });
        const newReqMessage = await newRequestMessagesDB.save();
     
    //    const searchRecipient = {
       
    //     recipientUserId: recipientUserId,
    //   };
  
    //   const recipientUser: any = await requestMessageModel.findOne(
    //     searchRecipient
    //   );
   
    //   if (!recipientUser) {
    //     console.log("no record in DB - saving");
    //     const newRequestMessagesDB = new requestMessageModel({
    //         sender: senderUserId,
    //         recipient: recipientUserId,
    //         text: textMessage ,
        
    //     });
    //     newReqMessage = await newRequestMessagesDB.save();
    //   } else { {
    //       console.log("a record in DB");
    //       newReqMessage = await requestMessageModel.findOneAndUpdate(
    //         searchRecipient
    //       );
        
    //     }
    //   }
  
      res.send({ success: true, selection: newReqMessage }) };
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  };
  
  
  
  //======================================================================================//