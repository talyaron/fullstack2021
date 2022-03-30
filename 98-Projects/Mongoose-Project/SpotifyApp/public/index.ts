import songs from "../model/songsModel";

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
    const songs={data}
    console.log(data)
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
    const root =document.querySelector('#likedSongs')
    try {
        const html = songs.map(songs => {
            // console.log(songs);
            
            return `<div class="card"><h2>${songs.song} :${songs.picture} ,${songs.genre} ,${songs.youtube}</h2>
            <div><input type='text' placeholder='type' value='${songs.genre}' onblur='handleupdate(event,"${songs._id}")'/></div>
            <button onclick='handleDelete("${songs._id}")'>Delete</button>
            <div><img src="${songs.img}" alt=""></div></div>`  
        }).join('')
  
        root.innerHTML = html
  
        if (!root) throw new Error("no root in rendersongs");
  
    } catch (error) {
        console.error(error.message);
  
    }
  
  }