import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  decrementByValue,
  incrementAsync,
  decrementIfOdd,
  selectGivenText,
} from '../../slices/textSlice';
import {selectAmount, selectCount} from '../../slices/counterSlice'
import styles from '../styles/Text.module.scss';
import { useSelector } from 'react-redux';

export function Text() {
  const givenText = useAppSelector(selectGivenText);
  const count = useAppSelector(selectCount)
  const amount = useSelector(selectAmount)
  const [addingText, setAddingText] = useState('')
  const dispatch = useAppDispatch();
  const textValue = String(addingText) || '';
const incrementValue = Number(count)
  const stringToAdd = textValue.repeat(incrementValue);
  // const stringToDecrementByAmount = textValue.repeat(incrementAmount)

  return (
    <div style={{width: '100vw'}} >
      <div style={{width: '90%'}} className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(stringToAdd))}
        >
          - By Value
        </button>

        <span
        aria-label="Text You Are About To Add"
        style={{width: '90%'}} className={styles.value}>{addingText.length > 0 ? addingText : 'Type something below! ' }</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment(stringToAdd))}
        >
          + By Value
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set Text"
          value={addingText}
          onChange={(e) => setAddingText(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(textValue.repeat(amount)))}
        >
          Add Text X Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(amount))}
        >
          Decrement Text X Amount
        </button>
        {/* <button
          className={styles.asyncButton}
          // onClick={() => dispatch(incrementAsync(count))}
        >
          Add Async
        </button> */}
        <button
          className={styles.button}
          onClick={() => dispatch(decrementIfOdd(count))}
        >
          Decrement Text By Value If Odd
        </button>
      </div>
    </div>
  );
}
