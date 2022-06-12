import {Link,Outlet,useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react'


interface Users {
  _id: string;
  name: string;
  age: string;
  gender: string;
  profileImg: string;
  description: string;
  password: string;
  username: string;
  img1: string;
  img2: string;
 
}

function NavBar(){

const [loggedInUser,setloggedInUser]=useState<any>([]);


useEffect(() => {
    //get data on the user and show the chosen user by id

    (async () => {
      try {
        const { data } = await axios.post('/api/loggedInUser');

        const {loggedInUserObj} = data;
        // console.log(data);
          //console.log(profileId +"profile id from navbar")
         
        setloggedInUser(loggedInUserObj);
        if (!loggedInUserObj) {
          throw new Error("no profile");
        }
        
        
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, []);


    return(
    <div className="navBar">
         
        <div className='loggedInFlex'><h1> Hello {loggedInUser? loggedInUser.name : null}. Find love today</h1>
        <img  className="loggedInFlex__profileImg" src={loggedInUser && loggedInUser.profileImg ? loggedInUser.profileImg : null} alt="" />
        </div>
        
        <h1></h1>
        <div className='navBar__navButtons'>
        <Link to={`/navBar`}>
            <button className='navBar__btn'>Home</button>
        </Link>
        <Link to='/'>
            <button className='navBar__btn'>Back to Login</button>
        </Link>
        </div>
        
        
        <Outlet/>
    </div>
    
    )
}
export default NavBar;