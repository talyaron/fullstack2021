import { Link } from "react-router-dom";


interface ProfileBoxProps{
    userProfile: string;
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    username:string,
    setLikedProfiles:Function,
    likedProfiles:Array<user>,
    arr:Array<user>,
    SetArr:Function    
    
}
interface user{
    _id: string,
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
    const {userProfile,name,age,gender,profileImg,username,setLikedProfiles,likedProfiles,arr,SetArr} = props;
    function handleLiked(ev:any){
        const likedUser={userProfile,name,age,gender,profileImg,username}
      const filteredArray= arr.filter((user)=>user._id!==userProfile)
      console.log(userProfile)
      SetArr(filteredArray)
        setLikedProfiles([...likedProfiles,likedUser])
        console.log(likedUser)
        
    }
    
    return(
        <div>
              <div className="ProfileBox" style={{backgroundImage:`url(${profileImg})`}}>
            
            <Link to={`/navBar/${userProfile}`} className="ProfileBox__linkToPage">{username}</Link>
            <div className="ProfileBox__info">
            <p className="ProfileBox__info--name">{name}</p>
            <div className="ProfileBox__info--age">{age}</div>
            <div className="ProfileBox__info--gender">{gender}</div>
            </div>
            
            
            
           
           <button onClick={handleLiked} className="liked"></button> 
            
        </div>
      
        </div>
      
    )
}
export default ProfileBox