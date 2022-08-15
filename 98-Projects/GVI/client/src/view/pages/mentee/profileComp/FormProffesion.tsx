import {useState ,useEffect} from 'react';
import axios from 'axios'

interface FormProffesionProps{
    isMentee:boolean
    companyInfo:Array<any>;
    companySec:Array<any>;
    mentorSec:Array<any>
    userId?:String;
}


function FormProffesion (props:FormProffesionProps){

    const {isMentee,companyInfo,userId,companySec,mentorSec} = props;
    
    
   async function editUser(ev:any){

    ev.preventDefault()
        if(isMentee) {
            let companyName,description,sector,linkToOnePager,stage
        const inputs = ev.target.elements
        for(let element of inputs){
            if(element.name !== "submit"){
                if(element.name === "CompanyName") {
                    companyName = element.value;
                    
                }      
                if(element.name === "description") description = element.value
                if(element.name === "stage") stage = element.value
                if(element.name === "sector") sector = element.value
                if(element.name === "linkToOnePager") linkToOnePager = element.value  
            }
        }
        const newDetails = 
        {companyName:companyName,description:description,sector:sector,stage:stage,linkToOnePager:linkToOnePager};

        const {data} = await axios.post('/api/initiatives/update-initiative',{newDetails,userId})
        
        window.location.reload();

        }else if(!isMentee){

            let EscortOffer ,sector,description,stage,website;
            const inputs = ev.target.elements
            for(let field of inputs){
                if(field.name === "escortOffer") EscortOffer = field.value
                if(field.name === "sector") sector = field.value
                if(field.name === "start up stage") stage = field.value
                if(field.name === "description") description = field.value
                if(field.name === "website") website = field.value
            }
            const newDetails = {escortOffer:EscortOffer,sector:sector,description:description,stage:stage,website:website}
            console.log(newDetails);
            
            const {data} = await axios.patch('/api/profile/Update-MentorProfDet',{newDetails,userId})            
            window.location.reload();
        }
        
        
            
    }
    
    return (
        <form className='profile_companyDetails-sections formProffesion' onSubmit={editUser}>
        {isMentee?
        companySec.map((section,i) => {
            return(
         <input key={i} type="text" name={companySec[i]} className='formProffesion-input' placeholder={companySec[i]} />
            )
        }):
        mentorSec.map((section,i) => {
            return(
         <input key={i} type="text" name={section} className='formProffesion-input' placeholder={section} />
            )
        })}
        <input className='formProffesion-submit' name="submit" type="submit" value="save Details"/>
        
        </form>  
    )
        
      
    
    }


export default FormProffesion