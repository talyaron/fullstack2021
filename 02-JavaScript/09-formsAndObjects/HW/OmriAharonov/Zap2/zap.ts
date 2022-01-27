interface shop {
    id: number
    items: Array<Item>;
    tempItems?: Array<Item>;
    addItem(description: string, price: number, type: "computer" | "kitchen accessory" | "smartphone");
    render(list: Array<Item>, domElement: any);
    renderItem(domElement: any);
    renderTempItem?(domElement: any);
    sortItemAsc();
    sortItemDesc();
    deleteItem(id);
    filterByType(type);
    renderByType(type: "computer" | "kitchen accessory" | "smartphone", domElement: any);
}

interface Item {
    id: number;
    description: string;
    price: number;
    type: "computer" | "kitchen accessory" | "smartphone";
}

const zapShop: shop = {
    id: 0,
    items: [],
    tempItems: [],

    addItem(description,price,type) {
        this.items.push({ id: this.id, description, price, type });
        this.id++;
    },

    render(list, domElement: any) {
        let html = '';
        list.forEach(item => {
            html += `<div class = 'card_item'>
            <p> ${item.description} | Price: ${item.price}$
            <button onclick="handleDelete(${item.id})">Delete</button> </p>`
        });

        html += `</div>`;
        domElement.innerHTML = html;
    },

    renderItem(domElement: any) {
        this.render(this.items, domElement);
    },

    renderTempItem(domElement: any) {
        this.render(this.tempItems, domElement);
    },

    sortItemAsc() {
        this.items.sort((a, b) => { return a.price - b.price });
    },

    sortItemDesc() {
         this.items.sort((a, b) => { return b.price - a.price });
    },

    deleteItem(id){
        this.items = this.items.filter(item=>item.id !== id);
    },

    filterByType(type){
        return this.items.filter(item => item.type === type);
    },

    renderByType(type , domElement){
       const filterItems = this.filterByType(type);
       this.render(filterItems, domElement);
    }
}

zapShop.addItem('Lenovo ThinkPadT15p ', 850, 'computer');
zapShop.addItem('Apple iPhone 13', 700, 'smartphone');
zapShop.addItem('cutting board', 30, 'kitchen accessory');
const rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems);

function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    const description: string = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    const type: "computer" | "kitchen accessory" | "smartphone" = ev.target.elements.type.value;
    zapShop.addItem(description, price, type);
    const rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}

function handleSortDesc(ev) {
    ev.preventDefault();
    zapShop.sortItemDesc();
    const rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}

function handleSortAsc(ev) {
    ev.preventDefault();
    zapShop.sortItemAsc();
    const rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
}

function handlePrice(ev) {
    const amonut = ev.target.valueAsNumber;
    zapShop.tempItems = zapShop.items.filter(ele => { return ele.price < amonut });
    if (zapShop.tempItems.length > 0) {
        const rootItems = document.getElementById('rootItems');
        zapShop.renderTempItem(rootItems);
    }
    else {
        const rootItems = document.getElementById('rootItems');
        zapShop.renderItem(rootItems);
    }

}

function handleDelete(id){
    const rootItems = document.getElementById('rootItems');
    zapShop.deleteItem(id);
    zapShop.renderItem(rootItems);
}

function handleSelect(ev){
    const rootItems = document.getElementById('rootItems');
    const type = ev.target.value;
    if (type === 'all') {
        zapShop.renderItem(rootItems);
    } 
    else {
        zapShop.renderByType(type, rootItems);
    }
}








