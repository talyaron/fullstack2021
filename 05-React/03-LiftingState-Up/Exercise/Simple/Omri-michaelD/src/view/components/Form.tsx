interface colorProps {
  setBackground: Function
  setTextColor: Function
}

export const Form = (props:colorProps) => {
    const {setBackground, setTextColor} = props;
    function HandleSubmit(ev:any) {
        ev.preventDefault();
        const backgroundColor = ev.target.elements.backgroundColor.value;
        const textColor = ev.target.elements.textColor.value;
        setBackground(backgroundColor);
        setTextColor(textColor);
        //console.log(backgroundColor, textColor)
    }

  return (
    <form onSubmit={HandleSubmit}>
        <p className='myText'>my text</p>
        <input type="text" name='textColor' placeholder='text color' />
        <input type="color" name='backgroundColor' placeholder='color' />
        <button type='submit'>submit</button>
    </form>
  )
}

export default Form
