const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface ZAP {
    items: Array<Item>;
    addItem(item: Item)
    removeItem(itemName: string)
    sortItems(sortBy)
    filterMaxPrice(maxPrice)
    filterByType(type)
    renderByType(type, domElement) 
    renderFilteredByMaxPrice(maxPrice, domElement)
    renderAllData(domElement)
    renderItems(list, domElement)
}

interface Item {
    id?: string;
    type: string;
    name: string;
    price: number;
}


const zap: ZAP = {

    items: [
        {   
            id: 'dflt1',
            type: 'shoes',
            name: 'creels',
            price: 300,
        },
        {
            id: 'dflt2',
            type: 'shoes',
            name: 'crimbs',
            price: 150,
        },
        {
            id: 'dflt3',
            type: 'shoes',
            name: 'creels',
            price: 200,
        },
        {
            id: 'dflt4',
            type: 'gummys',
            name: 'cola',
            price: 35,
        }
    ],

    addItem(item: Item) {
        this.items.push(item);
    },

    removeItem(id) {
        this.data = this.data.filter(item=>item.id !== id);
    },

    sortItems(sortBy) {

        if (sortBy === 'price low to high') {

            this.items.sort((a, b) => { return a.price - b.price })
        } else if (sortBy === 'price high to low') {

            this.items.sort((a, b) => { return b.price - a.price })
        }

        this.renderItems(document.getElementById('root'));
    },

    filterMaxPrice(maxPrice) {

        return this.items.filter(item => item.price <= maxPrice)

    },

    filterByType(type) {
        return this.items.filter(item => item.type === type.toLowerCase());
    },


    renderByType(type, domElement) {
        const filtered = this.filterByType(type);
        console.log(filtered);
        this.renderItems(filtered, domElement);
    },

    renderFilteredByMaxPrice(maxPrice, domElement) {
        const maxPriceFiltered = this.filterMaxPrice(maxPrice);
        if (maxPrice) {
            this.renderItems(maxPriceFiltered, domElement);
        }
        else {
            this.renderAllData(rootHTML);
        }
    },

    renderAllData(domElement) {
        this.renderItems(this.items, domElement);
    },

    renderItems(list, domElement) {
        let html = '';

        list.forEach(item => {
            html += `<div class='card'>


            <p>${item.name}: ${item.price}</p>
            <button onclick='handleDelete('${item.id}')'>DELETE</button>
            
            </div>`
        })

        domElement.innerHTML = html;

    },
}

let rootHTML = document.getElementById('root')
zap.renderItems(zap.items, rootHTML);

function handleSubmit(ev) {

    ev.preventDefault();

    const name = ev.target.elements.itemname.value;
    const price = +ev.target.elements.itemprice.value;
    const type = ev.target.elements.itemtype.value;
    const id = uid();
    const newItem: Item = {id, name, price, type };

    zap.addItem(newItem);
    zap.renderItems(zap.items, rootHTML);

    ev.target.reset();

}

function handleSortChoise() {
    const sortBy = (<HTMLSelectElement>document.getElementById('sortbyprice')).value
    zap.sortItems(sortBy)
}

function handleTypeChoise() {
    const type = (<HTMLSelectElement>document.getElementById('sortbytype')).value
    zap.renderByType(type, rootHTML)
}

function handlePriceChange() {
    let maxprice = (<HTMLInputElement>document.querySelector('[name=maxprice]')).valueAsNumber
    let rootHTML = document.getElementById('root')
    zap.renderFilteredByMaxPrice(maxprice, rootHTML);
}

function handleDeleteItems() {

    
}



