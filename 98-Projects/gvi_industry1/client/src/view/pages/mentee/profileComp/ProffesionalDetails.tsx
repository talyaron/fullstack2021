import { useState,useEffect } from "react";
import "../style/profile.scss";
import axios from 'axios'



interface ProffesionalDetailsProps{
    isMentee:boolean;
    isInitiative:boolean;
    companyInfo:Array<any>;
    mentorSec:Array<any>
    companySec:Array<any>
    mentorInitiative:Array<any>
}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {companyInfo,mentorSec,isInitiative,companySec,isMentee,mentorInitiative} = props;

 
        // console.log(userDetails);
        
        // const companyDetails = ["escort Offer",userDetails.sector,userDetails.stage,userDetails.description,"website"]
        // setCompanyInfo(companyDetails)

      

    
    if(isMentee){
        return (
            <div className='profile_companyDetails-sections'>
                
            {companyInfo.map((section,i) => {
                return(
             <div key={i} className='profile_companyDetails-sections-section'>{companySec[i]} : {section}</div>
                )
            
            })}
           
            </div> 
        )
    } else {
        return(
            <div className='profile_companyDetails-sections'>
                    
            {mentorInitiative.map((section,i) => {
                return(
             <div key={i} className='profile_companyDetails-sections-section'>{mentorSec[i]} : {section}</div>
                )
            
            })}
           
            </div> 
        )
    }  
    
            // return(
        //     <h1 style={{width:'30vw',height:'20px',margin:'15vh 15vw auto',fontSize:'50px',color:'blue'}}>user has no initiative</h1>
        // )
    
   
  
}

export default ProffesionalDetails