import { Link } from "react-router-dom";

interface ProfileBoxProps{
    _id: string;
    name:string,
    age:string,
    gender:string,
    profileImg:string,
    description:string,
    chosenUserId:string
    setchosenUserId:Function
}

const ProfileBox = (props:ProfileBoxProps)=>{
    const {_id,name,age,gender,profileImg,description,chosenUserId,setchosenUserId} = props;
    setchosenUserId(_id)
    return(
        <div className="ProfileBox" style={{backgroundImage:`url(${profileImg})`}}>
            {/* <img src={profileImg} /> */}
            <Link to='/navBar/:id/:profilesId'>user page</Link>
            
            <p className="ProfileBox__name">{name}</p>
            <div className="ProfileBox__age">{age}</div>
            <div className="ProfileBox__gender">{gender}</div>
            <div className="ProfileBox__name">{description}</div>
        </div>
    )
}
export default ProfileBox