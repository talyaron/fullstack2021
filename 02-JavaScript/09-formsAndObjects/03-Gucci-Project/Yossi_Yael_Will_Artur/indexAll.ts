const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface gucci {
    id?: number;
    items: Array<Items>;
    addItems(select:string, title:string, description:string, price:number);
    deleteItem(id: string);
    renderItems(domElement: any, list);
    newItems(price: number);
    sortItems(orderBy?: string);
    deleteItem(id: string);
    editItem(id:any, itemEdited:string)
    storeData();
    getData();
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
            select: 'electronics',
            title: 'iMAC',
            description: '',
            price: 300
        }
    ],

    addItems(select, title, description, price) {
        let id = uid();
        this.items.push({ id, select, title, description, price });
        this.storeData();
        this.getData();
    },

    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    },

    editItem(id, itemEdited) {
        const index = this.items.findIndex((item) => item.id === id);

        if (index >= 0) {
            this.items[index].title = itemEdited;
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

    storeData() {
        localStorage.setItem('storeData', JSON.stringify(this.items))
    },

    getData() {
        const items = JSON.parse(localStorage.getItem("storeData"));
        if (items) {
            this.items = items;
        }
    },

    renderItems(list, domElement) {
        let html = '';
        list.forEach(item => {
            html += `<div class='card'>
            <div class="category">${item.select}</div>
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
                <form id="formAdd" onsubmit="handleEditItems(event, '${item.id}')">
              <input type="text" name="itemEdited" placeholder="Edit title">
                <input type="submit" value="SAVE">
            </form>
                </figcaption>
            </figure>
            </div>
            <div class="delete">
            <button onclick="handleDelete('${item.id}')"><span style="color: #fdfdfd;">X</span></button>
            </div>
            </div>`
        })
        domElement.innerHTML = html;
    }
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
    ev.preventDefault();
    const itemEdited = ev.target.elements.itemEdited.value;
    gucci.editItem(id, itemEdited);
    const rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(gucci.items, rootItems);
}

function handlesortItemsDesc(ev) {
    const desc = ev.target.value;
    gucci.sortItems('desc');
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
}

function handlesortItemsAsc(ev) {
    const desc = ev.target.value;
    gucci.sortItems('asc');
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
}

function handleDelete(id) {
    const rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id)
    gucci.renderItems(gucci.items, rootItems)
}

const rootItems = document.getElementById('rootItems');

gucci.getData();
gucci.renderItems(gucci.items, rootItems);
// console.log(gucci);

