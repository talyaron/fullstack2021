import { useParams } from "react-router-dom";
import React,{useEffect,useState} from "react";
import articleContent from './article-content';
import Articles from "../pages/ArticlesList";
// import NotFound from "./NotFound";

const Article = () => {
  const {name}=useParams();
  const article:any=articleContent.find((article)=>article.name===name);

const[articleInfo,setArticleInfo]=useState({coments:[]})

useEffect(()=>{
  const fetchData=async()=>{
    const result=await fetch(`http://localhost:4001/api/articles/${name}`);
    const body=await result.json();
    console.log(body);
        setArticleInfo( body);
  }
  fetchData();
},[name]);

  if (!article) return <h1 id="article_err">Article does not exists</h1>
  return (
    
    <>
      <h1 className="ONE">{article.title}</h1>
    {article.content.map((paragraph:any, index:any)=>(
      <p className="parOne" key={index}>
        {paragraph}
      </p>
    ))}
    </>
     )
}

export default Article