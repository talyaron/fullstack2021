
import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
interface IceCream {
_id:string
  flavorType:string
  flavor:string
  img:string

}
const Vanilla = () => {
  const [dataServer, setDataServer]= useState<IceCream[]>([]);
    useEffect(()=>{
        //bring vanilla icecreams from DB
        (async () => {
          const { data } = await axios.get('/api/iceCreamVFlavor')
       setDataServer(data.flavorsTypev)
        })();
    },[])
    console.log(dataServer);
    
  return (
    <div className="flexbg">
      <h2>Vanilla Flavor</h2>
      {dataServer.length?(<div className="flexBox">{dataServer.map((i)=>{return(
        <div className="flex" key={i._id}>
          <Link className="link" to={i._id}>{i.flavorType}</Link>
          <Link className="link" to={i._id}>{i.flavor}</Link>
          <Link className="link" to={i._id}> <img src={i.img}/></Link>
          </div>
      )})}</div>):(<div>no vanilla</div>)}
  
      <Outlet />
    </div>
  );
};

export default Vanilla;
