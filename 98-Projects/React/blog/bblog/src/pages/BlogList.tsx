import axios from "axios"
import { Link, useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import {Button} from '@mui/material';

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
  async function handleGetBlogs() {
   
      const { data } = await axios.get("/api/blogs/get-blogs");
      console.log(data.data);
      const blogsList = data.data;
      setBlogsFromDB(blogsList)

    
    
  }

  useEffect(() => {
    handleGetBlogs()
  }, []);
  
 async function HandleDeleteBlog(blog_id:string){
   const {data} = await axios.post("/api/blogs/delete-blog",{blog_id})


console.log(data);
handleGetBlogs()

  }

    return (

    <div className="main-links" >
    {blogsFromDB.map((blog,i) => {   
          return(
            <div key={i}>
              <Button variant="contained" color="error" onClick={()=>HandleDeleteBlog(blog._id)}>Delete</Button>
            <Link className="link" to={`/blogs/${blog._id}`} >
               <div className="blog-link-div"> <h1 className="inputs">{blog.name}</h1></div>
            </Link>
            </div>
          )
        })}
    </div>
  )
}

export default BlogsList
