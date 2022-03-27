//get all games

async function getAllGames() {
  try {
    const { data } = await axios.get("/get-all-games");
    const { games, error } = data;
    if (error) throw new Error(error);
    console.log(data);
    console.log(games);
    const root: Element = document.querySelector("#root");
    renderToDOM(root, games);
  } catch (err) {
    console.error(err);
  }
}

getAllGames();

async function getGamesByPrice(maxPrice: number) {
  try {
    const { data } = await axios.get(
      `/get-games-by-price?maxPrice=${maxPrice}`
    );
    const { games, error } = data;
    if (error) throw new Error(error);
  } catch (err) {
    console.error(err);
  }
}

getGamesByPrice(20.13);

function handleGetByPrice(ev) {
  const maxPrice: number = ev.target.valueAsNumber;
  getGamesByPrice(maxPrice);
}

async function deleteGame(id: string) {
  try {
    const { data } = await axios.delete("/delete-game", { data: { id } });

    const { error, results } = data;

    if (error) throw new Error(error);
    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

function renderToDOM(element: Element, games: Array<any>) {
  console.log(games)
  let html = "";
  games.forEach((game) => {
    html += `<p>${game.title} <input id="${game.id}" type='text' value='${game.title}' onchange="handleUpdateGame(event)" /></p>`;
  });

  element.innerHTML = html;
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
