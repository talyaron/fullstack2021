import axios from 'axios';
import React from 'react'
import { useState } from "react";
import Popup from 'reactjs-popup';

interface MessageForm1 {
    userId: any
  
  }
const MessageForm1 = ( props: any) => {
    
        const { userId } = props;

    // const[messageText,setMessageText]=useState("");

    async function handleSubmitForm(ev: any) {
        ev.preventDefault();
    
         const message = ev.target.elements.message.value;
          
        // console.log(message);
        
           const {data}=  await axios.post("/api/users/requested-messages", { userId ,message}) 
           console.log(data)
           ev.target.reset();
    }

    async function handleSendReq(selectedUserId: any) { 
    
      const {data}= await axios.post("/api/users/requested-users", { selectedUserId }) 
      console.log(data);
    }
      return (
        <div>
          <form >
            


          </form>
          
          
          
          <form  onSubmit={handleSubmitForm}>
            
          <label>
       Select a reason for rejecting the request:
       <select>
           <option value="1">Busy</option>
           <option value="2">Not in my proffesional scope</option>
           <option value="3">On vacation till 2023</option>
       </select>
   </label>

           <h5>You can add a short message (optional) </h5>
            <input  type="text" name="message" placeholder="Text here " />

            
              <button  onClick={() => handleSendReq(userId)} type="submit">Submit</button>

            
          </form>
        </div>
        
      )
    }
    
    
 
  //  <button onClick={() => handleSendReq(user._id)} className='matching__wrapper_card_footer_request'>Send Request</button>

    
    
export default MessageForm1


