
async function handleGetSearch(ev) {

    const searchTerm = ev.target.value;
 
    const { data } = await axios.get(`/sounds/search?searchTerm=${searchTerm}`);
    console.log({ data });

}

async function handleGetCatagories(ev) {

    const categorySearch = ev.target.value;
 
    const { data } = await axios.get(`/sounds/category?searchTerm=${categorySearch}`);
    console.log({ data });

}

async function handleUpload(ev) {
    ev.preventDefault();
    let { title, type, location, description, duration,file } = ev.target.elements;
    console.log(title, type, location, description, duration,file)

    title = title.value;
    type = type.value;
    location = location.value;
    description = description.value;
    duration = duration.value;



    console.log(title, type, location, description, duration,file)

    const { data } = await axios.post('/sounds/upload-sound', { title, type, location, description, duration,file })
    // const sounds = { data }
    console.log({ data })
    // renderSongs(songs)
}

async function handleRegistration(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;
    console.log(name, password)
    name = name.value;
    password = password.value;


    console.log(name, password)

    const { data } = await axios.post('/soundUser/reg-user', { name, password })
    console.log(data)
}

async function handleLogIn(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;

    name = name.value;
    password = password.value;

    console.log(name, password)

    const { data } = await axios.post('/soundUser/sign-user', { name, password })
    console.log(data)
}

async function handleGetUsers(){
  
    const {data} = await axios.get('/soundUser/get-users')
    console.log(data)
    // const {user1} = data;
    // console.log(user1)
    // if(users){
    //     renderUsers(users);
    // }
}

// function renderSongs(songs) {
//     const root = document.querySelector('#likedSongs')
//     try {
//         const html = songs.map(song => {
//             console.log(song);

//             return `<div class="card"><h2>${song.song} :${song.picture} ,${song.genre} ,${song.youtube}</h2>
//             <div><input type='text' placeholder='type' value='${song.genre}' onblur='handleupdate(event,"${song._id}")'/></div>
//             <button onclick='handleDelete("${song._id}")'>Delete</button>
//             <div><img src="${song.img}" alt=""></div></div>`
//         }).join('')
//         console.log(html);

//         root.innerHTML = html;

//         if (!root) throw new Error("no root in rendersongs");

//     } catch (error) {
//         console.error(error.message);

//     }

// }

