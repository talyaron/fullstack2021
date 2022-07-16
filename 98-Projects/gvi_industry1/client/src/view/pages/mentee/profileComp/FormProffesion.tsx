import {useState ,useEffect} from 'react';
import axios from 'axios'

interface FormProffesionProps{
    isMentee:boolean
    companyInfo:Array<any>
    mentorDetails:Array<any>;
    userId:String;
}


function FormProffesion (props:FormProffesionProps){

    const {isMentee,companyInfo,mentorDetails,userId} = props;

    const [companySections , setCompanySection] = useState(["companyName" , "sector" , "description",
    "stage","linkToOnePager"])
    

    console.log(userId);
    
    
   async function editUser(ev:any){
        
        ev.preventDefault()
        let companyName,discriptionComapny,sector,linkToOnePager,startUpStage
        const inputs = ev.target.elements
        console.dir(ev.target.elements);
        for(let element of inputs){
            if(element.name !== "submit"){
                if(element.name === "CompanyName") {
                    companyName = element.value;
                    console.log('lala');
                }      
                if(element.name === "description") discriptionComapny = element.value
                if(element.name === "stage") startUpStage = element.value
                if(element.name === "sector") sector = element.value
                if(element.name === "linkToOnePager") linkToOnePager = element.value
                
            }
        }
        const newDetails = {companyName:companyName,description:discriptionComapny,
            sector:sector,stage:startUpStage,linkToOnePager:linkToOnePager};

        const {data} = await axios.post('/api/initiatives/update-initiative',{newDetails,userId})
        window.location.reload();
            
    }
    
    return (
        <form className='profile_companyDetails-sections formProffesion' onSubmit={editUser}>

        {isMentee?companyInfo.map((section,i) => {
            return(
         <input key={i} type="text" name={companySections[i]} className='formProffesion-input' placeholder={section} />
            )
        }):mentorDetails.map((section,i) => {
            return(
        <input key={i} type="text" name={companySections[i]} className='formProffesion-input' placeholder={section}/>
            )
        })}
        <input className='formProffesion-submit' name="submit" type="submit" value="save Details"/>
        
        </form>  
    )
        
      
    
    }


export default FormProffesion