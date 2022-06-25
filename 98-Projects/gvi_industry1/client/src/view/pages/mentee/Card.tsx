import axios from "axios";
import { useEffect } from "react";
import mongoose from "mongoose";
function Card() {

  useEffect(() => {
    (async () => {
      const {data}  = await axios.get("/api/users/getUser",{});
      console.log({data});
      
      // setTempBlog(data.data[0])
      
    })();
  }, []);


  return <div>Card</div>;
}

export default Card;
