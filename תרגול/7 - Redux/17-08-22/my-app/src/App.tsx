import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getAllUser, sendUserData } from "./features/user/userAsync";
import { selectUser } from "./features/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);

  console.log(users);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const hendleGetUserData = async (e: any) => {
    e.preventDefault();

    const username = e.target.elements.name.value;
    const password = e.target.elements.password.value;

    console.log(username, password);

    dispatch(sendUserData({ username, password }));
  };

  return (
    <div className="App">
      <form onSubmit={hendleGetUserData}>
        <input type="text" name="name" placeholder="name" />
        <input type="password" name="password" placeholder="name" />
        <button type="submit">Send</button>
      </form>

      {users.map((i, index) => (
        <div key={index}>
          <h2>{i.username}</h2>
          <p>{i.password}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
