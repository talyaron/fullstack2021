import axios from "axios";
import { motion } from "framer-motion";
import { useEffect ,useState} from "react";
import {Link, Outlet,useNavigate,} from 'react-router-dom'
import BlogList from './BlogList'
import Header from "./component/Header";
import AddBlogForm from './component/AddBlogForm'
import  Login  from "./component/Login";



interface mainPorps{
  setBlogs:Function;
  blogs:Array<any>;
  formOpen:boolean;
  openSignUp:boolean;
  openLogIn:boolean;
}

 function Main(props:mainPorps) {
  

  const {setBlogs,blogs,formOpen,openSignUp,openLogIn} = props;

  return (
    <div className="main">
              {formOpen?<AddBlogForm setBlogs={setBlogs} blogs={blogs} />:null}

        {openLogIn?<Login  />:null}
        <BlogList setBlogs={setBlogs} />
    </div>
  )
}

export default Main
