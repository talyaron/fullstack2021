import React from 'react'


 interface ShopCardsProps{
  imgUrl:string;
  productName:string;
  price:number;
  id:string;
  setColors:Function;
  hairColors:Array<any>;

  
 }


 const ShopCards = (props:ShopCardsProps) => {
   const {imgUrl,productName,price,id,setColors,hairColors}=props;

   function handleUpdateProduct(){
     
    const formToggle=document.querySelector(".updateProductForm")
    formToggle?.classList.toggle("form")
    
    setColors(id)
     }

   function handleDeleteProduct(id:string){
     setColors(hairColors.filter (color=>color.id!==id))
   }
  return (
    

    <div className="shopCard" >
      <button id={id} onClick={handleUpdateProduct}>Update</button>
      <button onClick={()=>handleDeleteProduct(id)}>Delete</button>
      <img src={imgUrl} alt={imgUrl} />

      <div className='shopCard__flex'>
      <h3>{productName}</h3> 
      <p>{price}$</p>
      
      </div>
      


    </div>
  )
}

export default ShopCards
