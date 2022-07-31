import { useEffect, useState } from "react";

import "../styles/request.scss";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios"
<<<<<<< HEAD:98-Projects/gvi_industry1/client/src/view/Components/Request.tsx
import SelectedUserCard from './SelectedUserCard';
import RequestCard from "./RequestCard";
const Request = () => {
=======
import Card from ".client/src/view/components/s";
import React from 'react'``
import renderer from 'react-test-renderer';

import SelctedMentors from '';

describe('<SelctedMentors />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<SelctedMentors {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})";



const SelctedMentors = () => {
>>>>>>> origin:98-Projects/gvi_industry1/client/src/view/pages/mentee/SelctedMentors.tsx

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