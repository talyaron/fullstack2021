interface Formprops {
  setColor: Function;
  setBackgroundcolor: Function;
}


const Form = (props: Formprops) => {
  const { setColor, setBackgroundcolor } = props;
  function handleChangeColor(ev: any) {
    ev.preventDefault();
    const Color: string = ev.target.elements.color.value;
    const Backgroundcolor:string = ev.target.elements.backgroundcolor.value;

    console.log(Color, Backgroundcolor);
    setColor(Color)
  setBackgroundcolor(Backgroundcolor)
    
  }

  
  return (
    <form onSubmit={handleChangeColor}>
      <input type="color" name="color" />
      <input type="color" name="backgroundcolor"  />
      <input type="submit" value="Update" />
    </form>
  );
};

export default Form;
