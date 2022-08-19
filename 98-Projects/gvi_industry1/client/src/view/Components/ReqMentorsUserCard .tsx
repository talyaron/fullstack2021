//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import "../styles/card.scss";

import Popup from 'reactjs-popup';
import {useState,useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Form1 from "./Form1"


interface CardReqProps {
  requestUsers: any;
  type:any;
}

const ReqUserCard = (props: CardReqProps) => {

  const { requestUsers,type } = props;
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

         

          <div className='btn'>
          
                              
                <button onClick={()=>{{navigate('/mainPage/chat')}{handleAnsReq(selectedUser._id)}}}>
                  
                  
                  Start Mentoring</button>):

              
                  
                  <button onClick={()=>{{navigate('/mainPage/chat')}{handleAnsReq(selectedUser._id)}}}>
                  
                  
                  Lets talk</button>

                <button   onClick={() => { setDisplay("block"); }}>Send req</button>
                {/* <button onClick={()=>{{navigate('/components/Form1')}{handleAnsReq(selectedUser._id)}}}>Mismatch</button> */}

                <div  style={{ display: display, position: "absolute", top: "50" }}>
                <form onSubmit={handleSubmitForm}>
           
           <input type="text" name="message" placeholder="Text here " />
             <button  onClick={() => {{handleAnsReq(selectedUser._id)}{handleMessageReq(selectedUser._id,message)}}} type="submit">Submit</button>

           
         </form>
      
      </div>


              </div>
        </div>

        
      )
      }
    </>
  );
};

export default ReqUserCard;
