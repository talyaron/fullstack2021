//@ts-ignore
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import "../styles/card.scss";

import Popup from 'reactjs-popup';
import { useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


interface CardReqProps {
  ansUsers: any;
}

const ReqUserCardAnswer = (props: CardReqProps) => {

  const { ansUsers } = props;
  const navigate = useNavigate();

  // async function handleAnsReq(requestUsersId: any) { 
  //   await axios.post("/api/users/requested-answered", { requestUsersId }) 
  // }



  return (
    <>
      {ansUsers.map((selectedUser: any, i: any) =>
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

         


        </div>

        
      )
      }
    </>
  );
};

export default ReqUserCardAnswer;
