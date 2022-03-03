console.log('owner')

interface Aviator {
    renderStock(items)
}

let stock: Aviator = {
    renderStock(items) {
        let HTML = '';
        items.forEach(item => {
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
}

async function handleSubmit(ev) {
    ev.preventDefault();
    const newItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id: 0 };
    const keys = Object.keys(newItem)
    for (let i = 0; i < keys.length; i++) {
        newItem[keys[i]] = ev.target.elements[i].value;
    }
    const { data } = await axios.post('/addItem', {newItem});
    stock.renderStock(data);
}

async function handleDelete(id) {
    const { data } = await axios.delete('/deleteStock', {data :{id}});
    stock.renderStock(data);
}

async function handleEdit(id) {
    const form: any = document.querySelector('.updateForm');
    form.classList.add('visableForm');
    const { data } = await axios.get('/getItems');
    let EditedItem: any = data.filter((item) => item.id === id)[0];
    console.log(EditedItem);

    const keys = Object.keys(EditedItem)
    for (let i = 0; i < keys.length; i++) {
        form[i].value = EditedItem[keys[i]]

    }
}

async function handleUpdate(ev) {
    ev.preventDefault()
    let updateItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id: 0 };
    const keys = Object.keys(updateItem);
    for (let i = 0; i < Object.keys(updateItem).length; i++) {
        updateItem[keys[i]] = ev.target.elements[i].value;
    }
    const { data } = await axios.post('/updateItem', {updateItem})
    stock.renderStock(data);
}

async function initSite() {
    const { data } = await axios.get('/getItems');
    stock.renderStock(data);
}

initSite();
