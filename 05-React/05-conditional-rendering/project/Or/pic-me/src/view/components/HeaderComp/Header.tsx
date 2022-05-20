interface pic{
  picUrl:any;
  people:string;
  time:string;
  id:string
  }
  
interface headerProps{
  pictures:Array<pic>
  counter:number;
  setCounter:Function
}

const Header = (props:headerProps) => {
  const {pictures,counter,setCounter} = props
  const picCount = pictures.length
  setCounter(picCount)

  return (
    <div>
      <h1>Or & Livnat</h1>
      <h3>Number Of Pictures:{counter}</h3>
    </div>
  )
}

export default Header 