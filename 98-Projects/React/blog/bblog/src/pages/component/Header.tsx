import React,{useEffect} from 'react'
import {Button} from '@mui/material'; 
import CottageIcon from '@mui/icons-material/Cottage';

let location = window.location.pathname



const styledCottageIcon  = {
  fontSize:'7rem',
  gridColumn:'10/11',
  
}
interface HeaderProps{
  setFormOpen:Function;
  formOpen:boolean;
  openSignUp:boolean,
  setOpenSignUp:Function,
  openLogIn:boolean,
  setOpenLogIn:Function
}


function Header(props:HeaderProps) {
  
 

  

  const {setFormOpen,formOpen,setOpenLogIn,setOpenSignUp,openLogIn,openSignUp} = props;

  function openForm(){

    setFormOpen(!formOpen)

  }
  // function logInForm(ev:any){
  //   ev.preventDefault()    
  //   console.log(ev)
   

    
    
  // }
// if(window.location.pathname="/"){
  // eslint-disable-next-line no-cond-assign
  return (
    <div className="container">
   
        {(() => {
            if (location == "/") {
              return (
                
    <div className='Header-div'>
      
      <h1 style={{gridColumn:'1/5'}}>our basic blog</h1>

    <Button variant="contained" size="small" color="success" onClick={openForm} 
    style={{gridColumn:'8/9',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    >add blog</Button>

    <Button style={{gridColumn:'5/6',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    variant="contained" size="small" >sign in</Button>

    <Button style={{gridColumn:'6/7',gridRow:'1',height:'40%',marginTop:'5vh'}} 
    variant="contained" size="small" onClick={setOpenSignUp(!openSignUp)}>sign up</Button>
   <span className='homeicon' style={{gridColumn:'10/11'}}>
        <CottageIcon style={styledCottageIcon}/>
   </span>
    </div>
              )
            } else if (location !== "/") {
              return (
                <CottageIcon style={styledCottageIcon}/>
              )
            } 
        })()}
   
    </div>
  );

  // return (

  //   <div className='Header-div'>
      
  //     <h1 style={{gridColumn:'1/5'}}>our basic blog</h1>

  //   <Button variant="contained" size="small" color="success" onClick={openForm} 
  //   style={{gridColumn:'8/9',gridRow:'1',height:'40%',marginTop:'5vh'}} 
  //   >add blog</Button>

  //   <Button style={{gridColumn:'5/6',gridRow:'1',height:'40%',marginTop:'5vh'}} 
  //   variant="contained" size="small" >sign in</Button>

  //   <Button style={{gridColumn:'6/7',gridRow:'1',height:'40%',marginTop:'5vh'}} 
  //   variant="contained" size="small" onClick={setOpenSignUp(!openSignUp)}>sign up</Button>
  //  <span className='homeicon' style={{gridColumn:'10/11'}}>
  //       <CottageIcon style={styledCottageIcon}/>
  //  </span>
  //   </div>
  // )


}

export default Header