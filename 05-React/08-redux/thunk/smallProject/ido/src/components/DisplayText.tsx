import React, { useState } from 'react';
import axios from 'axios'

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {selectText,textAdd,editText} from '../features/text/textSlice';

import styles from './Counter.module.css';

interface DisplayTestProps{
  setClickedId:Function;
  setLineClicked:Function;
  clickedId:string;
  lineClicked:boolean
}

export default function DisplayText(props:DisplayTestProps) {

  const {setClickedId,setLineClicked,clickedId,lineClicked} = props;

  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');


  
  async function edit(ev:any){
    const lineId = ev.target.id;
    setClickedId(lineId)
    setLineClicked(true)
    
  }
async function editLine(ev:any){
//   ev.preventDefault()
//   const newValue = ev.target.elements.textEdit.value;
//   const id = ev.target.elements.textEdit.id;
//   console.log(newValue,id);

//   const list = [...text];
//   list.map(line => {
//     if(line.id === id){
//       line.text = newValue;
//     }
//   })
//   setLineClicked(false)
//   dispatch(editText(list))
  
}
if(lineClicked){
  return (
    <>
    {text.map((line:any , i:number) => {
      if( line.id === clickedId ){
        return (
          <form className='addTest' onSubmit={editLine}>
        <input type="text" name='edit' style={{border:"2px solid black",width:"50%",margin:'auto'}}/>
        <input type="submit" value="submit"/>
      </form>
        )
      }else {
        return (
          <div key={i} style={{border:"2px solid black",width:"50%",margin:'auto'}} id={line.id} 
          onClick={edit}>{line.text}</div>
        )
      }
       
        
      })
        
    }
    </>
    
  );
}
  return (
    <>
    {text.map((line:any , i:number) => {
        return (
          <div key={i} style={{border:"2px solid black",width:"50%",margin:'auto'}} id={line.id} 
          onClick={edit}>{line.text}</div>
        )
        
      })
        
    }
    </>
    
  );
}
