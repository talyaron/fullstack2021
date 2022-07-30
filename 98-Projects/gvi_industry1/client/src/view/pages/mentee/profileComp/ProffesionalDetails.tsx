import { useState,useEffect } from "react";
import "../style/profile.scss";
import axios from 'axios'



interface ProffesionalDetailsProps{
    
    isInitiative:boolean
    companyInfo:Array<any>;
    mentorDetails:Array<any>
}


function ProffesionalDetails(props:ProffesionalDetailsProps) {

    const {companyInfo,mentorDetails,isInitiative} = props;

    
    if(isInitiative){
        return (
            <div className='profile_companyDetails-sections'>
                
            {companyInfo.map((section,i) => {
                return(
             <div key={i} className='profile_companyDetails-sections-section'>{section}</div>
                )
            })}
           
            </div>  
        )
    }else {
        return(
            <h1 style={{width:'30vw',height:'20px',margin:'15vh 15vw auto',fontSize:'50px',color:'blue'}}>user has no initiative</h1>
        )
    }
   
  
}

export default ProffesionalDetails