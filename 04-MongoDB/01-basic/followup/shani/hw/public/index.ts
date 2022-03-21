async function handleAddEmployee(ev){
    ev.preventDefault();
    const{firstName,lastName,imgUrl,role}=ev.target.elements
    //console.log(firstName.value,lastName.value,imgUrl.value,role.value);

    //sends to server the input written by the user then gets it back
    const {data} = await axios.post("/add-employee", {firstName:firstName.value,lastName:lastName.value,imgUrl:imgUrl.value,role:role.value})
    console.log(data);
    
    ev.target.reset();
}

async function handleGetEmployees(){
    const {data}= await axios.get("/get-employee");
    // console.log(data);
    const{theEmployees}=data;
    console.log({theEmployees})
    renderEmployees(theEmployees)
}

async function handleGetSalesman(){
    const {data}= await axios.get("/get-salesman");
    // console.log(data);
    const{theEmployees}=data;
    console.log({theEmployees})
    renderEmployees(theEmployees)
}

async function handleGetUseless(){
    const {data}= await axios.get("/get-useless");
    // console.log(data);
    const{theEmployees}=data;
    console.log({theEmployees})
    renderEmployees(theEmployees)
}


async function handleUpdateRole(ev,employeeId){
   console.log(ev,employeeId)
   const role=ev.target.value;
   const {data}=await axios.patch("/update-role",{employeeId,role});
   console.log(data)
}

async function handleDeleteEmployee(employeeId){
    console.log(employeeId)
   
    const {data}=await axios.delete("/delete-employee",{data:{employeeId}});
    console.log(data)
 }


function renderEmployees(theEmployees){
    let html="";

    theEmployees.forEach(employee=>{
        html+=`<div class="employee__card"> 
       <h3> Role:${employee.role} </h3>
        <img src="${employee.imgUrl}">  
            
        <p><span>First Name:${employee.firstName}</span> Last Name:${employee.lastName}</p>
        <div class="employee__card--edit">
        <hr>
        <p >Edit:</p>
        <input type="text" placeholder="role" value="${employee.role}" onblur="handleUpdateRole(event,'${employee._id}')">        
        <button onclick="handleDeleteEmployee('${employee._id}')">X</button>
        </div>
        </div>
         `
    })

    document.getElementById('rootEdit').innerHTML=html

}