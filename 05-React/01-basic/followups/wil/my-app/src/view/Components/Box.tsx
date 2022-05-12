interface BoxProps { text: string, title: string, img: string }






const Box = (props: BoxProps) => {
    const { text, title, img } = props;
    return (
    
        <div>
            <h4>{title}</h4>
            <img src={img}></img>
            <p>{text}</p>
        </div>
        )
}
export default Box;
