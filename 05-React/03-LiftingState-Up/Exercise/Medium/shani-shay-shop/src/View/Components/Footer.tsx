import React from "react";
import ShopCards from "./ShopCards"

interface UpdateProps{
  hairColors:Array<any>;
  setColors:Function;
  getId:string;
 


 }
//  interface ShopCardsProps{
//   imgUrl:string;
//   productName:string;
//   price:number;
//   id:string;
  

  
//  }
const Footer = (props:UpdateProps) => {
  const {hairColors,setColors,getId}=props
  function handleUpdateProduct(ev:any){
    ev.preventDefault()
    const newName=ev.target.elements.newName.value;
    const newImgUrl=ev.target.elements.newImgUrl.value;
    const newPrice=ev.target.elements.newPrice.valueAsNumber;
    

    const foundIndex = hairColors.findIndex((chosenProduct) => chosenProduct.id === getId);
    console.log(foundIndex);
    let array=[...hairColors];
    let chosenProduct={...hairColors[foundIndex]};
    chosenProduct.imgUrl=newImgUrl;
    chosenProduct.productName=newName;
    
    chosenProduct.price=newPrice;
    array[foundIndex]=chosenProduct;
    setColors(array)

    }
  return (
   

    <div className="footer">
      <form onSubmit={handleUpdateProduct} className="updateProductForm">

      <input type="text" name="newImgUrl" placeholder='imgurl'/>
       <input type="text" name="newName" placeholder="new product name" />
        
        <input
          type="number"
          name="newPrice"
          placeholder=" new price"
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Footer;
