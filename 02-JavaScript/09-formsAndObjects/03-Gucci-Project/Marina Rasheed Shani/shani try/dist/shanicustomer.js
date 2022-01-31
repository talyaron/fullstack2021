var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucciStore = {
    listOfItems: [
        { nameOfItem: "gucci gold bag", price: 200, type: "bag" },
        { nameOfItem: "gucci silver bag", price: 2300, type: "bag" }
    ],
    addItem: function (nameOfItem, price, type) {
        var id = uid();
        this.listOfItems.push({ nameOfItem: nameOfItem, price: price, id: id, type: type });
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"item\">\n            <h3>" + item.nameOfItem + "</h3>\n            <p>" + item.type + "</p>\n            <h3>" + item.price + "</h3>      \n            </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllData: function (domElement) {
        this.render(this.listOfItems, domElement);
    },
    filterByType: function (type) {
        return this.listOfItems.filter(function (item) { return item.type == type; });
    },
    renderfilterByType: function (type, domElement) {
        var filtered = this.filterByType(type);
        this.render(filtered, domElement);
    },
    sortByAscending: function () {
        this.listOfItems.sort(function (a, b) { return a.price - b.price; });
    },
    sortByDescending: function () {
        this.listOfItems.sort(function (a, b) { return b.price - a.price; });
    },
    filterLowerThan: function (input) {
        return this.listOfItems.filter(function (item) { return item.price < Number(input); });
    },
    removeItemById: function (id) {
        this.listOfItems = this.listOfItems.filter(function (item) { return item.id !== id; });
    }
};
gucciStore.addItem("green gucci purse", 1000, "bag");
gucciStore.addItem("gold diamond ring ", 2000, "jewelry");
gucciStore.addItem("silver diamond ring ", 1000, "jewelry");
gucciStore.addItem("solid gold fannypack", 100000, "bag");
gucciStore.sortByAscending();
gucciStore.sortByDescending();
//console.log(gucciStore.listOfItems)
console.log(gucciStore);
var root = document.getElementById('root');
gucciStore.renderAllData(root);
//gucciStore.renderfilterByType("jewelry",root)
// function handleSubmit(ev) {
//     ev.preventDefault();
//     // console.dir(ev.target.value)
//     const nameOfItem = ev.target.elements.nameOfItem.value;
//     const price: number = ev.target.elements.price.valueAsNumber;
//     const type = ev.target.elements.type.value;
//     gucciStore.addItem(nameOfItem,price,type);
//     const root=document.getElementById('root')
//     gucciStore.renderAllData(root);
//     ev.target.reset();
// }
function handleSelect(ev) {
    console.dir(ev);
    var type = ev.target.value;
    if (type === "all") {
        gucciStore.renderAllData(root);
    }
    else {
        var root_1 = document.getElementById('root');
        gucciStore.renderfilterByType(type, root_1);
    }
}
function handlePriceAsc(ev) {
    gucciStore.sortByAscending();
    var root = document.getElementById('root');
    gucciStore.renderAllData(root);
}
function handlePriceDesc(ev) {
    gucciStore.sortByDescending();
    var root = document.getElementById('root');
    gucciStore.renderAllData(root);
}
function handleInput(ev) {
    gucciStore.filterLowerThan(ev.target.value);
    var root = document.getElementById('root');
    gucciStore.renderAllData(root);
}
