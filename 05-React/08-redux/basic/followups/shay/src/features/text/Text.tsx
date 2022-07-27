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
  const givenText = useAppSelector(selectGivenText);
  const count = useAppSelector(selectCount)
  const amount = useSelector(selectAmount)
  const [addingText, setAddingText] = useState('')
  const dispatch = useAppDispatch();
  const textValue = String(addingText) || 'no';
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
      {/* <input type="text" name='text' placeholder='enter your text here'  onKeyUp={(ev)=>{handleInput(ev.target)}}/> */}
      <div className={styles.row}>
        {/* <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(stringToAdd))}
        >
          -
        </button> */}
        <span className={styles.value}>{givenText}</span>
        {/* <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(stringToAdd))}
        >
          +
        </button> */}
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={addingText}
          onChange={(e) => setAddingText(e.target.value)}
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
          // onClick={() => dispatch(incrementAsync(count))}
        >
          Add Async
        </button>
        {/* <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(count))}
        >
          Add If Odd
        </button> */}
      </div>
    </div>
  )
}

