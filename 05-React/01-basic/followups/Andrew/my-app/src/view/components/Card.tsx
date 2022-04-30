interface CardProps {
    img: string,
    title: string,
    price: string,

}
const Card = (props: CardProps) => {
    const { img, title, price } = props
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card__text">
                <h4>{title}</h4>
                <h5>$​{price}</h5>
                <p>+ $1.00/2% cashback</p>
                <p>Free shipping with $99 orders</p>
            </div>
        </div>
    )
}

export default Card