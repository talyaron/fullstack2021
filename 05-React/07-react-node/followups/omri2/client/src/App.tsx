import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
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
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='title' />
        <input type="text" name='article' placeholder='article' />
        <input type="submit" value='submit' />
      </form>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='title' element={<Title />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
