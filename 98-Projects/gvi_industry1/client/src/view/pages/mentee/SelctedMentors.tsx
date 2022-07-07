import React from "react";
import "../mentee/style/selectedPage.scss";
import SelectedMentor from "./SelectedMentor";
import Card from "./SelectedMentor";
import StarIcon from "@mui/icons-material/Star";

function SelctedMentors() {
  return (
    <div className="selectedPage">
      <h5 className="selectedPage__title">Selcted-Mentors <StarIcon/></h5>
      <div className="selectedPage__wrapper">
        <SelectedMentor />
        <SelectedMentor />
        <SelectedMentor />
        <SelectedMentor />
        <SelectedMentor />
        <SelectedMentor />
      </div>
    </div>
  );
}

export default SelctedMentors;
