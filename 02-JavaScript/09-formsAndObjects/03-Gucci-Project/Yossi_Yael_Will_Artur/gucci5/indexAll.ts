const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface gucci {
    id?: number;
    items: Array<Items>;
    cartItems: Array<Items>
    addItems(selectItem, description, price);
    deleteItem(id: string);
    renderItems(domElement: any, list);
    sortItems(orderBy?: string);
    deleteItem(id: string);
    editItem(id, selectItem, description, price)
    storeData();
    getData();
    renderItemsStore(list, rootItemsStore);
    addItemsCart(Items)
    renderItemsCart(list, rootItemsStoreCart)
    deleteItemCart(id)
    addItemsCartNum(cartCount)
    renderaddItemsCartNum(rootCartNum)
}

interface Items {
    id: string;
    selectItem: string;
    description: string;
    price: number
}


const gucci: gucci = {
    items: [
        {id: '1',selectItem: 'Timeless-40mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 1000},
        {id: '2',selectItem: 'Timeless-38mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 2000},
        {id: '3',selectItem: 'Tiger1-38mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 3000},
        {id: '4',selectItem: 'Tiger2-38mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 4000},
        {id: '5',selectItem: 'Timeless-Automatic-38mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 5000},
        {id: '6',selectItem: 'Dive-40mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 6000},
        {id: '7',selectItem: 'Limited-Dive-40mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 7000},
        {id: '8',selectItem: 'Dive-45mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 8000},
        {id: '9',selectItem: 'Timeless-40mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 1000},
        {id: '10',selectItem: 'Timeless-38mm',description: 'PRICE FOR THIS WATCH +10% IN 2023',price: 2000},
    ],

    cartItems: [],

    addItems(selectItem, description, price) {
        let id = uid();
        this.items.push({ id, selectItem, description, price });
        this.storeData();
        this.getData();
    },

    addItemsCart(Items) {
        this.cartItems.push(Items)
    },

    addItemsCartNum(cartCount) {
        cartCount = this.cartItems.length;
        console.log(cartCount)
    },

    editItem(id, selectItem, description, price) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index >= 0) {
            this.items[index].selectItem = selectItem;
            this.items[index].description = description;
            this.items[index].price = price;
        }
        this.storeData();
        this.getData();
    },

    sortItems(orderBy = 'asc') {
        if (orderBy === 'asc') {
            this.items.sort((a, b) => { return b.price - a.price })
        } else if (orderBy === 'desc') {
            this.items.sort((a, b) => { return a.price - b.price })
        }
    },

    storeData() {
        localStorage.setItem('storeData', JSON.stringify(this.items))
    },

    getData() {
        const items = JSON.parse(localStorage.getItem("storeData"));
        if (items) {
            this.items = items;
        }
    },

    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },

    deleteItemCart(id) {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
    },

    renderItems(list, domElement) {
        let html = '';
        list.forEach(item => {
            html +=
                `<div class='containerCard'>
                    <div class='card'>
                        <div class="category">${item.selectItem}</div>
                        <div class="description">${item.description}</div>
                        <div class="price">&#36;${item.price}</div>
                        <div class="imgPic">
                          <div class="main__item pic${item.selectItem} "></div>
                        </div>
                        <div class="itemPicLine">
                            <img src="${item.selectItem}.jpg" alt="">
                            <hr>
                        </div>
                        <div class="delete">
                         <button onclick="handleDelete('${item.id}')"><span style="color: #ff0000;">Delete</span></button>
                        </div>
                        <div class="edit">
                            <form id="formAdd" onsubmit="handleEditItems(event, '${item.id}')">
                            <input type="text" name="selectItem" placeholder="Edit selectItem" value="${item.selectItem}">
                            <input type="number" name="price" placeholder="Edit price" value="${item.price}">
                            <input type="text" name="description" placeholder="Description" value="${item.description}">
                            <input type="submit" id="update" value="UPDATE">
                            </form>
                        </div>
                    </div>
                </div>
                <br>`
        })
        localStorage.setItem('storeData', JSON.stringify(this.items))

        domElement.innerHTML = html;
    },

    renderItemsStore(list, rootItemsStore) {
        let htmlStore = '';
        list.forEach(item => {
            htmlStore +=
                `<div class="main__item pic${item.selectItem}">
                <span class="title">${item.selectItem}</span>
                <span class="price">&#36;${item.price}</span>
                <button class="buy-now" onclick="handleaddItemsCart(event, '${item.id}')" type="buttom">SHOP THIS 
                <i class="fas fa-chevron-right" style="color: #000; font-size:10px;  padding: 10px;" aria-hidden="true"></i>
                </button>
                </div>`})

        rootItemsStore.innerHTML = htmlStore;
    },

    renderItemsCart(list, rootItemsStoreCart) {
        let htmlCart = '';
        list.forEach(item => {
            htmlCart += `<div class="sortPopUpBag">
            <div class="imgCart">
            <div class="main__item pic${item.selectItem}"></div>
            </div>
            <div class="title">${item.selectItem}</div>
            <div class="price">&#36;${item.price}</div>
            <div class="delete">
            <div class="deleteCartItem"><button onclick="handleDeleteCart('${item.id}')">
            <i class="far fa-trash-alt" aria-hidden="true"></i></button></div>
           </div>
            </div><hr>
            `
        });

        rootItemsStoreCart.innerHTML = htmlCart
    },

    renderaddItemsCartNum(rootCartNum) {
        rootCartNum.innerHTML = ''
        let htmlCartCount = `${this.cartItems.length}`;
        rootCartNum.innerHTML = htmlCartCount
    }
}

function handleaddItems(ev) {
    ev.preventDefault();
    const selectItem = ev.target.elements.selectItem.value;
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    gucci.addItems(selectItem, description, price);
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
    ev.target.reset();

}

function handleaddItemsCart(ev, cartItemId) {
    const cartCount = ''
    const cartItem = gucci.items.filter(item => item.id == cartItemId)[0];
    gucci.addItemsCart(cartItem);
    const rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
    gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);

    gucci.addItemsCartNum(cartCount);
    const rootCartNum = document.querySelector('#cartNum');
    gucci.renderaddItemsCartNum(rootCartNum);
}


function handleEditItems(ev, id) {
    console.log(id)
    ev.preventDefault();
    const selectItem = ev.target.elements.selectItem.value;
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    gucci.editItem(id, selectItem, description, price);
    const rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(gucci.items, rootItems);
}

function handlesortItemsDesc(ev) {
    gucci.sortItems('desc');
    const rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}
function handlesortItemsAsc(ev) {
    gucci.sortItems('asc');
    const rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}

function handleDelete(id) {
    const rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id)
    gucci.renderItems(gucci.items, rootItems)
}

function handleDeleteCart(id) {
    const rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
    gucci.deleteItemCart(id);
    gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);
}

gucci.getData();
gucci.storeData();

function rendrOwenerItems() {
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
}

function handleRenderAllItems() {
    gucci.getData();
    const rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}

function myFunctionSort() {
    const popup = document.getElementById("myPopupSort");
    popup.classList.toggle("show");
}

function myFunctionBag() {
    const popup = document.getElementById("myPopupBag");
    popup.classList.toggle("show");
}

function myFunctionShowSearch() {
    const search = document.getElementById("searchDIV");
    if (search.style.display === "none") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
}


function handleSearch(ev) {
    const searchTerm = ev.target.value;
    const regex = new RegExp(searchTerm, "i");
    const root = document.querySelector("#SearchList");
    let html = "";


    if (searchTerm == 0) {
        root.innerHTML = html;
        return;
    }

    gucci.items.forEach(item => {
        if (regex.test(item.selectItem)) {
            html += `
            <div class="searchDiv">
            <div class="imgCart">
            <div class="main__item pic${item.selectItem}"></div>
            </div>
            <div class="title">${item.selectItem}</div>
            <div class="price">&#36;${item.price}</div>
            </div>`
        }
    });

    root.innerHTML = html;

}
