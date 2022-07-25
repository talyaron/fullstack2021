import { useEffect, useState } from "react";
import axios from "axios";

interface user {
  name: string;
  id: "";
}
const Conect = () => {
  const [users, setUser] = useState<Array<user>>([]);
  useEffect(() => {
    axios.get("/api/users/get-user").then(({ data }) => {
      console.log(data);
      const { users } = data;
      if (users) {
        setUser(users);
      }
    });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Conect;
