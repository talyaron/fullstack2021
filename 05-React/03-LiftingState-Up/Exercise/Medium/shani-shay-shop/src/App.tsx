import React,{useState} from 'react';

import './View/styles/global.scss';

import Header from "./View/Components/Header";
import Form from "./View/Components/Form";
import Products from './View/Components/Products';
import Footer from "./View/Components/Footer";

 




function App() {
  const [hairColors,setColors]=useState([])
  const [getId,setGetId]=useState("")

  function handlePopForm(id:string){
    
    const formToggle=document.querySelector(".updateProductForm")
    formToggle?.classList.toggle("form")
    console.log(id)
    setGetId(id)
    
   
  }

  return (
    <div className="App">
      <header className="App-header">
       
       <Header/>
       <Form setColors={setColors} hairColors={hairColors}/>
       <Products setColors={setColors} hairColors={hairColors} handlePopForm={handlePopForm}/>
       <Footer setColors={setColors} hairColors={hairColors} getId={getId}/>
       
             
      
       
      
      </header>
    </div>
  );
}

export default App;
