import Users from "../model/usersModel";
import jwt from "jwt-simple";


const secret=process.env.JWT_SECRET

export  const login= async (req,res)=>{
    try{
        const {userName,password,role}=req.body;
        if(typeof userName==="string" && typeof password==="string" && typeof role==="string"){
            const user=await Users.findOne({userName,password,role});
            if(user.password===password){
                const payload={userName,id:user._id,role};
                const token=jwt.encode(payload,secret);


                res.cookie('userInfo',token,{maxAge:120000});
               
              if(user.role == "host" || user.role == "guest") {
                   res.render('./index', {
                    title:"Airbnb",
                   user
                })
              }
              else if(user.role == "admin"){
                   res.render('owner', {
                    title:"Owner",
                    user
                })
              }
               
                return
                
            
            }
            throw new Error('userName or password or role are incorrect');
        }else{
           throw new Error("userName or password or role is missing")
        }
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}

export  const registerUser= async (req,res)=>{
    try{
        
        let{userName,password,role}=req.body;
       
        const newUser=new Users({userName,password,role});
        const result=await newUser.save()
        res.send({ok:true,register:true})
       
        
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
           res.render('owner', {
            title:"Owner",
            users
        })
           
           return          
          
           
        }         
       throw new Error("user is not allowed ")
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}