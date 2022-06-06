import {Link,Outlet,useParams} from 'react-router-dom';
import axios from 'axios';
// import ProfileIcon from '../Components/ProfileIcon';

function NavBar(){
const {id} = useParams();
console.log(id);

// const {data}= axios.get(`/api/getLoginUser?id=${id}`);

    return(
    <div className="navBar">

        <h1>navBar : {id}</h1>
        
        <Link to='/navBar/${id}'>
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