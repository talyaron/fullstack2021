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
    const [articles, setArticles] = useState<Array<Blog>>([])
    setArticles(blogs)

    useEffect(() => {
        setArticles(articles.filter((article) => article._id === articleId));
        console.log(articles)
    },[])

    return (
        <div className="App__Article">
           {/* <p>{articles? <div>{articles.article}</div>:<div>Loading</div>}</p> */}
        </div>
    )
}

export default Article