import { useEffect, useState } from "react";

import "../styles/request.scss";
// import StarIcon from "@mui/icons-material/Star";
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

//============================================================================================

async function handleRequestForm(ev: any) {
  ev.preventDefault()
  try {
      const first = ev.target.elements.first.value;
      const last = ev.target.elements.last.value;
      //const password = ev.target.elements.password.value;
      //const email = ev.target.elements.email.value;
      //const phone = ev.target.elements.phone.value;
      //const linkedInProfile = ev.target.elements.linkedInProfile.value;
      const country = ev.target.elements.country.value;
      const FieldsOfKnowledged = ev.target.elements.FieldsOfKnowledged.value;
      //const stage = ev.target.elements.startupStage.value;
      const sector = ev.target.elements.sector.value;
      const description = ev.target.elements.description.value;
      // const profilePic = ev.target.elements.profilePic.value;
      //const image = profilePic;
      const type = 'mentor';
      const name = { first, last };


      const requestUser = { name, description, country, sector, FieldsOfKnowledged, type };


      const userData = await axios.post('/api/users/add-user', { requestUser });
      console.log(userData);
      
      // Already exists CHECK
      if (userData.data === 'Already exists') {
          window.alert('Already Exists')
      }


  } catch (error) {
      console.error(error);
  }

}











//==============================================================================================








  return (
    <div>from Mentee</div>
    // <div className="selectedPage">
    //   <h5 className="selectedPage__title"></h5>
    //   <div className="selectedPage__wrapper"> <RequestCard requestUsers={requestUsers} /></div>
    // </div>
  );
}

export default Request;