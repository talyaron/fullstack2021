async function handleForm(ev){
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    username = username.value;
    password = password.value;

    const { data } = await axios.post('/add-user', {username, password})
}