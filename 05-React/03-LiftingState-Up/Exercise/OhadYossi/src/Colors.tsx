

interface formColor {
  setColor: Function;
  setBackground: Function;

}

const Colors = (props: formColor) => {
  const { setColor, setBackground } = props;


  function updateColors(e) {
    e.preventDefault();
    const color = e.target.elements.color.value
    const background = e.target.elements.background.value
    console.log(color, background)
    setColor(color)
    setBackground(background)
  }

  return (
    <><h1> HELLO WORLD</h1><form onSubmit={updateColors}>
      <input type="color" name='color' placeholder="color" />
      <input type="color" name='background' placeholder="background" />
      <input type="submit" value='change' />
    </form></>
  );
};

export default Colors;
