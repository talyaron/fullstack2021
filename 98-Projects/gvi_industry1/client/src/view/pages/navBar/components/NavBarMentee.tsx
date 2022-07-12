import React from 'react'
import {useState, useEffect} from 'react';
import Profile from '../../mentee/Profile'
interface navBarMenteeProps{
    id:String;
    image:String;
    setRequest:Function;
    request:Boolean;
    setMyMentors:Function;
    myMentors:Boolean;
    setMentorMatching:Function;
    mentorMatching:Boolean;
    setMyTask:Function;
    myTask:Boolean;
    loggedInUser:Array<any>;
    setMyProfile:Function;
    myProfile:Boolean;

  }
function NavBarMentee(props:navBarMenteeProps) {
//     const [myMentors, setMyMentors]= useState(false);
//     const [myProfile, setMyProfile]= useState(false);
//     const [request, setRequest]= useState(false);
//     const [mentorMatching, setMentorMatching]= useState(false);
//     const [myTask, setMyTask]= useState(false);
//     const [loggedInUser,setloggedInUser]=useState<any>([]);

//     const [myMentee, setMyMentee]= useState(false);
//     const [matching, setMatching]= useState(false);

  

// useEffect(() => {
//     //get data on the user and show the chosen user by id

//     (async () => {
//       try {
//         const { data } = await axios.post('/get-all-recipients');

//         const {loggedInUserObj} = data;
//         // console.log(data);
//           //console.log(profileId +"profile id from navbar")
         
//         setloggedInUser(loggedInUserObj);
//         if (!loggedInUserObj) {
//           throw new Error("no profile");
//         }
        
        
//       } catch (err: any) {
//         console.error(err.message);
//       }
//     })();
//   }, []);

    const {image, id,setRequest,
      request,
      setMyMentors,
      myMentors,
      setMentorMatching,
      mentorMatching,
      setMyTask,
      myTask,
      loggedInUser,
      setMyProfile,
      myProfile,
  }=props;
  return (
    <div>
    <div className='navBar'>

    <div>
    <div className='navBar'>
                  
      <div className='logo'><img src="./gvi-logo.png" alt="logo" /></div>

      <div className="btn">
    <div><button onClick={() => { setRequest(!request) }}>Requests</button></div>
    <div><button onClick={() => { setMyMentors(!myMentors) }}>My Mentors</button></div>
    <div><button onClick={() => { setMentorMatching(!mentorMatching) }}>Mentor Matching</button></div>
    <div><button onClick={() => { setMyTask(!myTask) }}>100Task</button></div>
    <div className="profileIMG">
      <img src={loggedInUser && loggedInUser.image ? loggedInUser.image : null} alt="profile logo" onClick={(id) => { setMyProfile(!myProfile) }}/>
      </div>
    </div>
    </div>
  </div>
   <Profile  myProfile={myProfile} id={id}/>

      
    </div>
  </div>
  )
}

export default NavBarMentee
