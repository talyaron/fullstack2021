import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Back from '../Components/Back'
import Next from '../Components/Next'

function Article() {
  const params = useParams();
  const { articleId } = params;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >

      Article {articleId}
<Next/>
    </motion.div>
  );
}

export default Article;
