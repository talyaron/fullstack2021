interface Zap {
    products: Array<Products>;
    AddItem(item);
    renderZaplist(domElement);
    sortItem(product);
    filterByPrice(pricenum);
    deleteItem(id);
}

interface Products {
    description: string;
    price: number;
    id:number;
}

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const ZapList: Zap = {
    products: [],

    AddItem(item) {
        const id = uid();
        this.products.push(item)
    },

    sortItem(product) {
        const button1 = document.getElementById('lowToHigh')
        const button2 = document.getElementById('highToLow')

        button1.addEventListener('click', () => {
            this.products.sort((a, b) => { return a.price - b.price })
            this.renderZaplist(list);
        })

        button2.addEventListener('click', () => {
            this.products.sort((a, b) => { return b.price - a.price })
            this.renderZaplist(list);
        })
    },

    filterByPrice(pricenum) {
        this.products.filter((product) => { return product.price <= pricenum })
    },

    deleteItem(id) {
        this.products =this.products.filter(product=>product.id!==id)
    },

    renderZaplist(domElement) {
        let HTML = '';
        this.products.forEach(product => {
            HTML += ` <div class='card'>
            <P> The product: ${product.description}, price: ${product.price}</p>
            <button onclick="handleDelete('${product.id}')">Delete</button>
            </div>`
        });

        domElement.innerHTML = HTML
    }
}

const list = document.getElementById('list')
ZapList.renderZaplist(list)

function handleZaplist(ev) {
    ev.preventDefault();

    const description = ev.target.elements.description.value
    const price = ev.target.elements.price.valueAsNumber
    const id = uid();

    console.log(description, price)

    ZapList.AddItem({id, description, price })
    const list = document.getElementById('list')
    ZapList.renderZaplist(list)

    ev.target.reset();
}

function handlePrice(ev) {
    const pricenum = ev.target.value:
}

function handleDelete(id) {
ZapList.deleteItem(id)
const list = document.getElementById('list')
ZapList.renderZaplist(list)
}