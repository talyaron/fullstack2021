import React, { useEffect, useState } from "react";
import axios from "axios";

import { Outlet, Link } from "react-router-dom";

interface IceCream {
  _id: any;
  flavourType: String;
  name: String;
  img: string;
}
const Layout = () => {
  const [dataIceCream, setDataIceCream] = useState<Array<IceCream>>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/getIceCreams");
      console.log(data);
      setDataIceCream(data.flavors);
    })();
  }, []);

  return (
    <div >
      <h1>Layout for ice cream Shop</h1>
      {dataIceCream ? (
        <div>
          {dataIceCream.map((flavor) => {
            return (
              <div key={flavor._id}>
                <Link to={flavor._id}>{flavor.name}</Link>
                {/* <p>{flavor.name}</p> */}
                <p>{flavor.flavourType}</p>
                <img src={flavor.img}/>
                
              </div>
            );
          })}
        </div>
      ) : (
        <div>no ice cream</div>
      )}

      {/* <Link to='/Home/:icecreamId'>ice cream</Link> */}
      <Outlet />
    </div>
  );
};

export default Layout;
