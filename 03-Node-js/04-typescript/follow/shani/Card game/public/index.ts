

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

function renderGame(data){
    const root=document.querySelector("#root");
    let html="";
   if(Array.isArray(data)){
       let html="";
       data.forEach(card=>{
           html+=`<div class="card"><img src=${card.imgUrl}> <p>${card.name}</p></div>`
       })
       root.innerHTML=html;
   }


}




