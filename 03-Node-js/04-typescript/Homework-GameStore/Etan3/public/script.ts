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
  data.forEach((game => {
    game.id = uid()
  }))
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

function renderAll(gameArray: Array<Game>) {
  let html;
  try {
    gameArray.forEach(
      (game) =>
        (html += `<div class="game">
  <div class="game_image">
  <img src="./images/${game.src}">
  </div>
  <div class="game_link">${game.ref}</div>
  <input id='${game.id}'type='text' value='${game.title}' class="game_title-update">
  <input id='${game.id}'type='number' value='${game.price}' class="game_price-update">
  <input id='${game.id}'type='text' value='${game.id}' class="game_id-update">
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

// //     const gameStore = {
// //     gamesList: [],
// //     getGames: async function () {
// //         this.gamesList = data
// //         console.log(data);
// //     },

// // }

// // gameStore.getGames()
// // console.log(gameStore);
