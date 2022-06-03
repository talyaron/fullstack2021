import Users from '../models/usersModel'


export const getUsers= async(req,res)=>{
    try {
        const users = await Users.find({});
        console.log(Users);
        
        
        
        res.send({ ok: true, users });
      } catch (error) {
        console.error(error);
        res.send({ error: "error in app.get/getPlaces" });
      }

}