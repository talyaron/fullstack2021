async function handleRegister(ev){
    ev.preventDefault();
    const username=ev.target.elements.username.value;
    const password= ev.target.elements.password.value;

    console.log(username, password);
    
    const {data}= await axios.post('/add-user',{username, password})
}