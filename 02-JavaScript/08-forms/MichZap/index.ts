const itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface ItemsForSale {
    items: Array<Item>;
    sortPrice(orderBy?: number)
    renderItems(domElement: any)
    addItems(item: Item)
    removeItems(itemName: string)
    deleteItem(id)
}
interface Item {
    itemName: string;
    itemPrice: number;
    id?: any;
}
const Items: ItemsForSale = {
    items: [],

    addItems(item: Item) {
        const id = itemId();
        this.items.push(item);
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
        <p>${item.itemName},${item.itemPrice}</p></div> 
        <input type="button" value="delete" id="${item.id}" onclick="deleteItem(event)">`
        })
        domElement.innerHTML = html
    },

    sortPrice() {
        this.items.sort((a, b) => { return a.itemPrice - b.itemPrice })
    },deleteItem(id){
       this.items =  this.items.filter((item)=> item.id !== id)
    }

}

function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const itemName = ev.target.elements.itemName.value
    const itemPrice: number = ev.target.elements.itemPrice.valueAsNumber

    Items.addItems({ itemName, itemPrice });
    const rootItems = document.getElementById('rootItems');
    Items.renderItems(rootItems);
    console.log(Items);
    ev.target.reset();


}

function deleteItem(ev){
    const id = ev.target.id
    console.log(id);
    
}
Items.addItems({ itemName: 'bbb', itemPrice: 12, id: "lala" });
Items.addItems({ itemName: 'ccc', itemPrice: 5, id: "baba" });
Items.addItems({ itemName: 'fff', itemPrice: 34, id: "koko" });


// Items.removeItems('ccc');



// Items.sortPrice();
// console.log(Items);

