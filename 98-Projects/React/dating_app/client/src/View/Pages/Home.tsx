import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom';
import ProfileBox from '../Components/ProfileBox';
interface user{
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    password:string,
    username:string,
    img1:string,
    img2:string
}


function Home() {
const [arr,SetArr]=useState<Array<user>>([]);


    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/users')
            const { users } = data
            SetArr(users);
        })();
    }, [])

    
    
    return (
        <div className="home">
          {arr.map((user, i) => { return <ProfileBox key={i} name={user.name} age={user.age} gender={user.gender} profileImg={user.profileImg} description={user.description}/> })}
        </div>
    )
}
export default Home;