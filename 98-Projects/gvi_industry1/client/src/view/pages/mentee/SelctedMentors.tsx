import React from "react";
import { useParams } from "react-router-dom";
import "../mentee/style/selectedPage.scss";
import Card from "./Card";

function SelctedMentors() {
    const {selectedUserId} = useParams();
    console.log(selectedUserId)
  return (
    <div className="selectedPage">
      <h5>Selcted-Mentors</h5>
      <div className="selectedPage__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SelctedMentors;
