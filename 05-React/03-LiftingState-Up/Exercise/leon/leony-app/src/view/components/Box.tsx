//components
import EditBox from './EditBox';

interface Boxprops {
    text: string;
    title: string;
    img: any;
    id:string;
    updateTitle:Function
}

const Box = (props: Boxprops) => {
    const { id, text, title, img, updateTitle} = props;
    return (
        <div className="box">
            <h1>{title}</h1>
            {img}
            <p>{text}</p>
            <EditBox id={id} updateTitle={updateTitle} />
        </div>
    );
}
export default Box;