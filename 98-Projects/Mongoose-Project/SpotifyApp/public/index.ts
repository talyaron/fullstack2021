async function handleGetSearch(ev) {
    const searchTerm = ev.target.value;
    await axios.get(`/songs/search?${searchTerm}`);
    console.log(searchTerm);


}
async function handleUpload(ev) {
    ev.preventDefault();
    let { song, picture, genre, youtube } = ev.target.elements;
    console.log(song, picture, genre, youtube)

    song = song.value;
    picture = picture.value;
    genre = genre.value;
    youtube = youtube.value;



    console.log(song, picture, genre, youtube)

    const { data } = await axios.post('/songs/upload-song', { song, picture, genre, youtube })
    const songs = { data }
    console.log({ data })
    renderSongs(songs)
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



function renderSongs(songs) {
    const root = document.querySelector('#likedSongs')
    try {
        const html = songs.map(song => {
            console.log(song);

            return `<div class="card"><h2>${song.song} :${song.picture} ,${song.genre} ,${song.youtube}</h2>
            <div><input type='text' placeholder='type' value='${song.genre}' onblur='handleupdate(event,"${song._id}")'/></div>
            <button onclick='handleDelete("${song._id}")'>Delete</button>
            <div><img src="${song.img}" alt=""></div></div>`
        }).join('')
        console.log(html);

        root.innerHTML = html;

        if (!root) throw new Error("no root in rendersongs");

    } catch (error) {
        console.error(error.message);

    }

}

