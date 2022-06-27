import { FieldsOfKnowledge,Stage,Sector,NameSchema } from "../models/userModel";
import UserModel from '../models/userModel';

export const addUser = async (req,res)=>{
    try{
        const {user} = req.body.user;
        console.log(user);
        
    }catch(err){
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}


