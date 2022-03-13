
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

async function handleUpdateGame(ev){
    ev.preventDefault();
    
    const standardEdition=ev.target.elements.standardEdition.value;
    const deluxeEdition=ev.target.elements.deluxeEdition.value;
    const goldEdition=ev.target.elements.goldEdition.value;
    const bunbleEdtion=ev.target.elements.bunbleEdtion.value;


    const {data}= await axios.post('/update-game',{standardEdition,deluxeEdition,goldEdition,bunbleEdtion});

    console.log(data)
    
    renderToDom(data);


    ev.target.reset();

}




function renderToDom(data){

    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`
        <form class="game" id=${game.id} onsubmit="handleUpdateGame(ev)">
         <h3>${game.name}</h3> 
         <input type="text" placeholder="${game.standardEdition}" value="${game.standardEdition}">  
         <input type="text" placeholder="${game.deluxeEdition}" value="${game.deluxeEdition}"> 
         <input type="text" placeholder="${game.goldEdition}" value="${game.goldEdition}"> 
         <input type="text" placeholder="${game.bundleEdition}"value="${game.bundleEdition}" > 
        <button type="submit">Update</button></form>`
    })

   
    root.innerHTML=html
   
   
};