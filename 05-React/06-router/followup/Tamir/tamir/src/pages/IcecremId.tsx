import { useParams } from "react-router-dom";
const IcecremId = () => {
  const { icecream } = useParams();
  return (
    <div>
      icecremId:{icecream}
    </div>
  );
};

export default IcecremId;
