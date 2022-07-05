import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";


import UserCard from "./UserCard";
interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}
interface AllUsersProps {
  userList: Array<UserInfo>;
  handleOpenUser: Function;
}
function AllUsers(props: AllUsersProps) {
  
  const { userList, handleOpenUser } = props;
  return (
    <motion.ul
      className="comp-allUsers"
    >
      {userList && userList.map((user: UserInfo, i) => {
        return <UserCard key={i} user={user} handleOpenUser={handleOpenUser} />;
      })}
    </motion.ul>
  );
}

export default AllUsers;
