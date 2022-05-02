import React from 'react'

interface BoxProps{
    title:string;
    price:number;
    imgUrl:string;
    adjustment:string;
    shipping:string;
   

}
const Box = (props:BoxProps) => {
    const {title,price,imgUrl,adjustment,shipping}=props
  return (
    <div className='box' >
        <img src={imgUrl} alt="?"/>
        <h1 >{title}</h1>
        <p className='price'>${price}</p>
        <p className='adjustment'>{adjustment}</p>
        <p className='shipping'>{shipping}</p>
    </div>
  );
};

export default Box;
