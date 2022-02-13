interface aviator {

    items: Array<newItem>
    cartItems: Array<newItem>
    itemsToRender: Array<newItem>
    currency: string
    additem(newItem)
    renderitem(domElement: any)
    renderitemcart(domElement)
    renderCartCount()
    sortitemup();
    sortitemdown()
    getdata()
    deleteItem(id: string)
    addOneItem(id: string)
    removeOneItem(id: string)
    filterItems(category: string)
}
interface newItem {
    name: string
    price: number
    img: string
    group: string
    Collection: string
    function: string
    movement: string
    case: string
    diameter: string
    dial: string
    bracelet: string
    id: string

}

let aviator: aviator = {
    items: [],
    cartItems: [],
    itemsToRender: [],
    currency: "USD",


    renderitem(domElement) {
        let html = '';
        html += `<div class="category-wrapper">
                 <div class="category-wrapper__title">All Watches</div>`;
        this.itemsToRender.forEach(item => {
            html += `
                <div class="category-wrapper__card">
                    <div class='category-wrapper__card__img'> <img src="${item.img}"></div>
                    <div class="category-wrapper__card__name" >${item.name} </div>
                    <div class="category-wrapper__card__price">${item.price}</div>
                    
                    
                    <button class='add1' onclick="handleaddcart(event,'${item.id}')" style="cursor: pointer;color:black">add to cart<i class="fab fa-opencart"></i></button>
                </div>`
        });
        domElement.innerHTML = html
        setCurrency()
    },

    renderitemcart(domElement) {

        let html2 = '';

        this.cartItems.forEach(item => {
            html2 += `<div class='cart__card'>
            <img src="${item.img}">
            <p class="cart__card--name">${item.name}</p>
            <p class="cart__card--price">${item.price}</p>
            <button id="add_one" onclick='handleQuantity(event, "${item.id}")'>▲</button>
            <p class="cart__card--quantity">${item.quantity}</p>
            <button id="remove_one" onclick='handleQuantity(event, "${item.id}")'>▼</button>
           
        
           <button  onclick='handleDelete("${item.id}")' style="width:50px ;"'><i class="far fa-trash-alt"></i> Delete</button>
            </div>`
        });
        domElement.innerHTML = html2
        setCurrency()
    },



    renderCartCount() {
        document.querySelector('.header__cart-notification').innerHTML = `${this.cartItems.length}`;
    },

    additem(newItem) {
        let isAdded = false;
        if (!newItem.quantity) newItem.quantity = 1;
        this.cartItems.forEach(item => {
            if (item.id == newItem.id) {
                item.quantity += 1;
                console.log(item.quantity);
                isAdded = true;
                return;
            }
        });
        if (isAdded) return;
        this.cartItems.push(newItem);
    },
    sortitemup() {
        this.itemsToRender.sort((a, b) => { return a.price - b.price })
    },
    sortitemdown() {
        this.itemsToRender.sort((a, b) => { return b.price - a.price })
    },

    getdata() {
        this.items = JSON.parse(localStorage.getItem('storeData'))
    },
    deleteItem(id) {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
        this.renderitemcart(cart);
        console.log(this.cartItems);
        this.renderCartCount();

    },
    addOneItem(id) {
        const index = this.cartItems.findIndex(item => item.id == id)
        this.cartItems[index].quantity++;
    },
    removeOneItem(id) {
        const index = this.cartItems.findIndex(item => item.id == id)
        if (this.cartItems[index].quantity <= 1) this.deleteItem(id);
        else this.cartItems[index].quantity--;
    },
    filterItems(category) {
        const keys = Object.keys(this.items[0])
        let filteredItems = [];
        for (let i = 3; i < keys.length; i++) {
            filteredItems = this.items.filter(item => item[keys[i]] == category);
            if (filteredItems.length != 0) break;
        };
        aviator.itemsToRender = filteredItems;
        this.renderitem(document.getElementById('main'));
        document.querySelector(".category-wrapper__title").innerHTML = category;
    }
}

function handleaddcart(ev, itemToAddId) {
    const itemToAdd = aviator.items.filter(item => item.id == itemToAddId)[0];
    aviator.additem(itemToAdd);
    const cart = document.querySelector('.cart')
    aviator.renderitemcart(cart)
    const cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(() => { cartIcon.classList.remove("pulse") }, 1000);
    aviator.renderCartCount();
    setTimeout(() => { cartIcon.classList.remove("pulse") }, 1000);
}
function handlesortitem(ev) {
    aviator.sortitemup()
    aviator.renderitem(rootitems)
}
function handlesortitemacs(ev) {
    aviator.sortitemdown()
    aviator.renderitem(rootitems)
}

function handleDelete(id) {
    aviator.deleteItem(id)
    aviator.renderitemcart(cart);
}

aviator.getdata();
aviator.itemsToRender = aviator.items;

const rootitems = document.getElementById('main')
aviator.renderitem(rootitems)

const cart = document.querySelector('.cart')
aviator.renderitemcart(cart)


let filters = document.querySelectorAll('.filter');
filters.forEach(item => {
    item.addEventListener('click', handelfilters)
})

function handelfilters(ev) {
    console.log(ev.target.innerText);
    aviator.filterItems(ev.target.innerText);
}
document.querySelector('.filter-bar__item').addEventListener('click', () => {
    aviator.itemsToRender = aviator.items;
    aviator.renderitem(document.getElementById('main'))
});
//////////////// from index2 ///////////////////////////////////////////////////////////////////////////
let filterBar = document.querySelectorAll('.drop');
filterBar.forEach(item => {
    item.addEventListener('click', handleNavClick)

});
let filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick() {
    filterDropBar.classList.toggle("visible");
    console.log('click');
}

let currencyButton = document.querySelector('#currency-button');
let currencySelector = document.querySelector('.currency-selector');
let currencyOption = document.querySelectorAll('.currency');
currencyButton.addEventListener('click', handleCurrencySelectorClick);
function handleCurrencySelectorClick() {
    currencySelector.classList.toggle("visible");
}
currencyOption.forEach(currency => {
    currency.addEventListener('click', handleCurrencyOptionClick)

});

function setCurrency() {
    switch (aviator.currency) {
        case "USD":
            swichToUsd()
            break;
        case "EUR":
            swichToEur()
            break;
        case "GBP":
            swichToGbp()
            break;
    }
}

function swichToUsd() {
    let prices: any = document.querySelectorAll(".category-wrapper__card__price");
    let cartPrices: any = document.querySelectorAll(".cart__card--price");
    prices.forEach(price => {
        price.classList.add("USD");
        price.classList.remove("EUR", "GBP");
    });
    cartPrices.forEach(price => {
        price.classList.add("USD");
        price.classList.remove("EUR", "GBP");
    });
};
function swichToEur() {
    let prices: any = document.querySelectorAll(".category-wrapper__card__price");
    let cartPrices: any = document.querySelectorAll(".cart__card--price");
    prices.forEach(price => {
        price.classList.add("EUR");
        price.classList.remove("USD", "GBP");
    });
    cartPrices.forEach(price => {
        price.classList.add("EUR");
        price.classList.remove("USD", "GBP");
    });
};
function swichToGbp() {
    let prices: any = document.querySelectorAll(".category-wrapper__card__price");
    let cartPrices: any = document.querySelectorAll(".cart__card--price");
    prices.forEach(price => {
        price.classList.add("GBP");
        price.classList.remove("EUR", "USD");
    });
    cartPrices.forEach(price => {
        price.classList.add("GBP");
        price.classList.remove("EUR", "USD");
    });
};

function handleCurrencyOptionClick(ev) {
    let id = ev.target.id;
    console.log(id);
    currencyButton.innerHTML = `ISRAEL (${id})`;
    switch (id) {
        case "USD":
            aviator.currency = "USD"
            break;
        case "EUR":
            aviator.currency = "EUR"
            break;
        case "GBP":
            aviator.currency = "GBP"
            break;
    }
    setCurrency()
}
document.querySelectorAll(".category-wrapper__card__price").forEach(price => {
    price.classList.add("USD");
});
document.querySelectorAll(".cart__card--price").forEach(price => {
    price.classList.add("USD");
});

const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener('click', handleCartClick);

function handleCartClick() {
    const cart: any = document.querySelector(".wow");
    cart.classList.toggle("visible");
    console.log(cart.classList);

}

function handleQuantity(ev, id) {
    switch (ev.target.id) {
        case "add_one":
            aviator.addOneItem(id);
            break;
        case "remove_one":
            aviator.removeOneItem(id);
            break;
    }
    aviator.renderitemcart(cart);
}

function handleRotate() {
    document.querySelector(".carousel").classList.toggle("rotate");
}






