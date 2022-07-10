import "../style/profile.scss"



interface ProffesionalDetailsProps{
    
    isMentee:boolean
    companyDetails:Array<any>
    mentorDetails:Array<any>
}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {isMentee,companyDetails,mentorDetails} = props;

    return (
        <div className='profile_companyDetails-sections'>
        {isMentee?companyDetails.map((section,i) => {
            return(
         <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
            )
        }):mentorDetails.map((section,i) => {
            return(
        <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
            )
        })}
        {isMentee?<a className='profile_companyDetails-sections-section' 
        href='https://trello.com/b/6geq1VEQ/gvi'>Link to presentation</a>:null}
        </div>  
    )
  
}

export default ProffesionalDetails