var productObj = {
    products: [],
    addProducts: function (product) {
        this.products.push(product);
    },
    sortDesc: function (orderByDesc) {
        orderByDesc === 'desc';
        this.products.sort(function (a, b) { return a.price - b.price; });
    },
    sortAsc: function (orderByAsc) {
        orderByAsc === 'asc';
        this.products.sort(function (a, b) { return b.price - a.price; });
    },
    renderProducts: function (array) {
        var html = '';
        array.forEach(function (product) {
            html += "<div class='result-card'>\n            <p>Product : " + product.description + "</p><i class=\"fas fa-box fa-4x\"></i>\n            <p>Price : " + product.price + "$</p></div>";
        });
        rootProducts.innerHTML = html;
    },
    filterByPrice: function (valueInput) {
        if (valueInput == "") {
            this.renderProducts(this.products);
            return;
        }
        var filteredList = this.products.filter(function (product) { return product.price < Number(valueInput); });
        this.renderProducts(filteredList);
        ;
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    productObj.addProducts({ description: description, price: price });
    productObj.renderProducts(productObj.products);
    ev.target.reset();
}
function handleDesc(ev) {
    var desc = ev.target.value;
    productObj.sortDesc(desc);
    productObj.renderProducts(productObj.products);
}
function handleAsc(ev) {
    var asc = ev.target.value;
    productObj.sortAsc(asc);
    productObj.renderProducts(productObj.products);
}
function handleInput(ev) {
    productObj.filterByPrice(ev.target.value);
}
productObj.addProducts({ description: 'banana', price: 99 });
productObj.addProducts({ description: 'apples', price: 5 });
productObj.addProducts({ description: 'orange', price: 17 });
productObj.addProducts({ description: 'milk', price: 99 });
productObj.addProducts({ description: 'water', price: 5 });
productObj.addProducts({ description: 'orange', price: 17 });
productObj.addProducts({ description: 'flower', price: 105 });
var rootProducts = document.getElementById('cardResult');
productObj.addProducts({ description: "paper", price: 5 });
productObj.renderProducts(productObj.products);
