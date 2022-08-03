import { useEffect, useState } from "react";
import "../mentee/style/selectedPage.scss";
//@ts-ignore
import StarIcon from "@mui/icons-material/Star";
import axios from "axios"
import Card from "../../components/SelectedUserCard";
const SelctedMentors = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users', { _id, type });
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
      <h5 className="selectedPage__title">Selcted-{type} <StarIcon id='star'></StarIcon> </h5>
      <div className="selectedPage__wrapper">
        <Card selectedUsers={selectedUsers} />
      </div>
    </div>
  );
}

export default SelctedMentors;