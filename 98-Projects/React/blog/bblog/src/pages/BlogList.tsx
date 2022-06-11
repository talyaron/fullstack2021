import axios from "axios"
import { Link, useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import {Button} from '@mui/material';
import {motion} from 'framer-motion'

interface BlogsProps{
  setBlogs:Function;
}
interface Blog{
  name:string;
  body:string;
  image:string,
  _id:string;
}


 function BlogsList(props:BlogsProps) {

  

  const {setBlogs} = props;

  const [blogsFromDB , setBlogsFromDB] =useState<Array<Blog>>([])

  const clickToStart = {
    img: {
      y:'10px',
      scale:1,
      transition:{
        yoyo:Infinity,duration:5}
    }
  }


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
   console.log(blog_id);
   
   const {data} = await axios.post("/api/blogs/delete-blog",{blog_id})
   
console.log(data);
handleGetBlogs()

  }

    return (

    <div className="main-links" >
    {blogsFromDB.map((blog,i) => {   
          return(
            <div className="main-links-link" key={i} style={{border:'1px solid black',width:'99%'}}>
            <Link className="link" to={`/blogs/${blog._id}`} >
               <div className="blog-link-div main-links-link-head"> <h1 className="inputs">{blog.name}</h1></div>
            </Link>
            <Button className="main-links-link-deleteBtn" variant="contained" color="error" onClick={()=>HandleDeleteBlog(blog._id)}>Delete</Button>
            <motion.div initial={{scale:0.9}} whileInView={"img"} variants={clickToStart} className="main-links-link-image" style={{backgroundImage:`url(${blog.image})`}} />

            </div>
          )
        })}
    </div>
  )
}

export default BlogsList
