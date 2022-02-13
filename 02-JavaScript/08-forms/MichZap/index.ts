const itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface ItemsForSale {
    items: Array<Item>;
    sortPrice(orderBy?: number)
    renderItems(domElement: any)
    addItems(itemName,itemPrice)
    removeItems(itemName: string)
    

}
interface Item {
    itemName: string;
    itemPrice: number;
    id:any;

}
const Items: ItemsForSale = {
    items: [],

    addItems(itemName,itemPrice) {
        const id = itemId();
        this.items.push(itemName,itemPrice,id);

    },
    removeItems(itemName: string) {
        const index = this.items.findIndex(item => item.itemName === itemName);
        if (index >= 0) {
            this.items.splice(index, 1)
        }

    },
    renderItems(domElement) {
        let html = '';
        this.items.forEach(item => {
            html += `<div class='card'>
        <p>${Items.itemName},${Items.itemPrice}</p></div> 
        <input type="button" value="delete" onclick="deleteItem(event)">`
        })
        domElement.innerHTML = html
    },

    sortPrice() {
        this.items.sort((a, b) => { return a.itemPrice - b.itemPrice })
    }

}




function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const itemName = ev.target.elements.itemName.value
    const itemPrice: number = ev.target.elements.itemPrice.valueAsNumber

    Items.addItems( itemName, itemPrice);
    const rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
    

    ev.target.reset();


}

// function deleteItem(ev){
//     e
// }
Items.addItems(  'bbb',  12 );
Items.addItems(  'ccc',  4444 );
Items.addItems(  'eee', 5);
// Items.removeItems('ccc');



// Items.sortPrice();
// console.log(Items)

