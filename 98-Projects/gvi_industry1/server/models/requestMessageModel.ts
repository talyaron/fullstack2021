import mongoose from "mongoose";

const requestMessageSchema = new mongoose.Schema({
  
  
  sender: String,
  recipient: String,
  text: String,

});

const requestMessageModel = mongoose.model("request-message", requestMessageSchema);

export default requestMessageModel;
