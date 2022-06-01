import React, { useEffect, useState } from "react";
import axios from "axios";

interface IceCream {
  _id: any;
  flavourType: String;
  name: String;
  img: string;
}
const GoofyGoober = () => {
  const [dataGoofyGoober, setGoofyGoober] = useState<Array<IceCream>>([]);
  useEffect(() => {
      //brings ice cream from database
    (async () => {
      const {data} = await axios.get("/getGoofyGooberIceCream");
      console.log(data);
      setGoofyGoober(data.goofygoober);
     
    })();
  }, []);
  console.log(dataGoofyGoober);
  return (
    <div>
      <h1>Goofy Goober</h1>
      {dataGoofyGoober.length>0 ?(
        <div>
          {dataGoofyGoober.map((goofy) => {
            return (
              <div key={goofy._id}>
                <p>{goofy.name}</p>
              </div>
            )})}</div>):(<div><p>no goofy goober ice cream available... sorry</p> </div>)}
    </div>
  );
};

export default GoofyGoober;


