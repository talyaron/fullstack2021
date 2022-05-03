export interface Boxprops {
    img:string;
    title: string;
    text: string;
}
const Box = (props: Boxprops) => {
    const { title, text,img} = props;
    return (
        <div>
            <img src={img}/>
            <h1>{title}</h1>
            <h3>{text}</h3>
        </div>
    )
}

export default Box