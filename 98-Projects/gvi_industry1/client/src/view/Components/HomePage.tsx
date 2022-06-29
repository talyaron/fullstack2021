import React,{useState} from 'react'
import Login from './Login'
import UserSelection from './UserSelection'
const HomePage = () => {
    const [loginWindow,setLoginWindow]=useState(false)
    const [registerWindow,setRegisterWindow]=useState(false)
  return (
    <div className='homeContainer'>
        
        <div className='welcomeText'>
            <h1>Welcome to GVI</h1>
            <h3>Global Accelerator</h3>
            <p>The GVI Global Accelerator would assist startups from  ideation to global expansion hand in hand with GVI global partners across borders</p>
            
            <div className='loginBtns'>
                <button onClick={()=>{setLoginWindow(!loginWindow)}}>Login </button>
                
                <button onClick={()=>{setRegisterWindow(!registerWindow)}}>Request Access</button>
            </div>
           
        </div>
       
        <div className='videoWindow'>
         <>video</>
        </div>
        <Login loginWindow={loginWindow} setLoginWindow={setLoginWindow}/>
        <UserSelection registerWindow={registerWindow} setRegisterWindow={setRegisterWindow}/>
        
        <div className='feed'>
            
            <div className='feed__news' id="news"> news</div>
            
            <div className='feed__events' id="events"> events</div>
         </div>
        
    </div>
  )
}

export default HomePage