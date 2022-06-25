import React from "react";
import axios from 'axios';

interface RegisterProps{
    registerWindow:boolean,
    setRegisterWindow:Function,
}

const Register = (props:RegisterProps)=>{
    const {registerWindow,setRegisterWindow} = props;

    async function clickness(){
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
    data.forEach((c: { name: any; }) =>{
        console.log(c.name.common);
        
    })
    }
    clickness()
return(
    <div className="form__wrapper">
        <button className="closeButton" onClick={()=>{setRegisterWindow(false)}}>X</button>
        <div className="progressBar">
            <div className="progressBar__stage-1">personal details</div>
            <div className="progressBar__stage-2">Your company</div>
            <div className="progressBar__stage-3">payment details</div>
        </div>
        <form >
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="Email" placeholder="Email" />
        <input type="tel" name="phone" placeholder="Phone" />
        <input type="text" name="linkdinProfile" placeholder="LinkdIN Profile" />
        <select name="Country" >
            <option hidden></option>
            <option value="israel">Israel</option>
            <option value="usa">USA</option>
            <option value="london">London</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
        </select>
        
        
    </form>
    </div>
    
)

}
export default Register