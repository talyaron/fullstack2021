const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface gucci {
    id?: number;
    items: Array<Items>;
    addItems(item: Items);
    storeData();
    getData();
    deleteItem(id: string);
    renderItems(domElement: any);
    newItems(price: number);
    sortItems(orderBy?: string);
    renderItemsList(domElement: any, filtered: Array<Items>);
    deleteItem(id: string);
    editItem(id, itemEdited)
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
    addItems(item: Items) {
        this.items.push(item);
        this.storeData();
        this.getData()
    },
    storeData(){
        localStorage.setItem('storeData', JSON.stringify(this.items))
    },
    getData(){
        this.items = JSON.parse(localStorage.getItem('storeData'));
        
      },
    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    },

    editItem(id, itemEdited) {
        console.log(id)
        const index = this.items.findIndex((item) => item.id === id);
        console.log(index)
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
    renderItems(domElement) {
        const items = this.items
        this.renderItemsList(domElement, items)
    },

    renderItemsList(domElement, list) {
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
    gucci.addItems({ id, select, title, description, price });
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
    ev.target.reset();
}

function handleEditItems(ev, id) {
    console.log(id)
    ev.preventDefault();
    const itemEdited = ev.target.elements.itemEdited.value;
    gucci.editItem(id, itemEdited);
    const rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(rootItems);
}

function handlesortItemsDesc(ev) {
    const desc = ev.target.value;
    gucci.sortItems('desc');
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
}
function handlesortItemsAsc(ev) {
    const desc = ev.target.value;
    gucci.sortItems('asc');
    const rootItems = document.getElementById('rootItems');
    gucci.renderItems(rootItems);
}

function handleDelete(id) {
    const rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id)
    gucci.renderItems(rootItems)
}

gucci.addItems({ id: "1", select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 400 });
gucci.addItems({ id: "2", select: 'games', title: 'Checkmate', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 200 });
gucci.addItems({ id: "3", select: 'fashion', title: 'Jacket', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 500 });
gucci.addItems({ id: "4", select: 'electronics', title: 'iMac', description: 'product is an object or system made available for consumer use...<a href="">read more</a>', price: 2000 });

const rootItems = document.getElementById('rootItems');
gucci.renderItems(rootItems);
gucci.getData();

console.log(gucci);

