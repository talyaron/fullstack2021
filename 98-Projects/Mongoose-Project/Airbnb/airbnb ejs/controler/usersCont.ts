import Users from "../model/usersModel";




export  const login= async (req,res)=>{
    try{
        
        const {userName,password,role}=req.body;
        if(typeof userName==="string" && typeof password==="string" && typeof role==="string"){
            const user=await Users.findOne({userName,password,role});
            if(user.password===password){
                res.cookie('userInfo',{userName,id:user._id,role},{maxAge:120000});
                res.render('owner', {
                    title:"Owner",
                    user
                })
               
               
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
        
       const {userInfo}=req.cookies;
       if(userInfo&&userInfo.role==="admin"){
           const users=await Users.find({});
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