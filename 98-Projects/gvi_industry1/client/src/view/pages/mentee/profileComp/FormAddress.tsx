import axios from "axios";

interface FormAddressProps{
  contactInfo:any;
  userId:String
}


function FormAddress(props:FormAddressProps){
  
  const {contactInfo,userId} = props;

async function updateContactInfo(ev:any){
  let country,email,phone,linkdinProfile;
  let newDetails = contactInfo;
    for(let field of ev.target){
      if(field.name !== 'submit'){
        if(field.name == 'country') country = field.value
        if(field.name == 'email') email = field.value
        if(field.name == 'phoneNumber') phone = field.value
        if(field.name == 'linkDin') linkdinProfile = field.value
      }
    }
    newDetails = {country:country,email:email,phone:phone,linkdinProfile:linkdinProfile}
    // const {data} = await axios.patch('/api/users/updateUserDetails',{newDetails,userId})

}
  
    return (
      
      <form className="formAdress" onSubmit={updateContactInfo}>
        <input className="formAdress-input" type="text" name="country" id="" placeholder={contactInfo.country}/>
        <input className="formAdress-input" type="text" name="city" id="" placeholder={contactInfo.city}/>
        <input className="formAdress-input" type="text" name="address" id="" placeholder={contactInfo.address}/>
        <input className="formAdress-input" type="email" name="email" id="" placeholder={contactInfo.email}/>
        <input className="formAdress-input" type="number" name="phoneNumber" id="" placeholder={contactInfo.phone}/>
        <input className="formAdress-input" type="text" name="linkDin" id="" placeholder={contactInfo.linkdInProfile}/>
        <input className="formAdress-submit" type="submit" value="save Details" />
      </form>
    )
  
}

export default FormAddress