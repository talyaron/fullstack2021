interface ItemsForSale {
    items: Array<Item>;
    sortPrice(orderBy?: number)
    renderItems(domElement: any)
    addItems(item: Item)
    removeItems(itemName: string)
    
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
        <input type="button" value="delete">`
        })
        domElement.innerHTML = html
    },

    sortPrice(){
        this.items.sort((a,b)=> {return a.itemPrice-b.itemPrice})
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

    ev.target.reset();


}
Items.addItems({ itemName: 'bbb', itemPrice: 12 });
Items.addItems({ itemName: 'ccc', itemPrice: 4444 });
Items.addItems({ itemName: 'eee', itemPrice: 5 });
// Items.removeItems('ccc');



// Items.sortPrice();
// console.log(Items)

