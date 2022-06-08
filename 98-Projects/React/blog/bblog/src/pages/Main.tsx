import axios from "axios";
import { motion } from "framer-motion";
import { useEffect ,useState} from "react";
import {Link, Outlet,useNavigate,} from 'react-router-dom'
import BlogList from './BlogList'

interface mainPorps{
  setBlogs:Function;
  blogs:Array<any>
}

function Main(props:mainPorps) {

  const {setBlogs,blogs} = props;

  const navigate = useNavigate()

  async function addBlog(ev:any){
      ev.preventDefault()
     
      const blogName = ev.target.elements.name.value;
      const body = ev.target.elements.body.value;
      
      
      const newBlog = {name:blogName,body}
      
       await axios.patch('/api/blogs/get-addBlog',{newBlog})
       setBlogs([...blogs,newBlog])
      // navigate('/blogs/BlogsList')
  }

  return (

    <div className="main">
        <form onSubmit={addBlog}>
          <input type="text" name="name" placeholder="blog name" required/>
          <textarea rows={4} cols={50}  name="body" placeholder="write your blog text ... " required/>
          <input type="submit" value="add blog"/>
        </form> 
        <BlogList setBlogs={setBlogs} />        
        
    </div>
  )
}

export default Main
