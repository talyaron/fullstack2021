
import {useParams, Outlet} from 'react-router-dom'
import {motion} from 'framer-motion';

function User() {
    const params = useParams();
    const {userId} = params;
  return (
    <motion.div
    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2}}
    >{userId}
    <Outlet/>
    </motion.div>
  )
}

export default User