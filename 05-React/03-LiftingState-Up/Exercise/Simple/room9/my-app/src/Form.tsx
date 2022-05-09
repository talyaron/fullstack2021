interface colorProps {
    setTextColor: Function;
    setBodyColor: Function
}


const Form = (props: colorProps) => {
    function handleChangeColor(ev: any) {
        ev.preventDefault();
        const { setTextColor, setBodyColor } = props
        const textColor = ev.target.elements.textColor.value
        const bodyColor = ev.target.elements.bodyColor.value

        setTextColor(textColor)
        setBodyColor(bodyColor)
    }
    return (
        <form onSubmit={handleChangeColor} >
            <input type="color" name="textColor" id="" placeholder="choose the text color" />
            <input type="color" name="bodyColor" id="" placeholder="choose the background color" />
            <input type="submit" />
        </form>
    )
}

export default Form