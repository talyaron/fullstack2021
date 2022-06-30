
import UserModel from '../models/userModel'
import JWT from 'jwt-simple'

export const getMentors = async (req, res) => {

    try {
        const {selectedUser} = req.body
        const allMentors = await UserModel.find({ type: 'mentor' })
        const filterMentors = allMentors.filter((mentor) =>mentor.sectors === selectedUser.sector || mentor.country === selectedUser.country)
        console.log(filterMentors)
        res.send({ filterMentors, ok: true })

    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}
export const getUser = async (req:any, res:any) => {
    try {
        const user = await UserModel.findOne({ type: 'mentee' })
        res.send({ user })

    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }

}


const secret=process.env.JWT_SECRET

export const login= async(req,res)=>{
    try {
      const {username,password}=req.body;
    
      if(typeof username==="string" && typeof password==="string"){
       const user= await UserModel.findOne({username})
       if(user){
         //checking if password is right for the username that was put
         if(user.password===password){
              const payload={username,id:user._id,loggedInUser:true,type:user.type}
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



export const addUser = async (req,res)=>{
  try{
      const {user} = req.body;
      console.log(user);
      

      let newUser = new UserModel(user)
          const result = await newUser.save()
          console.log(newUser)
           res.send(result)

      
  }catch(err){
      console.error(err);
      res.send({ error: err.message, ok: false });
  }
}
  
