interface ZAP{
    items:Array<Item>;
    addItem(item:Item)
    removeItem(itemName:string)
    renderItems(domElement,maxprice?)
    sortItems(sortBy)
}

interface Item{
    name: string;
    price: number;
    type: string;
}


const zap:ZAP = {

    items:[ 
        {
            name: 'adidas',
            price: 300,
            type: 'shoes'
        },
        {
            name: 'toe',
            price: 150,
            type: 
        },
        {
            name: 'creels',
            price: 200
        },
     ],

    addItem(item:Item){
        this.items.push(item);
    },

    removeItem(itemName:string){
        const index = this.items.findIndex(item=> item.name === itemName)
        if (index>=0){
            this.items.splice(index,1)
        }
    },

    renderItems(domElement,maxprice){
        let html = '';
        let mpitems = this.items.slice()

        if(maxprice){
            mpitems=mpitems.filter(item=>{
                return item.price<=maxprice
            })
        }
        
        mpitems.forEach(item=> {
            html += `<div class='card'>
            <p>${item.name}: ${item.price}</p></div>`
        })

        domElement.innerHTML = html;
    },

    sortItems(sortBy) {
        
        if (sortBy === 'price low to high') {

            this.items.sort((a, b) => { return a.price - b.price })
        } else if (sortBy === 'price high to low') {

            this.items.sort((a, b) => { return b.price - a.price })
        }

        this.renderItems(document.getElementById('root'));
    }
}

let rootHTML = document.getElementById('root')
zap.renderItems(rootHTML);


function handleSubmit(ev){
    ev.preventDefault();
    const name = ev.target.elements.itemname.value;
    const price = +ev.target.elements.itemprice.value;
    const newItem:Item = {name, price};
    zap.addItem(newItem);
    zap.renderItems(rootHTML);
    ev.target.reset();
}

function handleChoise(){
const sortBy = (<HTMLSelectElement>document.getElementById('sortby')).value
console.log(sortBy);
zap.sortItems(sortBy)
}


function handlePriceChange(){
    let maxprice = (<HTMLInputElement>document.querySelector('[name=maxprice]')).valueAsNumber
    zap.renderItems(rootHTML,maxprice);
}


