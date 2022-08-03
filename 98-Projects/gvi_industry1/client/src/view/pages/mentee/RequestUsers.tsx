import { useEffect, useState } from "react";
import "../mentee/style/requestPage.scss";
import axios from "axios"
import CardReq from "./CardReq";
const RequestUsers = () => {

  const [RequestUsers, setRequestUsers] = useState([]);
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
    <div className="requestPage">
      <h5 className="requestPage__title"> Request-{type} </h5>
      <div className="requestPage__wrapper">
        <CardReq RequestUsers={RequestUsers} />
      </div>
    </div>
  );
}

export default RequestUsers;