import React , {useState} from 'react';


import './view/style/global.scss'
import Box from '../src/view/components/Box';
import AddBox from './view/components/AddBox';
// import picFamily from '../picFamily/Screenshots.dani.jpg'


//<img src={pdt} alt="Logo" />;



function App() {

  const [boxes , setBoxes] = useState(
    [
      {
        id:7 , title:'El mario' , img: "https://gcdnb.pbrd.co/images/sMB768fPmo9b.png?o=1"
      },
      {
        id:3 , title:'La mama' , img: "https://gcdnb.pbrd.co/images/E1hz3dQSqdVe.png?o=1"
      },
      {
        id:3 , title:'Yonatan' , img: "https://gcdnb.pbrd.co/images/6RypyJwgwT0G.png?o=1"
      },
      {
        id:2 , title:'Yair' , img: "https://gcdnb.pbrd.co/images/b0QjllfW8qG3.png?o=1"
      },
      {
        id:1 , title:'Daniel' , img:'https://gcdnb.pbrd.co/images/bOkFb3WvDuih.png?o=1'
      },
      {
        id:4 , title:'Yoel' , img: "https://gcdnb.pbrd.co/images/mgfpOtMX5Ubw.png?o=1"
      },
      {
        id:5 , title:'Noam' , img: 'https://gcdnb.pbrd.co/images/1EIM1DlkiV4E.png?o=1'
      },
    ]
  )

  return (
    <div className="App">
  
      <div className='family '>welcome to my family</div>

      <AddBox boxes = {boxes} setBoxes = {setBoxes} />
      {boxes.map((box,i) =>{
          return <Box key = {i} id ={box.id} title = {box.title} img={box.img} boxes = {boxes} setBoxes = {setBoxes} />
      })}
      

      </div>
  );
  {/* <Box id = {boxes[0].id} title =  {boxes[0].title} img = {boxes[0].img}/> */}//no array
}

export default App;
