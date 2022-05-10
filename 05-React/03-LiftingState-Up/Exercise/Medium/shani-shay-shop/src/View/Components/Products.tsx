   import React from 'react';
   import ShopCards from "./ShopCards"
   import Form from "./Form"

 

   interface ProductProps{
    hairColors:Array<any>
  
   }
   
    const Products = (props:ProductProps) => {
      const {hairColors}=props
     return (
         <div className="products">
        {hairColors.map((product,i)=>{
            return <ShopCards key={i} imgUrl={product.imgUrl} productName={product.productName} price={product.price}/>
          })}
        </div>
     )
   }

   export default Products
   