import {Link,Outlet,useParams} from 'react-router-dom';
import axios from 'axios';
// import ProfileIcon from '../Components/ProfileIcon';

function NavBar(){
const {userProfile} = useParams();
console.log(userProfile);



    return(
    <div className="navBar">
         
        <h1> {userProfile? userProfile:'Find love today'}</h1>
        
        <Link to={`/navBar`}>
            <button className='navBar__btn'>Home</button>
        </Link>
        <Link to='/'>
            <button className='navBar__btn'>Back to Login</button>
        </Link>
        {/* <ProfileIcon  profileImg={}/> */}
        <Outlet/>
    </div>
    
    )
}
export default NavBar;