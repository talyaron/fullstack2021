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
const [form, setForm] = useState(true)
const [arr, setArr] = useState<Array<Users>>([]);
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
        setForm(false)
    }
  }
function handleSumbit(ev:any, profilesId:any){

 const name: string = ev.target.elements.name.value;
  const age: string = ev.target.elements.age.value;
 const gender: string= ev.target.elements.gender.value;
 const profileImg: string= ev.target.elements.profileImg.value;
 const description: string= ev.target.elements.description.value;
const password: string= ev.target.elements.password.value;
const  username: string= ev.target.elements.username.value;
 const img1: string= ev.target.elements.img1.value;
 const img2: string= ev.target.elements.nimg2.value;
 const obj:any = {name, age, gender, profileImg,description,password,username, img1,img2}
 setArr([...arr,obj]);

//  (async () => {
//     console.log(ev, ProfilesId)
  
//     const {data} = await axios.patch('/api/updateUsers', {ProfilesId});
//     console.log(data)
// })();
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
      <form id="form" className={form?'closed':'open'} onClick={()=>handleSumbit(Event, ProfilesId)}>
        <input type="text" name="name" id="" placeholder="enter your new name" />
        <input type="text" name="age" id="" placeholder="enter your new age" />
        <input type="text"  name="gender" id="" placeholder="enter your new gender"/>
        <input type="text" name="profileImg" id="" placeholder="enter your new profile img" />
        <input type="text" name="description" id="" placeholder="enter your new description"/>
        <input type="text" name="password" id="" placeholder="enter your new password" />
        <input type="text" name="username" id="" placeholder="enter your new username" />
        <input type="text" name="img1" id="" placeholder="enter your first new img"/>
        <input type="text" name="img2" id="" placeholder="enter your second new img"/>
        <input className="color" type="submit" value="Edit" />
      </form>
      <Outlet/>
    </div>
  );
};

export default Profile;
