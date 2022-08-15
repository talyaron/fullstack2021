
interface NameAndProProps{
    userName:any;
    userSector:String;
}


function NameAndPro (props:NameAndProProps) {

    const {userName,userSector} = props;
    
    return (
        <>
        {userName.first || userName.last?<h1 style={{marginTop:'-5px'}}>{userName.first} {userName.last}</h1>:
        <h1 style={{marginTop:'-5px'}}>user name</h1>}
        {userSector?<h2 style={{fontSize:'25px',margin:'-5px 0 0 10px'}}>{userSector}</h2>:
        <h2 style={{fontSize:'25px',marginTop:'-5px'}}>sector not found</h2>}
        
        </>
    )
  
}

export default NameAndPro