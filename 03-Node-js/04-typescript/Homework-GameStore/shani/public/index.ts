async function loadErp(){
    const data= await getGames();
    renderToERP(data)
    

}


async function loadGameStore(){
    const data= await getGames();
    renderToGameStore(data)
    
}



function handleErpLoad(){
  loadErp();
}
     
function handleGameStoreLoad(){
   loadGameStore();
   
}
     
async function getGames(){
    const {data}= await axios.get('/get-games');
    return data   
}

async function handleAddGame(ev){
    ev.preventDefault();
   
    const name=ev.target.elements.name.value;
    const frontImg=ev.target.elements.frontImg.value;
    const backImg=ev.target.elements.backImg.value;
    const standardEdition=ev.target.elements.standardEdition.value;
    const deluxeEdition=ev.target.elements.deluxeEdition.value;
    const goldEdition=ev.target.elements.goldEdition.value;
    const bundleEdition=ev.target.elements.bundleEdition.value;    


    const {data}= await axios.post('/add-new-game',{name,frontImg,backImg,standardEdition,deluxeEdition,goldEdition,bundleEdition});


    console.log(data)
    
    renderToERP(data);
    ev.target.reset();


}

async function handleDeleteGame(ev){
    ev.preventDefault();
    
    const deletedGame=ev.target.elements.delete.value;
    
    const {data}= await axios.post('/delete-game',{deletedGame});
    
    renderToERP(data);
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
    renderToERP(data);
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
    const name=ev.target.elements.gameName.value;
    const frontImg=ev.target.elements.frontImg.value;
    const backImg=ev.target.elements.backImg.value;    
    const standardEdition=ev.target.elements.standardEdition.valueAsNumber;
    const deluxeEdition=ev.target.elements.deluxeEdition.valueAsNumber;
    const goldEdition=ev.target.elements.goldEdition.valueAsNumber;
    const bundleEdition=ev.target.elements.bundleEdition.valueAsNumber;
    
    
    
    const {data}= await axios.patch('/update-game',{name,frontImg,backImg,standardEdition,deluxeEdition,goldEdition,bundleEdition,id});

    console.log(data)

    
    renderToERP(data);   

}

async function handleSearchGame(ev){
    const search=ev.target.value;
    console.log(search);
    const {data}= await axios.get(`/search-game?search=${search}`);
    renderToGameStore(data);
   



}





function renderToERP(data){

    let root=document.querySelector("#root");
    let html="";
    data.forEach(game=>{
        html+=`

        
        <form class="game" id="${game.id}" onsubmit="handleUpdateGame(event)">
         <h3 class="gameName">${game.name}</h3>           

         <label for="gameName">Game Name: </label>
         <input type="text" id="gameName" name="gameName" placeholder="${game.name}" required>  

         <label for="frontImg">Front Img Url: </label>
         <input type="text" id="frontImg" name="frontImg" placeholder="${game.frontImg}" required>  
         
         <label for="backImg">Back Img Url:  </label>
         <input type="text" id="backImg" name="backImg" placeholder="${game.backImg}" required>  
          <br>
         <label for="standardEdition">Standard Edition:  </label>
         <input type="number" id="standardEdition" name="standardEdition" placeholder="${game.standardEdition}" required>  
        
         <label for="deluxeEdition">Deluxe Edition:  </label>
         <input type="number" id="deluxeEdition" name="deluxeEdition" placeholder="${game.deluxeEdition}" required > 
         
         <label for="goldEdition">Gold Edition:  </label>
         <input type="number" id="goldEdition" name="goldEdition" placeholder="${game.goldEdition}" required> 
         
         <label for="bundleEdition">Bundle Edition:  </label>
         <input type="number" id="bundleEdition" name="bundleEdition" placeholder="${game.bundleEdition}" required> 
        
         <button type="submit" value="update">Update</button></form>`
    })

   
    root.innerHTML=html
   
   
};

function renderToGameStore(data){
    const rootGameStore=document.querySelector("#rootGameStore");
    let html="";
    data.forEach(storeGame=>{
        html+=`
        <div class="storeGame"> 
        <h1>${storeGame.name}</h1>
        <img src="${storeGame.frontImg}" class="storeGame__img--front">
        <img src="${storeGame.backImg}" class="storeGame__img--back">
        
        <div class="storeGame__editions"> 
        <h3 class="storeGame__editions--standardEdition"> Standard Edition ${storeGame.standardEdition} </h3>
        <h3 class="storeGame__editions--deluxeEdition"> Deluxe Edition $${storeGame.deluxeEdition} </h3>
        <h3 class="storeGame__editions--goldEdition"> Gold Edition $${storeGame.goldEdition} </h3>
        <h3 class="storeGame__editions--bundleEdition"> Bundle Edition  $${storeGame.bundleEdition} </h3>
        </div>
        
        </div>
        `
    })

    rootGameStore.innerHTML=html;
}

