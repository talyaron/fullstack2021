import React from 'react';
import ArticleCard from './ArticleCard'

interface AllArticlesProps {
    articleList: Array<ArticleInfoParams>;
    handleSetSingleArticle: Function;
}

interface ArticleInfoParams {
    firstName: string;
    lastName: string;
    position: string;
    workSpace: string;
    _id: string;
    ownerId: string;
    title: string;
    content: string;
}

function AllArticles(props: AllArticlesProps) {
    const { articleList, handleSetSingleArticle } = props;

    return (
        <ul className="comp-allArticles">
            <h1>AllArticles</h1>

            {articleList? articleList.map((article: ArticleInfoParams, index: number) => {
                return (
                <ArticleCard key={index} article={article} handleSetSingleArticle={handleSetSingleArticle} />
                )
            }): null}
            


        </ul>
    )
}

export default AllArticles