import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
interface IceCream {
  _id: any;
  flavourType: String;
  name: String;
  img: string;
}

const Chocolate = () => {
  const [dataChocolate, setDataChocolate] = useState<Array<IceCream>>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/getChocolateIceCreams");
      console.log(data);
      setDataChocolate(data.chocolate);
    })();
  }, []);
  console.log(dataChocolate);
  return (
    <div>
      <h1>Chocolate</h1>
      {dataChocolate.length>0? (
        <div>
          {dataChocolate.map((chocolate) => {
            return (
              <div key={chocolate._id}>      
               
              <Link to={chocolate._id}>{chocolate.name}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>no chocolate ice cream available... sorry</div>
      )}
       
    </div>
  );
};

export default Chocolate;
