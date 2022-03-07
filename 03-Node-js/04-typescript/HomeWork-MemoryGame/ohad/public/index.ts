async function getAllCards() {
    const { data } = await axios.get("/get-cards");
    console.log(data);
    renderCards(data);
  }


  function renderCards(data: Array<any>) {
    let html = '<section class="game-container">';
    data.forEach((card) => {
      html += `
      <div class="game-container--card">
      <img class="game-container--card__img" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
      title="?" onclick="src='${card.url}' ; title='${card.name}';  
       setTimeout(()=>{
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg' ; title='?'},1300)">
         </div>`;
      
    });
    const root = document.querySelector("#root");
    html += '</section>'
    root.innerHTML = html;
  }


  async function shuffle(){
    const { data } = await axios.get("/get-cards");
    const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledArray)
    renderCards(shuffledArray);
  }

  function newGame(){
    let btn = document.getElementById("btn");
    btn.style.display = "none";
    shuffle();
  }