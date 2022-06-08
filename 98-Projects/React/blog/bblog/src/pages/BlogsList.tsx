import axios from "axios"
import { useParams } from "react-router-dom"
import {useEffect} from 'react'


 function BlogsList() {

    const {id} = useParams()
   
      useEffect(() => {
        (async () => {
          const { data } = await axios.get("/get-blogs",);
          console.log(data);
          
        })();
      }, []);
    
      
    return (

    <div>
        <h1>lala</h1>
    </div>
  )
}

export default BlogsList
