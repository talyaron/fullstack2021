import { useState,useEffect } from "react";
import "../style/profile.scss";
import axios from 'axios'



interface ProffesionalDetailsProps{
    
    isMentee:boolean
    userInitiative:any
    mentorDetails:Array<any>
}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {isMentee,userInitiative,mentorDetails} = props;
    
    console.log(userInitiative);
    for(let field in userInitiative ){
        console.log(field);
        
    }
    // const sector = userInitiative.sector
    // const companyDetails = [userInitiative.companyName,userInitiative.sector,userInitiative.Stage]


    return (
        <div className='profile_companyDetails-sections'>
        {/* {isMentee?companyDetails.map((section,i) => {
            return(
         <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
            )
        }):mentorDetails.map((section,i) => {
            return(
        <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
            )
        })}
        {isMentee?<a className='profile_companyDetails-sections-section' 
        href='https://trello.com/b/6geq1VEQ/gvi'>Link to presentation</a>:null} */}
        </div>  
    )
  
}

export default ProffesionalDetails