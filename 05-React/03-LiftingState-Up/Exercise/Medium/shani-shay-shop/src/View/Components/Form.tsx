import React from "react";

interface FormProps {
  setColors: Function;
  hairColors:Array<any>
}
const Form = (props: FormProps) => {
  const { setColors,hairColors } = props;
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  function handleAddProduct(ev:any){
      ev.preventDefault();
      const imgUrl=ev.target.elements.imgUrl.value;
      const productName=ev.target.elements.productName.value;
      const price=ev.target.elements.price.valueAsNumber;
      const id=uid()
    const card={imgUrl,productName,price,id}
      console.log(imgUrl,productName,price,id)
      setColors([...hairColors,card])
     
  }
  return (
    <form onSubmit={handleAddProduct}>
      <label htmlFor="imgUrl">Product Image</label>
      <input type="text" id="imgUrl" name="imgUrl" />

      <label htmlFor="productName">Product Name</label>
      <input type="text" id="productName" name="productName" />

      <label htmlFor="price">Product Price</label>
      <input type="number" id="price" name="price" />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
