interface ZAP{
    items:Array<Item>;
    addItem(item:Item)
    removeItem(itemName:string)
}

interface Item{
    name: string;
    price: number;
}


const zap:ZAP = {

    items:[  ],

    addItem(item:Item){
        this.items.push(item);
    },

    removeItem(itemName:string){
        const index = this.items.findIndex(item=> item.name === itemName)
        if (index>=0){
            this.items.splice(index,1)
        }
    }

    renderItems()
}

