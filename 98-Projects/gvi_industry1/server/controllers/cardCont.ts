import UserModel from "../models/userModel";
export async function getUser (req,res){
    try {
        
        const data = await  UserModel.find({})
        res.send({ ok: true,data});
        console.log(data);
        

        }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }


}