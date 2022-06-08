import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
  title: string
  article: string
}

const Title = () => {

  const [blogs, setBlogs] = useState<Array<Blog>>([])

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
            <h3>{blog.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Title