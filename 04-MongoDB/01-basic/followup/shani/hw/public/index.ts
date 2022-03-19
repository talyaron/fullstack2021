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
    console.log(data);
    const{theEmployees}=data;
    console.log({theEmployees})
    renderEmployees(theEmployees)
}

function renderEmployees(theEmployees){
    let html="";

    theEmployees.forEach(employee=>{
        html+=`<div class="employee">        
        Name:${employee.firstName} ${employee.lastName}
        <input type="text" placeholder="role" value="${employee.role}" onblur="handleUpdateRole(event,"${employee._id}")">
         </div>`
    })

    document.getElementById('rootEdit').innerHTML=html

}