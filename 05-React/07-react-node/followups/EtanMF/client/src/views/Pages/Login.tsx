import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

function Login() {
  return (
    <motion.div
    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2}}>
      <Link to="Home">Home</Link>
      <Link to="allArticles">allArticles</Link>
    </motion.div>
  );
}

export default Login;
