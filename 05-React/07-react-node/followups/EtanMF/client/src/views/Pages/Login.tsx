import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

interface LoginProps {
  handleLogin: Function;
  handleCreate: Function;
}

function Login(props: LoginProps) {
  const { handleLogin, handleCreate } = props;

  return (
    <motion.div className="wrapper"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>

      <div className="wrapper__Login">

        <form onSubmit={(event) => handleLogin(event)} className="form-login">
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <input type="submit" value="Login" />
        </form>



        <form onSubmit={(event) => handleCreate(event)} className="form-register">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="last name" />
          <input type="password" name="password" placeholder="password" />
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="workSpace" placeholder="workSpace" />
          <input type="text" name="position" placeholder="position" />
          <input type="submit" value="Create" />
        </form>


      </div>




    </motion.div>
  );
}

export default Login;
