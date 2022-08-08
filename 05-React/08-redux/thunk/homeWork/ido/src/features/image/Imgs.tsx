import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {changeImg,selectedImage,imgStatus} from './imgSlice';
import axios from 'axios';

import styles from './Counter.module.css';

export default function Text() {

  const img = useAppSelector(selectedImage);
  const status = useAppSelector(imgStatus);
  
  const dispatch = useAppDispatch();
  
  async function changeImage(){
     await axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
          const imgURL = response.data.message;
          dispatch(changeImg(imgURL));  
        });
  }

  return (
    <div className='img'>
    {status === "loading" ?
    <div className="lds-facebook"><div></div><div></div><div></div></div>:
    <img src={img} alt="" />}
    
    <button style={{width:'50%',height:'20px'}} onClick={changeImage}>get image</button>
      </div>
    
  );
}
