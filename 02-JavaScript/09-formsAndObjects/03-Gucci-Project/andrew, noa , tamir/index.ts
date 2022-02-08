interface aviator {

    items: Array<newItem>
    cartItems: Array<newItem>
    itemsToRender: Array<newItem>
    additem(newItem)
    renderitem(domElement: any)
    renderitemcart(domElement)
    renderCartCount()
    sortitemup();
    sortitemdown()
    getdata()
    deleteItem(id: string)
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


    renderitem(domElement) {
        let html = '';
        html += `<div class="category-wrapper">`;
        this.itemsToRender.forEach(item => {
            html += `
                <div class="category-wrapper__title">All Watches</div>
                <div class="category-wrapper__card">
                    <div class='category-wrapper__card__img'> <img src="${item.img}"></div>
                    <div class="category-wrapper__card__name" >${item.name} </div>
                    <div class="category-wrapper__card__price">${item.price}</div>
                    
                    
                    <button class='add1' onclick="handleaddcart(event,'${item.id}')" style="cursor: pointer;color:black">add to cart<i class="fab fa-opencart"></i></button>
                </div>`
        });
        domElement.innerHTML = html
    },

    renderitemcart(domElement) {
        let html2 = '';

        this.cartItems.forEach(item => {
            html2 += `<div class='cart'>
            <img src="${item.img}">
           
        
           <button  onclick='handleDelete("${item.id}")' style="width:50px ;"'><i class="far fa-trash-alt"></i> Delete</button>
            </div>`
        });
        domElement.innerHTML = html2
    },



    renderCartCount() {
        document.querySelector('.header__cart-notification').innerHTML = `${this.cartItems.length}`;
    },

    additem(newItem) {
        this.cartItems.push(newItem)
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
    filterItems(category) {
        const keys = Object.keys(this.items[0])
        let filteredItems = [];
        for (let i = 3; i < keys.length; i++) {
            filteredItems = this.items.filter(item => item[keys[i]] == category);
            if (filteredItems.length != 0) break;
        };
        aviator.itemsToRender = filteredItems;
        this.renderitem(document.getElementById('main'));
    }
}

function handleaddcart(ev, itemToAddId) {
    const itemToAdd = aviator.items.filter(item => item.id == itemToAddId)[0];
    aviator.additem(itemToAdd);
    const cart = document.getElementById('cart')
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

const cart = document.getElementById('cart')
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


