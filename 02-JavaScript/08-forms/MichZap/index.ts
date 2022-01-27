interface ItemsForSale {
    items: Array<Item>;
    sortPrice(orderBy?: number)
    renderItems(domElement: any)
    addItems(item: Item)
}
interface Item {
    itemName: string;
    itemPrice: number;

}
const Items: ItemsForSale = {
    items: [],

    addItems(item: Item) {
        this.items.push(item);

    },
    renderItems(domElement){let html = '';
    this.items.forEach(item => {
        html += `<div class='card'>
        <p>${item.itemName},${item.itemPrice}</p></div>`
    })
    domElement.innerHTML = html
}
}
    // Items.addItems({itemName:`mug`,itemPrice:14});

    // console.log(Items);

    

    function handleSubmit(ev) {
        ev.preventDefault();
        console.dir(ev.target)
        const itemName = ev.target.elements.itemName;
        const itemPrice = ev.target.elements.itemPrice;

        Items.addItems({itemName,itemPrice});
        const rootItems = document.getElementById('rootItems');
        Items.renderItems(rootItems);

        
    }

    