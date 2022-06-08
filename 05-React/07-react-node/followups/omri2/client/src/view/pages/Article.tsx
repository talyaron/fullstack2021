import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

interface ArticleProps{
    blogs:Array<Blog>
}

interface Blog {
    _id:string
    title: string
    article: string
  }

const Article = (props:ArticleProps) => {

    const {blogs} = props;
    const params = useParams()
    const {articleId} = params;
    const [articles, setArticle] = useState({});
    setArticle(blogs)

    // useEffect(() => {
    //     setBlogs(blogs.filter((blog) => blog._id === articleId)[0])
    // },[])

    return (
        <div></div>
    )
}

export default Article