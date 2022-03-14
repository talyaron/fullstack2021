function initApp() {
  getOwnerGames();
}


// function renderGames(data: Array<any>) {
//   let html = '';

//   data.forEach((game) => {
//     html += `  
        
//         <table>
//         <tr>
//           <th>Image</th>
//           <th>Name</th>
//           <th>Release</th>
//           <th>Description</th>
//         </tr>
//         <tr>
//         <td>
//         <p contenteditable="true"> 
//          <img src="${game.Img}.jpg">
//         </p>
//         </td>
//             <td><p contenteditable="true">${game.Name}</p></td>
//             <td><p contenteditable="true">${game.Release}</p></td>
//             <td><p contenteditable="true">${game.Description}</p></td>
//         </tr>
//       </table>
//       <button>save changes</button>
//       `
//     const root = document.querySelector('#root')
//     root.innerHTML = html;
//   })

// }




async function getOwnerGames() {
  try{
  const { data } = await axios.get('/get-games')
  if (Array.isArray(data)) return data;
			throw new Error("data is not an array");

  // console.log(data);
  // renderGames(data);
} catch (error){
  console.error(error);
}
} 

 async function renderGames() {
  let html = "";

  const games = await getOwnerGames();

  if (games) {
    games.forEach(game => {
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
        </td>
            <td><p contenteditable="true">${game.Name}</p></td>
            <td><p contenteditable="true">${game.Release}</p></td>
            <td><p contenteditable="true">${game.Description}</p></td>
        </tr>
      </table>
      <button>save changes</button>
      `
    })
    const root = document.querySelector('#root')
    root.innerHTML = html
  }
}

renderGames()




async function handleSearchGame(event) {
  // console.log('sdg')
  const { games } = await axios.get(`/get-search?searchGame=${event.target.value}`)

  renderGames();

}