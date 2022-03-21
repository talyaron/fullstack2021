async function handleLoadSongs() {
   try{
       const {data} = await axios.get('/getSong')
      const {songs} = data
      console.log(songs);
      
      renderUsers(songs)

   } 
   catch (error) {
    console.error(error.message);

}
}
async function handleAddSong(ev){
    try{
    ev.preventDefault();
    let {song, singer, type, photo, year} = ev.target.elements;
    song = song.value;
    singer= singer.value;
 type = type.value;
  photo = photo.value;

   year = year.valueAsNumber;
    // console.log(song, singer, type, photo, year)

    const {data} = await axios.post('/addSong',{song, singer, type, photo, year})
    console.log(data)
    renderUsers(data)
    if (!song || !singer || !type || !photo || !year) throw new Error("no song , singer, photo, year, type in adding");

}
catch (error) {
    console.error(error.message);

}

ev.target.reset();

}
async function handleGetByType() {
    const {data} = await axios.get('/getSongByType')
    console.log(data)
    const {users} = data;
    console.log(users)
    if(users){
        renderUsers(users);
    }
    
}
function renderUsers(songs){
    try{
     console.log(songs)
    const html =  songs.map(user=>{
        
        return `<div class = "songs">
        <img src="${user.photo}">
        <div class="description">
        <h2>${user.song}</h2>
        <h3>${user.singer}</h3>
        <h4>${user.type}</h4>
        <h5>${user.year}</h5></div>
        <div class="change">
        <input type='text' placeholder='photo' value="${user.photo}" onblur='handleUpdate(event, "${user._id}")'/>
        <input type='text' placeholder='song title' value="${user.song}" onblur='handleUpdate(event, "${user._id}")'/>
        <input type='text' placeholder='singer' value="${user.singer}" onblur='handleUpdate(event, "${user._id}")'/>
        <input type='text' placeholder='type' value="${user.type}" onblur='handleUpdate(event, "${user._id}")'/>
        <input type='text' placeholder='year' value="${user.year}" onblur='handleUpdate(event, "${user._id}")'/>
            </div>
        <button onclick='handleDelete("${user._id}")'>DELETE</button>
    </div>`
    }).join('');
    // console.log(html)

    document.querySelector('#song').innerHTML = html;
}
catch (error) {
    console.error(error.message);

}

}
async function handleUpdate(ev, songId) {
    const newsong = ev.target.value
    const {data} = await axios.patch('/updateSong',{songId, newsong})
    console.log(data); 
    renderUsers(data)
}
 
async function handleDelete(songId) {
    const {data} = await axios.delete('/deleteSong',{data:{songId}})
    console.log(data);
    renderUsers(data)
    
}