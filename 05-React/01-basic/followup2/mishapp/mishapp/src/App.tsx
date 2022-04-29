
import Box from './view/components/Box';

import './view/styles/global.scss';

interface BoxProps {
  img: string;
}

const boxes: Array<BoxProps> = [

  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},
  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},
  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},
  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},
  {img:'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png'},


]


function App() {

  return (
    <div className="App">
        {boxes.map ((box, i) => <Box key={i} img={box.img}/>)}
    </div>
  );
}

export default App;
