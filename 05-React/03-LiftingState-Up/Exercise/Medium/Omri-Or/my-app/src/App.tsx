import { useState } from 'react';
import './App.css';
import NewProduct from './components/NewProduct';
import Content from './components/Content'
import Counter from './components/Counter'


interface Product {
  imgUrl:string
  title:string
  desc:string
  price:string
  id:string
}

function App() {
  const [products , setProducts] = useState<Array<Product>>([])
  

  return (
    <div className="App">
      <Counter products={products} />
      <header className="App-header">
        <NewProduct setProducts={setProducts} products={products} />
        <Content products={products} setProducts={setProducts}  />
      </header>
    </div>
  );
}

export default App;
