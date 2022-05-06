interface cardsProps{
  text: string
  img:string
  id: string
}
const box = (props:cardsProps) => {
  const {text, img, id}=props
  return (
    <div className="Box">
   <img src={img} alt="" />
   {text}
   {id}
    </div>
  )
}

export default box

