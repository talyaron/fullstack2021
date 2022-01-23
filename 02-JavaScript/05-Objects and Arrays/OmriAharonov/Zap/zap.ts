interface shop {
    items: Array<Item>;
    addItem(item: Item);
    renderItem(domElement: any);
    sortItemAsc();
    sortItemDesc();
}

interface Item {
    description: string,
    price: number
}

const zapShop: shop = {
    items: [],

    addItem(item: Item) {
        this.items.push(item);
    },

    renderItem(domElement) {
        let html = '';
        this.items.forEach(item => {
            html += `<div class = 'card_item'>
            <p>  ${item.description}  : ${item.price}$</p>`
        })

        html += `</div>`
        domElement.innerHTML = html;
    },

    sortItemAsc() {
        this.items.sort((a, b) => { return a.price - b.price })
    },

    sortItemDesc() {
        this.items.sort((a, b) => { return b.price - a.price })
    }
}

zapShop.addItem({ description: 'Curved Monitor LG 32"', price: 180 })
zapShop.addItem({ description: 'JBL Headphones', price: 200 })
zapShop.addItem({ description: 'Vtech router', price: 18 })
zapShop.addItem({ description: 'SONY playstation', price: 1500 })
const rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems)



function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    const description: string = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    zapShop.addItem({ description, price });
    const rootItems = document.getElementById('rootItems');
    zapShop.renderItem(rootItems);
    ev.target.reset();
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

function handlePrice(ev){
    zapShop.items.filter(element => {return element < ev.target.valueAsNumber})
    const rootItems = document.getElementById('newItems');
    zapShop.renderItem(rootItems);
}





