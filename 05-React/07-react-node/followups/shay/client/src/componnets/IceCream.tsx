import { Outlet, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

    interface IceCream {
      _id:string
        flavorType:string
        flavor:string
        img:string
      
      }
const IceCream = () => {
    const {IceCreamId} = useParams()
    const [iceCream, setIceCream]= useState<any>(null);

    useEffect(()=>{
        //get data on the icecream

        (async () => {
          try{
          const { data } = await axios.get(`/api/${IceCreamId}`)
         
        
      const {flavorsId} = data;
        console.log(flavorsId);
      if(!flavorsId){
        throw new Error('no ice cream')
      }
      setIceCream(flavorsId)
        
          }
          catch(err:any){
console.error(err.message)
          }
        })();
       
    },[])
    console.log(iceCream);

  
    
  return (
    <div className='idIce'> <h2> Ice Cream :{IceCreamId}</h2>
    <div className='flex'>
<p>{iceCream && iceCream.flavorType?iceCream.flavorType:null }</p>
<p>{iceCream && iceCream.flavor?iceCream.flavor:null }</p>
<img src={iceCream && iceCream.img?iceCream.img:null } alt="" />
    </div>
  {/* {dataServer?(<div className="flexBox">{dataServer.map((i)=>{return(
        <div className="flex" key={i._id}>
          <Link className="link" to={i._id}>{i.flavorType}</Link>
          <Link className="link" to={i._id}>{i.flavor}</Link>
         <Link className="link" to={i._id}> <img src={i.img}/></Link>
         </div>
      )})}</div>):(<div>no ice cream</div>)}  */}
     
      <Outlet />
    </div>
  )
}

export default IceCream