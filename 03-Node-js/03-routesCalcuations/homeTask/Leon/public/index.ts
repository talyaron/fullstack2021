

  function handleSelectPic(ev){
      try {
        const pic =ev.target.value
        console.log(pic);
        
        axios.get(`/get-pictures?pic=${pic}`).then(({ data }) => {
            console.log(data);
            const root=document.querySelector(`.root`)
            render(root,data)

          });
      } catch (error) {
       console.error(error);
                 
      }
  }
function render (root,data){
let html=``
data.forEach(pic => {
    html +=`<div class="card">
    <img src="${pic.url}" alt="">    
    </div>`
});

root.innerHTML=html;
}