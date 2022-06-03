import {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
interface IceCream {
_id:string
  flavorType:string
  flavor:string
  img:string

}
const Main = () => {
  const [dataServer, setDataServer]= useState<IceCream[]>([]);
    useEffect(()=>{
        //bring all icecreams from DB
        (async () => {
          const { data } = await axios.get('/api/iceCreamData')
       setDataServer(data.flavors)
        })();
    },[])
    console.log(dataServer);
    
  return (
    <div className="flexbg">
      <h2>Our Ice creams</h2>
      {dataServer.length?(<div className="flexBox">{dataServer.map((i)=>{return(
        <div className="flex" key={i._id}>
          <Link className="link" to={i._id}>{i.flavorType}</Link>
          <Link className="link" to={i._id}>{i.flavor}</Link>
         <Link className="link" to={i._id}> <img src={i.img}/></Link>
         </div>
      )})}</div>):(<div>no ice cream</div>)}
    
      <Outlet />
    </div>
  );
};

export default Main;
