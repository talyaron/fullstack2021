interface BoxProps{
  text: string
  img:string
}
const box = (props:BoxProps) => {
  const {text, img}=props
  return (
    <div className="Box">
   <img src={img} alt="" />
   {text}
    </div>
  )
}

export default box

