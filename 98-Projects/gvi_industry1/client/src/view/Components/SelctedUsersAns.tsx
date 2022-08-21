import { useEffect, useState } from "react";
import "../styles/selectedPage.scss";

import axios from "axios"
import SelectedUserCardAns from '../Components/SelectedUserCardAns';
const SelectedUsers = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users-ans', { _id, type });
      const { chosen } = users.data;
      setSelectedUsers(chosen);
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
      <div className="selectedPage__wrapper">
        <SelectedUserCardAns selectedUsers={selectedUsers} />
      </div>
    </div>
  );
}

export default SelectedUsers;