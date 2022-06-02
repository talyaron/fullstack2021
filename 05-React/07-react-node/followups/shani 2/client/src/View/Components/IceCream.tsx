import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from "axios";
interface IceCream {
  _id: any;
  flavourType: string;
  name: string;
  img: string;
}
const IceCream = () => {
  const {icecreamId}=useParams()
  const [icecream,setIcecream]=useState<any>(null)
  useEffect(()=>{
    (async () => {
      //the `/${icecreamId}` must be the same word used in server 'icecreamId'
      try{
        const { data } = await axios.get(`/api/${icecreamId}`);
        console.log(data);
        const {getIceCream}=data
        if(!getIceCream){
          throw new Error ('no ice cream ')
        }
          setIcecream(getIceCream)
        
      }catch(err:any){
        console.error(err.message)
      }
      
     
     
    })()
  },[])
  
    
  
  return (
    <div>
      <p>IceCream:{icecream && icecream.name?icecream.name:null} </p>
      
     
     

    </div>
  )
}

export default IceCream