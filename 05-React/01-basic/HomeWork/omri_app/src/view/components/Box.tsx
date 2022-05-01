interface BoxProps {
    img: string;
}

const box = (props: BoxProps) => {
    const {img} = props;
    return (
        <div className='box'>
            <img src = {img} />
        </div>
    );
};

export default box 