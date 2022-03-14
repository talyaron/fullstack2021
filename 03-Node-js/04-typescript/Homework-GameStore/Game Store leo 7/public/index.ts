async function handleLoad() {
    try{
        const{ data } =await axios.get(`/get-games`)
renderGames(data)
    }
catch(error){
    console.error(error);
}}

async function handleAddGame(event){
    console.log(event);
    try{event.preventDefault();
        const addGame = { name: event.target.elements.name.value, price: event.target.elements.price.valueAsNumber }
        
        const {data}=await axios.post(`/add-games`,{addGame})
        const root=document.querySelector('#root')
        renderGames(data)
        event.target.reset()
    }
    catch(error){
        console.error(error)
    }
    
}

function renderGames(data){
    console.log(data);
    
const root=document.querySelector('#root')
let html=''
data.forEach(game => {
    html+=`<div class="gameCard">${game.name}:${game.price}

     <form  id="${game.id}" onsubmit="handleupdate(event)">
     <input type="text" id="" name="name" required placeholder="enter game"> 
     <input type="number" id="" name="price" required placeholder="enter price"> 
     <input type="submit" name="submit" value="Update">
     </form>
     <button onclick="handleDelete(${game.id})">Delete</button>
     </div>` 
});
root.innerHTML=html
}


 async function handleupdate(ev){
   
   console.log(ev.target);
   
     
     try{ ev.preventDefault()
        const updateGame = { name: ev.target.elements.name.value, price: ev.target.elements.price.valueAsNumber };
        const id= ev.target.id
        console.log(id)
        
        
        const {data}= await axios.patch(`/update-games`,{...updateGame,id});
        
        renderGames(data)
     }
     catch(error){
         console.error(error)
     }
   
    
}

async function handleDelete(id) {
    console.log(id);
    
    const {data}= await axios.delete('/delete-games', {id});

    renderGames(data)
}

