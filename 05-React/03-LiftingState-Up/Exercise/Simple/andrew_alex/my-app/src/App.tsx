import Form from './View/Components/Form'
// import Text from './View/Components/Text'
import './App.css';
import { useState } from "react"

interface colorInterface {
  text: String;
  background: String;

}



function App() {

  function handleColorChange(ev: any) {
    ev.preventDefault();
    const backgroundColor = ev.target.bgColor.value;
    const textColor = ev.target.textColor.value;
    console.log(changeColor);
    
    changeColor.text = textColor
    changeColor.background = backgroundColor
    setChangeColor(changeColor)
    const hello: any = document.querySelector('p')
    const bgHello:any = document.querySelector('body')
    hello.style.color =  changeColor.text;
    bgHello.style.backgroundColor = changeColor.background;
  }

  const [changeColor, setChangeColor] = useState<colorInterface>({ text: '', background: '' })

  return (
    <div className="App"  >
      <header className="App-header">
      {/* <Text colors={changeColor} /> */}
      <Form colorFunction={handleColorChange} />
      </header>
    </div>
  );
}

export default App;
