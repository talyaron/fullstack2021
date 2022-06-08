import axios from "axios"
import { Link, useParams } from "react-router-dom"
import {useEffect,useState} from 'react'

interface BlogsProps{
  setBlogs:Function;
}
interface Blog{
  name:string;
  body:string;
  _id:string;
}

 function BlogsList(props:BlogsProps) {

  const {setBlogs} = props;

  const [blogsFromDB , setBlogsFromDB] =useState<Array<Blog>>([])
  

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/blogs/get-blogs");
      console.log(data.data);
      const blogsList = data.data;
      setBlogsFromDB(blogsList)
    })();
  }, []);

    return (

    <div className="main-links" >
    {blogsFromDB.map((blog,i) => {   
          return(
            <Link key={i} to={`/blogs/${blog._id}`} >
                <h1>{blog.name}</h1>
            </Link>
          )
        })}
    </div>
  )
}

export default BlogsList
