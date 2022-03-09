async function getGames() {
    const {data} = await axios.get('/get-games')
    console.log(data)
    renderGames(data)
}

function renderGames (data){

    const rootHTML = document.querySelector('.root')

    let html = '';
    
    data.forEach(game => {
        html += `<div class="card">
        
        <p>${game.name} : ${game.price}</p>
        <button onclick="handleDelete"></button>
        <button onclick="handleUpdate"></button>
        
        </div>`
    });

    rootHTML.innerHTML = html;

}
