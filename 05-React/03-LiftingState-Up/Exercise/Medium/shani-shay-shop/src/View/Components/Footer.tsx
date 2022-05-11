import React from "react";
import ShopCards from "./ShopCards"

interface UpdateProps{
  hairColors:Array<any>;
  setColors:Function

 }

const Footer = (props:UpdateProps) => {
  const {hairColors,setColors}=props
  function handleUpdateProduct(ev:any){
    ev.preventDefault()
    const newName=ev.target.elements.newName.value;
    const newImgUrl=ev.target.elements.newImgUrl.value;
    const newPrice=ev.target.elements.newPrice.valueAsNumber;
    const id=ev.target.id;

    const foundIndex = hairColors.findIndex((chosenProduct) => chosenProduct.id === id);
    console.log(foundIndex);
    let array=[...hairColors];
    let chosenProduct={...hairColors[foundIndex]};
    chosenProduct.productName=newName;
    chosenProduct.imgUrl=newImgUrl;
    chosenProduct.price=newPrice;
    array[foundIndex]=chosenProduct;
    setColors(array)

    }
  return (
   

    <div className="footer">
      <form onSubmit={handleUpdateProduct} className="updateProductForm">
        <input type="text" name="newName" placeholder="Update product name " />
        <input type="text" name="newImgUrl" placeholder="Update product img " />
        <input
          type="number"
          name="newPrice"
          placeholder="Update product price "
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Footer;
