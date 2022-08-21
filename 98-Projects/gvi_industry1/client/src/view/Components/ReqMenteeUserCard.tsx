//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import "../styles/card.scss";


import Popup from 'reactjs-popup';
import {useState,useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Form1 from "./Form1"
import Example from "./Example"
import MessageForm1 from "../pages/matching/components/MessageForm1";
import MessageForm2 from "../pages/matching/components/MessageForm2";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface CardReqProps {
  requestUsers: any;
  type:any;
  loggedUser:any;
}

const ReqUserCard = (props: CardReqProps) => {

  const { requestUsers,type, loggedUser } = props;
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmitForm(ev: any) {
    ev.preventDefault();
     const message = ev.target.elements.message.value;
     setMessage(message);
      console.log(message);
          
}


async function handleMessageReq(userId: any,message:any) { 
  setMessage(message);
  console.log("message:",message);
  const {data}=  await axios.post("/api/users/requested-messages", {userId, message}) 
  console.log(data)
  
}
  

async function handleAnsReq(userId: any) { 
  
  const {data}= await axios.post("/api/users/requested-answered", { userId }) 
  console.log(data);

  
}


//===========================================
 function Example(){
   return(
    <Example/>
    )
 }  

//==============================================
  const [display, setDisplay] = useState("none"); 

  

  return (
    <>
      {requestUsers.map((selectedUser: any, i: any) =>
        <div className="card" key={i}>

          <div className="card__photo">
            <img src={selectedUser.image ? `${selectedUser.image}` : 'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png'} />
          </div>

          <div className="card__center">
            <p>{selectedUser['name']['first']} {selectedUser['name']['last']}</p>

            <div className="card__flex">
              <img src={selectedUser.country ? `${selectedUser.country}` : 'https://flagsweb.com/Flag_Colouring_Page/WEBP/Germany_Flag_Colouring_Page.webp' }/>
              <a href={selectedUser.linkedInProfile ? `${selectedUser.linkedInProfile}` : 'https://www.linkedin.com/'}>
                <LinkedInIcon className="card__flex__linkdIn" style={{ fontSize: "30px" }} ></LinkedInIcon>
              </a>
            </div>

            <p className="card__center__company">{selectedUser.fieldsOfKnowledge}</p>
            <p className="card__center__profession">{selectedUser.sector}</p>
          </div>

         

          <div className='req_aa_btns'>
                                        
                  
                  <button id="right" onClick={()=>{{navigate('/mainPage/chat')} {handleAnsReq(selectedUser._id)}}}className='req_aa_btn'>
                  
                  
                 Start Mentoring</button>

                
       <Popup className="popUp" trigger={<button id="left" onClick={() => handleAnsReq(selectedUser._id)} className='req_aa_btn'>
                  MisMatch              

                </button>} >
                 <MessageForm1  userId={selectedUser._id}/> 

        </Popup>


        <Popup className="popUp" trigger={<button id="envelope" onClick={() => {}}>
<i   className="fa fa-envelope" aria-hidden="true"></i>

                </button>} >
                  
                 <MessageForm2  loggedUser={loggedUser}/> 
                 

        </Popup>
       
          


              </div>
        </div>

        
      )
      }
    </>
  );
};

export default ReqUserCard;
