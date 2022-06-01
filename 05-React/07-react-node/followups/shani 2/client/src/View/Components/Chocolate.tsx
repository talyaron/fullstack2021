import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {dataChocolate ? (
        <div>
          {dataChocolate.map((chocolate) => {
            return (
              <div key={chocolate._id}>                
                <p>{chocolate.name}</p>
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
