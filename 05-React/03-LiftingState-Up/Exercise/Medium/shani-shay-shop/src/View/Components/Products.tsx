   import React from 'react';
   import ShopCards from "./ShopCards"


 

   interface ProductProps{
    hairColors:Array<any>;
    setColors:Function;
    handlePopForm:Function
  
   }
   interface ShopCardsProps{
    imgUrl:string;
    productName:string;
    price:number;
    id:string;
    setColors:Function;
    hairColors:Array<any>;
  
    
   }
  
   
    const Products = (props:ProductProps) => {
      const {hairColors,setColors,handlePopForm}=props
     return (
         <div className="products">
        {hairColors.map((product,i)=>{
            return <ShopCards  hairColors={hairColors} setColors={setColors} handlePopForm={handlePopForm} id={product.id} key={i} imgUrl={product.imgUrl} 
            productName={product.productName} price={product.price}/>
          })}
        </div>
     )
   }

   export default Products
   