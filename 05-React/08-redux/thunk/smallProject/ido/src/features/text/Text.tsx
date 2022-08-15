import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectText,textAdd,editText} from './textSlice';
import styles from './Counter.module.css';
import DisplayText from '../../components/DisplayText';
import axios from 'axios';
import {addText} from './textAPI'


const uid = function () {return Date.now().toString(36) + Math.random().toString(36).substr(2);};


export default function Text() {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [lineClicked , setLineClicked] = useState(false)
  const [clickedId , setClickedId] = useState('')

  
  const incrementValue = Number(incrementAmount) || 0;

  async function addNewText(ev:any){
    ev.preventDefault()
    const inputText = ev.target.elements.text.value;
    const newLine = {id:uid(),text:inputText}
    const newArray = [...text,newLine]
    dispatch(textAdd(newArray))
    addText(inputText)
    ev.target.elements.text.value = "";
  }
  
      {/* <input type="file" accept="image/*" name='image' onChange={changeImage}/> */}

  return (
    <div className='window'>
     
      <form className='addTest' onSubmit={addNewText}>
        <input type="text" name='text' />
        <input type="submit" value="submit text"/>
      </form>
      
      <DisplayText setClickedId={setClickedId} lineClicked={lineClicked}
      setLineClicked={setLineClicked} clickedId={clickedId}/>

      </div>
    
  );
}
