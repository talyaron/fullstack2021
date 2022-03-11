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
          <th>Name</th>
          <th>Release</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        <tr>
        <td>
        <p contenteditable="true"> 
         <img src="${game.Img}.jpg">
        </p>
        </td>
            <td><p contenteditable="true">${game.Name}</p></td>
           
            <td><p contenteditable="true">${game.Release}</p></td>
            <td><p contenteditable="true">${game.Description}</p></td>
        </tr>
      </table>
      <button>save changes</button>
      `
    const root = document.querySelector('#root')
    root.innerHTML = html;
  })

}

// function handleSearchGame(ev) {

//   axios.get(`/get-games?searchGame=${ev.target.value}`).then(({game})=>{
//     renderGames(game);
//   })

// }