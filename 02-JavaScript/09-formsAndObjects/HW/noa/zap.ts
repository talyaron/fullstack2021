interface Zap {
    products: Array<Products>;
    AddItem(item);
    renderZaplist(list, domElement);
    sortItem(product);
    filterByPrice(pricenum);
    deleteItem(id);
    filterByCategory(showCategory);
    renderByCategory(showCategory, domElement)
}

interface Products {
    description: string;
    price: number;
    id?: string;
    category: 'computers' | 'phones';
}

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const ZapList: Zap = {
    products: [
        {
            description: 'lenovo',
            price: 200,
            id:'6',
            category: 'computers'

        },
        {
            description: 'galaxy',
            price: 500,
            id:'5',
            category: 'phones'

        }
    ],

    AddItem(item) {
        const id = uid();
        this.products.push(item)
    },

    sortItem(product) {
        const button1 = document.getElementById('lowToHigh')
        const button2 = document.getElementById('highToLow')

        button1.addEventListener('click', () => {
            this.products.sort((a, b) => { return a.price - b.price })
            this.renderZaplist(this.products, rootHTML);
        })

        button2.addEventListener('click', () => {
            this.products.sort((a, b) => { return b.price - a.price })
            this.renderZaplist(this.products,rootHTML);
        })
    },

    filterByPrice(pricenum) {
        this.products.filter((product) => { return product.price <= pricenum })
    },

    deleteItem(id) {
        this.products = this.products.filter(product => product.id !== id)
    },

    filterByCategory(showCategory) {
        this.products = this.products.filter(product => product.showCategory === showCategory)
    },

    renderByCategory(showCategory, domElement) {
        const filtered = this.filterByCategory(showCategory)
        this.renderZaplist(filtered, domElement)
    },

    renderZaplist(list,domElement) {
        let HTML = '';
        console.log(list);
        
        list.forEach(product => {
            HTML += ` <div class='card'>
            <P> The product: ${product.description}, Price: ${product.price}
            , Category: ${product.category}</p>
            <button onclick="handleDelete('${product.id}')">Delete</button>
            </div>`
        });

        domElement.innerHTML = HTML
    }
}

const rootHTML = document.getElementById('root')
ZapList.renderZaplist(ZapList.products, rootHTML)

ZapList.sortItem();

function handleZaplist(ev) {
    ev.preventDefault();

    const description = ev.target.elements.description.value
    const price = ev.target.elements.price.valueAsNumber
    const id = uid();
    const category = ev.target.elements.category.value

    console.log(category)

    ZapList.AddItem({ id, description, price, category })
    const  rootHTML = document.getElementById('root')
    ZapList.renderZaplist(ZapList.products, rootHTML)

    ev.target.reset();
}

function handlePrice(ev) {
    const pricenum = ev.target.value
    ZapList.renderZaplist(ZapList.products,rootHTML)
}

function handleDelete(id) {
    ZapList.deleteItem(id)
    const  rootHTML = document.getElementById('root')
    ZapList.renderZaplist(ZapList.products,rootHTML)
}

function handleSelect(ev) {
    const showCategory = ev.target.value
    console.log(showCategory)

    const  rootHTML = document.getElementById('root')
    ZapList.renderByCategory(showCategory, rootHTML)

    // if (showCategory === 'Show All') {
    //     ZapList.renderZaplist(ZapList.products,rootHTML)
    // }
    // else {

    //     ZapList.renderByCategory(showCategory, rootHTML)
    // }

}