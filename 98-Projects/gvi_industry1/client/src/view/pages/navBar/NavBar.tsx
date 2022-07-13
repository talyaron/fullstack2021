import React from 'react'
import NavBarMentee from './components/NavBarMentee'
import NavBarMentor from './components/NavBarMentor'
import {useState, useEffect} from 'react';
import axios from 'axios';
// interface navBarProps{
//     id:String;
//     image:String;

// }
function NavBar() {
    //const{image, id} =props
    const [myMentors, setMyMentors]= useState(false);
    const [myProfile, setMyProfile]= useState(false);
    const [request, setRequest]= useState(false);
    const [mentorMatching, setMentorMatching]= useState(false);
    const [myTask, setMyTask]= useState(false);
    const [loggedInUser,setloggedInUser]=useState<any>([]);
    const [myMentee, setMyMentee]= useState(false);
    const [matching, setMatching]= useState(false);
    const [mentee, setMentee]= useState(false);
    const[mentor, setMentor]=useState(false);
   const [image, setImage]= useState("")
   const id=""
useEffect(() => {
    //get data on the user and show the chosen user by id

    (async () => {
      try {
        const { data } = await axios.post('api/users/get-LoggedIn-Profile');

        const {loggedInUserObj} = data;
        // console.log(data);
          //console.log(profileId +"profile id from navbar")
         if(data.type== "mentee"){
            setMentee(mentee)
         }else{
            if(data.type=="mentor"){
                setMentor(mentor)
            }
         }
        setloggedInUser(loggedInUserObj);
        if (!loggedInUserObj) {
          throw new Error("no profile");
        }
        
        
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, []);
  
  return (
    <div>
        <div className={mentee?"showMentee":"dontShowMentee"}>
      <NavBarMentee image={image} id={id} myProfile={myProfile} setMyProfile={setMyProfile} request={request} setRequest={setRequest} myMentors={myMentors} setMyMentors={setMyMentors} mentorMatching={mentorMatching} setMentorMatching={setMentorMatching} loggedInUser={loggedInUser} myTask={myTask} setMyTask={setMyTask}/>
      </div>
      <div className={mentor?"showMentee":"dontShowMentee"}>
      <NavBarMentor image={image} id={id} myProfile={myProfile} setMyProfile={setMyProfile} request={request} setRequest={setRequest} myMentee={myMentee} setMyMentee={setMyMentee} matching={matching} setMatching={setMatching} loggedInUser={loggedInUser}/>
         </div>
       </div>
  )
}

export default NavBar
