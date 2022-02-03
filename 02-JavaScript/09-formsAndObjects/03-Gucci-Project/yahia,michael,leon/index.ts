const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Object {
    items: Array<namePrice>,
    carts: Array<type>,
    additems(name: string, price: number),
    sortAsc(),
    sortDes(),
    deleteItem(idItem: string),
    updateItem(idItem: string, newValue: string),
    addToCarts(type: string),
    selectItem(type: "shoes" | "hoodie")
    renderAllData(root: any),
    renderAllCarts(root1: any),
    renderCarts(root1:any,list:type),
    render(root: any, list: any),

}
interface type {
    type: "shoes" | "hoodie"
    name: string
}

// carts = [{ type: "shoes", name: "shoes" },
// { type: "hoodie", name: "hoodie" }
// ]

interface namePrice {
    name: string;
    price: number;
    id: string;
    type: "shoes" | "hoodie"
}

let nikeItems: object = {
    items: [],
    carts: [],
    additems(name, price) {
        const idItem = uid();
        this.items.push({ name, price, idItem })
    },
    sortAsc() {
        this.items.sort((a, b) => a.price - b.price)

    },
    sortDes() {
        this.items.sort((a, b) => b.price - a.price)

    },
    deleteItem(idItem) {
        this.items = this.items.filter(item => item.idItem !== idItem)

    },
    updateItem(idItem, newValue) {
        const i = this.items.findIndex(item => item.idItem === idItem)
        this.items[i].name = newValue
    },
    addToCarts(type: string) {
        this.carts.push(type)
    },
    renderAllCarts(root1: any) {
        const list = this.carts;
        this.renderCarts(root1, list)
    },
    selectItem(type) {
        return this.carts.filter(item => { item.type === type })
    },
    renderAllData(root: any) {
        const list = this.items;
        this.render(root, list)
    },
    renderCarts(root1, list) {
        let htmlCustomer: string = "";
        list.forEach(item => {
            htmlCustomer += `<div class= 'card1'><h4>The Item You Want:</h4> <p>${item.name}</p></div>`
        });
        root1.innerHTML = htmlCustomer;
    },
    render(root: any, list) {
        let html: string = '';

        list.forEach(item => {
            html += `<div class = 'card'> <p>${item.name}: ${item.price}</p>
            <button onclick="handleDelete('${item.idItem}')">delete</button>
            <form onsubmit="handleupdate(event,'${item.idItem}')">
            <input type="text" name="nameUpdate" placeholder="change item">
            <input type="submit" value="submit">
            </form>
            </div>`

        })
        root.innerHTML = html;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems(name, price)

    const root = document.getElementById('root');
    nikeItems.renderAllData(root);


    event.target.reset()

}

function handleAsce() {
    nikeItems.sortAsc()
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleDesce() {
    nikeItems.sortDes()
    const root = document.getElementById('root');

    nikeItems.renderAllData(root);
}
function handleDelete(id) {
    nikeItems.deleteItem(id);
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
function handleupdate(event, id) {
    event.preventDefault();
    const updateditem = event.target.elements.nameUpdate.value
    nikeItems.updateItem(id, updateditem)
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}
//customer
function handleCart(event) {
    const shoes = event.target.id
    nikeItems.addToCarts(shoes)
    const root1 = document.getElementById('root1');
    nikeItems.renderAllCarts(root1);
}

function handlehoodie(ev) {
    const hoodie = ev.target.value
    nikeItems.addToCarts(hoodie)
    const root1 = document.getElementById('root1');
    nikeItems.renderAllCarts(root1);

}

function handleSelect(ev) {
    const theType = ev.target.value
   
    const root1 = document.getElementById('root1');
    let selected;
    if (theType === "all") {
        nikeItems.renderAllCarts(root1);
        console.log(nikeItems.carts)
    } else {
         selected = nikeItems.selectItem(theType)
        console.log(nikeItems.carts)
    
    }
    nikeItems.renderCarts(root1,selected)
    
    
}