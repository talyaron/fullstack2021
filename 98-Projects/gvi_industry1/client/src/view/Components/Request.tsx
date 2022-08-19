import { useEffect, useState } from "react";

import "../styles/request.scss";
import "../styles/requestPage.scss";

import StarIcon from "@mui/icons-material/Star";
import axios from "axios"
import RequestCard from "../Components/RequestCard"


import SelectedUserCard from './SelectedUserCard';

import ReqUserCardPending from "./ReqUserCardPending";
const Request = () => {

  const [requestUsers, setRequestUsers] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post("/api/users/get-sent-request-users", { _id, type });
      const { chosen } = users.data;
      setRequestUsers(chosen);
      if(type === 'mentee'){
        setType('Mentors')
      }
      else{
        setType('Entrepreneurs')
      }
    })();
  }, []);

//============================================================================================




  return (
    // <div className="requestPage">
    //   <h5 className="requestPage__title"></h5>
    //   <div className="requestPage__wrapper">
    //     <RequestCard requestUsers={requestUsers} />

    <div className="requestedPage">
      <h3 className="requestedPage__title"> </h3>
      <div className="requestedPage__wrapper">
        <ReqUserCardPending requestUsers={requestUsers} />
      </div>
    </div>
  );
}

export default Request;