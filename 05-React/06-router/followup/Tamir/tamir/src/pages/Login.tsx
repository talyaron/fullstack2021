import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <img
        className="Login__img"
        src="https://www.freepnglogos.com/uploads/ice-cream-png/ice-cream-cone-png-transparent-image-pngpix-1.png"
        alt=""
      />
      <button className="Login">
        <Link to="/Flavor" className="Login__Link">
          login As Guest!
        </Link>
      </button>
    </div>
  );
};

export default Login;
