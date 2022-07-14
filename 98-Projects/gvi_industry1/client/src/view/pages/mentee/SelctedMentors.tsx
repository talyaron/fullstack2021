import { useEffect, useState } from "react";
import "../mentee/style/selectedPage.scss";
import axios from "axios"
import Card from "./Card";
const SelctedMentors = () => {
 
  const [selectedUsers, setSelectedUser] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-selecteing-user");
      // console.log(data);
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users', {_id, type});
      const {mentors} = users.data;
      console.log(mentors);
      setSelectedUser(mentors);
    })();
  }, []);



  return (
    <div className="selectedPage">
      <h5 className="selectedPage__title">Selcted-Mentors</h5>
      <div className="selectedPage__wrapper">
        <Card  selectedUsers={selectedUsers}/>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
}

export default SelctedMentors;
