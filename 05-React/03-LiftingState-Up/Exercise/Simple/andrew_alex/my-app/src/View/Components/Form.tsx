interface FormProps {
    colorFunction:any;
}  

const Form = (props:FormProps) => {
const {colorFunction} = props;
    return (
        <div>
            <form onSubmit= { colorFunction} >
            <label htmlFor="textColor">choose text color</label>
                <input name="textColor" type="color" id="textColor"/>
            <label htmlFor="bgColor">choose background color</label>
                <input name="bgColor" type="color" id="bgColor"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form