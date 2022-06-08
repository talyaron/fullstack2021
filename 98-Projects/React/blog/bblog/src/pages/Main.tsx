import axios from "axios";
import { motion } from "framer-motion";
import { useEffect ,useState} from "react";
import {Outlet,useNavigate} from 'react-router-dom'


interface mainPorps{
  setNewBlog:Function;
}

function Main(props:mainPorps) {

  const {setNewBlog} = props;

  const navigate = useNavigate()

  async function addBlog(ev:any){
      ev.preventDefault()
     
      const blogName = ev.target.elements.name.value;
      const body = ev.target.elements.body.value;
      
      
      const newBlog = {name:blogName,body}
      console.log(newBlog);
      
       await axios.patch('/api/blogs/get-addBlog',{newBlog})
      // setNewBlog([...newBlog])

      navigate('/BlogsList')
  }

  return (

    <div className="main">
        <form onSubmit={addBlog}>
          <input type="text" name="name" placeholder="blog name" required/>
          <textarea rows={4} cols={50}  name="body" placeholder="write your blog text ... " required/>
          <input type="submit" value="add blog"/>
        </form>
        
    </div>
  )
}

export default Main
