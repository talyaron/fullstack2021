import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  setAmount,
  selectAmount
} from '../../slices/counterSlice';
import { Text } from '../text/Text';
import styles from '../styles/Counter.module.scss';

export function Counter() {
  const count = useAppSelector(selectCount);
  const amount = useAppSelector(selectAmount);
  const dispatch = useAppDispatch();
const incrementValue = Number(amount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
        type="number"
          className={styles.textbox}
          aria-label="Set increment amount"
          defaultValue={amount}
          onChange={(e) => dispatch(setAmount(e.target.valueAsNumber))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount To Value
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(decrementByAmount(incrementValue))}
        >
          Decrement Value By Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add Amount To Value If It's Odd
        </button>
      </div>
      <Text/>
    </div>
  );
}