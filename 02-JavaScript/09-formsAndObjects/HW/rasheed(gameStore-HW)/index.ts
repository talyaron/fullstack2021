const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface obj {
    products: Array<Products>;
    addProducts(name: string, Price: number, type: 'pc games' | 'mobile games'): any;
    sortDesc(orderBy: any): any
    sortAsc(orderBy: any): any
    filterByPrice(price: number): any
    filterByType(type: 'pc games' | 'mobile games'): any
    deleteProducts(id: string): any
    updateProduct(price: number): any
    updateProductPrice(index: any, value: any)
    render(list: Array<Products>, domElement: any): any
    renderAllProducts(array: any): any;
    renderByType(type: 'pc games' | 'mobile games', domElement: any): any
    renderByPrice(price: Array<Products>, domElement: any): any
    renderUpdate(list:Array<Products> ,domElement:any):any


}
interface Products {
    id: number;
    name: string;
    price: number;
    type: 'pc games' | 'mobile games'
}
const productObj: obj = {
    products: [],
    addProducts(name, price, type) {
        const id = uid();
        this.products.push({ id, name, price, type })
    },
    sortDesc(orderByDesc) {
        orderByDesc === 'desc'
        this.products.sort((a, b) => { return a.price - b.price });
    },
    sortAsc(orderByAsc) {
        orderByAsc === 'asc'
        this.products.sort((a, b) => { return b.price - a.price });
    },
    deleteProducts(id) {
        this.products = this.products.filter(product => product.id !== id);
    },
    updateProduct(id) {
        return this.products.findIndex(product => product.id === id);

    },
    updateProductPrice(index, value) {
        this.products[index].price = value;
    },
    filterByPrice(price) {
        return this.products.filter(product => product.price < price);
    },
    filterByType(type) {
        return this.products.filter(product => product.type === type);
    },
    render(list, domElement) {
        let html = '';
        list.forEach(product => {
            html += `<div class='result-card'>
            <p> ${product.name}<i class="fas fa-gamepad fa-spin"></i></p>
            <p> ${product.price}$</p>
            <button class='tsBtn' onclick="handleDelete('${product.id}')">Delete</button>
            <form onsubmit="handleUpdate(event, '${product.id}')">
                <input class='tsInput'  type="number" name="update" placeholder="Update Price">
                <input class='tsBtn' name="submit" value="Update" type="submit">
                </form>
            </div>`
        });

        domElement.innerHTML = html
    },
    renderAllProducts(domElement) {
        const products = this.products;
        this.render(products, domElement);
    },
    renderByType(type, domElement) {
        const filterdByType = this.filterByType(type);
        this.render(filterdByType, domElement);
    },
    renderByPrice(price, domElement) {
        const filterd = this.filterByPrice(price);
        this.render(filterd, domElement);
    },
    renderUpdate(list , domElement) {
        this.render(list , domElement)
    },


}

function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const name = ev.target[0].value;
    const price: number = ev.target[1].value;
    const type = ev.target[2].value

    productObj.addProducts(name, price, type);
    const root = document.getElementById('root');
    productObj.renderAllProducts(root)
    ev.target.reset();
}

function handleDesc(ev) {
    const desc = ev.target.value
    productObj.sortDesc(desc);
    const root = document.getElementById('root');
    productObj.renderAllProducts(root)
}

function handleAsc(ev) {
    const asc = ev.target.value
    productObj.sortAsc(asc);
    const root = document.getElementById('root');
    productObj.renderAllProducts(root)
}


function handleInput(ev) {
    const price = ev.target.valueAsNumber
    const root = document.getElementById('root');
    if (price) {
        productObj.renderByPrice(price, root)

    } else {

        productObj.renderAllProducts(root)
    }
}

function handleDelete(id) {
    const root = document.getElementById('root');
    productObj.deleteProducts(id);
    productObj.renderAllProducts(root);
}

function handleSelect(ev) {
    const root = document.getElementById('root');
    const type = ev.target.value;
    if (type === 'all') {
        productObj.renderAllProducts(root);
    } else {
        productObj.renderByType(type, root);
    }
}

function handleUpdate(ev, id) {
    ev.preventDefault();

    const root = document.getElementById('root');

    const NewPrice = ev.target.update.value;
    const updatedPrice  = productObj.updateProduct(id)

    productObj.updateProductPrice(updatedPrice , NewPrice)
    productObj.renderUpdate(productObj.products, root)

}

productObj.addProducts('Halo', 99.99, 'pc games');
productObj.addProducts('Dark Siders', 103.99, 'pc games');
productObj.addProducts('Icy Tower', 5.99, 'pc games');
productObj.addProducts('The Witcher', 89.99, 'pc games');
productObj.addProducts('Daying Light', 106.99, 'pc games');
productObj.addProducts('Angry Birds', 4.99, 'mobile games');
productObj.addProducts('Asphalt ', 6.99, 'mobile games');
productObj.addProducts("Poker", 5.99, 'mobile games');
productObj.addProducts("Top war", 1.99, 'mobile games');
productObj.addProducts("Sonic Dash", 0.99, 'mobile games');


const root = document.getElementById('root');
productObj.renderAllProducts(root);





