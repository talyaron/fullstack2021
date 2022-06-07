import { Link } from "react-router-dom";
import { arrayBuffer } from "stream/consumers";

interface ProfileBoxProps{
    userProfile: string;
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    setLikedProfiles:Function,
    likedProfiles:Array<any>,
    arr:Array<user>,
    SetArr:Function    
 
}
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


const ProfileBox = (props:ProfileBoxProps)=>{
    const {userProfile,name,age,gender,profileImg,description,setLikedProfiles,likedProfiles,arr,SetArr} = props;
    function handleLiked(ev:any){
        const likedUser={userProfile,name,age,gender,profileImg,description}
      const filteredArray= arr.filter((user)=>user._id!==userProfile)
      console.log(userProfile)
      SetArr(filteredArray)
       console.log(arr+"filteredArr")
        setLikedProfiles([...likedProfiles,likedUser])
        console.log(userProfile)
        
    }
    
    return(
        <div>
              <div className="ProfileBox" style={{backgroundImage:`url(${profileImg})`}}>
            {/* <img src={profileImg} /> */}
            <Link to={`/navBar/${userProfile}`}>user page</Link>
            
            <p className="ProfileBox__name">{name}</p>
            <div className="ProfileBox__age">{age}</div>
            <div className="ProfileBox__gender">{gender}</div>
            <div className="ProfileBox__name">{description}</div>
            
            <button onClick={handleLiked}>like</button>
        </div>
      
        </div>
      
    )
}
export default ProfileBox