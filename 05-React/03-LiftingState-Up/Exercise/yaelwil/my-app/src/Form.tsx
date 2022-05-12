interface FormProps {
    updateFunction?: Function;
    setBackgroundColor: Function;
    setTextColor: Function;
}

const Form = (props: FormProps) => {
    const { setBackgroundColor, setTextColor } = props;


    function handleUpdateColor(ev: any) {
        ev.preventDefault();
        const backgroundcolor: string =  ev.target.elements.backgroundColor.value;
        const textcolor: string = ev.target.elements.textColor.value;
        setBackgroundColor(backgroundcolor)
        setTextColor(textcolor)

        console.log(backgroundcolor,textcolor)
    }

    return (
        <form onSubmit={handleUpdateColor}>
            <p>select background and text Colors</p>
            <input type="color" className="backgroundColor"/>
            <input type="color" className="textColor" />
            <input type="submit" value="Update Colors" />
        </form>
    )
}








export default Form;