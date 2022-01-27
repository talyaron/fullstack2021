var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
;
;
var zapLaptops = {
    laptops: [],
    addLaptop: function (company, price, type) {
        var idItem = uid();
        this.laptops.push({ company: company, price: price, type: type, idItem: idItem });
    },
    ascLaptops: function () {
        this.laptops = this.laptops.sort(function (a, b) { return a.price - b.price; });
    },
    descLaptops: function () {
        this.laptops = this.laptops.sort(function (a, b) { return b.price - a.price; });
    },
    deleteFunc: function (idItem) {
        this.laptops = this.laptops.filter(function (item) { return item.idItem !== idItem; });
    },
    FilterIt: function (filterNumber) {
        return this.laptops.filter(function (priceFilter) { return priceFilter.price < filterNumber; });
    },
    renderFilter: function (domElement, filterd) {
        this.renderLaptop(domElement, filterd);
    },
    filterSelect: function (select) {
        return this.laptops.filter(function (item) { return item.type === select; });
    },
    renderSelected: function (domElement, selectedItems) {
        this.renderLaptop(domElement, selectedItems);
    },
    indexUpdate: function (idItem) {
        return this.laptops.findIndex(function (item) { return item.idItem === idItem; });
    },
    updateIt: function (index, value) {
        this.laptops[index].company = value;
    },
    renderUpdate: function (domElement, list) {
        this.renderLaptop(domElement, list);
    },
    renderAllLaptops: function (domElement) {
        this.renderLaptop(domElement, this.laptops);
    },
    renderLaptop: function (domElement, list) {
        var laptopHtml = '';
        list.forEach(function (item) {
            laptopHtml += "<div class=\"card\"><p>" + item.company + ": " + item.price + "</p>\n                <button onclick=\"handleDelete('" + item.idItem + "')\">Delete</button>\n                <form onsubmit=\"handleUpdate(event, '" + item.idItem + "')\">\n                <input type=\"text\" name=\"update\" placeholder=\"update company\">\n                <input name=\"submit\" value=\"update\" type=\"submit\">\n                </form></div>";
        });
        domElement.innerHTML = laptopHtml;
    }
};
function handleSubmit(event) {
    event.preventDefault();
    var company = event.target.elements.description.value;
    var price = event.target.elements.price.valueAsNumber;
    var type = event.target.id;
    var rootLaptops = document.querySelector('#rootLaptops');
    zapLaptops.addLaptop(company, price, type);
    zapLaptops.renderAllLaptops(rootLaptops);
    event.target.reset();
}
function handleSubmit1(e) {
    e.preventDefault();
    var company = e.target.elements.description.value;
    var price = e.target.elements.price.valueAsNumber;
    var type = e.target.id;
    var rootLaptops = document.querySelector('#rootLaptops');
    zapLaptops.addLaptop(company, price, type);
    zapLaptops.renderAllLaptops(rootLaptops);
    e.target.reset();
}
function handleAsc(ev) {
    var rootLaptops = document.getElementById("rootLaptops");
    var type = ev.target.id;
    zapLaptops.ascLaptops();
    zapLaptops.renderAllLaptops(rootLaptops);
}
function handleDesc(ev) {
    var rootLaptops = document.getElementById("rootLaptops");
    var type = ev.target.id;
    zapLaptops.descLaptops();
    zapLaptops.renderAllLaptops(rootLaptops);
}
function handleFilter(e) {
    var fiterEvent = e.target.valueAsNumber;
    var rootLaptops = document.getElementById("rootLaptops");
    if (fiterEvent) {
        var filterItems = zapLaptops.FilterIt(fiterEvent);
        zapLaptops.renderFilter(rootLaptops, filterItems);
    }
    else {
        zapLaptops.renderAllLaptops(rootLaptops);
    }
}
;
function handleDelete(idItem) {
    zapLaptops.deleteFunc(idItem);
    var rootLaptops = document.getElementById("rootLaptops");
    zapLaptops.renderAllLaptops(rootLaptops);
}
;
function handleUpdate(ev, id) {
    ev.preventDefault();
    var newValue = ev.target.update.value;
    var indexToUpdate = zapLaptops.indexUpdate(id);
    zapLaptops.updateIt(indexToUpdate, newValue);
    var rootLaptops = document.getElementById("rootLaptops");
    zapLaptops.renderUpdate(rootLaptops, zapLaptops.laptops);
}
;
function handleSelection(ev) {
    var rootLaptops = document.getElementById("rootLaptops");
    var select = ev.target.value;
    var selectedItems;
    if (select === "all") {
        zapLaptops.renderAllLaptops(rootLaptops);
    }
    else {
        selectedItems = zapLaptops.filterSelect(select);
    }
    ;
    zapLaptops.renderSelected(rootLaptops, selectedItems);
}
;
