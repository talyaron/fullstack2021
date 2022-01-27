const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface zap {
    items: Array<Items>;
    addItems(item: Items);
    deleteItem(id: string);
    removeItems(itemTitle: string);
    renderItems(domElement: any);
    newItems(price: number);
    sortItems(orderBy?: string);
    filterItemsByMaxPrice(price: number)
    renderFilter(domElement: any, filtered: Array<Items>)
    renderItemsList(domElement: any, filtered: Array<Items>)
    deleteItem(id: string)
    editItem(item)
}
interface Items {
    id: string;
    select: string;
    title: string;
    description: string;
    price: number
}


const zap: zap = {
    items: [],
    addItems(item: Items) {
        this.items.push(item);
    },
    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    },

    editItem(item: Items) {
        this.items.push(item);
    },
    removeItems(itemTitle: string) {
        const index = this.items.findIndex(item => item.title === itemTitle);
        if (index >= 0) {
            this.items.splice(index, 1)
        }
    },
    newItems(price): Array<Items> {
        return this.items.filter((item) => { return item.price > price })
    },
    sortItems(orderBy = 'asc') {
        if (orderBy === 'asc') {
            this.items.sort((a, b) => { return a.price - b.price })
        } else if (orderBy === 'desc') {
            this.items.sort((a, b) => { return b.price - a.price })
        }
    },
    renderItems(domElement) {
        const items = this.items
        this.renderItemsList(domElement, items)
    },
    filterItemsByMaxPrice(price) {
        return this.items.filter((item) => item.price < price)
    },
    renderFilter(domElement, filtered) {
        this.renderItemsList(domElement, filtered)
    },
    renderItemsList(domElement, list) {
        let html = '';
        list.forEach(item => {
            html += `<div class='card'>
            <div class="category">&#9632; ${item.select}</div>
            <div>
            <div class="title">${item.title}</div>
            <div class="description">${item.description}</div>
            </div>
            <div class="price">&#8362;${item.price}</div>
            <div class="itemPic">
            <img src="${item.select}.png" alt="">
            <hr>
            </div>
            <div class="edit"><a href="#editPopUP">Edit</a></div>
            <div class="popUpbox" id="editPopUP">
            <figure>
                <a href="#" class="close"></a>
                <figcaption>
                <form id="formAdd" onsubmit='handleEditItems(event)'>
                <select name="select" id="select" placeholder="select">
                <option>select</option>
                <option>electronics</option>
                <option>fashion</option>
                <option>games</option>
               </select>
               <input type="text" name="title" placeholder="Edit title">
               <input type='number' name="price" placeholder="Edit price">
                <input type="submit" value="SAVE">
            </form>
                </figcaption>
            </figure>
            </div>
            <div class="delete">
            <button onclick="handleDelete('${item.id}')"><span style="color: #d21ec3;">X</span></button>
            </div>
            </div>`
        })
        domElement.innerHTML = html
    }
}


function handleaddItems(ev) {
    ev.preventDefault();
    const select = ev.target.elements.select.value;
    const title = ev.target.elements.title.value;
    const description = ev.target.elements.description.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    const id = uid()
    zap.addItems({ id, select, title, description, price });
    const rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
    ev.target.reset();
}

function handleEditItems(ev) {
    ev.preventDefault();
    const select = ev.target.elements.select.value;
    const title = ev.target.elements.title.value;
    const price: number = ev.target.elements.price.valueAsNumber;
    zap.editItem({ select, title, price });
    const rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
    ev.target.reset();
}

function handleremoveItems(ev) {
    ev.preventDefault();
    const title = ev.target.elements.remove.value;
    zap.removeItems(title);
    const rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}


function handlesortItemsDesc(ev) {
    const desc = ev.target.value;
    zap.sortItems('desc');
    const rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}
function handlesortItemsAsc(ev) {
    const desc = ev.target.value;
    zap.sortItems('asc');
    const rootItems = document.getElementById('rootItems');
    zap.renderItems(rootItems);
}

function handleFilter(e) {
    const price = e.target.valueAsNumber;
    const rootItems = document.getElementById('rootItems');
    if (price) {
        const filtered = zap.filterItemsByMaxPrice(price);
        zap.renderFilter(rootItems, filtered);
    } else {
        zap.renderItems(rootItems);
    }
}

function handleDelete(id) {
    const rootItems = document.getElementById('rootItems');
    zap.deleteItem(id)
    zap.renderItems(rootItems)
}


function handleEdit(id) {
    const rootItems = document.getElementById('rootItems');
    zap.editItem(id)
    zap.renderItems(rootItems)
}

zap.addItems({ id: '', select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 400 });
zap.addItems({ id: '',select: 'games', title: 'Checkmate', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 200 });
zap.addItems({ id: '',select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>',  price: 500 });
zap.addItems({ id: '',select: 'electronics', title: 'iMac', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 2000 });

const rootItems = document.getElementById('rootItems');
zap.renderItems(rootItems);

// function handlePriceChange(ev) {
//     console.log(ev.target.valueAsNumber)
// }

console.log(zap);
