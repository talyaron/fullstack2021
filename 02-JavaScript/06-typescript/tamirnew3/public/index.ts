async function handlesubmit(ev) {


    ev.preventDefault()
    
    let name = ev.target.elements.name.value
    let password = ev.target.elements.password.value
    
    console.log(name, password);


    const { data } = await axios.post('/users/add-user', { name, password })
    console.log(data);


}

