import React from 'react';
import logo from "../images/logo.png"

interface HeaderProps{
    hairColors:Array<ShopCardsProps>
}
interface ShopCardsProps{
    imgUrl:string;
    productName:string;
    price:number;
    id:string;
    
  
    
   }


 const Header = (props:HeaderProps) => {
     const {hairColors}=props
     const numberOfProducts=hairColors.length

    
         if(numberOfProducts>=10){
            alert("hey")
         }
     
  return (
      <div className="header">
          
          <img src={logo}/>
          <h1 >SHSHop </h1>
          <div >counter:{numberOfProducts}</div>
         
    
      </div>
    
  )
}

export default Header 
