interface BoxProps {
    text: string;
    title: string;
    img: string;
}

const Box = (props: BoxProps) => {
    const { text, title, img } = props;
    return (
        <div className='box'>
            <img src={img} />
            <div className='title'>{title}</div>
            <div className='text'>{text} </div>
        </div>
    );
};

export default Box