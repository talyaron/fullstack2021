import requestMessageModel from "../models/requestMessageModel";
const secret = process.env.JWT_SECRET;

import JWT from "jwt-simple";
<<<<<<< HEAD
import axios from 'axios'
=======
import axios from "axios";
>>>>>>> Yae_Will
import UserModel from "../models/userModel";

//======================================================================================
export const requestMessage = async (req: any, res: any) => {
    try {
      const { userInfo } = req.cookies;
      const payload = JWT.decode(userInfo, secret);
      const senderUserId = payload.id;
  
      const { recipientUserId,textMessage } = req.body;

    //   const recipient = await UserModel.findById(recipientUserId);
    //   if (!recipient) throw new Error("couldnt find the user in the DB");
  
    //   const { email, name, image } = recipient;

    //   const selectedUser = await UserModel.findById(selectedUserId);
    //   if (!selectedUser) throw new Error("couldnt find the user in the DB");
  
    //   const { email, name, image } = selectedUser;

    let newReqMessage: any;
      
    
        const newRequestMessagesDB = new requestMessageModel({
            sender: senderUserId,
            recipient: recipientUserId,
            text: textMessage ,
        
        });
        newReqMessage = await newRequestMessagesDB.save();
  
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
  
      res.send({ success: true, selection: newReqMessage });
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  };
  
  
  
  //======================================================================================//