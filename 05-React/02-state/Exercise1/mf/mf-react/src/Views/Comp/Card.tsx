interface CardProps {
    img: String;
    text: String;
    id: String;
}


const Card = (props: CardProps) => {
    const { img, text, id } = props;

    return (
        <div className="card">
            <img
                src={`${img}`}
            />
            <p>{text}</p>
            <button  id={`${id}`}></button>
        </div>
    )
}

export default Card