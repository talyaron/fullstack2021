import axios from 'axios';
import React from 'react'
import { useState } from "react";

interface MessageForm1 {
    userId: any
  
  }
const MessageForm1 = ( props: any) => {
    
        const { userId } = props;

    const[messageText,setMessageText]=useState("");

    async function handleSubmitForm(ev: any) {
        ev.preventDefault();
    
         const message = ev.target.elements.message.value;
         setMessageText(message);
          
        console.log(messageText);
    
        // const { data } = await axios.post("/add-task", formObj);
        // console.log(data);
    
        window.location.reload();
        ev.target.reset();
      }
      async function handleMessage(selectedUserId: any) 
      { await axios.post("/api/users/requested-answered", { selectedUserId ,messageText}) }

      return (
        <div>
          <form onSubmit={handleSubmitForm}>
            <input type="text" name="message" placeholder="Text here " />
            <button onClick={() => handleMessage(userId)} type="submit">Submit</button>
          </form>
        </div>
      )
    }
    
  //  <button onClick={() => handleSendReq(user._id)} className='matching__wrapper_card_footer_request'>Send Request</button>

    
    
export default MessageForm1


