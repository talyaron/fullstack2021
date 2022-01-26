interface zapList{
    items:Array<thing>
    addItem(item:thing):void
    deleteItem(id:string):void
    sortPriceDown():void
    sortPriceUp():void
    sortNameUp():void
    sortNameDown():void
    filterCat(Category:string):void
    filter(min:number, max:number):void
}
interface thing{
    name:string,
    price:number,
    category:string,
    id:string
}


let Inventory:zapList = {
    items: [],
    addItem(item) {
        item.id = uid();
        this.items.push(item) 
    },
    deleteItem(id){
        this.items = this.items.filter(item => item.id !==id)
    },
    sortPriceDown() { this.items.sort((a, b) => a.price - b.price) },
    sortPriceUp() { this.items.sort((a, b) => b.price - a.price) },

    sortNameUp() {
        this.items.sort((a, b) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
            return 0;
        })
    },

    sortNameDown() {
        this.items.sort((a, b) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
            return 0;
        })
    },
    filterCat(Category){
        if(Category == "all"){
            renderList(this);    
            return;
        }
        let filtered = { items: this.items.filter(item => item.category == Category) };
        renderList(filtered);
    },
    filter(minPrice, maxPrice) {
        let filtered = { items: this.items.filter(item => item.price >= minPrice && item.price <= maxPrice) };
        renderList(filtered);
    }
};

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function renderList(list) {
    let html = '';
    for (let item in list.items) {
        html += `<div class="item">
                    <h3>${list.items[item].name}</h3>
                    <h2>${list.items[item].price} Shmekels</h2>
                    <p>${list.items[item].category}</p>
                    <button id="${list.items[item].id}" onclick='handleDelete(event)'>Delete</button>
                </div>`;
    }
    document.querySelector('#output').innerHTML = html;
    let highestPrice = Math.max(...Inventory.items.map(item => item.price));
    (<HTMLInputElement>document.querySelector('#rangeMax')).max = `${highestPrice}`;

};

function handleDelete(ev){
    Inventory.deleteItem(ev.target.id);
    renderList(Inventory);
}

function handleSelect(ev){
    Inventory.filterCat(ev.target.value);
}

function handleSubmit(ev) {
    ev.preventDefault();
    if (ev.target.elements.itemName.value == '' || ev.target.elements.itemPrice.value == 0) {
        alert('You must fill all fields!');
        return;
    }
    let newItem = { name: "", price: 0 ,category: "", id:""};
    for (let field of ev.target) {
        if(field.checked) {
            newItem.category = field.value;
        }
    }
    newItem.name = ev.target.elements.itemName.value;
    newItem.price = Number(ev.target.elements.itemPrice.value);
    Inventory.addItem(newItem);
    renderList(Inventory);
}

function handleSlider() {
    let min = (<HTMLInputElement>document.querySelector('#rangeMin')).valueAsNumber;
    let max = (<HTMLInputElement>document.querySelector('#rangeMax')).valueAsNumber;
    Inventory.filter(min, max);
    document.querySelector('#min-value').innerHTML = `${min} SHM`;
    document.querySelector('#max-value').innerHTML = `${max} SHM`;
    (<HTMLInputElement>document.querySelector('#rangeMin')).max = `${max}`;
};
document.querySelector('#price_down').addEventListener("click", () => {
    Inventory.sortPriceDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#price_up').addEventListener("click", () => {
    Inventory.sortPriceUp();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#name_down').addEventListener("click", () => {
    Inventory.sortNameDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#name_up').addEventListener("click", () => {
    Inventory.sortNameUp();
    renderList(Inventory);
    handleSlider();
});


Inventory.addItem({ name: "computer", price: 90,category: "computers", id:"abcd" });
Inventory.addItem({ name: "another computer", price: 70,category: "computers", id:"abcd" });
Inventory.addItem({ name: "good book", price: 50,category: "books", id:"abcde" });
Inventory.addItem({ name: "bad book", price: 15,category: "books", id:"abcde" });
Inventory.addItem({ name: "movie", price: 30,category: "movies", id:"abcdef" });
Inventory.addItem({ name: "diffrent movie", price: 35,category: "movies", id:"abcdef" });

renderList(Inventory);
handleSlider()
