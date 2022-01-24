interface list {
    items: Array<{ description: string, price: number }>;
    addItem?: any
}
const list: list = {
    items: [],


    
}


function handleSubmit(ev) {
    console.log(ev.target.elements)
    ev.preventDefault();
    // ev.target.reset();
    const description = ev.target.elements.description.value;
    const price = ev.target.elements.price.valueAsNumber;
  
        list.items.push({description,price});
    
    // list.addItem({description,price})
    
}
console.log(list)