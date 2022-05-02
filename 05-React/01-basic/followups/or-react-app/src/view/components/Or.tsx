interface OrProps{
  img:string;
  price:string;
  desc:string;
}

function Or(props:OrProps) {

  const {img ,price, desc} = props
  return (
    <div className="or">
      <img src={img} alt="" />
    <p>{price}</p> 
    <p>{desc}</p>
    </div>
  )
}

export default Or