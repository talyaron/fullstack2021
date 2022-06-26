import React from 'react'
interface RegisterProps{
    registerWindow:boolean;
    setRegisterWindow:Function;
} 
const UserSelection = (props:RegisterProps) => {
    const {registerWindow,setRegisterWindow}=props
    function handleCheck(ev:any){
        const name= ev.target.value
        console.log(name)
    }
  return (
    <div className={ registerWindow?'register showRegister':'register dontShowRegister'}>
        <button className='closeButton' onClick={()=>{setRegisterWindow(false)}} >X</button>
        <h1 className='register__text'>Join Now The GVI Global Accelerator</h1>
        <div className='register__options' >
           
            <input type="button"  name="entreprenuer" value="Entreprenuer" onClick={handleCheck}/>
            <input type="button"  name="mentor" value="Mentor" onClick={handleCheck}/>
            <input type="button"  name="investor" value="Investor" onClick={handleCheck}/>
            <input type="button"  name="gviPartner" value="GVI Partner" onClick={handleCheck}/>
            
           
        </div>


    </div>
  )
}

export default UserSelection