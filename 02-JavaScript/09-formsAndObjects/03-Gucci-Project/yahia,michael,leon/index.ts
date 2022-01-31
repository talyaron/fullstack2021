interface Object {
    items: Array<namePrice>,
    additems(list:namePrice),
    sortAsc(),
    sortDes(),
    renderAllData(root:any)
    render(root:any,list:namePrice),
}

interface namePrice {
    name: string;
    price: number;
}

let nikeItems: object = {
    items: [],
    additems(list:namePrice){
        this.items.push(list)
        
    },   
    sortAsc(){
        this.items.sort((a,b)=>a.price-b.price)
        
    },
    sortDes(){
        this.items.sort((a,b)=>b.price-a.price)
        
    },
    renderAllData(root:any){
        
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems({name, price})

    const root = document.getElementById('root');
    nikeItems.renderAllData(root);


    event.target.reset()

}

function handleAsce(){
nikeItems.sortAsc()

}
function handleDesce(){
    nikeItems.sortDes()
}

