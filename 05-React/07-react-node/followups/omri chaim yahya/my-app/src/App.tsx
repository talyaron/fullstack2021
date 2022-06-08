import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  async function handleSubmit(ev:any){
     ev.preventDefault()
    try {
       const title= ev.target.title.value
    const article= ev.target.article.value
    console.log(title, article);
if (title && article) {
  await axios.post ('api/blogs/add-blog',{title, article})

}
    } catch (error) {
     console.error(error) 
    }
  }

  return (
    <div className="App">
    <form className='blogs' onSubmit={handleSubmit}>
<input type="text" name='title' placeholder='title'/>
<input type="text" name='article' placeholder='article' />
<input type="submit" value='submit'/>
    </form>
    </div>
  );
}

export default App;
