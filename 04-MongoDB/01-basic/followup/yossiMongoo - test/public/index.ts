function loadPage(ev){
    handleGetAllUsers(ev)
}

async function handleRegister(ev) {
    ev.preventDefault();
    let { username, password, role, img } = ev.target.elements;
    username = username.value;
    password = password.value;
    role = role.value;
    img = img.value;

    const { data } = await axios.post('/add-user', { username, password, role, img })
    console.log(data)
    this.handleGetAllUsers()
}


async function handleGetAllUsers(ev) {
    await axios.get('/get-all-users').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleGetUserByRole(ev) {
    await axios.get('/get-user-by-role').then(({ data }) => {
        console.log(data)
        const root = document.querySelector('#root');
        renderAll(root, data);
    })
}

async function handleUpdateRole(ev, userId) {
    console.log(ev, userId)
    const role = ev.target.value;
    const { data } = await axios.patch('/update-user-role', { userId, role })
    loadPage(ev)
    // this.handleGetAllUsers()
    // const root = document.querySelector('#root');
    // renderAll(root, data);
}

async function handleUpdateName(ev, userId) {
    console.log(ev, userId)
    const username = ev.target.value;
    const { data } = await axios.patch('/update-user-name', { userId, username })
    loadPage(ev)
    // this.handleGetAllUsers()
    // const root = document.querySelector('#root');
    // renderAll(root, data);
}

async function handleDelete(userId) {
    const { data } = await axios.delete('/delete-user', {data:{userId}})
    this.handleGetAllUsers()
}


function renderAll(root, data) {
    
    let html = '';
    data.forEach(user => {
        html += `<div class="user">
        <div class="product"><span style="color: #000;"></span>${user.username}</div>
        <div class="price"><span style="color: #000;"></span>${user.role}</div>
        <div><img src="${user.img}" alt="https://gameforge.com/de-DE/littlegames/includes/images/games/10343_5eb3f0ec15588.jpg"></div>
        <div><input type="text" placeholder="username" value="${user.username}" onblur="handleUpdateName(event, '${user._id}')"/></div>
        <div><input type="text" placeholder="role" value="${user.role}" onblur="handleUpdateRole(event, '${user._id}')"/></div>
        
        <div><button onclick="handleDelete('${user._id}')">DELETE</button></div>
        </div>
        `
    });
    
    root.innerHTML = html;
}




// async function handleGetUserByRole(ev) {

//     let role = ev.target.elements.role.value

//     await axios.get('/get-user-by-role').then(({ data }) => {
//         console.log(data)
//         const root = document.querySelector('#root');
//         renderAll(root, data);
//     })
// }