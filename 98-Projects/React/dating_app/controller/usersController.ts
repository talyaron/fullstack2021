import Users from '../models/usersModel'
import JWT from 'jwt-simple'
const secret=process.env.JWT_SECRET

export const getUsers= async(req,res)=>{
    try {
        const users = await Users.find({});
        
        
        
        
        res.send({ ok: true, users });
      } catch (error) {
        console.error(error);
        res.send({error:error.message });
      }

}

export const login= async(req,res)=>{
  try {
    const {username,password}=req.body;
    console.log(username,password)
    if(typeof username==="string" && typeof password==="string"){
     const user= await Users.findOne({username})
     if(user){
       //checking if password is right for the username that was put
       if(user.password===password){
            const payload={username,id:user._id,loggedInUser:true}
            const token=JWT.encode(payload,secret)
            //made that the cookie is coded and cant be hacked into
            //we put the secret in the .env so that cant be taken either
          res.cookie('userInfo',token,{httpOnly:true})
          res.send({ok:true,login:true,user})
          return
       }
     }
     throw new Error ("username or password are incorrect")
    }else{
     throw new Error ("username or password is missing")
    }
   
    } catch (error) {
      console.error(error.message);
      res.send({error:error.message });
    }

}



export const getUsersProfile= async(req,res)=>{
  try{
    const {userProfile}=req.query;
    console.log(userProfile);
    
    const profileId = await Users.findOne({_id:userProfile})
    console.log(profileId);
    
    res.send({profileId,ok:true})
  }
  catch(error) {
    console.log(error.error);
    res.send({ error: error.message });
  }

}
export const updateUser = async(req, res)=>{
  try {
   
    const { userProfile, obj} = req.body;
    if (userProfile && obj) {
      const users = await Users.updateOne({_id:userProfile},obj)
     console.log(userProfile `update`);
     
      res.send({ ok: true, users });
    } else {
      throw new Error("profiles/id is missing");
    }
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}