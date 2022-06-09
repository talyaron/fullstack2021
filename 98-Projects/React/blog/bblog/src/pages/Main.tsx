import axios from "axios";
import { motion } from "framer-motion";
import { useEffect ,useState} from "react";
import {Link, Outlet,useNavigate,} from 'react-router-dom'
import BlogList from './BlogList'
import Header from "./component/Header";

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
      window.location.reload();


  }

  return (
    <div className="main">
      
        <form onSubmit={addBlog} className="main_form">
          <input type="text" name="name" placeholder="blog name" required  className="field" />
          <textarea rows={4} cols={50}  name="body" placeholder="write your blog text ... " required className="field"/>
          <br />
          <input type="submit" value="add blog" className="btn"/>
        </form> 
        <BlogList setBlogs={setBlogs} />        
        
    </div>
  )
}

export default Main
