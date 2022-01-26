interface shop {
    items: Array<Item>;
    tempItem?: Array<Item>;
    addItem(item: Item);
    render(list: Array<Item>,domElement: any);
    renderItem(domElement:any)
    renderTempItem?(domElement: any);
    sortItemAsc();
    sortItemDesc();
}

interface Item {
    description: string;
    price: number;
    type: "computer" | "kitchen accessory" | "smartphone" ;
}

const zapShop: shop = {
    items: [],
    tempItem: [],

    addItem(item:Item) {
        this.items.push(item);
    },

    render(list, domElement) {
        let html = '';
        list.forEach(item => {
            html += `<div class = 'card_item'>
            <p> ${item.description} | Price: ${item.price}$</p>`
        })

        html += `</div>`;
        domElement.innerHTML = html;
    },

    renderItem(domElement:any){
        this.render(this.items,domElement);
    },

    // renderTempItem(domElement) {
    //     let html = '';
    //     this.tempItem.forEach(item => {
    //         html += `<div class = 'card_item'>
    //         <p>  ${item.description}  : ${item.price}$</p>`
    //     })

    //     html += `</div>`;
    //     domElement.innerHTML = html;
    // },

    sortItemAsc() {
        this.items.sort((a, b) => { return a.price - b.price })
        this.tempItem.sort((a, b) => { return a.price - b.price })
    },

    sortItemDesc() {
        this.items.sort((a, b) => { return b.price - a.price })
        this.tempItem.sort((a, b) => { return b.price - a.price })
    }
}

zapShop.addItem( {type:'computer',description:'Lenovo ThinkPadT15p', price: 850} )
zapShop.addItem( {type:'smartphone', description:'Apple iPhone 13' , price: 700} )
zapShop.addItem( {type:'kitchen accessory', description:'cutting board' , price: 30} )
const rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems)




function handleItem(ev) {
    ev.preventDefault();
    console.dir(ev);
    const description: string = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    const type: "computer" | "kitchen accessory" | "smartphone" = ev.target.elements.type.value;
    zapShop.addItem({type,description, price});
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
    zapShop.tempItem = zapShop.items.filter(ele => { return ele.price < amonut });
    if (zapShop.tempItem.length > 0) {
        const rootItems = document.getElementById('rootItems');
        zapShop.renderTempItem(rootItems);
    }
    else {
        const rootItems = document.getElementById('rootItems');
        zapShop.renderItem(rootItems);
    }

}







