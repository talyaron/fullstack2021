console.log('owner')

// interface aviator {

//     items: Array<newItem>

// }
interface newItem {
    img: string
    name: string
    price: number

}

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

let stock = {
    items: [ ],
    addItem(newItem) {
        newItem.id = uid();
        this.items.push(newItem)
        console.log(this.items)
        this.renderStock(this.items)
    },

    deleteItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    },

    updateItem(item){

    },

    renderStock(items) {
        let HTML = '';
        items.forEach(item => {
            HTML += ` <div class="card"
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
            <button onclick="handleUpdate()">Update</button>
           </div> `
        });
        const rootHTML = document.getElementById('root')
        rootHTML.innerHTML = HTML;
    }
}

function handleSubmit(ev) {
    ev.preventDefault();
    const newItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id: 0 };
    for (let field of ev.target) {
        let name = field.name;
        switch (name) {
            case "name":
                newItem.name = field.value;
                break;
            case "price":
                newItem.price = field.value;
                break;
            case "img":
                newItem.img = field.value
                break;
            case "group":
                newItem.group = field.value;
                break;
            case "Collection":
                newItem.Collection = field.value;
                break;
            case "function":
                newItem.function = field.value;
                break;
            case "movement":
                newItem.movement = field.value;
                break;
            case "case":
                newItem.case = field.value;
                break;
            case "diameter":
                newItem.diameter = field.value;
                break;
            case "dial":
                newItem.dial = field.value;
                break;
            case "bracelet":
                newItem.bracelet = field.value;
                break;
        }

    }

    stock.addItem(newItem);

}

function handleDelete(id) {
    stock.deleteItem(id);
    stock.renderStock(stock.items);
}

stock.addItem({ name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp`, group: "AUTOMATIC WATCHES", Collection: "BRISTOL", function: "Chronograph", movement: "Quartz", case: "Gold PVD", diameter: "42 mm", dial: "Ivory", bracelet: "Leather", id: 0 })