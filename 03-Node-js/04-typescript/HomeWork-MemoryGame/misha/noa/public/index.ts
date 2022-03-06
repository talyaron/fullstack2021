

async function handleNewGame(){
    const {data}= await axios.get('/get-img')
    console.log(data)
    renderGame(data);
}

function renderGame(data){
    let html='';

    data.forEach(img => {
       html+=`<div class="card">
      <div class="img"> <img src="${img.src}"> </div>
       </div>`
    });
    const root= document.querySelector("#root");
    root.innerHTML= html;

}