async function handleRegister(ev){
    ev.preventDefault();
    let {firstName, lastName, email, password, role} = ev.target.elements
    firstName = firstName.value
    lastName = lastName.value
    email = email.value
    password = password.value
    role = role.value

    const {data} = await axios.post('/add-user',{firstName, lastName, email, password, role})
    console.log(data)
    
}