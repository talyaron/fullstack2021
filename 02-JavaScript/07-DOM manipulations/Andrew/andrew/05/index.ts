let Inventory = {
    items: [{ name: "somthing", price: 5 }, { name: "somthing else", price: 10 }, { name: "somthing diffrent", price: 15 }],
    addItem(item) { this.items.push(item) },
    sortPriceDown() { this.items.sort((a, b) => a.price - b.price) },
    sortPriceUp() { this.items.sort((a, b) => b.price - a.price) },

    sortNameUp() { this.items.sort((a, b) => {
        if(a.name.toUpperCase() < b.name.toUpperCase()) return 1;
        if(a.name.toUpperCase() > b.name.toUpperCase()) return -1;
        return 0;
    })},

    sortNameDown() { this.items.sort((a, b) => {
        if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
        if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        return 0;
    })},

    filter(minPrice, maxPrice) {
        let filtered = {items: this.items.filter(item => item.price >= minPrice && item.price <= maxPrice)};
        renderList(filtered);
    }
};

function renderList(list) {
    let html = '';
    for (let item in list.items) {
        html += `<div class="item">
                    <h3>${list.items[item].name}</h3>
                    <h2>${list.items[item].price}$</h2>
                </div>`;
    }
    document.querySelector('#output').innerHTML = html;
    let highestPrice = Math.max(...Inventory.items.map(item => item.price));
    (<HTMLInputElement>document.querySelector('#rangeMax')).max = `${highestPrice}`;
};

function handleSubmit(ev) {
    ev.preventDefault();
    if(ev.target.elements.itemName.value == ''||ev.target.elements.itemPrice.value == 0) {
        alert('You must fill all fields!');
        return;
    }
    let newItem = { name: "", price: 0 };
    newItem.name = ev.target.elements.itemName.value;
    newItem.price = Number(ev.target.elements.itemPrice.value);
    Inventory.addItem(newItem);
    renderList(Inventory);
}

function handleSlider(){
    let min = (<HTMLInputElement>document.querySelector('#rangeMin')).value;
    let max = (<HTMLInputElement>document.querySelector('#rangeMax')).value;
    Inventory.filter(min,max);
    document.querySelector('#min-value').innerHTML = `${min}$`;
    document.querySelector('#max-value').innerHTML = `${max}$`;
    (<HTMLInputElement>document.querySelector('#rangeMin')).max = `${max}`;
};
document.querySelector('#price_down').addEventListener("click",() => {
    Inventory.sortPriceDown();
    renderList(Inventory);
    handleSlider();
});
document.querySelector('#price_up').addEventListener("click",() => {Inventory.sortPriceUp(); renderList(Inventory);});
document.querySelector('#name_down').addEventListener("click",() => {Inventory.sortNameDown(); renderList(Inventory);});
document.querySelector('#name_up').addEventListener("click",() => {Inventory.sortNameUp(); renderList(Inventory);});


renderList(Inventory);
