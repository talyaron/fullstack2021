import {useId, useState} from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import {ArticleInfoParams} from '../../AnimatedRoutes';
import {UserInfo} from '../../AnimatedRoutes';
import UpdateArticle from './UpdateArticle';
import DeleteArticle from './DeleteArticle';
import {motion} from 'framer-motion';
interface ArticleCardProps {
    article: ArticleInfoParams;
    handleSetSingleArticle: Function;
    currentUser?: UserInfo;
    loginUserId?: String;
    handleUpdateArticle: Function;
    handleDeleteArticle: Function;
}
const ArticleCard = (props: ArticleCardProps) => {
    const id = useId();
    const {article, handleSetSingleArticle, currentUser, loginUserId, handleUpdateArticle, handleDeleteArticle} = props;
    const navigate = useNavigate();
    const [animation, setAnimation] = useState<object>({});
    const [transition, setTransition] = useState<object>({});

    return (
        <motion.li
        initial={{scale:1}}
        transition={transition}
        animate={animation}
        exit={{scale:'100%'}}
        className='comp-articleCard'>
            <div className='comp-articleCard-header'>
                {article.ownerId === loginUserId ? (
                    <UpdateArticle DeleteArticle={<DeleteArticle transition={transition} setTransition={setTransition} setAnimation={setAnimation} articleId={article._id} ownerId={article.ownerId} handleDeleteArticle={handleDeleteArticle} />} handleUpdateArticle={handleUpdateArticle} article={article} />
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
        </motion.li>
    );
};

export default ArticleCard;
