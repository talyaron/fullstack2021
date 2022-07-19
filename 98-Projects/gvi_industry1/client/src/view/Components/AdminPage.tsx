import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AdminPage() {
  const [users, setUsersList] = useState([]);
  const [userType, setUserType] = useState("mentee");
  const [searchTerm, setSearchTerm] = useState("");
  const [changeColorMentor, setChangeColorMentee] = useState(true);
  const [changeColorMentee, setChangeColorMentor] = useState(false);
 
  useEffect(() => {
    (async () => {
     

      const { data } = await axios.get("/api/users/admin-getAllUsers");
      const { allUsers } = data;

      const typeOfUser = allUsers.filter(
        (types: any) => types.type === userType
      );

      setUsersList(typeOfUser);

      console.log(userType);
      console.log(users);
    })();
  }, [userType,searchTerm]);

  function handleMantee() {
    setUserType("mentee");
    setChangeColorMentee(true);
    setChangeColorMentor(false);
  }
  function handleMentor() {
    setUserType("mentor");
    setChangeColorMentee(false);
    setChangeColorMentor(true);
  }


 
  return (
    <div>
      <h1>hello admin</h1>
      <div className="usersOverView">
        <div className="allConect">
          <div className="allConectBtn">
            <button
              className={changeColorMentee ? "btnUnder" : "clicked"}
              onClick={() => handleMantee()}
            >
              Entreprenuers
            </button>{" "}
            <button
              className={changeColorMentor ? "btnUnder" : "clicked"}
              onClick={() => handleMentor()}
            >
              Mentors
            </button>{" "}
          </div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type Full Name..."
            onChange={(ev) =>{ setSearchTerm(ev.target.value)}} 
          />
        </div>
        <div>
        
          {users&& users.filter((user:any)=>{
            if (searchTerm === '') {
              console.log('im in the if')
              return users
          } else if (user.email.toLowerCase().includes(searchTerm.toLowerCase())) {
            console.log('im in else if')
              return user
              
          }else{
            return null
          }
          }).map((user: any, i: any) => (
            <div className="allConect" key={i}>
              {/* <img src={mentor.image}/>  */}

              <p>
                {user.name ? user.name.first : null}{" "}
                {user.name ? user.name.last : null}
                {user.email}
              </p>
              <Link className="link" to="chat">
                See all connections
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
