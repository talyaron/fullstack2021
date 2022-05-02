import React from 'react';
import logo from './logo.svg';
import Header from './View/Components/Head';
import Circle from './View/Components/Circle';
import Downer from './View/Components/Downer';
import './App.scss';

interface Circle{
  backgroundImage:string
}
const circles:Array<Circle> = [
  {backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB62TniXUcKR63JqSpLGKSO_H98o5boS5jmf4MQK43tCzicKaX3lC57dXijswHsuajuw&usqp=CAU"},
  {backgroundImage:"https://i.pinimg.com/originals/26/73/88/26738800045f59cda97494dd7bd1b7b4.jpg"},
  {backgroundImage:"https://i.pinimg.com/736x/5b/97/63/5b9763f56cbf375cd6a5e91e737c4637.jpg"},
   { backgroundImage:"https://i.pinimg.com/564x/2f/4a/f0/2f4af02e4f6bbbee7a3c6cb8aa64a556.jpg" }]

function App() {
  return (
    <>
    <Header textOne="one" textTwo='two'/>
    <div className="middle">
    {circles.map((circle, i) => <Circle key={i} url={circle.backgroundImage}  />)}
    </div>
    <Downer downer="Downer" />
    </>
  );
}

export default App;
