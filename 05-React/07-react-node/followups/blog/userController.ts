import { UserModel } from "../models/User"

//the res.send funcion sends an HTML response










//============================================================================================//
export async function getUser(req, res){
    try {
      
        const users = await UserModel.find({});

     
        res.send({users})
    } catch (error) {
        console.error(error)
        res.send({error:error.message})
    }
}


export async function addUser(req, res){
    try {
      const {name} = req.body;
      

      if(!name) throw new Error('name is needed')

      const newUser = new UserModel({name});
      await newUser.save();
     
        res.send({ok:true})
    } catch (error) {
        console.error(error)
        res.send({error:error.message})
    }
}