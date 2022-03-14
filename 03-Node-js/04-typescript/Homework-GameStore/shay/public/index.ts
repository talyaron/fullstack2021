async function handleOnLoad() {
    // const { data } = await axios.get('/newGames')
    // renderGames(data)
    getGame()
}
let games=[];
async function getGame(){
    const {data}= await axios.get('/newGames');
    //  console.log(data)
    renderGames(data);

  games=data;
}   

async function handleAddGame(ev){
    ev.preventDefault();
    const game = {};
    game["title"] = ev.target.title.value;
    game["photo"] = ev.target.photo.value;
    game["price"] = ev.target.price.valueAsNumber;
    const { data } = await axios.post('/addGame', { game });
    renderGames(data);
    games = data;


}


function renderGames(data:Array<any>){
    console.log(data);
    
    let root = document.querySelector('#rootGames');
    let html =" ";
    data.forEach(game => {
        
        html+=`
        <div class="rootGames--game">
       <img src="${game.photo}">
        <div class = "name">${game.title}</div>
        <div class="price">${game.price}$</div>
        <button onclick="handleUpdate('${game.id}')">Update Game</button>
        <button onclick="handleDelete('${game.id}')">Delete Game</button>
        </div>
        `;
    });
    //root.innerHTML = html;
    html += `<div class="rootGames--add">
    <form class="update visUpdate" onsubmit="handleAddUpdate(event)">
        <label for="name"> Name</label>
        <input type="text" name="name" id="name">
        <label for="pic"> Image</label>
        <input type="text" name="pic" id="photo">
        <label for="price"> Price</label>
        <input type="number" name="price" id="price">
        <label for="id"> id</label>
        <input type="text" name="ID" id="id" readonly>
        <input type="submit" name="update">
    </form>
</div>`
document.querySelector('#rootGames').innerHTML = html;
}
function handleUpdate(id) {
    const form = document.querySelector('.update');
    form.classList.toggle('visUpdate');
    let game: any = games.filter(game => game.id == id)[0];
    form[0].value = game.title
    form[1].value = game.photo
    form[2].value = game.price
    form[3].value = game.id
}
async function handleDelete(id) {
    const { data } = await axios.delete('/deleteGame', { data: { id } });
    renderGames(data);
    games = data;
}
async function handleAddUpdate(ev) {
        ev.preventDefault();
    const game = {};
    game["title"] = ev.target.title.value;
    game["photo"] = ev.target.photo.value;
    game["price"] = ev.target.price.value;
    game["id"] = ev.target.id.value;
    const { data } = await axios.post('/updateGames', { game });
    renderGames(data);
    games = data;
   document.querySelector('.update').classList.toggle('visUpdate');
}