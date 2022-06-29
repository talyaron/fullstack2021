import { FieldsOfKnowledge,Stage,Sector,NameSchema } from "../models/userModel";
import UserModel from '../models/userModel';
import axios from "axios";

export const addUser = async (req,res)=>{
    try{
        const {user} = req.body;
        console.log(user);
        

        // const newUser= new UserModel(user);
        // console.log(newUser);
        
        
        

        
    }catch(err){
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}


