import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface AppProps {
  setUserName: Function;
  userName: string;
}
function App(props: AppProps) {
  const { setUserName, userName } = props;

  const userInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  console.log(userName.length);
  const hendleGetName = (e: any) => {
    e.preventDefault();

    setUserName(userInput.current?.value);

    if (userName.length > 0) {
      navigate("/rooms");
    }
  };

  return (
    <div className="App">
      <form onSubmit={hendleGetName}>
        <input
          type="text"
          name="userName"
          placeholder="Enter Your name"
          ref={userInput}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
