
async function handleGetSearch(ev) {

    const searchTerm = ev.target.value;
    // const searching = searchTerm;

    const { data } = await axios.get(`/sounds/search?searchTerm=${searchTerm}&${searching}`);
    console.log({ data });
    // renderSounds( data );




}

async function handleGetCatagories(ev) {

    const categorySearch = ev.target.value;

    const { data } = await axios.get(`/sounds/category?searchTerm=${categorySearch}`);
    console.log({ data });
    // renderSounds(ev);
}

async function handleUpload(ev) {
    ev.preventDefault();
    let { title, type, location, description, duration, file } = ev.target.elements;
    console.log(title, type, location, description, duration, file)

    title = title.value;
    type = type.value;
    location = location.value;
    description = description.value;
    duration = duration.value;



    console.log(title, type, location, description, duration, file)

    const { data } = await axios.post('/sounds/upload-sound', { title, type, location, description, duration, file })
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

async function handleGetUsers() {

    const { data } = await axios.get('/soundUser/get-users')
    console.log(data)
    const { user1 } = data;
    console.log(user1)
    // if(user1){
    //     renderSounds(user1);
    // }
}

// async function renderSounds(ev) {
//     // try {
//         const { data } = await axios.get('/sounds/search');
//         const { ok, sounds } = data;
//         console.log(sounds);


//         // const html = sounds.map(sound => {
//         //     console.log(sound);
//         //     return `<div class="archive__main--history--1">
//         // <p> ${sound.title}</p> </div>`
//         // }).join('');

//         const play = `<div class="archive__main--history--1">
//             // <p> ${sounds.title}</p> </div>`;
//             document.getElementById('music1').innerHTML = play;

        
//     // } catch (error) {
//     //     console.error(error);

//     // }


// }


