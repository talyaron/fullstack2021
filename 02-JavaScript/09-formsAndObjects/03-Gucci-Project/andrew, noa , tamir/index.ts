interface aviator {

    items: Array<newItem>
    filteritems: Array<newItem>
    cartItems:number
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
    cartItems : 0,

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
                    
                    
                    <button class='add1' onclick="handleaddcart(event,'${item.id}')" style="cursor: pointer;color:black">add to cart<i class="fab fa-opencart"></i></button>
                </div>`
        });

        domElement.innerHTML = html
    },
    
    renderitemcart(domElement) {
        let html2 = '';

        this.filteritems.forEach(item => {
            html2 += `<div class='cart'>
            <img src="${item.img}">
           
        
           <button  onclick='handleDelete("${item.id}")' style="width:50px ;"'><i class="far fa-trash-alt"></i> Delete</button>
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
        this.filteritems = this.filteritems.filter(item => item.id !== id);
        this.renderitemcart(cart);
        console.log(this.filteritems);

        this.cartItems--;
        document.querySelector('.header__cart-notification').innerHTML = `${this.cartItems}`;
        
    },

}

function handleaddcart(ev, itemToAddId) {
    const itemToAdd = aviator.items.filter(item => item.id == itemToAddId)[0];
    console.log(itemToAdd);
    
    aviator.additem(itemToAdd);
    const cart = document.getElementById('cart')
    aviator.renderitemcart(cart)
    //andrew's addition
    const cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(()=>{cartIcon.classList.remove("pulse")}, 1000);
    const cartNumber = document.querySelector('.header__cart-notification')
    aviator.cartItems++;
    cartNumber.innerHTML = `${aviator.cartItems}`;
    //
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

aviator.getdata()

const rootitems = document.getElementById('main')
aviator.renderitem(rootitems)

const cart = document.getElementById('cart')
aviator.renderitemcart(cart)


let filters = document.querySelectorAll('.per');
filters.forEach(item=>{
    item.addEventListener('click',handelfilters)
})

function handelfilters(){
    
}
