import React, {JSXElementConstructor, ReactNode, useState} from 'react';
import {Outlet} from 'react-router-dom'
import {UserInfo} from '../../AnimatedRoutes';
import {ArticleInfoParams} from '../../AnimatedRoutes';
import {AnimatePresence, motion} from 'framer-motion';
import { JsxChild } from 'typescript';

interface UpdateArticleProps {
    article: ArticleInfoParams;
    handleUpdateArticle:Function;
    DeleteArticle?: ReactNode;
}

const UpdateArticle = (props: UpdateArticleProps) => {
    const {article, handleUpdateArticle, DeleteArticle} = props;
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div className="comp-articleCard-header-update">
            <motion.button className="comp-articleCard-header-updateButton"
                initial={false}
                animate={{backgroundColor: expanded ? '#FF0088' : '#0055FF'}}
                onClick={() => {
                    setExpanded(!expanded);
                }}>
                Update
            </motion.button>
{DeleteArticle}
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.form
                    onSubmit={handleUpdateArticle?(ev)=>handleUpdateArticle(ev,article._id ):()=>{}}
                    className='comp-articleCard-header-updateForm'
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                        open: {opacity: 1, scaleX: '100%'},
                        collapsed: {opacity: 0, scaleX: 0},
                    }}
                    transition={{duration: 2, ease: [0.04, 0.62, 0.23, 0.98]}}>
                            <label htmlFor="updateArticleTitle">Update title</label>
                            <input type='text' name='updateArticleTitle' id='updateArticleTitle' defaultValue={article.title} />
                            <label htmlFor="updateArticleContent">Update content</label>
                            <textarea style={{resize: 'none'}}name='updateArticleContent' id='updateArticleContent' defaultValue={article.content} />
                            <input type='submit' />
                        </motion.form>

)}
            </AnimatePresence>
        </motion.div>
    );
};

export default UpdateArticle;
