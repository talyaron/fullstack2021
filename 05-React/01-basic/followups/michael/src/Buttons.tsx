interface ButtonsProp {
    text: String,
}

const Buttons = (props: ButtonsProp) => {
    const {text} = props;

    return (
        <div>
        <div className="button">{text}</div>
        <button>Increment</button>
        </div>
    )

}

export default Buttons