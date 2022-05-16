import { useState } from 'react'//important 
import logo from './logo.svg';
import './View/style/global.scss';


import Form from './View/components/Form';

interface image {
  image: string,
  text: string
}

function App() {
  const [arrs, setArr] = useState<Array<image>>([]);//global for the app it's important to write this 
  async function handleSomething(obj: any) {//handleSomething  == otherFunciton

    setArr([...arrs, obj])//change the arr everytime something happend 


    // arrs.map((arr) => {
    // //   <div>
    // //     <img src={arr.image} alt="" />
    // //     <p>{arr.text}</p>

    // //   </div>

    // // })


  }

  return (
    <div className="App">
      <header className="App-header">
        <>
          {arrs.map((arr) => {
            <div>
              <img src={arr.image} alt={arr.image} />
              <p>{arr.text}</p>
            </div>
          })}
          {/* we want to bring the 'handleSomething' to the components 'Form' */}
          <Form handleSomething={handleSomething} />
        </>
      </header>
    </div>
  );
}

export default App;
