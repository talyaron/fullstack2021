import Users from '../models/usersModel'


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

          res.cookie('userInfo',{username,id:user._id,loggedInUser:true},{maxAge:60000})
          res.send({ok:true,login:true})
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