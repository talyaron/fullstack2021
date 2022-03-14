import { render } from "express/lib/response";

async function gettogame() {
  try {
    const { data } = await axios.get("/get-all-games");
    const { game, error } = data;
    if (error) throw new Error(error)
    console.log(data);
    console.log(game);
    const root: Element = document.querySelector("#root")
    renderToDOM(root, game)
  } catch (err){
  console.error(err);
}
}

gettogame();
async function getgemebyprice(maxprice: Number) {
  try {
    const { data } = await axios.get(
      `/get-game-by-price?max price=${maxprice}`
    );
const {game, error}=data;
if (error) throw new Error(error);
} catch (err) {
  console.error(err);
}
}

getgemebyprice (30.100);

function handleGetByPrice(ev){
  const maxPrice: number= ev.target.valueAsNumber;
  getgemebyprice(maxPrice)
}

function renderToDOM(element:Element, game:Array<any>){
  console.log(game);
  let html=""
  game.forEach((game)=>{
    html+=`<p>${game.name}input id="${game.id}"type='text' value='${game.name} onchange="handleUpdateGame(event)" /></p>`;
  });
  
  element.innerHTML=html;
}


async function handleUpdateGame(ev) {
  try {
    const id = ev.target.id;
    const value = ev.target.value;

    const { data } = await axios.patch("/update-game", { id, title: value });
    const { error, results } = data;
    if (error) throw new Error(error);

    const root: Element = document.querySelector("#root");
    renderToDOM(root, results);
  } catch (err) {
    console.error(err);
  }
}
