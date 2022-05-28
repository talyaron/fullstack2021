import { imageListClasses } from '@mui/material'
import React from 'react'

interface CardProps{
    item:object;
}


const Card = (props:CardProps) => {

    const {item} = props;

  return (
    <div className='card'>
    
    <img src={item.url} alt={item.name}/>
    <p>{item.name}</p>
    <p>{item.price}$</p>
    
    
    </div>
  )
}

export default Card