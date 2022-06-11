import React from 'react'
import {Button} from '@mui/material'; 
import CottageIcon from '@mui/icons-material/Cottage';

const styledCottageIcon  = {
  fontSize:'7rem',
  gridColumn:'10/11',
  
}
interface HeaderProps{
  setFormOpen:Function;
  formOpen:boolean;
}

function Header(props:HeaderProps) {

  const {setFormOpen,formOpen} = props;

  function openForm(){
    setFormOpen(!formOpen)
  }

  return (
    <div className='Header-div'>
      <h1 style={{gridColumn:'1/5'}}>our basic blog</h1>

    <Button variant="contained" size="small" color="success" onClick={openForm} 
    style={{gridColumn:'8/9',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    >add blog</Button>

    <Button style={{gridColumn:'5/6',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    variant="contained" size="small" onClick={openLogIn}>sign in</Button>

    <Button style={{gridColumn:'6/7',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    variant="contained" size="small" onClick={openSignUp}>sign up</Button>
   <span className='homeicon' style={{gridColumn:'10/11'}}>
        <CottageIcon style={styledCottageIcon}/>
   </span>
    </div>
  )
}

export default Header