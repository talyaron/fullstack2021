interface ArrProps{
imgSrc:string
Name:string
}
 const Arr = (props:ArrProps) => {
     const{imgSrc,Name}= props
   return (
    <div><img src={imgSrc} />
    <p>{Name}</p>
    </div>
  )
}
export default Arr