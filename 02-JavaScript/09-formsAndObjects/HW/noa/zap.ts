interface Zap {
    products: Array<Products>;
    AddItem(item);
    renderZaplist(domElement);
    sortItem(product);
    filterByPrice(pricenum);
}

interface Products{
    description:string;
    price:number;
}

const ZapList: Zap = {
    products: [ ],

    AddItem(item) {
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

    renderZaplist(domElement) {
        let HTML = '';
        this.products.forEach(element => {
            HTML += ` <div class='card'>
            <P> The product: ${element.description}, price: ${element.price}</p>
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

    console.log(description, price)

    ZapList.AddItem({ description, price })
    const list = document.getElementById('list')
    ZapList.renderZaplist(list)

    ev.target.reset();
}

function handlePrice(ev) {
    const pricenum = ev.target.value
    ZapList.renderZaplist(list)
}

