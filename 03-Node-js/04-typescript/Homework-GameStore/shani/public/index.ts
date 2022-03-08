
function handleGames(){
   getGames()
}
     
async function getGames(){
    const {data}= await axios.get('/get-games');
    //  console.log(data)
    renderToDom(data);

  
}

async function handleAddGame(ev){
    ev.preventDefault();
    
    const name=ev.target.elements.name.value;
    const {data}= await axios.post('/add-new-game',{name:name});
    
    renderToDom(data);
    ev.target.reset();


}



function renderToDom(data:Array<any>){
    
    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`
        <div class="game"> <p>${game.name}</p> </div>`
    })

   
    root.innerHTML=html
   
   
};