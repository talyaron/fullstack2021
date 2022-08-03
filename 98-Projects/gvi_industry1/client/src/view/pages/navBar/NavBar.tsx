import React ,{useEffect,useState} from "react";
import axios from "axios";
import NavBarMentee from './components/NavBarMentee';
import NavBarMentor from './components/NavBarMentor';

interface navBarProps {
    currentUserType: String;
    loggedInUser: any;
    
}

function NavBar(props: navBarProps) {
    
    const {currentUserType, loggedInUser} = props;
    
    const [profilePic , setProfilePic] = useState("")
    
    
    useEffect(() => {
        (async () => {
          const { data } = await axios.get("/api/users/get-user");
          const { user } = data;
          setProfilePic(user.image)
          
        })();
      }, []);

    return currentUserType === 'mentee' ? (
        <>
            <NavBarMentee profilePic={profilePic} loggedInUser={loggedInUser} />
        </>
    ) : (
        <>
            <NavBarMentor profilePic={profilePic} loggedInUser={loggedInUser} />
        </>
    );
}

export default NavBar;
