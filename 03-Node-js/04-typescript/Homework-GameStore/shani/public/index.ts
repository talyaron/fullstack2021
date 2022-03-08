// const gameWeb={ 
//  getGames: async function(){
//     try{
//         const {data}= await axios.get('/get-games');
    
//     if(Array.isArray(data)) return data;
//       console.log(data)
     

//     }catch(error){
//         console.error(error)
//     }
     
//  },
//  renderToDom(){
//  let html="";
//  data.forEach(game=>{
//      html+=`
//      <div class="game"> <p>${game.name}</p> </div>`
//  })
//  let root=document.querySelector("#root")
//  root.innerHTML=html


//  },
 
// }

function handleGames(){
   getGames()
}
     
async function getGames(){
    const {data}= await axios.get('/get-games');
    console.log(data)
    renderToDom(data);

  
}

function renderToDom(games){
    let root=document.querySelector("#root");
    let html="";
    games.forEach(game=>{
        html+=`
        <div class="game"> <p>${game.name}</p> </div>`
    })

   
    root.innerHTML=html
   
   
};