import { useEffect, useState } from "react";
import "../mentee/style/selectedPage.scss";
import axios from "axios"
import Card from "./Card";
const SelctedMentors = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    (async () => {

      const { data } = await axios.get("/api/users/get-selecteing-user");
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users', { _id, type });
      const { selected } = users.data;
      setSelectedUsers(selected);
    })();
  }, []);

  // async function handleAddFlag (ev:any){
  //     ev.preventDefault();
  //     const countryName = ev.target.countryName.value;
  //     const countryFlag = ev.target.countryFlag.value;
      
  //     const {data} = await axios.post('api/users/flags',{countryName, countryFlag})
  // }



  return (
    <div className="selectedPage">
      {/* <form onSubmit={handleAddFlag}>
      <input type='text' name="countryName" placeholder='country name'></input>
        <input type='text' name="countryFlag" placeholder='flag'></input>
        <input type="submit" value="submit"/>
      </form> */}
      <h5 className="selectedPage__title">Selcted-Mentors</h5>
      <div className="selectedPage__wrapper">
        <Card selectedUsers={selectedUsers} />
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