import { useState,useEffect } from "react";
import "../style/profile.scss";
import axios from 'axios'



interface ProffesionalDetailsProps{
    isMentee:boolean;
    isInitiative:boolean
    companyInfo:Array<any>;
    mentorSec:Array<any>;
    companySec:Array<any>;
    mentorInitiative:Array<any>;


}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {companyInfo,isMentee,isInitiative,mentorSec,companySec,mentorInitiative} = props;
    
    
    if(isInitiative){
        return (
            <div className='profile_companyDetails-sections'>
                
            {companyInfo.map((section,i) => {
                return(
             <div key={i} className='profile_companyDetails-sections-section'>{companySec[i]} : {section}</div>
                )
            })}
           
            </div>  
        )
    }else {
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
   
  
}

export default ProffesionalDetails