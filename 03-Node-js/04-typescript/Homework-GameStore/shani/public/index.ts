
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
    const bundleEdition=ev.target.elements.bundleEdition.value;
    
    

    const {data}= await axios.post('/add-new-game',{name,standardEdition,deluxeEdition,goldEdition,bundleEdition});

    console.log(data)
    
    renderToDom(data);
    ev.target.reset();


}

async function handleDeleteGame(ev){
    ev.preventDefault();
    
    const deletedGame=ev.target.elements.delete.value;
    //let id=ev.target.id;
    
    const {data}= await axios.post('/delete-game',{deletedGame});
    
    renderToDom(data);
    console.log(data)
    ev.target.reset();


}

async function handleGetGameById(ev){
    ev.preventDefault();
    
    // console.log(id,x)
    // console.dir(ev.target.elements.id)
   try{
    const id=ev.target.elements.id.valueAsNumber;
    const x=ev.target.elements.submit.value;
    const {data}= await axios.get(`/get-game-by-id?id=${id}&x=${x}`);
    
    if (data>-1) throw new Error (`there is no id: ${id} `);
    //how do i get the error message i did in the server to show
    renderToDom(data);
    console.log(data);
    ev.target.reset();  
    

   }catch(error){
       console.error(error)
   }
   
    

}


async function handleUpdateGame(ev){
    ev.preventDefault();
     const id=ev.target.id;
    //id of the game found
    
    const standardEdition=ev.target.elements.standardEdition.valueAsNumber;
    const deluxeEdition=ev.target.elements.deluxeEdition.valueAsNumber;
    const goldEdition=ev.target.elements.goldEdition.valueAsNumber;
    const bundleEdition=ev.target.elements.bundleEdition.valueAsNumber;
    
    
    
    const {data}= await axios.patch('/update-game',{standardEdition,deluxeEdition,goldEdition,bundleEdition,id});

    console.log(data)
    
    renderToDom(data);   

}




function renderToDom(data){

    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`
        
        <form class="game" id="${game.id}" onsubmit="handleUpdateGame(event)">
         <h3 class="gameName">${game.name}</h3> 
          


         <label for="standardEdition">Standard Edition:</label>
         <input type="number" id="standardEdition" name="standardEdition" placeholder="${game.standardEdition}" >  
         
         <label for="deluxeEdition">Deluxe Edition:</label>
         <input type="number" id="deluxeEdition" name="deluxeEdition" placeholder="${game.deluxeEdition}" > 
         
         <label for="goldEdition">Gold Edition:</label>
         <input type="number" id="goldEdition" name="goldEdition" placeholder="${game.goldEdition}" > 
         
         <label for="bundleEdition">Bundle Edition:</label>
         <input type="number" id="bundleEdition" name="bundleEdition" placeholder="${game.bundleEdition}" > 
        
         <button type="submit" value="update">Update</button></form>`
    })

   
    root.innerHTML=html
   
   
};