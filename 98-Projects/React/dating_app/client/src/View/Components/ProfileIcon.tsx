interface ProfileIconProps{
    profileImg:string,
   
}

const ProfileIcon = (props:ProfileIconProps)=>{
    const {profileImg} = props;
    return(
        <div className="ProfileIcon" style={{backgroundImage:`url(${profileImg})`}}>
          
        </div>
    )
}
export default ProfileIcon