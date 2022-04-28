import logo from './logo.svg';
import './View/styles/global.scss';

import Box from './View/Components/Box';
interface BoxProps {
  text:string;
  title:string;
} 
const boxes:Array<BoxProps> = [
  {text:'aaa',title:'bbbb'},
  {text:'aaa2',title:'bbbb4'},
  {text:'aaa3',title:'bbb44345b4'},
  {text:'aaa4',title:'bbbb5'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {boxes.map((box, i)=>{ return <Box key={i} text={box.text} title={box.title}/>} )}
        

      
      </header>
    </div>
  );
}

export default App;
