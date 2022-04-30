
interface BoxProps {
    title: String,
    text: String
}
const Box = (props: BoxProps) => {
    const { text , title} = props
    return (
        <div className="box">
            <div>{text}</div>
            <div>{title}</div>

        </div>
    )
}

export default Box

