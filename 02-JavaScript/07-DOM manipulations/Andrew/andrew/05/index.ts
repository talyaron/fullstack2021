let Inventory = {
    items:[{name:"somthing", price: 5}],
    addItem(itemName , itemPrice){ this.items.push({name:itemName , price: itemPrice}) },
    sortPriceDown(){ this.movies.sort((a,b) => a.price - b.price)},
    sortPriceUp(){ this.movies.sort((a,b) => a.price - b.price)},
    filter(minPrice,maxPrice){
        this.items = this.items.filter(itemPrice => itemPrice>minPrice && itemPrice<maxPrice);
    }
};




function renderList(){
    let html
    for (let item in Inventory.items) {
        html += `<div class="wrapper__card">
                    <h3>${myStuff[section][item].name}</h3>
                    <img src="${myStuff[section][item].imgSRC}">
                    <p>${myStuff[section][item].description}</p>
                </div>`;
                
    }
};
