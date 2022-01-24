interface itemObject {
    items: Array<descriptionAndPrice>,
    addItem(newItem: descriptionAndPrice)
    renderItem(domElement: any)
}

interface descriptionAndPrice {
    company: string,
    price: number,
}

let zapitem: any = {
    items: [],
    addItem(addItem: descriptionAndPrice) {
        this.items.push(addItem);
    },
    sortAssending(){
        this.items.sort((a,b)=> a.price - b.price);
    },
    sortdescending(){
        this.items.sort((a,b)=>b.price-a.price);
    },
    renderItem(itemOnDom) {
        // console.log(itemOnDom)
        // console.log(this.items)
        let itemHtml: string = '';


        this.items.forEach(item => {
            itemHtml += `<div class="card"><p>${item.company}:${item.price}</p></div>`
        })
        itemOnDom.innerHTML = itemHtml;
    },
}

zapitem.addItem({ company: 'lenovo 16`', price: 180 });
zapitem.addItem({ company: 'X-box series x', price: 1180 });
zapitem.addItem({ company: 'Iphone 13"', price: 2280 });
const root = document.querySelector(".rootItem");
zapitem.renderItem(root);

function handleAsc(event){
    event.preventDefault();
    zapitem.sortAssending();
    zapitem.renderItem(root);

}
function handleDesc(event){
    event.preventDefault();
    zapitem.sortdescending();
    zapitem.renderItem(root);
}

function handleFilter(event) {
    const amonut = event.target.valueAsNumber;
    zapitem.items = zapitem.items.filter(ele => { return ele.price < amonut });
    if (zapitem.item.length > 0) {
        const root = document.querySelector(".rootItem");
        zapitem.renderItem(root);
    }
    else {
        const root = document.querySelector(".rootItem");
        zapitem.renderItem(root);
    }}

function handlesubmit(event) {
    event.preventDefault();
    // console.log(event);
    const company = event.target.elements.description.value;
    const price = event.target.elements.price.valueAsNumber;

    zapitem.addItem({ company, price });

    zapitem.renderItem(root);
    // console.log(zapitem)

    // event.traget.reset();

}
// const root = document.querySelector(".rootItem");





