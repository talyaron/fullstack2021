import axios from "axios";
import { useEffect } from "react";
import mongoose from "mongoose";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import "./style/card.scss";

interface CardProps {
  selectedUsers: any;
}

const Card = (props: CardProps) => {

  const { selectedUsers } = props;

  return (
    <>
    {selectedUsers.map((selectedUser: any) =>
        <div className="card" key={selectedUser[0]._id}>
          <div className="card__photo">
            <img src={`${selectedUser[0].image}`} alt="" />
          </div>
          <div className="card__center">
            {/*   */}
            <div className="card__flex">
              {/* <img src={`${selectedUser[0].country}`} alt="" /> */}
              <LinkedInIcon className="card__flex__linkdIn" style={{ fontSize: "30px" }} >
                {selectedUser[0].linkedInProfile}
              </LinkedInIcon>
            </div>
            <p className="card__company">{selectedUser[0].fieldsOfKnowledge}</p>
            <p className="card__profession">{selectedUser[0].sector}</p>
          </div>
          <div className="card__star">
            <StarIcon></StarIcon>
          </div>

        </div>
      )
    }
    </>
  );
};

export default Card;
