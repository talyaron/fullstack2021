import Text from "../model/textModel";

export const getText= async (req, res) => {
    try {
    

        const data = await Text.find({ });
        console.log(data);
        res.send(data)
        
    
      
    } catch (error) {
      console.error(error);
      res.send({ error: "error there's no text" });
    }
  };

export const addText=async (req, res) => {
    try{
        let {value} = req.body
        const newText = new Text({value:value});
        const result = await newText.save();
        console.log(newText);
        
       res.send({ok:true, result})
    }
          catch (error) {
       console.error(error);
       res.send({ error: "error there's no new text" });
     }
    
}
export  const updateText= async (req,res)=>{
    try{
        const{id, updateText}=req.body
        console.log(id, updateText);
        
        if(updateText){
            const newText= await Text.updateOne({_id:id},{value:updateText});
            console.log(newText);
            
           

        }else{
            throw new Error("usertext is missing")
        }
     

      
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}

export  const deleteText= async (req,res)=>{
    try{
        const{id}=req.body
        if(id){
            const data= await Text.deleteOne({_id:id});
            console.log(data);
            
      

        }else{
            throw new Error("id  is missing")
        }
     

      
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }
    
}