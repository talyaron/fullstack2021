import react from "react"
import articles from "./article-content"
import articleContent from './article-content'
import { Link } from "react-router-dom"

const ArticlesList = () => {
  return (
    <>
    <h1 className="article_list_header">Articles</h1>
    {/* <Link to="/home">Home</Link> */}
      
    {articleContent.map((article:any, index:any)=>(
      <p className="parOne" key={index}>
        {/* <Link to="/home">Home</Link> */}
        <Link to={`/article/${article.name}`}>
        <img src={article.thumbnail} alt="blog"/>
        <h3>{article.title}</h3>
        </Link>
        <p>{article.content[0].substring(0,125)}...</p>


      </p>  
    ))}
  </>
  )
}

export default ArticlesList