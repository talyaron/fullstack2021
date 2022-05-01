interface BodyProps {
    img: string;
}

const body = (props: BodyProps) => {
    const {img} = props;
    return (
        <div className='body'>
            <img src = {img} />
        </div>
    );
};

export default body 