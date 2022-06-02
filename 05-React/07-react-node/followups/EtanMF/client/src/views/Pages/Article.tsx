import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
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
    </motion.div>
  );
}

export default Article;
