import { useEffect, useState } from "react";
import "../styles/selectedPage.scss";
import "../styles/requestPage.scss";

//@ts-ignore

import axios from "axios"
import ReqMentorsUserCard from "./ReqMentorsUserCard ";



const FromMentors = () => {

 
  const [requestedUsers, setRequestedUsers] = useState([]);

  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-mentee-mentor-requests', { _id, type });
      //const users = await axios.post('/api/users/get-menteeMentor-requests', { _id, type });
      
      if(type === 'mentee'){
        const { chosenMentors } = users.data;
        setRequestedUsers(chosenMentors);
      }

      else{
        const { chosenMentees } = users.data;
        setRequestedUsers(chosenMentees);
      }

      
    })();
  }, []);

  return (
    <div className="requestedPage">
      <h3 className="requestedPage__title"> </h3>
      <div className="requestedPage__wrapper">
        <ReqMentorsUserCard requestUsers={requestedUsers} type={type} />
      </div>
    </div>
  );
}

export default FromMentors;