import Users from "../model/usersModel";
import jwt from "jwt-simple";
const secret=process.env.JWT_SECRET



export  const login= async (req,res)=>{
    try{
        const {username,password,role}=req.body;
        if(typeof username==="string" && typeof password==="string" && typeof role==="string"){
            const user=await Users.findOne({username,password,role});
            if(user){
                if(user.password===password){
                    const payload={username,id:user._id,role};
                    const token=jwt.encode(payload,secret);
    
    
                    res.cookie('userInfo',token,{maxAge:120000,httpOnly:true});
                   res.send({ok:true,login:true})
                   
                    return

                  
                
                }
            }
            
            
            throw new Error('username or password or role are incorrect');
           
            
        }else{
           throw new Error("username or password or role is missing")
        }
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}

export  const registerUser= async (req,res)=>{
    try{
        
        let{username,password,role}=req.body;
        if(typeof username==="string" && typeof password==="string" && typeof role==="string"){
            const newUser=new Users({username,password,role});
            const result=await newUser.save()
            res.send({ok:true,register:true})
        }
       
       
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}



export  const getUsers= async (req,res)=>{
    try{
        console.log(req.cookies);
       const {userInfo}=req.cookies;
       const decoded=jwt.decode(userInfo,secret);
       console.log(decoded);
       if(decoded&&decoded.role==="admin"){
           const users=await Users.find({});
           res.send({ok:true, users})
       
           
           return          
          
           
        }         
       throw new Error("user is not allowed ")
        
    }catch(error){

        console.log("error on getUsers",error.message)
        res.send({error:error.message})
    }
    
}

export  const updateUser= async (req,res)=>{
    try{
        const{userId,username}=req.body
        if(username&&userId){
            const users= await Users.updateOne({_id:userId},{username:username});
            res.send({ok:true,users})

        }else{
            throw new Error("username or userId  is missing")
        }
     

      
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}

export  const deleteUser= async (req,res)=>{
    try{
        const{userId}=req.body
        if(userId){
            const users= await Users.deleteOne({_id:userId});
            res.send({ok:true,users})

        }else{
            throw new Error(" userId  is missing")
        }
     

      
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}