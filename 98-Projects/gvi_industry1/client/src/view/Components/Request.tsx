import { useEffect, useState } from "react";

import "../styles/request.scss";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios"
import SelectedUserCard from './SelectedUserCard';
import RequestCard from "./RequestCard";
const Request = () => {

  const [requestUsers, setRequestUsers] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users', { _id, type });
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

  return (
    <div className="selectedPage">
      <h5 className="selectedPage__title">Requests-{type} </h5>
      <div className="selectedPage__wrapper">
        <RequestCard requestUsers={requestUsers} />
      </div>
    </div>
  );
}

export default Request;