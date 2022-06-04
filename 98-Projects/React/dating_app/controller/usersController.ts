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
export const getUsersProfile= async(req,res)=>{
  try{
    const {ProfilesId}=req.params;
    console.log(ProfilesId);
    
    const ProfileId = await Users.findById(ProfilesId)
    console.log(ProfileId);
    
    res.send({ProfileId,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }

}
export const updateUser = async(req, res)=>{
  try {
    const { ProfilesId, name, age, gender, profileImg, description, password, username,img1, img2} = req.body;
    if (ProfilesId) {
      const users = await Users.updateOne({_id:ProfilesId})
      res.send({ ok: true, users });
    } else {
      throw new Error("ProfilesId or role is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}