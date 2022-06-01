import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
interface IceCream {
    _id: any;
    flavourType: String;
    name: String;
    img: string;
  }

const Home = () => {
      const [dataIceCream, setDataIceCream] = useState<Array<IceCream>>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/getIceCreams");
      console.log(data);
      setDataIceCream(data.flavors);
    })();
  }, []);
  return (
    <div className="home" >
        <h1>Our Ice Creams:</h1>
         {dataIceCream ? (
     <div className="home__options">
    {dataIceCream.map((flavor) => {
      return (
        <div key={flavor._id} className="flavor">
          
          <Link to={flavor._id}>{flavor.name}</Link>
          <img src={flavor.img}/>
          <p>{flavor.flavourType}</p>
          
        </div>
      );
    })}
  </div>
) : (
  <div>no ice cream</div>
)}

    </div>
  )
}

export default Home

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