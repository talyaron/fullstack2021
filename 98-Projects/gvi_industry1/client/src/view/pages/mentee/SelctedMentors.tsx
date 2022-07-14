import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../mentee/style/selectedPage.scss";
import axios from "axios"
import Card from "./Card";
const SelctedMentors = () => {
  // const { id } = useParams();
  // console.log(id)
  const [selectingUserId, setSelectingUserId] = useState<String>('');
  const [allUsersSelcted, setallUsersSelcted] = useState([]); //add user interface

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-selecteing-user");
      // console.log(data);
      const { _id, type } = data;
      const users = await axios.post('/api/users/get-selected-users', {_id,type});
      console.log(users.data.selectedUsers);
      // setSelectingUserId(data);
      setallUsersSelcted(users.data.selectedUsers)
    })();
  }, [selectingUserId]);
  



  return (
    <div className="selectedPage">
      <h5 className="selectedPage__title">Selcted-Mentors</h5>
      <div className="selectedPage__wrapper">
        {allUsersSelcted.map(user=>{
          return(
            <>
            <Card user={user}/>
            </>
          )
        })}
      
      </div>
    </div>
  );
}

export default SelctedMentors;
