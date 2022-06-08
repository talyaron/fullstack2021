import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
interface NewArticleProps {
  handleCreateNewArticle: Function;
}
function NewArticle(props: NewArticleProps) {
  const [expanded, setExpanded] = useState<Boolean>();
  const isOpen = expanded;
  const {handleCreateNewArticle} = props;

  return (
    <motion.div className='comp-newArticle'>
      <motion.button className='comp-newArticle-triggerButton' initial={false} animate={{backgroundColor: isOpen ? "#FF0088" : "#0055FF"}} onClick={() => setExpanded(isOpen ? false : true)}>
        Make a new Article post
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className='comp-newArticle-section'
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: {opacity: 1, height: "auto"},
              collapsed: {opacity: 0, height: 0},
            }}
            transition={{duration: 2, ease: [0.04, 0.62, 0.23, 0.98]}}>
            <form onSubmit={(e) => handleCreateNewArticle(e)} className='form-newArticle'>
              <fieldset className='form-newArticle-fieldset'>
                <label htmlFor='newArticleTitle'>Article Title</label>
                <input type='text' name='newArticleTitle' id='newArticleTitle' required />
                <label htmlFor='newArticleContent'>Article Content</label>
                <textarea name='newArticleContent' id='newArticleContent' cols={30} rows={10} required></textarea>
                <input type='submit' value='Create New Article' />
              </fieldset>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default NewArticle;
