import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../mentee/style/selectedPage.scss";
import axios from "axios"
import Card from "./Card";
const SelctedMentors = () => {
  // const { id } = useParams();
  // console.log(id)
  const [selectingUserId, setSelectingUserId] = useState<String>('');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/users/get-selecteing-user");
      // console.log(data);
      const { _id } = data;
      const users = await axios.post('/api/users/get-selected-users', {_id});
      console.log(users);
      // setSelectingUserId(data);

    })();
  }, [selectingUserId]);



  return (
    <div className="selectedPage">
      <h5 className="selectedPage__title">Selcted-Mentors</h5>
      <div className="selectedPage__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SelctedMentors;
