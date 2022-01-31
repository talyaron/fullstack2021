interface Object {
    items: Array<namePrice>,
    additems(list:namePrice),

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
    
    
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems({name, price})



    event.target.reset()
}