interface Boxprops {
    title: string;
    text: string;
}
const Box = (props: Boxprops) => {
    const { title, text } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h3>{text}</h3>
        </div>
    )
}

export default Box