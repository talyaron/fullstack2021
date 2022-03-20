async function handleSubmit(e) {
    e.preventDefault();

    const { name, type } = e.target.elements
    console.log(name.value,type.value);
    

     const {data} = await axios.post('/game', {name: name.value, type: type.value})
     const {games}=data
    //  console.log(data);
    const root =document.querySelector('#root')
    renderGames(games,root)
}

async function handleGetGames() {
    const {data} = await axios.get('/get-games')
    const {games}=data
    console.log(data);
    const root =document.querySelector('#root')
    renderGames(games,root)
    
}

function renderGames(games,root) {

    try {
        const html = games.map(theGame => {
            return `<div class="card"><h2>${theGame.name} ${theGame.type}</h2></div>`  
        }).join('')
  
        root.innerHTML = html
  
        if (!root) throw new Error("no root in rendergames");
  
    } catch (error) {
        console.error(error.message);
  
    }
  
  }