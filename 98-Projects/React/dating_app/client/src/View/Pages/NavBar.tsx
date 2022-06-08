import {Link,Outlet,useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react'
// import ProfileIcon from '../Components/ProfileIcon';

function NavBar(){
const {userProfile} = useParams();
console.log(userProfile);
useEffect(() => {
    //get data on the icecream and show the chosen ice cream by id

    (async () => {
      try {
        const { data } = await axios.get(`/api/userProfile?userProfile=${userProfile}`);

        const { profileId } = data;
        // console.log(data);
          console.log(profileId +"profile id from navbar")
        if (!profileId) {
          throw new Error("no profile");
        }
    
      } catch (err: any) {
        console.error(err.message);
      }
    })();
  }, []);


    return(
    <div className="navBar">
         
        <h1> {userProfile? userProfile:'Find love today'}</h1>
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