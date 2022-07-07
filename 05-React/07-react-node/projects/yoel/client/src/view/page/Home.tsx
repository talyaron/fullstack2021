// import {link} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Article from '../components/Article';

interface propArticle {
  article: any,
  setArticle: Function,
}
async function handleAddArticle(ev: any, article: any, setArticle: Function) {
  ev.preventDefault();



  const articleText = ev.target.elements.articleText.value;
  const title = ev.target.elements.title.value;
  // console.log(title, articleText);


  const { data } = await axios.post('/article/save-article', { title, articleText })
  const { result } = data;
  console.log(result.article);

  if (data.ok) {
    console.log(data);
    let i = -1;
    for (; i < result.article.length; i++);


    const newArticle = { username: data.username, title: result.article[i].title, text: result.article[i].articleText }
    console.log('needddddddddddddddddddddw');
    console.log(newArticle);
    // setArticle([...article , newArticle]) 

  }

}
function Home(prop: propArticle) {
  const { article, setArticle } = prop;
  return (
    <div>
      <Article article={article} setArticle={setArticle} />

      <div className='style-article'>


        <em style={{ fontSize: ' clamp(1rem, 2.5vw, 2rem)' }}>to add a article</em>


        <form onSubmit={event => handleAddArticle(event, article, setArticle)}>

          <input type="text" name="title" placeholder='put a title' required />
          <input type="text" name='articleText' placeholder='write here an article' required />

          <input type="submit" value="add" />
        </form>
      </div>

    </div>
  )
}

export default Home;