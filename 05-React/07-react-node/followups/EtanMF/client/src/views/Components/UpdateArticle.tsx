import React, { useState } from 'react'
import { UserInfo } from '../../AnimatedRoutes'
import { ArticleInfoParams } from '../../AnimatedRoutes'
import { AnimatePresence, motion } from "framer-motion";



interface UpdateArticleProps {
    article: ArticleInfoParams;
}

const UpdateArticle = (props: UpdateArticleProps) => {
    const { article } = props;
    const [expanded, setExpanded] = useState(false)

    return (
        <motion.div>

            <motion.button initial={false}
                animate={{ backgroundColor: expanded ? "#FF0088" : "#0055FF" }} onClick={() => { setExpanded(!expanded) }}>Update</motion.button>


            <AnimatePresence initial={false}>

                {expanded && <motion.section initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, scaleX: "100%" },
                        collapsed: { opacity: 0, scaleX: 0 },
                    }}
                    transition={{ duration: 2, ease: [0.04, 0.62, 0.23, 0.98] }}>

                    <form>
                        <input type="text" name="" id="" />

                    </form>

                </motion.section>}


            </AnimatePresence>

        </motion.div>
    )
}

export default UpdateArticle