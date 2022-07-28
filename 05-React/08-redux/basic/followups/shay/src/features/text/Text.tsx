import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectGivenText,
} from './textSlice';
import {selectAmount, selectCount} from '../counter/counterSlice'
import styles from './Text.module.css';
import { useSelector } from 'react-redux';

export function Text() {
  const userText = useAppSelector(selectGivenText);
  const count = useAppSelector(selectCount)
  const amount = useSelector(selectAmount)
  const [addText, setAddText] = useState('')
  const dispatch = useAppDispatch();
  const textValue = String(addText) || 'no';
const incrementValue = Number(count)
  const stringToAdd = textValue.repeat(incrementValue);
  // const stringToDecrementByAmount = textValue.repeat(incrementAmount)
useEffect(()=>{
  console.log(count, 'count');
  console.log(amount, 'amount');
},[count])
// function handleInput(ev:any){
//   const text = ev.target.elements.text.value;
//   setAddingText(text);
// }

  return (
    <div>
    
      <div className={styles.row}>

        <span className={styles.value}>{userText}</span>

      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={addText}
          onChange={(e) => setAddText(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(textValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(textValue))}
        >
          Decrement Amount
        </button>
        <button
          className={styles.asyncButton}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

