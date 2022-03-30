async function handleSubmit(e) {
    e.preventDefault();

    const { name, type,img } = e.target.elements
  
     const {data} = await axios.post('/game', {name: name.value, type: type.value, img:img.value})
     const {games}=data
  
}

async function handleGetGames() {
    const {data} = await axios.get('/get-games')
    const {games}=data
    // console.log(games);
    
    renderGames(games)
    
}

async function handleupdate(event,gameId){
    const type=event.target.value;

    const {data} = await axios.patch('/update-games',{gameId,type})
    // console.log(data);
    
    
}

async function handleDelete(gameId){
    const {data} = await axios.delete('/delete-games',{data:{gameId}})
    handleGetGames()
}

function renderGames(games) {
    const root =document.querySelector('#root')
    try {
        const html = games.map(theGame => {
            // console.log(theGame);
            
            return `<div class="card"><h2>${theGame.name} :${theGame.type}</h2>
            <div><input type='text' placeholder='type' value='${theGame.type}' onblur='handleupdate(event,"${theGame._id}")'/></div>
            <button onclick='handleDelete("${theGame._id}")'>Delete</button>
            <div><img src="${theGame.img}" alt=""></div></div>`  
        }).join('')
  
        root.innerHTML = html
  
        if (!root) throw new Error("no root in rendergames");
  
    } catch (error) {
        console.error(error.message);
  
    }
  
  }

  