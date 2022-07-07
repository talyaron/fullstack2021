interface FormAddressProps{
  contactInfo:any;
}


function FormAddress(props:FormAddressProps){
  
  const {contactInfo} = props;

function updateContactInfo(ev:any){
    
}
  
    return (
      
      <form className="formAdress" onSubmit={updateContactInfo}>
        <input className="formAdress-input" type="text" name="country" id="" placeholder="country"/>
        <input className="formAdress-input" type="text" name="city" id="" placeholder="city"/>
        <input className="formAdress-input" type="text" name="address" id="" placeholder="address"/>
        <input className="formAdress-input" type="email" name="email" id="" placeholder="email"/>
        <input className="formAdress-input" type="number" name="phoneNumber" id="" placeholder="phoneNumber"/>
        <input className="formAdress-input" type="text" name="linkDin" id="" placeholder="linkDin link.."/>
        <input className="formAdress-submit" type="submit" value="save Details" />
      </form>
    )
  
}

export default FormAddress