function initApp() {
    console.log("start");
 
    console.log("end");
  }

async function handleNewGame(){
    const { data } = await axios.get("/newGame");
    console.log(data);
    

}



function renderStartGame(data: Array<any>){
  console.log(data);
  
    let html = "";
    data.forEach((game) => {
      html += `<div class="root__color" onclick="handleFlipedCard(event)">
        <img src="https://www.cinemascomics.com/wp-content/uploads/2021/05/Un-actor-de-Marvel-Studios-se-quiere-pasar-a-DC-Comics.jpg">
        </div>
      `;
    });
    const root = document.querySelector("#root");
    root.innerHTML = html;
}
function renderGame(data: Array<any>){
  console.log(data);
  
    let html = "";
    data.forEach((game) => {
      html += `<div class="root__color" onclick="handleFlipedCard(event)">
     
      <div class="root__color--backCard">
      <img src = "${game.photo}">
        </div>
        </div>
      `;
    });
    const root = document.querySelector("#root");
    root.innerHTML = html;
}
// async function handleFlipedCard(ev) {
//     const click = ev.target.value;
//     if (click){
//         const cardClicked = document.querySelector('.color');
//       cardClicked.classList.toggle('isFliped');
        
//     }
// }