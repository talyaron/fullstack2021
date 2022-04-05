
async function handleGetSearch(ev) {

    const searchTerm = ev.target.value;
 
    const { data } = await axios.get(`/songs/search?searchTerm=${searchTerm}`);
    console.log({ data });

}

async function handleGetCatagories(ev) {

    const categorySearch = ev.target.value;
 
    const { data } = await axios.get(`/songs/category?searchTerm=${categorySearch}`);
    console.log({ data });

}

async function handleUpload(ev) {
    ev.preventDefault();
    let { band, album, song, genre, image } = ev.target.elements;
    console.log(band, album, song, genre, image)

    band = band.value;
    album = album.value;
    song = song.value;
    genre = genre.value;
    image = genre.value;



    console.log(band, album, song, genre, image)

    const { data } = await axios.post('/songs/upload-song', { band, album, song, genre, image })
    const songs = { data }
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

    const { data } = await axios.post('/songsUser/reg-user', { name, password })
    console.log(data)
}

async function handleLogIn(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;

    name = name.value;
    password = password.value;

    console.log(name, password)

    const { data } = await axios.post('/songsUser/sign-user', { name, password })
    console.log(data)
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

