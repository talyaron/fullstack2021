import { useState } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';

interface Product {
  imgUrl:string
  title:string
  desc:string
  price:string
  id:string
}

function App() {
  const [products , setProducts] = useState<Array<Product>>([])

  function uid() {
    return Math.random().toString(36).slice(-6);
  }
  return (
    <div className="App">
      <header className="App-header">
        <NewProduct />
      </header>
    </div>
  );
}

export default App;
