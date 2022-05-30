import { Link, Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();


  return (
    <div className="red subpage">
      <h2>About</h2>
      <Link to="/">Home</Link>
      <Link to='/home/about/34455'>Specific user</Link>
      <button onClick={()=>{navigate('/home/about/123')}}>Go to other user (123)</button>
      <Outlet />
    </div>
  );
};

export default About;
