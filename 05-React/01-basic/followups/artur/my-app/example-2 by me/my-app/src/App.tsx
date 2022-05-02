import React from 'react';
import './View/styles/global.scss';
import Box from './View/Components/Box'
import 'animate.css';
interface BoxProps{
  photo : string,
  
  

}
const boxes:Array<BoxProps> = [{  photo:"https://assets.hongkiat.com/uploads/programming-jokes/joke-hardware.jpg"},
{ photo:"https://assets.hongkiat.com/uploads/programming-jokes/joke-job-arrays.jpg"},
{ photo:"https://assets.hongkiat.com/uploads/funny-css-puns/css-puns-wife.jpg"},
{photo:"https://assets.hongkiat.com/uploads/programming-jokes/joke-semi-colon.jpg"}]
function App() {
  return (
    <div className="App">
      <div className='App-flex'>
       {boxes.map((box, i)=>{return <Box key={i} photo={box.photo} />})}
      </div>
      
    </div>
  );
}

export default App;
