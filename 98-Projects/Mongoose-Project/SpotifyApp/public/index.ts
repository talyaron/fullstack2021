function handleGetSearch() {
    // const { data } = await axios.get('/get-music')
    // console.log(data);
    // const { ok, options } = data;
    // console.log({ ok, options });
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

    const { data } = await axios.post('/songsOwner/upload-song', { song, picture, genre, youtube })
    console.log(data)
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