import { useState } from "react";


interface FormProps {
  setText:Function;
  updateFunction:Function;
}
function Form(props: FormProps) {
  const { setText, updateFunction } = props;
  function handleUpdateFunc(ev:any) {
    ev.preventDefault();
    const text:string = ev.target.text.value;
    const textColor: string = ev.target.textColor.value
    const bg: string = ev.target.bgColor.value
    console.log(textColor, bg);
    setText(text)
    updateFunction(textColor, bg)
  }
  return (
    <form onSubmit={handleUpdateFunc}>
      <label htmlFor="text">Choose your last words</label>
      <input type="text" name="text" id="text"/>
      <label htmlFor="textColor">Choose Text Color</label>
      <input type="color" name="textColor" id="textColor"  />
      <label htmlFor="bgColor">Choose Background Color</label>
      <input type="color" name="bgColor" id="bgColor" />
      <input type="submit"/>
    </form>
  );
}

export default Form;
