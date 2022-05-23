import React from 'react'
interface HeaderProps{
  mode:boolean;
  setMode:Function;
}
const Header = (props:HeaderProps) => {
  const {mode,setMode}=props
  return (
    <div className='header' id={mode? 'dark':'light'}></div>
  )
}

export default Header