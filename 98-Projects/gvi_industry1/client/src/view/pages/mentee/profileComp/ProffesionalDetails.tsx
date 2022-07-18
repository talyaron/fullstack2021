import { useState,useEffect } from "react";
import "../style/profile.scss";
import axios from 'axios'



interface ProffesionalDetailsProps{
    
    isMentee:boolean
    companyInfo:Array<any>;
    mentorDetails:Array<any>
}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {isMentee,companyInfo,mentorDetails} = props;

    const [companyDetails , setCompanyDetails] = useState(companyInfo)
    
    return (
        <div className='profile_companyDetails-sections'>
            
        {companyInfo.map((section,i) => {
            return(
         <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
            )
        })}
        {/* {isMentee?<a className='profile_companyDetails-sections-section' 
        href='https://trello.com/b/6geq1VEQ/gvi'>Link to presentation</a>:null} */}
        </div>  
    )
  
}

export default ProffesionalDetails