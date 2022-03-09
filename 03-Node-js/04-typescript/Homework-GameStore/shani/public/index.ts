
function handleGames(){
   getGames()
}
     
async function getGames(){
    const {data}= await axios.get('/get-games');
    
    renderToDom(data);


  
}

async function handleAddGame(ev){
    ev.preventDefault();
   
    const name=ev.target.elements.name.value;
    const standardEdition=ev.target.elements.standardEdition.value;
    const deluxeEdition=ev.target.elements.deluxeEdition.value;
    const goldEdition=ev.target.elements.goldEdition.value;
    const bunbleEdtion=ev.target.elements.bunbleEdtion.value;
    
    

    const {data}= await axios.post('/add-new-game',{name,standardEdition,deluxeEdition,goldEdition,bunbleEdtion});

    console.log(data)
    
    renderToDom(data);
    ev.target.reset();


}

async function handleDeleteGame(ev){
    ev.preventDefault();
    
    const deletename=ev.target.elements.name.value;
    let id=ev.target.id;
    
    const {data}= await axios.post('/delete-game',{name:deletename,id:id});
    
    renderToDom(data);
    console.log(data)
    ev.target.reset();


}




function renderToDom(data){

    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`
        <div class="game" id=${game.id}> <h3>${game.name}</h3> <p>${game.standardEdition}</p>  <p>${game.deluxeEdition}</p> <p>${game.goldEdition}</p> <p>${game.bundleEdition}</p></div>`
    })

   
    root.innerHTML=html
   
   
};