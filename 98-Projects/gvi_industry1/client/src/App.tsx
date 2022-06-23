import React , {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './view/pages/mentee/Profile/Form'
import Cards from './view/pages/mentee/Profile/Cards';



function App() {

  const [cards , setCards] = useState([])

  
  return (
    <div className="App">
      <Form setCards={setCards}></Form>
      <Cards cards={cards}></Cards>
      
    </div>
  );
}

export default App;
