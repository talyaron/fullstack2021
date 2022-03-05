const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface laptopObject {
    laptops: Array<descriptionAndPrice>;
    addLaptop(company: string, price: number, type: "leptops" | "smartphones");
    ascLaptops();
    descLaptops();
    deleteFunc(idItem: string);
    FilterIt(number);
    renderFilter(domElement: any, filtered: Array<descriptionAndPrice>);
    filterSelect(type: "leptops" | "smartphones");
    renderSelected(domElement: any, selectedItems: Array<descriptionAndPrice>);
    indexUpdate(idItem: string);
    updateIt(index: any, value: string);
    renderUpdate(domElement: any, list: Array<descriptionAndPrice>);
    renderAllLaptops(domElement: any);
    renderLaptop(domElement: any, filtered: Array<descriptionAndPrice>);
};

interface descriptionAndPrice {
    idItem: string,
    company: string,
    price: number,
    type: "computer" | "smartphone",
};

let zapLaptops: laptopObject = {
    laptops: [],

    addLaptop(company, price, type) {
        const idItem = uid();
        this.laptops.push({ company, price, type, idItem });
    },

    ascLaptops() {
        this.laptops = this.laptops.sort((a, b) => { return a.price - b.price });
    },

    descLaptops() {
        this.laptops = this.laptops.sort((a, b) => { return b.price - a.price });
    },

    deleteFunc(idItem) {
        this.laptops = this.laptops.filter(item => item.idItem !== idItem);
    },

    FilterIt(filterNumber) {
        return this.laptops.filter((priceFilter) => priceFilter.price < filterNumber);
    },

    renderFilter(domElement, filterd) {
        this.renderLaptop(domElement, filterd);
    },

    filterSelect(select) {
        return this.laptops.filter(item => item.type === select)
    },

    renderSelected(domElement, selectedItems) {
        this.renderLaptop(domElement, selectedItems)
    },

    indexUpdate(idItem: string) {
        return this.laptops.findIndex(item => item.idItem === idItem);
    },

    updateIt(index, value) {
        this.laptops[index].company = value;
    },

    renderUpdate(domElement: any, list: Array<descriptionAndPrice>) {
        this.renderLaptop(domElement, list)
    },

    renderAllLaptops(domElement: any) {
        this.renderLaptop(domElement, this.laptops);
    },

    renderLaptop(domElement, list) {
        let laptopHtml: string = '';
        list.forEach(item => {


            laptopHtml += `<div class="card"><p>${item.company}: ${item.price}</p>
                <button onclick="handleDelete('${item.idItem}')">Delete</button>
                <form onsubmit="handleUpdate(event, '${item.idItem}')">
                <input type="text" name="update" placeholder="update company">
                <input name="submit" value="update" type="submit">
                </form></div>`

        })
        domElement.innerHTML = laptopHtml;
    },
};


function handleSubmit(event) {
    event.preventDefault();


    const company = event.target.elements.description.value;
    const price = event.target.elements.price.valueAsNumber;
    const type = event.target.id;

    const rootLaptops: any = document.querySelector('#rootLaptops')

    zapLaptops.addLaptop(company, price, type);
    zapLaptops.renderAllLaptops(rootLaptops);

    event.target.reset();
}

function handleSubmit1(e) {
    e.preventDefault();


    const company = e.target.elements.description.value;
    const price = e.target.elements.price.valueAsNumber;
    const type = e.target.id;

    const rootLaptops: any = document.querySelector('#rootLaptops')


    zapLaptops.addLaptop(company, price, type);
    zapLaptops.renderAllLaptops(rootLaptops)

    e.target.reset();
}

function handleAsc(ev) {
    const rootLaptops = document.getElementById("rootLaptops");
    const type = ev.target.id;
    zapLaptops.ascLaptops();
    zapLaptops.renderAllLaptops(rootLaptops);
}

function handleDesc(ev) {
    const rootLaptops = document.getElementById("rootLaptops");
    const type = ev.target.id;
    zapLaptops.descLaptops();
    zapLaptops.renderAllLaptops(rootLaptops);
}

function handleFilter(e) {
    let fiterEvent = e.target.valueAsNumber;
    const rootLaptops = document.getElementById("rootLaptops");

    if (fiterEvent) {
        const filterItems = zapLaptops.FilterIt(fiterEvent);
        zapLaptops.renderFilter(rootLaptops, filterItems);

    } else {
        zapLaptops.renderAllLaptops(rootLaptops)
    }
};

function handleDelete(idItem) {

    zapLaptops.deleteFunc(idItem);
    const rootLaptops = document.getElementById("rootLaptops");
    zapLaptops.renderAllLaptops(rootLaptops)
};

function handleUpdate(ev, id) {
    ev.preventDefault();

    const newValue = ev.target.update.value;
    const indexToUpdate = zapLaptops.indexUpdate(id);

    zapLaptops.updateIt(indexToUpdate, newValue);
    const rootLaptops = document.getElementById("rootLaptops");
    zapLaptops.renderUpdate(rootLaptops, zapLaptops.laptops);
};

function handleSelection(ev) {
    const rootLaptops = document.getElementById("rootLaptops");
    const select = ev.target.value;
    let selectedItems;

    if (select === "all") {
        zapLaptops.renderAllLaptops(rootLaptops);
    } else {
        selectedItems = zapLaptops.filterSelect(select);
    };

    zapLaptops.renderSelected(rootLaptops, selectedItems);

};











