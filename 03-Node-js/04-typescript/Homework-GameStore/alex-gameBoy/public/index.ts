function initApp() {
  getOwnerGames();
}

async function getOwnerGames() {
  const { data } = await axios.get('/get-games')
  console.log(data);
  renderGames(data);
}

function renderGames(data: Array<any>) {
  let html = '';

  data.forEach((game) => {
    html += `  
        
        <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Release</th>
          <th>Description</th>
        </tr>
        <tr>
        <td>
        <p contenteditable="true"> 
         <img src="${game.Img}.jpg">
        </p>
        </td >
            <td><p contenteditable="true">${game.Name}</p></td>
            <td><p contenteditable="true">${game.Release}</p></td>
            <td><p contenteditable="true">${game.Description}</p></td>
        </tr>
      </table>
      <button>save changes</button>
      <button onclick="handleDeleteGames(${game.id})">delete</button>
      `
    const root = document.querySelector('#root')
    root.innerHTML = html;
  })

}

function handleSearchGame(ev) {

  const { gameData } = axios.get(`/get-search?searchGame=${ev.target.value}`).then(({ game }) => {
    console.log(game);

  })
  renderGames(gameData);
  console.log(`this ${gameData}`);

}
async function handleDeleteGames(id) {
  console.log(id);
  const data = await axios.delete('/delete-game', { data: { id } });
  const { ok, gameBoy } = data;
  console.log(gameBoy);
  console.log(ok);
  
  
}
