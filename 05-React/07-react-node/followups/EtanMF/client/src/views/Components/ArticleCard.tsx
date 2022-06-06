import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ArticleInfoParams } from '../../AnimatedRoutes'


interface ArticleCardProps {
    article: ArticleInfoParams;
    handleSetSingleArticle: Function;
}

const ArticleCard = (props: ArticleCardProps) => {
    const { article, handleSetSingleArticle } = props;
    const navigate = useNavigate()

    return (
        <li>

            <Link style={{ zIndex: 4 }} to={`/User/${article.ownerId}`}>{article.firstName} {article.lastName}</Link>

            <div onClick={() => { handleSetSingleArticle(article)}}>
                <p>{article.title}</p>
                <p>{article.firstName}</p>
                <p>{article.lastName}</p>
                <p>{article.position}</p>
                <p>{article.workSpace}</p>

            </div>

        </li>
    )
}

export default ArticleCard