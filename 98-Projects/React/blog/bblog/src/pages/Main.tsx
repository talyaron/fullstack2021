import axios from "axios";
import { motion } from "framer-motion";
import { useEffect ,useState} from "react";
import {Link, Outlet,useNavigate,} from 'react-router-dom'
import BlogList from './BlogList'
import Header from "./component/Header";
import AddBlogForm from './component/AddBlogForm'

interface mainPorps{
  setBlogs:Function;
  blogs:Array<any>;
  formOpen:boolean;
}

function Main(props:mainPorps) {

  

  const {setBlogs,blogs,formOpen} = props;

  return (
    <div className="main">
        {formOpen?<AddBlogForm setBlogs={setBlogs} blogs={blogs} />:null}
        <BlogList setBlogs={setBlogs} />
    </div>
  )
}

export default Main
