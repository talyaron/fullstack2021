interface Zap {
    products: Array<any>
    AddItem: any
    renderZaplist: any
}


const ZapList: Zap = {
    products: [],

    AddItem(item) {
        this.products.push(item)
    },

    renderZaplist(domElement) {
        let HTML = '';

        this.products.forEach(element => {
            HTML += ` <div class='card'>
            <P> The product: ${element.description}, price: ${element.price}</p>
            </div>`
        });

        domElement.innerHTML += HTML
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

