import { read } from "fs";
import axios from 'axios'

interface ProfileImageProps{
    profileImg:any;
    setProfileImg:Function;
}

function ProfileImage(props:ProfileImageProps){

    const {profileImg,setProfileImg} = props;


    async function changeImage(ev:any){
        
        const file = ev.target.files[0];
        const Img = URL.createObjectURL(file)
        setProfileImg(Img);
        
        // const {data} = await axios.post('/api/users/changeProfileImage',{Img})
    }
    console.log(profileImg);
    

    
  
    return (
        <div className="profile_profilePic" >
        <img className="profile_profilePic-img" src={profileImg} alt="" />
     <label htmlFor="changeImage" className='profile_profilePic-changeImg'>
         <input type="file" id='changeImage'  accept="image/*" 
         onChange={changeImage}/>
     </label>
     </div>
    )
  
}
export default ProfileImage