import { useEffect, useState } from "react";

import "../styles/request.scss";

import axios from "axios"

import ReqUserCardAnswer from "./ReqUserCardAnswer";
const Answered = () => {

  const [ansUsers, setAnsUsers] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
     
      const { _id,type} = data;
      
      const users = await axios.post("/api/users/get-sent-ans-users", { _id, type });
      const { chosen } = users.data;
    
      setAnsUsers(chosen);
    
      
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

    <div className="selectedPage">
      <h5 className="selectedPage__title"></h5>
      <div className="selectedPage__wrapper">
        <ReqUserCardAnswer ansUsers={ansUsers} />
      </div>
    </div>
  );
}

export default Answered;

//