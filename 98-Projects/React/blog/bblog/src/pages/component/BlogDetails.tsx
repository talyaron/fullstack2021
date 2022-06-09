import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'

interface tempBlog{
    name:string;
    body:string;
    _id:string;
}

function BlogDetails(){

    const { id } = useParams()
    const [tempId , setTempId] = useState(id)
    const [tempBlog ,setTempBlog] = useState({name:'lalal',body:'lalala',_id:'dsadada'})
    
    useEffect(() => {
        (async () => {
          const {data}  = await axios.patch("/api/blogs/get-blog",{tempId});
          console.log(data);
          
          setTempBlog(data.data[0])
          
        })();
      }, []);
    
        return (
            <div className="blog-details" >
              <motion.h1 className="blog-details-name">{tempBlog.name}</motion.h1>
              <div className="blog-details-body">{tempBlog.body}</div>
              {/* <button onClick={handleClick}>delete</button> */}
      
            </div>
          )
    
    
  
}

export default BlogDetails