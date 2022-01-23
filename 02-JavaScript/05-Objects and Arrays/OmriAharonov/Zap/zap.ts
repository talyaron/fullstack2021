interface shop {
    items: Array<Item>;
    addItem(item: Item);
    renderItem(domElement: any);
    sortItemAsc(Array: Item);
    sortItemDesc(Array: Item)
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
            <p> Item: ${item.description} | Price: ${item.price}$</p>`
        })

        html += `</div>`
        domElement.innerHTML = html;
    },

    sortItemAsc(this.items) {
        this.items.sort((a, b) => { return a.price - b.price })
    },

    // sortItemDesc(this) {
    //     this.items.sort((a, b) => { return b.price - a.price })
    // }
}

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

function handleSort(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const description: string = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    const items: Array<Item> = zapShop.addItem({ description, price });
    zapShop.sortItemAsc(Item);
}