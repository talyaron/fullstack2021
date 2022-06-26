import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from './Article';

interface TitleProps{
  blogs:Array<Blog>
  setBlogs:Function
}

interface Blog {
  _id:string
  title: string
  article: string
}

const Title = (props: TitleProps) => {

  const {blogs, setBlogs} = props;

  useEffect(() => {
    axios.get('/api/blogs/get-titles').then(({ data }) => {
      console.log(data)
      setBlogs(data);
    })
  }, []);

  return (
    <div className="App__titles">
      {blogs.map((blog: any) => {
        return (
          <div className="App__titles--title" key={blog._id}>
            <Link id="link" to={blog._id}>
              <h3>{blog.title}</h3>
            </Link>
            <Outlet />
          </div>
        )
      })}
    </div>
  )
}

export default Title