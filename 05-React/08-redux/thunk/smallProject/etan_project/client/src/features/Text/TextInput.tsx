import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
 selectText, add
} from './textSlice';

export function Counter() {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  const handleTextAdd = (ev:any) => {
    const value = ev.target.addText.value
    dispatch(add(value))
  }
  return (
    <div>
      <div >
      </div>
      <div>
        <form onSubmit={handleTextAdd}></form>
        <input
          name='addText'
          aria-label="Set increment amount"
          // value={incrementAmount}
          // onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
        >
          +
        </button>
       
      </div>
    </div>
  );
}
