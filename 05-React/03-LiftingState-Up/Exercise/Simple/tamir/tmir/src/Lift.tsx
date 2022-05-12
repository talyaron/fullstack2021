interface LiftProps {
    setscreen: Function;
    settext: Function;
}

const Lift = (props: LiftProps) => {
    const { setscreen, settext } = props
    function handlesubmit(ev: any) {
        ev.preventDefault();
        const screen = ev.target.elements.screen.value;
        const text = ev.target.elements.text.value;

        setscreen(screen)
        settext(text)
    }

    return (
        <form onSubmit={handlesubmit}>
            <input type="color" name="screen"  placeholder="your screen color here" />
            <input type="color" name="text"  placeholder="your text color here" />
            <input type="submit" value="submit" />
        </form>
    )
}

export default Lift

