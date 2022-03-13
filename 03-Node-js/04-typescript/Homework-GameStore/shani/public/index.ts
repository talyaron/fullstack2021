
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
    
    

<<<<<<< HEAD
    const {data}= await axios.post('/add-new-game',{name,standardEdition,deluxeEdition,goldEdition,bunbleEdtion});
=======
    const {data}= await axios.post('/add-new-game',{name,standardEdition,deluxeEdition,goldEdition,bundleEdition});
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)

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
<<<<<<< HEAD
    
    const standardEdition=ev.target.elements.standardEdition.value;
    const deluxeEdition=ev.target.elements.deluxeEdition.value;
    const goldEdition=ev.target.elements.goldEdition.value;
    const bunbleEdtion=ev.target.elements.bunbleEdtion.value;


    const {data}= await axios.post('/update-game',{standardEdition,deluxeEdition,goldEdition,bunbleEdtion});

    console.log(data)
    
    renderToDom(data);


    ev.target.reset();
=======
    const id=ev.target.elements.findId.value;
    const {data}= await axios.get('/get-game-by-id',{id})
    renderToDom(data);
    console.log(data)
    ev.target.reset();

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
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)

}




function renderToDom(data){

    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`
<<<<<<< HEAD
        <form class="game" id=${game.id} onsubmit="handleUpdateGame(ev)">
         <h3>${game.name}</h3> 
         <input type="text" placeholder="${game.standardEdition}" value="${game.standardEdition}">  
         <input type="text" placeholder="${game.deluxeEdition}" value="${game.deluxeEdition}"> 
         <input type="text" placeholder="${game.goldEdition}" value="${game.goldEdition}"> 
         <input type="text" placeholder="${game.bundleEdition}"value="${game.bundleEdition}" > 
        <button type="submit">Update</button></form>`
=======
        
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
>>>>>>> parent of 98e351d9 (Merge branch 'main' of https://github.com/talyaron/fullstack2021)
    })

   
    root.innerHTML=html
   
   
};