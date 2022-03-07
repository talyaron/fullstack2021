
async function handleNewGame(){
    const {data} = await axios.get("/new-game");
    renderCards(data);
    console.log(data);

}
function renderCards(data){
    let html="";
    const root = document.querySelector("#root")
    data.forEach(card=>{
      html+=  `<div class="card">
        <div class="card__front">
            <img src="${card.frontImg}"
                alt="">
        </div>
        <div class="card__back">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAg9dclGw0HS-hNVFW8q1bUrzxcQQbA_xgg&usqp=CAU"
                alt="">
        </div>
    </div>`
    })
    root.innerHTML=html;
}