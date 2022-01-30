var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucciStore = {
    listOfItems: [
        { nameOfItem: "gucci gold bag", price: 2000 },
        { nameOfItem: "gucci silver bag", price: 2300 }
    ],
    addItem: function (nameOfItem, price, type) {
        var id = uid();
        this.listOfItems.push({ nameOfItem: nameOfItem, price: price, id: id, type: type });
    },
    filterByType: function (type) {
    }
};
gucciStore.addItem("green gucci purse", "bag", 1000);
gucciStore.addItem("gold diamond ", "ring", 2000);
gucciStore.addItem("solid gold fannypack", "bag", 100000);
console.log(gucciStore);
