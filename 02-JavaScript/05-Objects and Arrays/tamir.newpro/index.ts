interface aviator {
    items: Array<newItem>
    filteritems: Array<newItem>
    additem(newItem)
    renderitem(domElement: any)
    renderitemcart(domElement:any)
    sortitemup();
    sortitemdown()
}
interface newItem {
    img?: string
    name?: string
    price?: number

}


let aviator: aviator = {
    items:
        [{ name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp` },
        { name: 'DOUGLAS DAY-DATE 41', price: 55, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.276.4.webp' },
        { name: 'DOUGLAS', price: 35, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.2.237.4.webp' },
        { name: 'tamir', price: 57, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.277.4.webp' },
        { name: 'avi', price: 140, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.280.4.webp' },
        { name: 'nir', price: 60, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.274.4.webp' }],

    filteritems: [],
    renderitem(domElement) {
        let html = '';
        this.items.forEach((item) => {
            html += ` <div class="main">
            <div class="category-wrapper">
                <div class="category-wrapper__title">Watches</div>
                <div class="category-wrapper__card">
                     <div class='category-wrapper__img'> <img src="${item.img}"></div>
                    <div class="category-wrapper__name" >${item.name} </div>
                    <div class="category-wrapper__price">${item.price}</div>
                    <div class='add' onclick="handleaddcart(event)"></div>
                    <button class='add1' onclick="handleaddcart(event)" style="cursor: pointer;color:black">add to cart<i class="fab fa-opencart"></i></button>
                </div>
            </div>
        </div>`

        });
        domElement.innerHTML = html
    },
    // <i class="fab fa-opencart"></i>
    renderitemcart(domElement){
        let html2='';

        this.filteritems.forEach(item => {
           html2 += `<div class='cart'>
           ${item.img}
            </div>`
        });
        domElement.innerHTML= html2
    },
    additem(newItem) {
        this.filteritems.push(newItem)
    },
    sortitemup() {
        this.items.sort((a, b) => { return a.price - b.price })
    },
    sortitemdown() {
        this.items.sort((a, b) => { return b.price - a.price })
    }
}
function handleaddcart(ev) {
    const img=(ev.path[1].innerHTML)
    console.dir(ev)
    const name = (ev.target.parentElement.firstElementChild.textContent)
    const price=  (ev.target.previousElementSibling.textContent)
   aviator.additem({img,name,price})
   const cart = document.getElementById('cart')
   aviator.renderitemcart(cart)


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

const rootitems = document.getElementById('main')
aviator.renderitem(rootitems)

const cart = document.getElementById('cart')
aviator.renderitemcart(cart)