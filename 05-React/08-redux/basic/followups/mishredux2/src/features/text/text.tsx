import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { useSelector } from 'react-redux';

import textSlice, {
 changeText,
} from './textSlice';


export function Text() {
  
  const text  = useSelector ((state:any) => state.text.value)
  // const count = useAppSelector(changeText);
  const dispatch = useAppDispatch();
  // const [text, SetText] = useState('...');

  

  return (
   <>
   <div>
    <input type='text' onChange={(e) => dispatch(changeText(e.target.value))}></input>
    {text}</div>
   </>
  );
}
