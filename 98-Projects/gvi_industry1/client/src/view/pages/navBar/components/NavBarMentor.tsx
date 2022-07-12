import React from 'react';
import {useState, useEffect} from 'react';
import Matching from '../../matching/Matching';
import Profile from '../..//mentee/Profile'

interface navBarMentorProps{
  id:String;
  image:String;
  setRequest:Function;
  request:Boolean;
  setMyMentee:Function;
  myMentee:Boolean;
  setMatching:Function;
  matching:Boolean;
  loggedInUser:any;
  setMyProfile:Function;
  myProfile:Boolean;
}

function NavBarMentor(props:navBarMentorProps) {
//   const [myMentee, setMyMentee]= useState(false);
//   const [matching, setMatching]= useState(false);
//   const [request, setRequest]= useState(false);
//   const [myProfile, setMyProfile]= useState(false);
//   const [loggedInUser,setloggedInUser]=useState<any>([]);


// useEffect(() => {
//     //get data on the user and show the chosen user by id

//     (async () => {
//       try {
//         const { data } = await axios.post('/get-all-recipients');

//         const {allUsers} = data;
//         // console.log(data);
//           //console.log(profileId +"profile id from navbar")
         
//         setloggedInUser(allUsers);
//         if (!allUsers) {
//           throw new Error("no profile");
//         }
        
        
//       } catch (err: any) {
//         console.error(err.message);
//       }
//     })();
//   }, []);


  const {image, id,setRequest,
    request,
    setMyMentee,
    myMentee,
    setMatching,
    matching,
    loggedInUser,
    setMyProfile,
    myProfile,}=props;
  return (
    <div>
      <div className='navBar'>

      <div>
      <div className='navBar'>
                    
        <div className='logo'><img src="./gvi-logo.png" alt="logo" /></div>

        <div className="btn">
      <div><button onClick={() => { setRequest(!request) }}>Requests</button></div>
      <div><button onClick={() => { setMyMentee(!myMentee) }}>My Mentees</button></div>
      <div><button onClick={() => { setMatching(!matching) }}>Matching</button></div>
      <div className="profileIMG">
        <img src={loggedInUser && loggedInUser.image ? loggedInUser.image : null} alt="profile logo" onClick={(id) => { setMyProfile(!myProfile) }}/>
        </div>
      </div>
      </div>
    </div>
     <Profile  myProfile={myProfile} id={id}/>
     <Matching matching={matching}/>
        
      </div>
    </div>
  )
}

export default NavBarMentor
