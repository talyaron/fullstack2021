import {Typography } from '@mui/material';
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
    <div className='header'>
      <Typography variant='h2' className='header__title' >Or & Livnat Wedding Gallery</Typography>
      <h3 className='header__counter'>Number Of Pictures: {counter}</h3>
    </div>
  )
}

export default Header 