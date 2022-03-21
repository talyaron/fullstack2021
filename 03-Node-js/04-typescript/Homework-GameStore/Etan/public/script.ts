interface Game {
  src: string;
  title: string;
  ref: string;
  id?: any;
  price?: number;
}

async function handleLoadStore() {
  const { data } = await axios.get("/all-games");
  console.log(data);
  
  renderAll(data);
}

async function handleNewGame(ev) {
  ev.preventDefault();
  const title = ev.target.title.value;
  const price = ev.target.price.valueAsNumber;
  const ref = ev.target.ref.value;
  const src = ev.target.src.files[0].name;
  console.dir(src);
  
  const id = uid();
  const { data } = await axios.post("/new-game", {
    src,
    title,
    ref,
    id,
    price,
  });

renderAll(data);
}

async function deleteGame(ev) {
let id = ev[0].id;
  const {data} = await axios.delete('/delete-game', {data:{id}});
  const {ok, games } = data;
  console.log(games);
  
  console.log(ok);
  renderAll(games)
};

async function changeRef(ev) {
console.dir(ev.target.id);
let id = ev.target.id;
// const {data} = await axios.patch('/update-gameRef',(req, res) => {})
const {data} = await axios.patch('/update-gameRef', (req, res) => {id})
const {ok, games} = data
console.log({ok, games});

}
function renderAll(gameArray: Array<Game>) {
  let html;
  try {
    gameArray.forEach(
      (game) =>
        (html += `<div class="game">
        <a href="${game.ref}" class="game_ref-wrapper">
  <div class="game_image">
  <img src="./images/${game.src}">
  </div>
  </a>
  <input onblur="changeTitle(event,${game.id})" id='${game.id}' type='text' value='${game.title}' class="game_title-update">
  <input onblur="changePrice(event,${game.id})" id='${game.id}' type='number' value='${game.price}' class="game_price-update">
  <input onblur="changeRef(event)" id='${game.id}' type="text" value="${game.ref}" class="game_ref">
  <button onclick="deleteGame(${game.id})" id='${game.id}' class="game_id">delete</button>
</div>`)
    );
    document.querySelector(".wrapper_table-bottom").innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
function handleSrcPreview(ev) {
  const previewContainer = document.querySelector('.game_src-preview')
  const imageLink = ev.target.files[0].name
  let html = `<img src="./Images/${imageLink}" alt="">`
  try {
    previewContainer.innerHTML = html;
    
  } catch (error) {
    console.error(error);
  }
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

