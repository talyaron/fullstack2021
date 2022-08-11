import mongoose from "mongoose";



  
  

export const messageSchema = new mongoose.Schema({
    text: String,
    
    
   
    
});

const Message = mongoose.model('messages', messageSchema);
export default Message;