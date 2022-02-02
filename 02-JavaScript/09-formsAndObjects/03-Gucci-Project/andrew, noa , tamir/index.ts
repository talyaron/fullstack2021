interface aviator {

    items: Array<newItem>
    filteritems: Array<newItem>
    additem(newItem)
    renderitem(domElement: any)
    renderitemcart(domElement)
    sortitemup();
    sortitemdown()
    getdata()
    deleteItem(id)
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
    filteritems: [],

    renderitem(domElement) {
        let html = '';
        html += `<div class="category-wrapper">`;
        this.items.forEach(item => {
            html += `
                <div class="category-wrapper__title">DOUGLAS</div>
                <div class="category-wrapper__card">
                    <div class='category-wrapper__card__img'> <img src="${item.img}"></div>
                    <div class="category-wrapper__card__name" >${item.name} </div>
                    <div class="category-wrapper__card__price">${item.price}</div>
                    
                    
                    <button class='add1' onclick="handleaddcart(event)" style="cursor: pointer;color:black">add to cart<i class="fab fa-opencart"></i></button>
                </div>`
        });

        domElement.innerHTML = html
    },
    // <i class="fab fa-opencart"></i>
    renderitemcart(domElement) {
        let html2 = '';

        this.filteritems.forEach(item => {
            html2 += `<div class='cart'>
           ${item.img}
        
           <button  onclick='handleDelete(${item.id})' style="width:50px ;"'><i class="far fa-trash-alt"></i> Delete</button>
            </div>`
        });
        domElement.innerHTML = html2
    },
    


    additem(newItem) {
        this.filteritems.push(newItem)
    },
    sortitemup() {
        this.items.sort((a, b) => { return a.price - b.price })
    },
    sortitemdown() {
        this.items.sort((a, b) => { return b.price - a.price })
    },

    getdata() {
        this.items = JSON.parse(localStorage.getItem('storeData'))
    },
    deleteItem(id) {
        this.filteritems.filter(item => item.id !== id);
    },

}
let cartItems:number = 0;
function handleaddcart(ev) {
    console.dir(ev)
    const img = (ev.path[1].innerHTML)
    const name = (ev.target.parentElement.firstElementChild.textContent)
    const price = (ev.target.previousElementSibling.textContent)
    aviator.additem({ img, name, price })
    const cart = document.getElementById('cart')
    aviator.renderitemcart(cart)
    //andrew's addition
    const cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(()=>{cartIcon.classList.remove("pulse")}, 1000);
    const cartNumber = document.querySelector('.header__cart-notification')
    cartItems++;
    cartNumber.innerHTML = `${cartItems}`;
    //
}
function handlesortitem(ev) {
    ev.preventDefault();
    aviator.sortitemup()
    aviator.renderitem(rootitems)
}
function handlesortitemacs(ev) {
    ev.preventDefault();
    aviator.sortitemdown()
    aviator.renderitem(rootitems)
}

function handleDelete(id) {
    console.dir('id')
    console.log(id)
    aviator.deleteItem(id)
    aviator.renderitemcart(cart);
}

aviator.getdata()

const rootitems = document.getElementById('main')
aviator.renderitem(rootitems)

const cart = document.getElementById('cart')
aviator.renderitemcart(cart)
