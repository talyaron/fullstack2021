
interface BoxProps {
    text: string;
    title: string;
}

const Box = (props: BoxProps) => {
    const { text, title } = props;

    return (
        <>
        <h1> title {title} </h1>
        <div>Box {text} </div>
        </>
    )
}

export default Box