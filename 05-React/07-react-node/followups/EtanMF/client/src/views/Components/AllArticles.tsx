import React, {useDeferredValue, useEffect, Suspense} from 'react';
import ArticleCard from './ArticleCard';
import ArticleSearch from './ArticleSearch';
import {UserInfo} from '../../AnimatedRoutes';

interface AllArticlesProps {
    articleList: Array<ArticleInfoParams>;
    handleSetSingleArticle: Function;
    handleSearchTerm: Function;
    currentUser?: UserInfo;
    loginUserId?: String;
    handleUpdateArticle:Function;
    handleDeleteArticle: Function;
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
// const cssPageTheme: string = `&*{background:black;}`;
function AllArticles(props: AllArticlesProps) {
    const {articleList, handleSetSingleArticle, handleSearchTerm, currentUser, loginUserId, handleUpdateArticle, handleDeleteArticle} = props;
    const deferredArticles = useDeferredValue(articleList);

    return (
        <ul className='comp-allArticles'>
            <ArticleSearch handleSearchTerm={handleSearchTerm} />
            <h1>AllArticles</h1>
            {deferredArticles ? (
                deferredArticles.map((article: ArticleInfoParams, index: number) => {
                    return <ArticleCard key={index} handleUpdateArticle={handleUpdateArticle} handleDeleteArticle={handleDeleteArticle} article={article} handleSetSingleArticle={handleSetSingleArticle} currentUser={currentUser} loginUserId={loginUserId} />;
                })
                ) : (
                    <p>Loading......</p>
                    )}

        </ul>
    );
}

export default AllArticles;
