import { arrayBuffer } from "stream/consumers";

axios.get("/teams").then(({data})=>{console.log(data)})

function handleSearch(event){
   
    const search=event.target.value
    console.log(search);
    
    axios.get(`/teams?search=${search}`).then(({data})=>{
      const root=document.querySelector(`#root`);
      let html="";
      if (Array.isArray(data)){
          data.forEach((footballer)=>{
              html+=`<div class="players">
              <h2 class="player">${footballer.player}</h2>
              <h3 class="team">${footballer.team}</h3>
              <img src="${footballer.url}" alt="">
              </div>`
          })
          root.innerHTML=html;
      }
      else{console.log(`function dont get the array`);
      }
    });
}