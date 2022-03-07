

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
   let uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    

    const root=document.querySelector("#root");
   if(Array.isArray(cards)){
    
       let html="";
       cards.forEach(card=>{
           html+=`<div class="cardBack" onclick="handleFlipCard()"> <div class="card" id=${uid}><img src=${card.imgUrl}> <p>${card.name}</p></div></div>`
       })
       root.innerHTML=html;
      
   }  


}

// function handleFlipCard(){

    
//     const cardBack:HTMLElement=document.querySelector(".cardBack");
    
//     cardBack.style.display="none";

//     // let card:HTMLElement=document.querySelector(".card");
//     // card.style.display="none";

// }


function handleNewGame(){

    let openingPage:HTMLElement=document.querySelector(".openingPage");   
    openingPage.style.display="none"; 
    


    // let gameCards:HTMLElement=document.querySelector("#root");
    // let title:HTMLElement=document.querySelector(".title")
    // let displayCards=gameCards.style.display
    // let startButton:HTMLElement=document.querySelector(".startButton");
   
    // if(displayCards ==='block'){
    //     startButton.style.display="none";
    //     gameCards.style.display="grid";
    //     title.style.display="none";
    //     document.body.style.backgroundImage='url("https://media.sketchfab.com/models/bde62298ac8640588d5a2928b8e113dc/thumbnails/cea9e18e2bc84efdab1c881a6e6d82c6/a778dd7953b34ab9b9bc92dc2a499598.jpeg")';
    //     document.body.style.backgroundRepeat="no-repeat";
    //     document.body.style.backgroundSize="cover";
        

    // }else {
    //    startButton.style.display="inline";
    //    gameCards.style.display="none";
    //    document.body.style.backgroundImage='url("https://thumbs.gfycat.com/HardHoarseBarasinga-size_restricted.gif")';
    //    document.body.style.backgroundRepeat="no-repeat";
    //    document.body.style.backgroundSize="cover";
       
    // }
    
    

}




