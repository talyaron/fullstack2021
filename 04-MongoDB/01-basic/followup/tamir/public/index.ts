async function handleregister(ev) {
    ev.preventDefault();
    let username = ev.target.elements.username.value;
    let password = ev.target.elements.password.value;
    
    const {data}= await axios.post('/add-user',{username,password})
    console.log(data);
    

}