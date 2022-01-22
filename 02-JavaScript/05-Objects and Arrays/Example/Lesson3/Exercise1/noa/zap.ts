interface Zap {
    products: Array<any>
    AddItem: any
    renderZaplist: any
    sortItem: any
}


const ZapList: Zap = {
    products: [],

    AddItem(item) {
        this.products.push(item)
    },

    sortItem(product) {
        const button1 = document.getElementById('lowToHigh')
        const button2 = document.getElementById('highToLow')

        button1.addEventListener('click', (product) => {
            this.product.sort((a, b) => { return a.price - b.price })
        })

        button2.addEventListener('click', () => {
            this.products.sort((a, b) => { return b.price - a.price })
        })

        ZapList.renderZaplist(document.getElementById('list'));
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
    ev.preventDefault();
    const pricenum = ev.target.elements.price.valueAsNumber
    function newList(price) {
        return this.products.filter((product) => { return product.price > pricenum })

    }

}
function getElementById(arg0: string): any {
    throw new Error("Function not implemented.")
}

