import React from 'react'
 

 interface ShopCardsProps{
  imgUrl:string;
  productName:string;
  price:number;
  id:string;
  setColors:Function;
  hairColors:Array<any>;
  handlePopForm:Function

  
 }


 const ShopCards = (props:ShopCardsProps) => {
   const {imgUrl,productName,price,id,setColors,hairColors,handlePopForm}=props;

  

   function handleDeleteProduct(id:string){
     setColors(hairColors.filter (color=>color.id!==id))
   }
  return (
    

    <div className="shopCard" >
      
    
      <img src={imgUrl} alt={imgUrl} />
      <div className='shopCard__buttons'>
      <button id={id} onClick={()=>{handlePopForm(id)}}>Update</button>
      <button onClick={()=>handleDeleteProduct(id)}>Delete</button>
      </div>

      <div className='shopCard__flex'>
      <h3>{productName}</h3> 
      <p>{price}$</p>
      
      </div>
      


    </div>
  )
}

export default ShopCards
