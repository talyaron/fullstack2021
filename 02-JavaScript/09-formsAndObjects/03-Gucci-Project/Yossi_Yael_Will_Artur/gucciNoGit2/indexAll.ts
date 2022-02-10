const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface gucci {
    id?: number;
    items: Array<Items>;
    addItems(select, title, description, price);
    deleteItem(id: string);
    renderItems(domElement: any, list);
    // newItems(price: number);
    sortItems(orderBy?: string);
    deleteItem(id: string);
    editItem(id, title, price)
    storeData();
    getData();
    getDataStore(list, rootItemsStore);

}
interface Items {
    id: string;
    select: string;
    title: string;
    description: string;
    price: number
}


const gucci: gucci = {
    items: [
        {
            id: uid(),
            select: 'Samsung',
            title: 'Edje',
            description: 'The best watch on the market 2022, now in a new design and gifts!',
            price: 300
        }
    ],
    
    addItems(select, title, description, price) {
        
        let id = uid();
        this.items.push({ id, select, title, description, price });
        this.storeData();
        this.getData();
    },

    editItem(id, title, price) {
        const index = this.items.findIndex((item) => item.id === id);

        if (index >= 0) {
            this.items[index].title = title;
            this.items[index].price = price;
        }
    },

    // newItems(price): Array<Items> {
    //     return this.items.filter((item) => { return item.price > price })
    // },

    sortItems(orderBy = 'asc') {
        if (orderBy === 'asc') {
            this.items.sort((a, b) => { return b.price - a.price})
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

    renderItems(list, domElement) {
        let html = '';
        list.forEach(item => {
            html +=
                `<div class='containerCard'>
            <div class='card'>
            <div class="category">${item.select}</div>
            <div>
            <div class="title">${item.title}</div>
            <div class="description">${item.description}</div>
            </div>
            <div class="price">&#8362;${item.price}</div>

            <div class="main__item pic${item.select} "></div>
            <div class="itemPic">
            <img src="${item.select}.jpg" alt="">
            <hr>
            </div>

            <div class="delete">
            <button onclick="handleDelete('${item.id}')"><span style="color: #ff0000;">Delete</span></button>
            </div>
            </div>
         
            <div class="edit">
            <form id="formAdd" onsubmit="handleEditItems(event, '${item.id}')">
            <input type="text" name="title" placeholder="Edit title" value="${item.title}">
            <input type="number" name="price" placeholder="Edit price" value="${item.price}">
            <input type="submit" id="update" value="UPDATE">
            </form>
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
            `<div class="main__item pic${item.select} ">
                <button class="buy-now" type="buttom"><i class="fas fa-shopping-cart"></i>Buy now</button>
                <span class="price">price:&#36;${item.price}</span>
            </div>`})

        localStorage.setItem('storeData', JSON.stringify(this.items))

        rootItemsStore.innerHTML = htmlStore;
    },

}


function handleaddItems(ev) {
    ev.preventDefault();
    const select = ev.target.elements.select.value;
    const title = ev.target.elements.title.value;
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    gucci.addItems(select, title, description, price);
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
    ev.target.reset();
}

function handleEditItems(ev, id) {
    console.log(id)
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    gucci.editItem(id, title, price);
    const rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(gucci.items, rootItems);
}

function handlesortItemsDesc(ev) {
    // const desc = ev.target.value;
    gucci.sortItems('desc');
    const rootItemsStore = document.getElementById('rootItemsStore');
    gucci.getDataStore(gucci.items, rootItemsStore);
}
function handlesortItemsAsc(ev) {
    // const desc = ev.target.value;
    gucci.sortItems('asc');
    const rootItemsStore = document.getElementById('rootItemsStore');
    gucci.getDataStore(gucci.items, rootItemsStore);
}

function handleDelete(id) {
    const rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id)
    gucci.renderItems(gucci.items, rootItems)
}



const rootItems = document.getElementById('rootItems');
const rootItemsStore = document.getElementById('rootItemsStore')
gucci.getData();
gucci.storeData()
gucci.renderItems(gucci.items, rootItems);
gucci.getDataStore(gucci.items, rootItemsStore);

// let htmlStore = '';
// list.forEach(item => {
//     htmlStore += `<div class='main'>
//     <div>${item.select}</div>
//     <div>${item.title}</div>
//     <div>${item.description}</div>
//     <div>&#8362;${item.price}</div>
//     <div>
//     <img src="${item.select}.jpg" alt="">
//     <hr>
//     </div>`})