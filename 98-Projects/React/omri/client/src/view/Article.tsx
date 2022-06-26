import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Article = () => {

    const { articleId } = useParams()
    const [tempArticle, setTempArticle] = useState<string>('')
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        (async () => {
            const { data } = await axios.post('/api/blogs/get-article', { articleId })
            const { article } = data;
            setTempArticle(article[0].article)
            setTitle(article[0].title)
            // console.log(article[0].article)
        })();


    }, [])

    return (
        <div>
            {tempArticle ? <div>
                <h2>{title}</h2>
                <p>{tempArticle}</p>
            </div> : <p>Loading...</p>}
        </div>
    )
}

export default Article