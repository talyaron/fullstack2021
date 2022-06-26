import axios from "axios";
import { useEffect } from "react";
import mongoose from "mongoose";
interface Card{
  Name:String,


}
function Card() {

  useEffect(() => {
    (async () => {
      const {data}  = await axios.get("/api/users/get-UserData");
      const {result}  = data;
      console.log(data);
      
      console.log(result[0].country);
      
      
    
     
      
      
    })();
  }, []);


  return <div>Card</div>;
}

export default Card;
