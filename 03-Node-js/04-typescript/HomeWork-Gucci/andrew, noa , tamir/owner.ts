console.log('owner')

interface Aviator {
    items: Array<NewItem>
    addItem(newItem)
    deleteItem(id)
    updateItem(item)
    renderStock(items)
    storeData()
}
interface NewItem {
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

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

let stock: Aviator = {
    items: [],
    addItem(newItem) {
        try {
            newItem.id = uid();
            this.items.push(newItem);
            console.log(this.items);
            this.renderStock(this.items);
            this.storeData();

            if (!uid)  throw new Error("no id");
        }
        catch (error) {
            console.error(error);
        }
    },
    storeData() {
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    deleteItem(id) {
        try {
            if (!id) throw new Error("no id")

            this.items = this.items.filter((item) => item.id !== id);
            this.storeData();
        }
         catch (error) {
            console.error(error)
        }

    },
    updateItem(updatedItem) {
        //find index
        const index = this.items.findIndex((item) => item.id === updatedItem.id);
        //update the spesific item's name
        if (index >= 0) {
            this.items[index] = updatedItem;
        }
        this.storeData();
    },
    renderStock(items) {
        let HTML = '';
        items.forEach(item => {
            HTML += ` <div class="card">
            <p> name: ${item.name}</p>
            <p> price: ${item.price}</p>
            <img src="${item.img}">
            <p> group: ${item.group}</p>
            <p> collection: ${item.Collection}</p>
            <p> function: ${item.function}</p>
            <p> movement: ${item.movement}</p>
            <p> case: ${item.case}</p>
            <p> diameter: ${item.diameter}</p>
            <p> dial: ${item.dial}</p>
            <p> bracelet: ${item.bracelet}</p>
            <button onclick="handleDelete('${item.id}')">Delete</button>
            <button onclick="handleEdit('${item.id}')">Edit</button>
           </div> `;
        });
        const rootHTML = document.getElementById('root');
        rootHTML.innerHTML = HTML;
    }
}

function handleSubmit(ev) {
    ev.preventDefault();
    const newItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id: uid };
    const keys = Object.keys(newItem)
    for (let i = 0; i < keys.length; i++) {
        newItem[keys[i]] = ev.target.elements[i].value;
    }

    stock.addItem(newItem);
    
}

function handleDelete(id) {
    stock.deleteItem(id);
    stock.renderStock(stock.items);
}

function handleEdit(id) {
    const form: any = document.querySelector('.updateForm');
    form.classList.add('visableForm')
    let EditedItem: any = stock.items.filter((item) => item.id === id)[0];
    console.log(EditedItem);

    const keys = Object.keys(EditedItem)
    for (let i = 0; i < keys.length; i++) {
        form[i].value = EditedItem[keys[i]]

    }
    // for (let field of form) {
    //     let name = field.name;
    //     switch (name) {
    //         case "name":
    //             field.value = EditedItem.name;
    //             break;
    //         case "price":
    //             field.value = EditedItem.price;
    //             break;
    //         case "img":
    //             field.value = EditedItem.img;
    //             break;
    //         case "group":
    //             field.value = EditedItem.group;
    //             break;
    //         case "Collection":
    //             field.value = EditedItem.Collection;
    //             break;
    //         case "function":
    //             field.value = EditedItem.function;
    //             break;
    //         case "movement":
    //             field.value = EditedItem.movement;
    //             break;
    //         case "case":
    //             field.value = EditedItem.case;
    //             break;
    //         case "diameter":
    //             field.value = EditedItem.diameter;
    //             break;
    //         case "dial":
    //             field.value = EditedItem.dial;
    //             break;
    //         case "bracelet":
    //             field.value = EditedItem.bracelet;
    //             break;
    //         case "id":
    //             field.value = EditedItem.id;
    //             break;
    //     }
    // }
}

function handleUpdate(ev) {
    ev.preventDefault()
    let updateItem = { name: "", price: 0, img: "", group: "", Collection: "", function: "", movement: "", case: "", diameter: "", dial: "", bracelet: "", id: 0 };
    const keys = Object.keys(updateItem);
    for (let i = 0; i < Object.keys(updateItem).length; i++) {
        updateItem[keys[i]] = ev.target.elements[i].value;
    }
    stock.updateItem(updateItem);
    stock.renderStock(stock.items);
}

stock.addItem({ name: 'DOUGLAS DAY 41', price: 45, img: `https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp`, group: "AUTOMATIC WATCHES", Collection: "BRISTOL", function: "Chronograph", movement: "Quartz", case: "Gold PVD", diameter: "42 mm", dial: "Ivory", bracelet: "Leather", id: uid })
stock.addItem({ name: 'DOUGLAS DC-3', price: 35, img: `https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.0.232.4.webp`, group: "CLASSIC WATCHES", Collection: "MOONFLIGHT", function: "Chronograph", movement: "Automatic", case: "Black PVD", diameter: "36 mm", dial: "Black", bracelet: "Leather", id: uid })
stock.addItem({ name: 'AIRACOBRA P42', price: 60, img: `https://aviatorwatch.swiss/assets/catalog/airacobra-p42/AVIATOR-WATCH--AIRACOBRA-P42--V.1.22.0.190.5.webp`, group: "NEW RELEASES", Collection: "AIRCOBRA", function: "Day / Date", movement: "Quartz", case: "Stainless Steel", diameter: "42 mm", dial: "Ivory", bracelet: "Steel", id: 0 })
stock.addItem({ name: 'MIG-29 SMT', price: 90, img: `https://aviatorwatch.swiss/assets/catalog/mig-29-smt/AVIATOR-WATCH--MIG-29-SMT--M.2.30.5.215.6.webp`, group: "SPORT WATCHES", Collection: "MIG", function: "Chronograph", movement: "Quartz", case: "Black PVD", diameter: "47 mm", dial: "Red", bracelet: "Rubber", id: 0 })
stock.addItem({ name: 'DOUGLAS MOONFLIGHT', price: 75, img: `https://aviatorwatch.swiss/assets/catalog/douglas-moonflight/AVIATOR-WATCH--DOUGLAS-MOONFLIGHT--V.1.33.0.261.4.webp`, group: "LADIES WATCHES", Collection: "MOONFLIGHT", function: "Moonphase", movement: "Quartz", case: "Stainless Steel", diameter: "36 mm", dial: "Green", bracelet: "Leather", id: 0 })
stock.addItem({ name: 'BRISTOL SCOUT', price: 125, img: `https://aviatorwatch.swiss/assets/catalog/bristol-scout/AVIATOR-WATCH--BRISTOL-SCOUT--V.3.18.8.162.4.webp`, group: "MILITRY WATCHES", Collection: "BRISTOL", function: "Small Second", movement: "Automatic", case: "Brown PVD", diameter: "46 mm", dial: "Black", bracelet: "Leather", id: 0 })


stock.storeData();