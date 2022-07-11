
interface ContactDetailsProps{
    contactInfo:any
}


function ContactDetails (props:ContactDetailsProps) {
  
const {contactInfo} =props;

    return (
      
      <>
      <div className='profile_contactInfo-address'>
            <p style={{gridRow:1,gridColumn:'1/3',fontSize:'15px',textAlign:'center'}}>{contactInfo.country},</p>
            <p style={{gridRow:1,gridColumn:'3/5',fontSize:'15px'}}>{contactInfo.city}</p>
            <p style={{gridRow:2,fontSize:'15px',gridColumn:'1/6',textAlign:'center'}}>{contactInfo.address}</p>
            </div>
            <p className='profile_contactInfo-email'>{contactInfo.email}</p>
            <p className='profile_contactInfo-phone'>{contactInfo.phone}</p>
            <a className='profile_contactInfo-linkDinLink' style={{gridColumn:'3/4',gridRow:'9/11',height:'75%',width:'150%'}} 
            href={contactInfo.linkDinLink}><img style={{height:'100%',width:'100%'}} 
            src="https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png" alt="" /></a>
      </>
    )
  
}

export default ContactDetails