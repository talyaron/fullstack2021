
function handleGames(){
   getGames()
}
     
async function getGames(){
    const {data}= await axios.get('/get-games');
    console.log(data)
    renderToDom(data);

  
}





function renderToDom(games){
    
    let root=document.querySelector("#root");
    let html="";
    games.forEach(game=>{
        html+=`
        <div class="game"> <p>${game.name}</p> </div>`
    })

   
    root.innerHTML=html
   
   
};