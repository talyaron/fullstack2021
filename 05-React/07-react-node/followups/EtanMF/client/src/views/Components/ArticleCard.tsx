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
}
const ArticleCard = (props: ArticleCardProps) => {
    const {article, handleSetSingleArticle, currentUser, loginUserId} = props;
    const navigate = useNavigate();

    return (
        <li className='comp-articleCard'>
            <div className='comp-articleCard-header'>
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
                {article.ownerId === loginUserId ? <UpdateArticle article={article}></UpdateArticle> : null}
            </div>

            <div
                className='comp-articleCard-content'
                onClick={() => {
                    handleSetSingleArticle(article);
                }}>
                <fieldset>
                    <legend>article</legend>
                    <h6 className='comp-articleCard-contentTitle'>{article.title}</h6>
                    <sub className='comp-articleCard-contentPreview'>{article.content}</sub>
                </fieldset>
            </div>
        </li>
    );
};

export default ArticleCard;
