interface ItemsForSale {
    items: Array<Item>;
    sortPrice(orderBy?: number)
    renderItems(domElement: any)
    addItems(item:Item)
}
interface Item{
itemName:string;
itemPrice:number;

}
const Items: ItemsForSale = {
items:[],

addItems(item:Item){
    this.items.push(item);

},
}
// Items.addItems({itemName:`mug`,itemPrice:14});

// console.log(Items);

