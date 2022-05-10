import React,{useState} from 'react';

import './View/styles/global.scss';

import Header from "./View/Components/Header";
import Form from "./View/Components/Form";
import Products from './View/Components/Products';
import ShopCards from "./View/Components/ShopCards";
import Footer from "./View/Components/Footer";

 




function App() {
  const [hairColors,setColors]=useState([])

  return (
    <div className="App">
      <header className="App-header">
       
       <Header/>
       <Form setColors={setColors} hairColors={hairColors}/>
       <Products hairColors={hairColors} />
       
       
       {/* <Products/> */}
       
      
       
      
      </header>
    </div>
  );
}

export default App;
