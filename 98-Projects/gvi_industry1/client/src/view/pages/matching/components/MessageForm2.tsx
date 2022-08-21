import axios from 'axios';
import React from 'react'
import { useState } from "react";
import Popup from 'reactjs-popup';

interface MessageForm1 {
  loggedUser: any
  
  }
const MessageForm2 = ( props:any) => {
  const {  loggedUser } = props;
  
      return (
        <h5> Hello, 
          Following our conversation, I am requesting a mentoring relationship
          Great day! 
        </h5>
        )
      }          
export default MessageForm2


