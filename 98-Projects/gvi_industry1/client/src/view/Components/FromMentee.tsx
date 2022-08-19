import { useEffect, useState } from "react";
import "../styles/selectedPage.scss";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import axios from "axios"
import SelectedUserCard from './SelectedUserCard';
import ReqMenteeUserCard from "./ReqMenteeUserCard";
const FromMentee = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);
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
    <div className="selectedPage">
      <h3 className="selectedPage__title"> </h3>
      <div className="selectedPage__wrapper">
        <ReqMenteeUserCard requestUsers={requestedUsers} type={type} />
      </div>
    </div>
  );
}

export default FromMentee;