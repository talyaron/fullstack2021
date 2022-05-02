
interface GagProps{
  title: string;
  imgSrc: string;
  description: string;
}
function Gag(props: GagProps) {
  const {title, imgSrc, description} = props;
  return (
    <div className="gag">
      <img src={imgSrc} alt={description} />
      <p>{title}</p>
    </div>
  )
}

export default Gag