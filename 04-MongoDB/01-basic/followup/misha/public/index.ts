async function  handleRegister(ev){

    let {username, password, role} = ev.target.elements;

    username = username.value;
    password = password.value;
    role = role.value

    const {data} = await axios.post('/add-user', {username, password, role})

}

async function handleGetUsers(){

    const {data} = await axios.get('/get-users')

    const users = data

    console.log(users)
}