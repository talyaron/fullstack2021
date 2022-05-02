interface CardProps {
  imgSrc: any;
  text: any;
}

function Card(props: CardProps) {
 const {imgSrc, text }= props;
  return <div className="card">
      <img src={`${imgSrc}`}alt={text} />
      <p>{text}</p>
  </div>;
}

export default Card;
