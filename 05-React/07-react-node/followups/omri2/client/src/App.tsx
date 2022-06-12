import { useState, useEffect } from 'react';
import './view/styles/global.scss';
import axios from 'axios';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './view/pages/Main';
import Title from './view/pages/Title';
import Article from './view/pages/Article';



function App() {

  const [blogs, setBlogs] = useState<Array<Blog>>([])

  interface Blog {
    _id:string
    title: string
    article: string
  }
  
  async function handleSubmit(ev: any) {
    ev.preventDefault();
    try {
      const title = ev.target.title.value;
      const article = ev.target.article.value;
      // console.log(title, article)
      if(title && article){
         await axios.post('api/blogs/add-blog', {title,article});
      }
      ev.target.reset()
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='title' />
        <input type="text" name='article' placeholder='article' />
        <input type="submit" value='submit' />
      </form> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Title blogs={blogs} setBlogs={setBlogs}/>}></Route>
            <Route path=':articleId' element={<Article blogs={blogs}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
