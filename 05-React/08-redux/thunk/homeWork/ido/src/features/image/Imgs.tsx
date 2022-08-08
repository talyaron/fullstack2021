import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {getImageAsync,selectedImage,imgStatus, Status} from './imgSlice';
import axios from 'axios';

import './spinner.css';

export default function Text() {

  const img = useAppSelector(selectedImage);
  const status = useAppSelector(imgStatus);
  
  const dispatch = useAppDispatch();
  
  async function changeImage(){
    dispatch(getImageAsync());  
  }

  return (
    <div className='img'>
    {status === Status.LOADING ?
    <span className="loader"></span>:
    <img src={img} alt="" />}
    
    <button style={{width:'50%',height:'20px'}} onClick={changeImage}>get image</button>
      </div>
    
  );
}
