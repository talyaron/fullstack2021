import React from 'react'


 interface ShopCardsProps{
  imgUrl:string;
  productName:string;
  price:number
 }
 const ShopCards = (props:ShopCardsProps) => {
   const {imgUrl,productName,price}=props
  return (
    <div className="shopCard">
           
      <img src={imgUrl} alt={imgUrl} />
      <h3>{productName}</h3> 
      <p>{price}</p>
      


    </div>
  )
}

export default ShopCards
