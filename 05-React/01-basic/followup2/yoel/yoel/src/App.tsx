
import logo from './logo.svg';
import './View/style/global.scss';

import Box from './View/Components/Box'
import Card from './View/Components/Card';
import { title } from 'process';
interface BoxProps{
    text:string,
    title:string
}
const boxes:Array<BoxProps> = [
    {text:'text' , title:'title'},
    {text:'text2' , title:'title2'},
    {text:'text3' , title:'title3'},
    {text:'text4' , title:'title4'},
]
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {boxes.map((box,i) => {
          return(<Box text = {box.text} title = {box.title} key = {i}/>)
        })}
        <Card name = 'picsum' img= 'https://picsum.photos/200/300'/>
        <Card name = 'picsum' img = 'https://picsum.photos/200/300'/>
        <Card name = 'picsum' img = 'https://picsum.photos/200/300'/>
         
      </header>
    </div>
  );
}

export default App;
