import Message from "../models/chatModel";




export  const addMessage= async (req,res)=>{
    try{
        
        let{text}=req.body;
        
            const newMessage=new Message({text});
            const result=await newMessage.save();
       
       
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}

export  const deleteMessage= async (req,res)=>{
    try{
        
        const{id}=req.body
        if(id){
            const users= await Message.deleteOne({_id:id});
            // res.send({ok:true,users})

        }else{
            throw new Error(" userId  is missing")
        }
       
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}



export  const getMessages= async (req,res)=>{
    try{
        
        const messages=await Message.find({});
        console.log(messages)
       
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}