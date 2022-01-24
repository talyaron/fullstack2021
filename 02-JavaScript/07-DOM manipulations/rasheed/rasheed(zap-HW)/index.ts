interface obj {
    products: Array<Products>;
    addProducts(product: Products): any;
    sortDesc(orderBy: any): any
    sortAsc(orderBy: any): any
    filterByPrice(valueInput: any): any;
    renderProducts(array: any): any;
}
interface Products {
    description: string;
    price: number;
}
const productObj: obj = {
    products: [],
    addProducts(product: Products) {
        this.products.push(product)
    },
    sortDesc(orderByDesc) {
        orderByDesc === 'desc'
        this.products.sort((a, b) => { return a.price - b.price });

    },
    sortAsc(orderByAsc) {
        orderByAsc === 'asc'
        this.products.sort((a, b) => { return b.price - a.price });

    },
    renderProducts(array: any) {
        let html = '';
        array.forEach(product => {
            html += `<div class='result-card'>
            <p>Product : ${product.description}</p><i class="fas fa-box fa-4x"></i>
            <p>Price : ${product.price}$</p></div>`
        });

        rootProducts.innerHTML = html
    },
    filterByPrice(valueInput) {

        if (valueInput == "") {
            this.renderProducts(this.products);
            return;
        }
        let filteredList = this.products.filter(product => product.price < Number(valueInput))
        this.renderProducts(filteredList);
        ;
    }
}

function handleSubmit(ev) {
    ev.preventDefault();
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;

    productObj.addProducts({ description, price });
    productObj.renderProducts(productObj.products)
    ev.target.reset();
}

function handleDesc(ev) {
    const desc = ev.target.value
    productObj.sortDesc(desc);
    productObj.renderProducts(productObj.products)
}

function handleAsc(ev) {
    const asc = ev.target.value
    productObj.sortAsc(asc);
    productObj.renderProducts(productObj.products)
}


function handleInput(ev) {
    productObj.filterByPrice(ev.target.value)
}

productObj.addProducts({ description: 'banana', price: 99 })
productObj.addProducts({ description: 'apples', price: 5 })
productObj.addProducts({ description: 'orange', price: 17 })
productObj.addProducts({ description: 'milk', price: 99 })
productObj.addProducts({ description: 'water', price: 5 })
productObj.addProducts({ description: 'orange', price: 17 })
productObj.addProducts({ description: 'flower', price: 105 })

const rootProducts = document.getElementById('cardResult');

productObj.addProducts({ description: "paper", price: 5 });



productObj.renderProducts(productObj.products);





