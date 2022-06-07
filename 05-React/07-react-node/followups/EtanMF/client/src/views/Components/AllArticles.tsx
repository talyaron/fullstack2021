import React, { useDeferredValue, useEffect } from 'react';
import ArticleCard from './ArticleCard'
import ArticleSearch from './ArticleSearch'
import { UserInfo } from '../../AnimatedRoutes'

interface AllArticlesProps {
    articleList: Array<ArticleInfoParams>;
    handleSetSingleArticle: Function;
    handleSearchTerm: Function;
    currentUser?: UserInfo;
    loginUserId?: String;
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
    const { articleList, handleSetSingleArticle, handleSearchTerm, currentUser, loginUserId } = props;
    const deferredArticles = useDeferredValue(articleList)


    return (
        <ul className="comp-allArticles">
            <h1>AllArticles</h1>

            <ArticleSearch handleSearchTerm={handleSearchTerm} />


            {deferredArticles ? deferredArticles.map((article: ArticleInfoParams, index: number) => {
                return (
                    <ArticleCard key={index} article={article} handleSetSingleArticle={handleSetSingleArticle}
                        currentUser={currentUser} loginUserId={loginUserId}
                    />
                )
            }) : <p>Loading......</p>}



        </ul>
    )
}

export default AllArticles