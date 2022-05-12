import React from 'react';
import logo from './logo.svg';
import Header from './view/Components/Header'
import Box from './view/Components/Box';
import './view/styles/global.scss';
import { text } from 'node:stream/consumers';


interface BoxProps{
  text:string
  title:string
  img:string
}
// interface HeaderProps{
//   text:string
// }

  




const boxes:Array<BoxProps>=[
  {text:'Audio coder' , title:'Joke #1', img:'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Jokes-GitHub-Code-824x1024.jpg?x34900'},
  {text:'Cutting the branch you sitting on' , title:'Joke #2', img:'https://miro.medium.com/max/1400/1*9edgsm2B2q5s21SnYB2QUQ.png'},
  {text:'You will never know..' , title:'Joke #3', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI1Z2PSDzUkSJxIMNLJZOzpxiBCA3SJuMeA&usqp=CAU'},
  {text:'Just kidding' , title:'Joke #4', img:'https://i.pinimg.com/originals/31/45/73/314573bcfba2ededc03b5e5a45d3e938.png'},
  {text:'Raise' , title:'Joke #5', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AHBRzXwNKEMIcUb7DVBCd6fmfgNHWAU3JA&usqp=CAU'},
  {text:'Beard:none' , title:'Joke #6', img:'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Web-Developer-Programming-Jokes-1024x1018.jpg?x34900'},
  {text:'Now we can start' , title:'Joke #7', img:'https://devhumor.com/content/uploads/images/April2020/What-Should-I-Name-My-Class---Funny-Programming-Jokes---Comics---Fun.png'},
  {text:'No bad code' , title:'Joke #8', img:'https://miro.medium.com/max/1096/1*eYw0R0hVszGqyWwUY7k1bg.png'},
  {text:'And still counting' , title:'Joke #9', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8QzoZlQwTx8-MTph0gF0xXE_Cyo4qM_jJ7g&usqp=CAU'},
  {text:'Raise' , title:'Joke #10', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AHBRzXwNKEMIcUb7DVBCd6fmfgNHWAU3JA&usqp=CAU'},
  {text:'Index' , title:'Joke #11', img:'https://www.freelancinggig.com/blog/wp-content/uploads/2019/02/joke-02.png'},
  {text:'That can happen' , title:'Joke #12', img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/03/6228a5e33bb72_n2wphzn6vgc81-png__700.jpg'},
  {text:'Where are you?' , title:'Joke #13', img:'https://i.pinimg.com/originals/72/03/68/72036883039a3491283727d23a4adf9f.jpg'},
  {text:'Who knows' , title:'Joke #14', img:'https://www.digitallatestnews.in/wp-content/uploads/2022/03/programmer-funny-coding-jokes-fb.png?v=1646908740'},
  {text:'Does not work in real life' , title:'Joke #15', img:'http://checkall.in/wp-content/uploads/2016/05/programming-jokes.jpg'},
  {text:'Boo' , title:'Joke #16', img:'https://i.redd.it/cyf00eldmos31.png'},
  {text:'Does it helps?' , title:'Joke #17', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SVaQ4FO6Y3zVHy4X5zlxGT7r5JOiYspu2g&usqp=CAU'},
  {text:'Cant argue' , title:'Joke #18', img:'https://static.displate.com/280x392/displate/2020-05-08/3aa3a65c1ff52897518a5a6372d135bc_31e26b1587f177408c7f79af1561e071.jpg'},
  {text:'Spiders' , title:'Joke #19', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Jqr0DDXmMlObvBTpW_mxhHFkXfVcR0ScYg&usqp=CAU'},
  {text:'Ten' , title:'Joke #20', img:'https://assets.hongkiat.com/uploads/programming-jokes/joke-programmers-butters.jpg'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header">
         <h5>20 JOKES ABOUT PROGRAMMING</h5>
       </div>
        <img src={'https://raw.githubusercontent.com/gist/patevs/b007a0e98fb216438d4cbf559fac4166/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif'} className="App-logo" alt="logo" />
        <div className="container">
        {boxes.map((box,i)=>{return <Box key={i} text={box.text} title={box.title} img={box.img}/>})}
        </div>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
