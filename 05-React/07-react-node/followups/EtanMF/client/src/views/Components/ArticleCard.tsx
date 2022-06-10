import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import {ArticleInfoParams} from '../../AnimatedRoutes';
import {UserInfo} from '../../AnimatedRoutes';
import UpdateArticle from './UpdateArticle';

interface ArticleCardProps {
    article: ArticleInfoParams;
    handleSetSingleArticle: Function;
    currentUser?: UserInfo;
    loginUserId?: String;
    handleUpdateArticle?:Function;
}
const ArticleCard = (props: ArticleCardProps) => {
    const {article, handleSetSingleArticle, currentUser, loginUserId, handleUpdateArticle} = props;
    const navigate = useNavigate();

    return (
        <li className='comp-articleCard'>
            <div className='comp-articleCard-header'>
                {article.ownerId === loginUserId ? (
                    <UpdateArticle handleUpdateArticle={handleUpdateArticle} article={article}></UpdateArticle>
                ) : (
                    <Link className='comp-articleCard-header-authorInfo' to={`/User/${article.ownerId}`}>
                        <fieldset>
                            <legend>author fieldset</legend>
                            <div className='comp-articleCard-header-authorInfo-personal'>
                                {article.firstName} {article.lastName}
                            </div>
                            <div className='comp-articleCard-header-authorInfo-professional'>
                                {article.workSpace}, {article.position}
                            </div>
                        </fieldset>
                    </Link>
                )}
            </div>

            <div
                className='comp-articleCard-content'
                onClick={() => {
                    handleSetSingleArticle(article);
                }}>
                <fieldset>
                    <legend>article</legend>
                    <h2 className='comp-articleCard-contentTitle'>{article.title}</h2>
                    <sub className='comp-articleCard-contentPreview'>{article.content}</sub>
                </fieldset>
            </div>
        </li>
    );
};

export default ArticleCard;
