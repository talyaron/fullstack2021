import { Link } from "react-router-dom";

interface RoomsProps {
  userName: string;
}
const Rooms = (props: RoomsProps) => {
  const { userName } = props;
  return (
    <div>
      <h1>Hello user {userName}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/123">123</Link>
        <Link to="/234">234</Link>
      </div>
    </div>
  );
};

export default Rooms;
