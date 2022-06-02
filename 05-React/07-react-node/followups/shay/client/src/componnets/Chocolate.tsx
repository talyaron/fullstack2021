
import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
interface IceCream {
_id:string
  flavorType:string
  flavor:string
  img:string

}
const Chocolate = () => {
  const [dataServer, setDataServer]= useState<IceCream[]>([]);
    useEffect(()=>{
        //bring chocolate icecreams from DB
        (async () => {
          const { data } = await axios.get('/api/iceCreamCFlavor')
       setDataServer(data.flavorsTypec)
        })();
    },[])
    console.log(dataServer);
    
  return (
    <div className="flexbg">
      <h2>Chocolate Flavor</h2>
      {dataServer.length?(<div className="flexBox">{dataServer.map((i)=>{return(
        <div className="flex" key={i._id}>
          <Link className="link" to={i._id}>{i.flavorType}</Link>
          <Link className="link" to={i._id}>{i.flavor}</Link>
          <Link className="link" to={i._id}> <img src={i.img}/></Link>
          </div>
      )})}</div>):(<div>no chocolate</div>)}
      {/* <Link to="123">Vanilla</Link> */}
      <Outlet />
    </div>
  );
};

export default Chocolate;
