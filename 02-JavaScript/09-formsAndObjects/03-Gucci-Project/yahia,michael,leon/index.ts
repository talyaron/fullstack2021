const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Object {
    items: Array<namePrice>,
    additems(name: string, price: number),
    sortAsc(),
    sortDes(),
    deleteItem(idItem: string),
    renderAllData(root: any)
    render(root: any, list: namePrice),

}

interface namePrice {
    name: string;
    price: number;
    id: string;
}

let nikeItems: object = {
    items: [],
    additems(name, price) {


        const idItem = uid();

        this.items.push({ name, price, idItem })
        console.log(this.items)


    },
    sortAsc() {
        this.items.sort((a, b) => a.price - b.price)

    },
    sortDes() {
        this.items.sort((a, b) => b.price - a.price)

    },
    deleteItem(idItem) {
        this.items = this.items.filter(item => item.idItem !== idItem)
        console.log(this.items);
    },
    renderAllData(root: any) {
        const list = this.items;

        this.render(root, list)
    },
    render(root: any, list) {
        let html: string = '';

        list.forEach(item => {
            html += `<div class = 'card'> <p>${item.name}: ${item.price}</p></div>
            <button onclick="handleDelete('${item.idItem}')">delete</button>`
        })
        root.innerHTML = html;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.description.value
    const price = event.target.elements.price.value
    nikeItems.additems(name, price)

    const root = document.getElementById('root');
    nikeItems.renderAllData(root);


    event.target.reset()

}

function handleAsce() {
    nikeItems.sortAsc()
    const root = document.getElementById('root');

    nikeItems.renderAllData(root);


}
function handleDesce() {
    nikeItems.sortDes()
    const root = document.getElementById('root');

    nikeItems.renderAllData(root);
}


function handleDelete(id) {

    nikeItems.deleteItem(id);
    const root = document.getElementById('root');
    nikeItems.renderAllData(root);
}