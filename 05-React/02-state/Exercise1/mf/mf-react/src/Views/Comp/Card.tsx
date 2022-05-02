interface CardProps {
    img: String;
    text: String;
}


const Card = (props: CardProps) => {
    const { img, text } = props;

    return (
        <div className="card">
            <img
                src={`${img}`}
            />
            <p>{text}</p>
        </div>
    )
}

export default Card