import { Link } from "react-router-dom";

interface ProfileBoxProps{
    userProfile: string;
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    
 
}

const ProfileBox = (props:ProfileBoxProps)=>{
    const {userProfile,name,age,gender,profileImg,description} = props;
    
    return(
        <div className="ProfileBox" style={{backgroundImage:`url(${profileImg})`}}>
            {/* <img src={profileImg} /> */}
            <Link to={`/navBar/${userProfile}`}>user page</Link>
            
            <p className="ProfileBox__name">{name}</p>
            <div className="ProfileBox__age">{age}</div>
            <div className="ProfileBox__gender">{gender}</div>
            <div className="ProfileBox__name">{description}</div>
        </div>
    )
}
export default ProfileBox