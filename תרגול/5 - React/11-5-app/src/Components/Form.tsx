import React from "react";

interface FromProps {
  setImage: Function;
  setText: Function;
}

const Form = (props: FromProps) => {
  const { setImage, setText } = props;

  function getData(ev: any) {
    ev.preventDefault();

    const image = ev.target.elements.image.value;
    const text = ev.target.elements.text.value;

    console.log(image, text);

    setImage(image);
    setText(text);
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={getData}
    >
      <input type="text" name="image" />
      <input type="text" name="text" />
      <button type="submit">SEND</button>
    </form>
  );
};

export default Form;
