interface Object {
    items: Array<namePrice>,
    additems(list:namePrice),
    sortAsc(),
    sortDes(),
}

interface namePrice {
    name: string;
    price: number;
}

let nikeItems: object = {
    items: [],
    additems(list:namePrice){
        this.items.push(list)
        console.log(this.items)
    },   
    sortAsc(){
        this.items.sort((a,b)=>a.price-b.price)
        console.log(this.items)
    },
    sortDes(){
        this.items.sort((a,b)=>b.price-a.price)
        console.log(this.items)
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems({name, price})
    event.target.reset()
}

function handleAsce(){
nikeItems.sortAsc()

}
function handleDesce(){
    nikeItems.sortDes()
}