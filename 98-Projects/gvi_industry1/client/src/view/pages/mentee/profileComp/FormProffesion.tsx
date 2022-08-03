import {useState ,useEffect} from 'react';
import axios from 'axios'

interface FormProffesionProps{
    isMentee:boolean
    companyInfo:Array<any>
    mentorDetails:Array<any>;
    userId?:String;
}


function FormProffesion (props:FormProffesionProps){

    const {isMentee,companyInfo,mentorDetails,userId} = props;

    const [companySections , setCompanySection] = useState(
        ["CompanyName" , "sector" , "description","stage","linkToOnePager"])
    

    console.log(userId);
    
    
   async function editUser(ev:any){
        
        ev.preventDefault()
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
            
    }
    
    return (
        <form className='profile_companyDetails-sections formProffesion' onSubmit={editUser}>
        
        {companyInfo.map((section,i) => {
            return(
         <input key={i} type="text" name={companySections[i]} className='formProffesion-input' placeholder={companySections[i]} />
            )
        })}
        <input className='formProffesion-submit' name="submit" type="submit" value="save Details"/>
        
        </form>  
    )
        
      
    
    }


export default FormProffesion