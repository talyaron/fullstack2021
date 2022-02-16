const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface gucci {
    id ? : number;
    items: Array < Items > ;
    cartItems: Array < Items >
        addItems(select, description, price);
    deleteItem(id: string);
    renderItems(domElement: any, list);
    sortItems(orderBy ? : string);
    deleteItem(id: string);
    editItem(id, select, description, price)
    storeData();
    getData();
    getDataStore(list, rootItemsStore);
    addItemsCart(Items)
    renderitemcart(list, rootItemsStoreCart)
}

interface Items {
    id: string;
    select: string;
    title: string;
    description: string;
    price: number
}


const gucci: gucci = {
    items: [],


    cartItems: [],

    addItems(select, description, price) {
        let id = uid();
        this.items.push({
            id,
            select,
            description,
            price
        });
        this.storeData();
        this.getData();
    },



    addItemsCart(Items) {
        this.cartItems.push(Items)
    },

    editItem(id, select, description, price) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index >= 0) {
            this.items[index].select = select;
            this.items[index].description = description;
            this.items[index].price = price;
        }
        this.storeData();
        this.getData();
    },

    sortItems(orderBy = 'asc') {
        if (orderBy === 'asc') {
            this.items.sort((a, b) => {
                return b.price - a.price
            })
        } else if (orderBy === 'desc') {
            this.items.sort((a, b) => {
                return a.price - b.price
            })
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

    renderItems(list, domElement) {
        let html = '';
        list.forEach(item => {
            html +=
                `<div class='containerCard'>
                    <div class='card'>
                        <div class="category">${item.select}</div>
                        <div class="description">${item.description}</div>
                        <div class="price">&#36;${item.price}</div>
                        <div class="imgPic">
                          <div class="main__item pic${item.select} "></div>
                        </div>
                        <div class="itemPicLine">
                            <img src="${item.select}.jpg" alt="">
                            <hr>
                        </div>
                        <div class="delete">
                         <button onclick="handleDelete('${item.id}')"><span style="color: #ff0000;">Delete</span></button>
                        </div>
                        <div class="edit">
                            <form id="formAdd" onsubmit="handleEditItems(event, '${item.id}')">
                            <input type="text" name="select" placeholder="Edit select" value="${item.select}">
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

    getDataStore(list, rootItemsStore) {
        let htmlStore = '';
        list.forEach(item => {
            htmlStore +=
                `<div class="main__item pic${item.select}">
                <span class="title">${item.select}</span>
                <span class="price">&#36;${item.price}</span>
                <button class="buy-now" onclick="handleaddItemsCart(event, '${item.id}')" type="buttom"><i class="fas fa-shopping-cart"></i>Buy now</button>
            </div>`
        })

        rootItemsStore.innerHTML = htmlStore;
    },


    renderitemcart(list, rootItemsStoreCart) {
        let htmlCart = '';
        console.log(list);

        list.forEach(item => {
            htmlCart += `<div class="sortPopUpBag">

            <div class="imgCart">
            <div class="main__item pic${item.select}"></div>
            </div>

            <div class="title">${item.select}</div>

            <div class="price">&#36;${item.price}</div>

            </div><hr>
            `
        });
        rootItemsStoreCart.innerHTML = htmlCart
    },
}



function handleaddItems(ev) {
    ev.preventDefault();
    try {
        const select = ev.target.elements.select.value;
        // const title = ev.target.elements.title.value;
        const description = ev.target.elements.description.value;
        const price: number = ev.target.elements.price.valueAsNumber;
        gucci.addItems(select, description, price);
        const rootItems = document.getElementById('rootItems');
        gucci.renderItems(gucci.items, rootItems);
        ev.target.reset();
        if (!rootItems) throw new Error('no "rootitems" in DOM');

    } catch (error) {
        console.error(error)

    }

}
//////////////////////////////////////////


function handleaddItemsCart(ev, cartItemId) {
    try {
        const cartItem = gucci.items.filter(item => item.id == cartItemId)[0];
        gucci.addItemsCart(cartItem);
        const rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
        gucci.renderitemcart(gucci.cartItems, rootItemsStoreCart);
        if (!rootItemsStoreCart) throw new Error('no "rootItemsStoreCart" in DOM');

    } catch (error) {
        console.error(error);
    }

}

function handleEditItems(ev, id) {
    try {
        console.log(id)
        ev.preventDefault();
        const select = ev.target.elements.select.value;
        const description = ev.target.elements.description.value;
        const price: number = ev.target.elements.price.valueAsNumber;
        gucci.editItem(id, select, description, price);
        const rootItems = document.getElementById('rootItems');
        ev.target.reset();
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems) throw new Error('no "rootItems" in DOM');

    } catch (error) {
        console.error(error);
    }

}





function handlesortItemsDesc(ev) {
    try {

        gucci.sortItems('desc');
        const rootItemsStore = document.getElementById('rootItemsStore');
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore) throw new Error('no "rootItemsStore" in DOM');

    } catch (error) {
        console.error(error);


    }

}



function handlesortItemsAsc(ev) {
    try {


        gucci.sortItems('asc');
        const rootItemsStore = document.getElementById('rootItemsStore');
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore) throw new Error('no "rootItemsStore" in DOM');


    } catch (error) {
        console.error(error);

    }
}



function handleDelete(id) {
    try {
        const rootItems = document.getElementById('rootItems');
        gucci.deleteItem(id)
        gucci.renderItems(gucci.items, rootItems)
        if (!rootItems) throw new Error('no "rootItems" in DOM');

    } catch (error) {
        console.error(error);

    }
}


gucci.getData();
gucci.storeData()




function rendrOwenerItems() {
    try {
        const rootItems = document.getElementById('rootItems');
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems) throw new Error('no "rootItems" in DOM');


    } catch (error) {
        console.error(error);


    }
}


function handleRenderAllItems() {
    try {

        gucci.getData();
        const rootItemsStore = document.getElementById('rootItemsStore')
        gucci.getDataStore(gucci.items, rootItemsStore);
        if (!rootItemsStore) throw new Error('no "rootItemsStore" in DOM');

    } catch (error) {
        console.error(error);


    }
}



// When the user clicks on div, open the popup
function myFunction() {
    try {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
        if (!popup) throw new Error('no "popup" in DOM');


    } catch (error) {
        console.error(error);


    }
}


// When the user clicks on div, open the popup
function myFunctionBag() {
    try {

        var popup = document.getElementById("myPopupBag");
        popup.classList.toggle("show");
        if (!popup) throw new Error('no "popup" in DOM');

    } catch (error) {
        console.error(error);


    }
}