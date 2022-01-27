interface itemObject {
    id:number,
    items: Array<item>,
    tempitem?:Array<item>,
    addItem(description: string, price: number, type: "computer" | "gameconsole" | "phone")
    renderItem(itemOnDom: any)
}

interface item {
    id:number,
    desceription: string,
    price: number,
    type: "computer" | "gameconsole" | "phone",
}

let zapitem: any = {
    id: 0,
    items: [],
    tempItem: [],
    addItem(description,price,type) {
        this.items.push({ id: this.id, description, price, type });
        this.id++;
    },

    sortAssending(){
        this.items.sort((a,b)=> a.price - b.price);
    },
    sortdescending(){
        this.items.sort((a,b)=>b.price-a.price);
    },
    render(list,itemOnDom) {
        let itemHtml: string = '';
        list.forEach(item => {
            itemHtml += `<div class="card"><p>${item.description}|${item.price}</p>
            <button onclick="handleDelete(${item.id})">Delete</button> </p>`
        });
        itemHtml += `</div>`;
        itemOnDom.innerHTML = itemHtml;
    },
    renderItem(itemOnDom){
        this.render(this.items,itemOnDom)
    },
    rendertempItem(itemOnDom){
        this.render(this.tempItem,itemOnDom)
    },
    deleteItem(id){
        this.items = this.items.filter(item=>item.id !== id);
    },
    filterByType(type){
        return this.items.filter(item => item.type === type);
    },

    renderByType(type,itemOnDom){
       const filterdItems = this.filterByType(type);
       this.render(filterdItems, itemOnDom);
    }
    
}

zapitem.addItem( 'lenovo 16`', 180,'computer');
zapitem.addItem( 'X-box series x', 1180,'gameconsole');
zapitem.addItem('Iphone 13"', 2280,'phone');
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

function handlesubmit(event) {
    event.preventDefault();
    // console.log(event);
    const company = event.target.elements.description.value;
    const price = event.target.elements.price.valueAsNumber;
    const type: "computer" | "gameconsole" | "phone" = event.target.elements.type.value;
    zapitem.addItem( company,price,type);
    const root = document.querySelector(".rootItem");
    zapitem.renderItem(root);
    // event.traget.reset();
}

function handleFilter(event) {
    const price = event.target.valueAsNumber;
    zapitem.tempItem = zapitem.items.filter(ele => { return ele.price < price });
    if (zapitem.tempItem.length > 0) {
        const root = document.querySelector(".rootItem");
        zapitem.rendertempItem(root);
    }
    else {
        const root = document.querySelector(".rootItem");
        zapitem.renderItem(root);
    }
}

function handleDelete(id){
     const root = document.querySelector(".rootItem");
    zapitem.deleteItem(id);
    zapitem.renderItem(root);
}

function handleSelect(ev){
     const root = document.querySelector(".rootItem");
    const type = ev.target.value;
    if (type === 'all') {
        zapitem.renderItem(root);
    } 
    else {
        zapitem.renderByType(type, root);
    }
}






