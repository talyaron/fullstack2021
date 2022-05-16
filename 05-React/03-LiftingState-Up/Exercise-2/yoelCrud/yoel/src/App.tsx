import React , {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Box from '../src/view/components/Box';


function App() {

  const [boxes , setBoxes] = useState(
    [
      {
        id:1 , title:'yoel' , img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      },
      {
        id:2 , title:'yair' , img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      },
      {
        id:3 , title:'yonatan' , img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      },
      {
        id:4 , title:'daniel' , img: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
      },
    ]
  )

  return (
    <div className="App">
      {boxes.map((box,i) =>{
          return <Box key = {i} id ={box.id} title = {box.title} img={box.img} boxes = {boxes} setBoxes = {setBoxes} />
      })}

      </div>
  );
  {/* <Box id = {boxes[0].id} title =  {boxes[0].title} img = {boxes[0].img}/> */}//no array
}

export default App;
