

async function handleNewGame() {
    const { data } = await axios.get('/get-img')
    console.log(data)
    renderGame(data);
}

function renderGame(data) {
    let html = '';

    data.forEach(img => {
        html += `  <div class="card" onclick="handleFlipCard()">
  
           <div class="front-card"><img src="${img.src}"></div>
    
   </div>`
    });
    const root = document.querySelector("#root");
    root.innerHTML = html;
}

 function handleFlipCard() {
     const card= document.querySelector('.card')
    card.classList.toggle('is-flipped');
};