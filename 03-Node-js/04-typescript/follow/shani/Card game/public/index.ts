

// const game={
//     getNewGame: async function () {
//     try{
//        const {data} = await axios.get("/new-game");  
//        console.log(data);
//        if(Array.isArray(data)) return data;
//        throw new Error ("data is not an array");
//     }catch(err){
//         console.error(err);
//         return[]
//     }
    
//     }
    
// }

function appInit(){
    getCards()
}

//needed to load on when the page opens


async function getCards(){
    const {data}= await axios.get("/new-game");
    console.log(data);
    renderGame(data)
}

function renderGame(cards){

   
    //  for (let i = cards.length - 1; i > 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       const temp = cards[i];
    //       cards[i] =cards[j];
    //       cards[j] = temp;
    // }

    const root=document.querySelector("#root");
   if(Array.isArray(cards)){
       let html="";
       cards.forEach(card=>{
           html+=`<div class="card"><img src=${card.imgUrl}> <p>${card.name}</p></div>`
       })
       root.innerHTML=html;
   }


}


function handleNewGame(){
    const gameCards:HTMLElement=document.querySelector("#root");
    const displayCards=gameCards.style.display
    const startButton:HTMLElement=document.querySelector(".startButton");
    if(displayCards==='none'){
        startButton.style.display="block";

    }else{
       startButton.style.display="none";
       gameCards.style.display="grid";

    }
   
    getCards()
   
   
    
    

}




