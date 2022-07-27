import React,{useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    toCapitalCase,selectMyText,
    incrementByAmount

} from './textSlice';

//isnt this export tha same as the one under? where is it מוגדר in the slice as reducer
export const Text = () =>  {
    const myText = useAppSelector(selectMyText);
    //what does mtText do???
    const dispatch = useAppDispatch();
    const [turnedText,setTurnedText]=useState(myText)
    //whats does this do in line 16
    const textValue = String(turnedText) ||"nope";

    //why does the text add on to the last state?

  return (
    <div>Text
        <input type="text" placeholder="text" value={turnedText}
          onChange={(e) => setTurnedText(e.target.value)}/>
          
        <p >{myText}</p>
        <button style={{backgroundColor:"blueviolet"}}
          
          onClick={() => dispatch(toCapitalCase(turnedText))}
        >
          to capital case
        </button>
        
        <button
          
          onClick={() => dispatch(incrementByAmount(textValue))}
        >
          last payload
        </button>
        
    </div>
  )
}

export default Text



