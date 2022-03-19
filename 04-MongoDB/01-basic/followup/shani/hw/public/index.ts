async function handleAddEmployee(ev){
    ev.preventDefault();
    const{firstName,lastName,imgUrl,role}=ev.target.elements
    //console.log(firstName.value,lastName.value,imgUrl.value,role.value);

    //sends to server the input written by the user then gets it back
    const {data} = await axios.post("/add-employee", {firstName:firstName.value,lastName:lastName.value,imgUrl:imgUrl.value,role:role.value})
    console.log(data);
    ev.target.reset();
}