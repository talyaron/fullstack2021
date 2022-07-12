import axios from "axios";
import { useEffect, useState } from "react";

interface FormAddressProps{
  contactInfo:any;
  userId:String;
  setEditAddress:Function;
}


function FormAddress(props:FormAddressProps){
  
  const {contactInfo,userId,setEditAddress} = props;

  const [userInfo , setUserInfo] = useState(contactInfo)
  const [IScountry , setcountry] = useState<boolean>()
  const [ISemail , setemail] = useState<boolean>()
  const [ISphone , setphone] = useState<boolean>()
  const [ISlinkdin , setlinkdin] = useState<boolean>()

  useEffect(() => {
    if(contactInfo.country){setcountry(true)} else setcountry(false)
      if(contactInfo.email) {setemail(true)} else setemail(false)
      if(contactInfo.phone) {setphone(true)} else setphone(false)
      if(contactInfo.linkDin) {setlinkdin(true)} else setlinkdin(false)

  },[])

  
  
async function updateContactInfo(ev:any){

  ev.preventDefault()
  
  const country = ev.target.elements.country.value;
  const email = ev.target.elements.email.value;
  const phone = ev.target.elements.phone.value;
  const linkDin = ev.target.elements.linkDin.value;
  
    const updatedDetails = {country:country,email:email,phone:phone,linkDin:linkDin}
    console.log(updatedDetails);
    setEditAddress(false)

    for(let field in updatedDetails){
      if(country !== " ") setcountry(true)
      if(email !== " ") setemail(true)
      if(phone !== " ") setphone(true)
      if(linkDin !== " ") setlinkdin(true)

    }
    
    const data = await axios.post('/api/users/updateUserDetails' , {updatedDetails,userId})
    
    console.log(data)
    window.location.reload();
  }
  
    return (
      
      <form className="formAdress" onSubmit={updateContactInfo}>
        {IScountry?<input className="formAdress-input" type="text" name="country" id="" placeholder={contactInfo.country}/>:
        <input className="formAdress-input" type="text" name="country" id="" placeholder="country"/>}
        <input className="formAdress-input" type="text" name="city" id="" placeholder="city..(not in DB yet)"/>
        <input className="formAdress-input" type="text" name="address" id="" placeholder="address..(not in DB yet)"/>
        {ISemail?<input className="formAdress-input" type="email" name="email" id="" 
        placeholder={contactInfo.email}/>:
        <input className="formAdress-input" type="email" name="email" placeholder="email"/>}
      {ISphone?<input className="formAdress-input" type="number" name="phone" id="" placeholder={contactInfo.phone}/>:
        <input className="formAdress-input" type="number" name="phone" placeholder="enter phone number.."/>}        
        {ISlinkdin?<input className="formAdress-input" type="text" name="linkDin" id="" 
        placeholder={contactInfo.linkdInProfile}/>:
        <input className="formAdress-input" type="text" name="linkDin" id="" 
        placeholder="linkDin profile link.. " />}
        <input className="formAdress-submit" type="submit" value="save Details" />
      </form>
    )
  
}

export default FormAddress