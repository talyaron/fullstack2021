import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  _id: string;
  name: string;
  age: string;
  gender: string;
  profileImg: string;
  description: string;
  password: string;
  username: string;
  img1: string;
  img2: string;
}

const Profile = () => {
  const { ProfilesId } = useParams();
  const [ yourProfile, setYoureProfile]  = useState<any>(null);
const [form, setForm] = useState(false)
  useEffect(() => {
    //get data on the icecream and show the chosen ice cream by id

    (async () => {
      try {
        const { data } = await axios.get(`/api/${ProfilesId}`);

        const { profileId } = data;
        console.log(profileId);
        if (!profileId) {
          throw new Error("no profile");
        }
        setYoureProfile(profileId);
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, []);

  function handleEdit(ev:any){
    
    if(ev){
        setForm(true)
    }
  }
function handleSumbit(ev:any, profilesId:any){
    (async () => {
    console.log(ev, ProfilesId)
  
    const {data} = await axios.patch('/updateUsers', {ProfilesId});
    console.log(data)
})();
}
  return (
    <div className="body">
      <h2>
        {yourProfile && yourProfile.username ? yourProfile.username : null}
      </h2>

      <div className="grid">
        <img className="big" src={yourProfile && yourProfile.profileImg ? yourProfile.profileImg : null} alt="" />
        <img className="smallL" src={yourProfile && yourProfile.img1 ? yourProfile.img1 : null} alt="" />
        <img className="smallR" src={yourProfile && yourProfile.img2 ? yourProfile.img2 : null} alt="" />
      </div>
      <div className="more">
        <p>{yourProfile && yourProfile.name ? yourProfile.name : null}</p>
        <p>{yourProfile && yourProfile.age ? yourProfile.age : null}</p>
        <p>{yourProfile && yourProfile.gender ? yourProfile.gender : null}</p>
        <p>{yourProfile && yourProfile.description ? yourProfile.description: null}
        </p>
      </div>
      <button onClick={()=>handleEdit(Event)}>Edit Profile</button>
      <form className={form?'closed':'form open'} onClick={()=>handleSumbit(Event, ProfilesId)}>
        <input type="text" name="name" id="" placeholder="enter your new name" />
        <input type="text" name="age" id="" placeholder="enter your new age" />
        <input type="text"  name="gender" id="" placeholder="enter your new gender"/>
        <input type="text" name="profileImg" id="" placeholder="enter your new profile img" />
        <input type="text" name="description" id="" placeholder="enter your new description"/>
        <input type="text" name="password" id="" placeholder="enter your new password" />
        <input type="text" name="username" id="" placeholder="enter your new username" />
        <input type="text" name="img1" id="" placeholder="enter your first new img"/>
        <input type="text" name="img2" id="" placeholder="enter your second new img"/>
        <input type="submit" value="Edit" />
      </form>
      <Outlet/>
    </div>
  );
};

export default Profile;
