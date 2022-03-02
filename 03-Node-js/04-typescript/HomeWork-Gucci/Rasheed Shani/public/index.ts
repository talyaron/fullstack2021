


async function handleShowItems() {
  const {data} = await axios.get('/get-all-data');
  console.log(data);
}

// function renderByGender() {  
  
//   render(gender);
// }

function handleRenderByGender(data) {   
  
  getAllData(data)
}

async function getAllData(gender){
  const {data} = await axios.get('/get-all-data');
  
  
  render(data);
}

async function handleAddItems(ev) {
  ev.preventDefault();
  
    const name = ev.target.name.value;
    const price = ev.target.price.value;
    const imgTop = ev.target[2].value;
    const imgBottom = ev.target[3].value;
    const gender = ev.target[4].value;
    const type = ev.target[5].value;
    const id= Math.random().toString(36);
    const {data}= await axios.post('/add-items',{name, price, imgTop, imgBottom, gender, type, id})
    
    ev.target.reset();

    
    render(data);
    
  // renderFilterByGenderAndType(gender, type, data);
 
}

async function handleRemoveItems(ev) {
  ev.preventDefault();
  
  const name = ev.target.elements.remove.value;
  const {data}= await axios.put('/delete-items',{name})
  ev.target.reset();
  render(data);


}



function render(data) {
  const root=document.getElementById('root');
  let html = "";
  data.items.forEach((item: any) => {
    
    html += `<div class="items">
      <p>${item.name}</p>
      <img class="imgTop" src="${item.imgTop}" >
      <img class="imgBottom" src="${item.imgBottom}" >
      <p>${item.price}$</p>
      <button class="cartButton" onclick="addToCart(${item.id})">Add To Cart</button>
      </div>`;
  });
  
  
  root.innerHTML = html;
  
}


//category buttons

// async function handleSearch(ev) {
//   const searchTerm = ev.target.value;
//   const {data} = await axios.get('/search-items',{searchTerm});  
    
//     const root = document.getElementById("root");
//     const gender = ev.target.dataset.gender;
//     let html = "";
//      if(Array.isArray(data)){
//        data.forEach((item)=>{
//          html +=`<div class="items">
//          <p>${item.name}</p>
//          <img class="imgTop" src="${item.imgTop}" >
//          <img class="imgBottom" src="${item.imgBottom}" >        
//          <p>${item.price}$</p>
//          <button class="cartButton" onclick="addToCart(${item.id})">Add To Cart</button>
//          </div>`;
//        })
            
//       root.innerHTML = html;
//     } else {
//       render(data);
//     }

// }





