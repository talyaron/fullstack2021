async function getAllStock() {

    const { data } = await axios.get("/get-stock")
    console.log(data);

    renderStock(data);
}

getAllStock();

async function handleSubmit(ev) {
    ev.preventDefault();
    const uid = function () {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
      }
    
      
    const newItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id:uid  };
    newItem.id = uid();
    const keys = Object.keys(newItem)

    for (let i = 0; i < keys.length; i++) {
        newItem[keys[i]] = ev.target.elements[i].value;
    }
    const { data } = await axios.post("/add-stock", { newItem })
    console.log(data);
    
    renderStock(data);
}

async function handleDelete(id) {
    console.log(id);
    const {data}= await axios.post("/delete-stock", {id})
    console.log(data);
    
    renderStock(data);
}

function renderStock(data) {
    let HTML = '';
    data.items.forEach(item => {
        HTML += ` <div class="card">
        <p> name: ${item.name}</p>
        <p> price: ${item.price}</p>
        <img src="${item.img}">
        <p> group: ${item.group}</p>
        <p> collection: ${item.Collection}</p>
        <p> function: ${item.function}</p>
        <p> movement: ${item.movement}</p>
        <p> case: ${item.case}</p>
        <p> diameter: ${item.diameter}</p>
        <p> dial: ${item.dial}</p>
        <p> bracelet: ${item.bracelet}</p>
        <button onclick="handleDelete('${item.id}')">Delete</button>
        <button onclick="handleEdit('${item.id}')">Edit</button>
       </div> `;
    });
    const rootHTML = document.getElementById('root');
    rootHTML.innerHTML = HTML;
}
