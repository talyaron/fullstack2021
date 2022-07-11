import axios from "axios";

interface FormAddressProps{
  contactInfo:any;
  userId:String
}


function FormAddress(props:FormAddressProps){
  
  const {contactInfo,userId} = props;

async function updateContactInfo(ev:any){

  ev.preventDefault()
  

  const country = ev.target.elements.country.value;
  const email = ev.target.elements.email.value;
  const phone = ev.target.elements.phone.value;
  const linkDin = ev.target.elements.linkDin.value;
  

    const updatedDetails = {country,email,phone,linkDin}
    console.log(updatedDetails);
    
    const data = await axios.post('/api/users/updateUserDetails' , {updatedDetails})

    console.log(data);
    
}
  
    return (
      
      <form className="formAdress" onSubmit={updateContactInfo}>
        <input className="formAdress-input" type="text" name="country" id="" placeholder={contactInfo.country}/>
        <input className="formAdress-input" type="text" name="city" id="" placeholder={contactInfo.city}/>
        <input className="formAdress-input" type="text" name="address" id="" placeholder={contactInfo.address}/>
        <input className="formAdress-input" type="email" name="email" id="" placeholder={contactInfo.email}/>
        <input className="formAdress-input" type="number" name="phone" id="" placeholder={contactInfo.phone}/>
        <input className="formAdress-input" type="text" name="linkDin" id="" placeholder={contactInfo.linkdInProfile}/>
        <input className="formAdress-submit" type="submit" value="save Details" />
      </form>
    )
  
}

export default FormAddress