async function handleregister(ev) {
    
    let username = ev.target.elements.username.value;
    let password = ev.target.elements.password.value;

    const { data } = await axios.post('/add-user', { username, password })
    console.log(data);

}

async function handleGetUsers() {
    const { data } = await axios.post('/get-users')
    const { users } = data
    renderUsers(users)

}
async function handledelet(userId) {
    const { data } = await axios.delete('/delete-user', { data: { userId } })
    handleGetUsers()
} 


function renderUsers(users) {
    console.log(users);
    const root = document.getElementById('users')
    let html = ''
    users.forEach(user => {
        html += `<div>my name i ${user.username}<button onclick= "handledelet('${user._id}')">delete</button></div>`
    });

    root.innerHTML = html

}

