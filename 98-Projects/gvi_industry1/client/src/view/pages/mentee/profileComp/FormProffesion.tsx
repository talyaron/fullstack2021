interface FormProffesionProps{
    isMentee:boolean
    companyDetails:Array<any>
    mentorDetails:Array<any>;
}


function FormProffesion (props:FormProffesionProps){

    const {isMentee,companyDetails,mentorDetails} = props;

    function editUser(ev:any){
        ev.preventDefault()
        let companyName,discriptionComapny,sector,linkToPager,startUpStage,websit;
        const inputs = ev.target.elements
        console.dir(ev.target.elements);
        for(let element of inputs){
            if(element.name !== "submit"){
                if(element.name === "Company Name") companyName = element.value
                if(element.name === "Discription") discriptionComapny = element.value
                if(element.name === "Startup Stage") startUpStage = element.value
                if(element.name === "Sectors") sector = element.value
                if(element.name === "Link One Page") linkToPager = element.value
                if(element.name === "Website") websit = element.value  
            }
        }
        const newDetails = {companyName:companyName,discriptionComapny:discriptionComapny,
            sector:sector,linkToPager:linkToPager,startUpStage:startUpStage,websit:websit};
        console.log(newDetails);
        

        
    }
    
    return (
        <form className='profile_companyDetails-sections formProffesion' onSubmit={editUser}>

        {isMentee?companyDetails.map((section,i) => {
            return(
         <input key={i} type="text"  name={section} className='formProffesion-input' placeholder={section} />
            )
        }):mentorDetails.map((section,i) => {
            return(
        <input key={i} type="text" name={section} className='formProffesion-input' placeholder={section}/>
            )
        })}
        <input className='formProffesion-submit' name="submit" type="submit" value="save Details"/>
        
        </form>  
    )
        
      
    
    }


export default FormProffesion