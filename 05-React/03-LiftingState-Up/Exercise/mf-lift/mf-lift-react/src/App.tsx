import { useState } from 'react';
import './Views/styles/global.scss';
import Header from './Views/Componants/Header';
import Form from './Views/Componants/Form';
import Card from './Views/Componants/Card';
import Button from './Views/Componants/Button';



interface SetProps {
  img: String;
  title: String;
  id: String;
}

function App() {

  const [array, setArray] = useState<Array<SetProps>>([]);

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>

        <Form array={array} setArray={setArray}></Form>

        {array.map((item, i) => {
                return (
                    <div key={i} className="wrapper">
                        <Card img={item.img} text={item.title} />
                        <Button id={item.id} />

                        
                    </div>
                )
            })}



      </header>
    </div>
  );
}

export default App;
