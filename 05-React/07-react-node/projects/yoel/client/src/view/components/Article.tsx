import React from 'react'
interface propArticle {
    article: any,
    setArticle: Function
}
const Article = (prop: propArticle) => {
    const { article, setArticle } = prop;
    return (
        <div>
            {article.map((articleText: any) => (
                <div className='article' key = {articleText.text}>
                    
                    <div className='article__username'>{articleText.username} </div>
                    <div className='article__title'>{articleText.title} </div>
                    <div className='article__text'>{articleText.text}</div>
                </div>
            ))}
        </div>
    )
}

export default Article