interface BoxProps {
    img: String,
    title: String,
    text: String,
}
const Box = (props: BoxProps) => {
    const { text, title, img } = props;
    return (
        <div className="card">

            <img
                src={`${img}`}
                alt='Beer picture'
            />
            <p className="boxP">{text}</p>
            <h1>{title}</h1>
        </div>
    )
}

export default Box