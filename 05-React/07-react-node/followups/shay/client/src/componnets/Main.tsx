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
          const { data } = await axios.get('/iceCreamData')
       setDataServer(data.flavors)
        })();
    },[])
    console.log(dataServer);
    
  return (
    <div className="flexbg">
      <h1>Ice creams</h1>
      {dataServer?(<div className="flexBox">{dataServer.map((i)=>{return(
        <div className="flex" key={i._id}>
          <Link className="link" to={i._id}>{i.flavorType}</Link>
          <Link className="link" to={i._id}>{i.flavor}</Link>
          <img src={i.img}/></div>
      )})}</div>):(<div>no ice cream</div>)}
      {/* <Link to="123">Vanilla</Link> */}
      <Outlet />
    </div>
  );
};

export default Main;
