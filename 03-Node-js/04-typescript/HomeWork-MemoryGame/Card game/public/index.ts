

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

    const root=document.querySelector("#root");
   if(Array.isArray(cards)){
    
       let html="";
       cards.forEach(card=>{
           html+=`<div  onclick="handleFlipCard()"> <div class="card">
           <div class="cardFront">
           <img src=${card.imgUrl}> <p>${card.name}</p></div>
           </div>
           </div>
           `
       })
       root.innerHTML=html;
      
   }  


};


// html+=`<div  onclick="handleFlipCard()"> <div class="card">
// <div class="cardBack"></div>
// <div class="cardFront">
// <img src=${card.imgUrl}> <p>${card.name}</p></div>
// </div>
// </div>

function checkMatches(cards){
    
}



function handleFlipCard(){    
    // const cardBack:HTMLElement=document.querySelector(".cardBack");    
    // // cardBack.style.display="none";
    // const image = document.createElement('img');
    // image.src  ="img/BackCard.png";
    // document.querySelector(".cardBack").appendChild(image);
    // cardBack.style.gridTemplateColumns=" repeat(4, 250px)"
    // cardBack.style.gridTemplateRows=" repeat(4, 250px)"

    
    
    // let card:HTMLElement=document.querySelector(".card");
    // card.style.visibility="visible";

}


function handleNewGame(){

    let openingPage:HTMLElement=document.querySelector(".openingPage");   
    openingPage.style.display="none"; 
    
    

}




