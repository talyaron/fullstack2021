const root = document.querySelector('.root')

async function getUsers() {
    const { data } = await axios.get('/get-users')
    const { ok, users } = data

    console.log(users)

    const html = users.map(user => {
        console.log(user._id)
        return `
        <div>
            <p>${user.name}</p>
            <input type='text' value="${user.name}" onblur='handleUpdate(event, "${user._id}")'/>
            <button onclick='handleDelete("${user._id}")'>DELETE</button>
        </div>
        `
    }).join("")

    root.innerHTML = html
}

getUsers()

async function hendleAddUser(e) {
    e.preventDefault();

    let { name, password } = e.target.elements;
    name = name.value;
    password = password.value;

    console.log(name, password)

    const { data } = await axios.post('/add-user', { name, password })
    console.log(data)

    getUsers()
}

async function handleDelete(userId) {
    const { data } = await axios.delete('/delete-user', { data: { userId } })
    console.log(data)

    getUsers()
}

async function handleUpdate(e, userId) {

    console.log(userId)

    const name = e.target.value;

    const { data } = await axios.patch('/update-user', { userId, name });
    console.log(data)

    getUsers()

}

async function hendleLogin(e) {
    e.preventDefault();

    let { name, password } = e.target.elements;

    console.log(name)

    name = name.value.toLowerCase()
    password = password.value;

    console.log(name, password)

    const { data } = await axios.post('/login-user', { name, password })
    console.log(data)

}