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
                alt="Not a Good Joke"
            />
            <p>{text}</p>
        </div>

    )
}

export default Card