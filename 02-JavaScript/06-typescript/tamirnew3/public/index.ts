async function handlesubmit(ev) {


    ev.preventDefault()
    
    let name = ev.target.elements.name.value
    let password = ev.target.elements.password.value

    console.log(name, password);


    const { data } = await axios.post('/users/add-user', { name, password })
    console.log(data);


}
async function handlelogin(ev) {
    ev.preventDefault()
    let name = ev.target.elements.name.value
    let password = ev.target.elements.password.value

    console.log(name, password);


    const { data } = await axios.post('/users/login', { name, password })
    console.log(data);

    if (data.login) {
        window.location.href = 'home.html';
    }

}
