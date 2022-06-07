import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, Outlet } from 'react-router-dom';
import ProfileBox from '../Components/ProfileBox';
import LikedProfile from '../Components/LikedProfile'
interface user{
    _id: string;
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    password:string,
    username:string,
    img1:string,
    img2:string,
   
}


function Home() {
   
const [arr,SetArr]=useState<Array<user>>([]);
const [likedProfiles,setLikedProfiles]=useState<Array<user>>([])
console.log(likedProfiles)

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/users')
            const { users } = data
            SetArr(users);
        })();
    }, [])

    
    
    return (
        <div className="home">
          <div className="home--profiles">
          {arr.map((user, i) => { return <ProfileBox key={i} userProfile={user._id}  arr={arr} SetArr={SetArr} name={user.name} age={user.age} gender={user.gender} profileImg={user.profileImg} description={user.description} setLikedProfiles={setLikedProfiles} likedProfiles={likedProfiles}/> })}
          </div>
          <div className="home--likedProfiles" style={{border:'black solid 2px'}}>
            {likedProfiles.map((likedUser, i) => { return <LikedProfile key={i} userProfile={likedUser._id}   name={likedUser.name} age={likedUser.age} gender={likedUser.gender} profileImg={likedUser.profileImg} description={likedUser.description}/> })}
          </div>
        </div>
    )
}
export default Home;