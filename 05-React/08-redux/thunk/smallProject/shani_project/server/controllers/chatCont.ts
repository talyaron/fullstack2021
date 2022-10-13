import Message from "../models/chatModel";
const cloudinary=require('cloudinary').v2
 



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
            const deletedMessage= await Message.deleteOne({_id:id});
           

        }else{
            throw new Error(" userId  is missing")
        }
       
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}

export  const updateMessage= async (req,res)=>{
    try{
        const {id,updatedText}=req.body
        const updatedMessage= await Message.findOneAndUpdate({_id:id},{text:updatedText});
     
      
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}



export const getMessages= async (req,res)=>{
    try{
        
        const data=await Message.find({});
        
         res.send(data)
        
               
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}

export async function saveImage(req, res) {

    try {
      
      const {img} = req.body;
      const result = await cloudinary.uploader.upload(img,{
        folder:"imgs",
        public_id:'sent image',
        resource_type: "image"
      })
      const newMessage=new Message({img});
      const imgurl=await newMessage.save();
      res.send({  ok: true ,result,imgurl});
    } catch (error) {
      console.log(error.error);
      res.send({ error: error.message });
    }
  }