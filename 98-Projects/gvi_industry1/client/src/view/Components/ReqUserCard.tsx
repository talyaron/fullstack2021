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
  requestUsers: any;
}

const ReqUserCard = (props: CardReqProps) => {

  const { requestUsers } = props;
  const navigate = useNavigate();

  async function handleAnsReq(requestUsersId: any) { 
    await axios.post("/api/users/requested-answered", { requestUsersId }) 
  }



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

         

          <div className='matching-card-buttons-flex'>
                {/* <button onClick={()=> window.open("someLink", "_blank")}>text</button> */}
                <Popup trigger={<button className='matching-card-flex__mismatch' >Mismatch</button>} position="right center">
               
                  <div>
                    <form>
                        <label>
                            Select a reason for rejecting the request:
                              <input type="text" name="name" /><br></br>
                      </label>
                      <label>       
                            You can add a short message(optional):
                              <input type="text" name="name" placeholder='(Up to 50 characters)' />
                      </label>
                                <input type="submit" value="Submit" />
                    </form>                           
                  </div>
                </Popup>
               

                {/* <td onClick={()=> window.open("someLink", "_blank")}>text</td> */}

                <button onClick={()=>{{navigate('/mainPage/chat')}{handleAnsReq(selectedUser._id)}}}>Start Mentoring</button>
                {/* <button onClick={()=>}>Mismatch</button> */}



                

              </div>

        </div>

        
      )
      }
    </>
  );
};

export default ReqUserCard;
