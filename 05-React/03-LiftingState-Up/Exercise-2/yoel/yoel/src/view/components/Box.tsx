import EditBox from './EditBox'
interface BoxProps{
    id:number,
    title:string, 
    img:string,
    boxes:any,
    setBoxes:Function
}
function Box(prop:BoxProps) {
    const {id , title , img , boxes , setBoxes} = prop;
  return (
    <div>
        <h1>{title}</h1>
        <EditBox id = {id} boxes = {boxes} setBoxes = {setBoxes}/>
        <img src={img} alt={img} />
    </div>
  )
}

export default Box