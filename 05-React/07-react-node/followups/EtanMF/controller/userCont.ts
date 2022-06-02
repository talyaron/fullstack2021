import User from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const login = async (req, res) => {

    console.log(req.body);

    
}

export async function create (req, res) {

    try {
        
    } catch (error) {
        
    }
    
    console.log(req.body);

    res.send({ok: true})


}