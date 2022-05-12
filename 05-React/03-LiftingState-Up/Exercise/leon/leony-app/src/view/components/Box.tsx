interface Boxprops {
    text: string;
    title: string;
    img: any;
}

const Box = (props: Boxprops) => {
    const { text, title, img } = props;
    return (
        <div className="box">
            <h1>{title}</h1>
            {img}
            <p>{text}</p>
        </div>
    );
}
export default Box;