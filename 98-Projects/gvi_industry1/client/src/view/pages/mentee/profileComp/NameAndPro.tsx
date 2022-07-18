
interface NameAndProProps{
    userName:any;
    userSector:String;
}


function NameAndPro (props:NameAndProProps) {

    const {userName,userSector} = props;
    console.log(userName);
    
    return (
        <>
        <h1 style={{marginTop:'-5px'}}>{userName.first} {userName.last}</h1>
        <h2 style={{fontSize:'25px',marginTop:'-5px'}}>{userSector}</h2>
        </>
    )
  
}

export default NameAndPro