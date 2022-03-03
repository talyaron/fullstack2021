
  function handleSelect(ev){
    try {
      const books =ev.target.value
      console.log(books);
      
      axios.get(`/get-books?=${books}`).then(({ data }) => {
          console.log(data);
          const root=document.querySelector(`.root`)
          render(root,data)

        });
    } catch (error) {
     console.error(error);
               
    }
}

function render (root,books){
let html=``
books.forEach(books => {
  html +=`<div class="books">
  <img ="${books.img}" alt="">    
  </div>`
});

root.innerHTML=html;
}