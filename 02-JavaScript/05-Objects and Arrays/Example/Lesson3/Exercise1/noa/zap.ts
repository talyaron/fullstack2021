interface Zap {
    products: Array<any>
    AddItem: any
    renderZaplist: any
    sortItem: any
}

const ZapList: Zap = {
    products: [
        // {
        //     description: 'adidas',
        //     price: 300
        // },
        // {
        //     description: 'toe',
        //     price: 150
        // },
        // {
        //     description: 'creels',
        //     price: 200
        // },
    ],

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

    renderZaplist(domElement, pricenum) {
        let HTML = '';
        let maxPrice = this.products.slice()

        if(pricenum){
           maxPrice = maxPrice.filter((product) => { return product.price <= pricenum }) 
        }
        maxPrice.forEach(element => {
            HTML += ` <div class='card'>
            <P> The product: ${element.description}, price: ${element.price}</p>
            </div>`
        });

        domElement.innerHTML = HTML
    }
}

ZapList.sortItem();

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
    ZapList.renderZaplist(list, pricenum)
}

