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

async function handleSearchGame(ev) {
  const name = ev.target.value;
  console.log(ev.target.value);
  const result = await axios.get(`/get-search?searchGame=${name}`);

  console.log(result);

  renderGames(result);

}
async function handleDeleteGames(id) {
  console.log(id);
  const data = await axios.delete('/delete-game', { data: { id } });
  const { ok, gameBoy } = data;
  console.log(gameBoy);
  console.log(ok);


}
