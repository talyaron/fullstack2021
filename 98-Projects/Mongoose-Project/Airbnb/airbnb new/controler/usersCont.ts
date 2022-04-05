import Users from "../model/usersModel";
import Places from "../model/usersModel";

// export async function getUsers(req,res){
//     try{
//         const {userInfo}=req.cookies;
//         if(userInfo)

//     }
// }

export  const login= async (req,res)=>{
    try{
        
        const {userName,password,role}=req.body;
        if(typeof userName==="string" && typeof password==="string" && typeof role==="string"){
            const user=await Users.findOne({userName,password,role});
            if(user.password===password){
                res.cookie('userInfo',{userName,id:user._id,role},{maxAge:120000});
                res.send({ok:true,login:true})
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
        
        let {newUserName,newPassword,newRole}=req.body;
       
        const newUser=new Users({newUserName,newPassword,newRole});
        const result=await newUser.save()
        res.send({result})
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}