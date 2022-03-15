async function handleRegister(ev){
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    console.log(username, password)
    username = username.value;
    password = password.value;

    console.log(username, password)

    const {data} = await axios.post('/add-user',{username, password})
    console.log(data)
}

async function handleGetUsers(){
  
    const {data} = await axios.get('/get-users')
    console.log(data)
}