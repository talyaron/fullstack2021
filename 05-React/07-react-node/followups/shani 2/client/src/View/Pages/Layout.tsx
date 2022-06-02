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
  // const [dataIceCream, setDataIceCream] = useState<Array<IceCream>>([]);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("/getIceCreams");
  //     console.log(data);
  //     setDataIceCream(data.flavors);
  //   })();
  // }, []);

  return (
    <div className="layout" style={{backgroundColor:'pink',height:'95vh'}}>
      <header className="layout__header">
        <img src="https://popmenucloud.com/ecqprngd/cae2a2af-5283-47da-a20d-e648b8b7ac24.png" alt="logo"/>
      <Link to='/' className="layout__header__nav">Home</Link>
     
      <Link to='/chocolate' className="layout__header__nav">Chocolate</Link>
      <Link to='/vanilla' className="layout__header__nav">Vanilla</Link>
      <Link to='/goofygoober' className="layout__header__nav">Goofy Goobers</Link>
      
      
      </header>
      <footer style={{position:'absolute',bottom:'0px',height:'35px',width:'100%',backgroundColor:'red'}}>
             
      </footer>
     
      
      <Outlet />
    </div>
  );
};

export default Layout;


// {dataIceCream ? (
//   <div>
//     {dataIceCream.map((flavor) => {
//       return (
//         <div key={flavor._id}>
//           <Link to={flavor._id}>{flavor.flavourType}</Link>
//           {/* <p>{flavor.name}</p> */}
//           {/* <p>{flavor.flavourType}</p>
//           <img src={flavor.img}/> */}
          
//         </div>
//       );
//     })}
//   </div>
// ) : (
//   <div>no ice cream</div>
// )}