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
        console.log(itemOnDom)
        console.log(this.items)
        let itemHtml: string = '';


        this.items.forEach(item => {
            itemHtml += `<div class="card"><p>${item.company}:${item.price}</p></div>`
        })
        itemOnDom.innerHTML = itemHtml;
    }
}
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
const root = document.querySelector(".rootItem");

zapitem.renderItem(root);



