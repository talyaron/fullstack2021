import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
  const [users, setUsersList] = useState([]);
  const [userType,setUserType]=useState("mentor")
  // const [theType,setTheType]=useState("")
  useEffect(() => {
    (async () => {
      // const { data } = await axios.post("/api/users/admin-getMentors",{type:{theType}});
      // const { allMentors } = data;
      // setMentorList(allMentors);
      // setTheType("mentor")
      // console.log(allMentors);
      
      const { data } = await axios.get("/api/users/admin-getAllUsers");
      const { allUsers } = data;
      
      const typeMentor=allUsers.filter((types:any)=>types.type===userType)
    
      setUsersList(typeMentor)
      
      
      console.log(users);
    })();
  }, [userType]);

  return (
    <div>
      <h1>hi</h1>
      <div className="usersOverView">
      

        <div> <button onClick={()=>{setUserType("mentee")}}>Entreprenuers</button> <button onClick={()=>{setUserType("mentor")}}>Mentors</button> </div>
       <div>
       {users.map((user: any, i:any) =>
                <div key={i} >
                  {/* <img src={mentor.image}/>  */}
                  <p>{user.name.first} {user.name.last}</p>
                  <button>See all connections</button>
                    
                    
                </div>
            )}
       </div>
      

       
      </div>
    </div>
  );
}

export default AdminPage;
