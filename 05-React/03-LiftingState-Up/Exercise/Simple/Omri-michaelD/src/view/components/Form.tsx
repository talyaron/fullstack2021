interface colorProps {
    BackGcolor: Function
    textColor: Function
}

export const Form = (props:colorProps) => {
    const {BackGcolor, textColor} = props;
    function HandleSubmit(ev:any) {
        ev.preventDefault();
        const color = ev.target.color.value;
        const tColor = ev.target.text.value;
        BackGcolor(color);
        textColor(tColor);
    }

  return (
    <form onSubmit={HandleSubmit}>
        <p className='myText'>my text</p>
        <input type="text" name='text' placeholder='text' />
        <input type="color" name='color' placeholder='color' />
        <button type='submit'>submit</button>
    </form>
  )
}

export default Form
