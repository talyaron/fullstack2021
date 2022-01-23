var zapPage = {
    products: [{ description: "clock", price: 20 }],
    addItem: function (product) {
        this.products.push(product);
    },
    renderItem: function (array) {
        var html = "";
        array.forEach(function (item) {
            html += "<div class='card'>\n            <p>" + item.description + ", $" + item.price + "</p></div>";
        });
        document.getElementById('rootZap').innerHTML = html;
    },
    sortAscending: function () {
        // const ascending = document.getElementById('Ascending')
        var _this = this;
        // ascending.addEventListener('click', (product) => {
        //     this.product.sort((a, b) => { return a.price - b.price })
        // })
        document.getElementById("ascending").addEventListener("click", function () {
            _this.products.sort(function (a, b) { return a.price - b.price; });
            _this.renderItem(_this.products);
        });
    },
    sortDescending: function () {
        var _this = this;
        document.getElementById("descending").addEventListener("click", function () {
            _this.products.sort(function (a, b) { return b.price - a.price; });
            _this.renderItem(_this.products);
        });
    },
    lowerThan: function (input) {
        if (input == "") {
            this.renderItem(this.products);
            return;
        }
        var filteredArray = this.products.filter(function (product) { return product.price < Number(input); });
        this.renderItem(filteredArray);
    }
};
//render makes what i wrote in the ts show on the html
//the handle submit makes the input responsive
function handleSubmit(ev) {
    ev.preventDefault();
    // console.dir(ev.target.value)
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    zapPage.addItem({ description: description, price: price });
    zapPage.renderItem(zapPage.products);
    //zapPage.sortAscending({description, price})
    ev.target.reset();
}
function handleInput(ev) {
    console.log(ev.target.value);
    zapPage.lowerThan(ev.target.value);
}
zapPage.addItem({ description: "paper", price: 5 });
console.log(zapPage);
var rootZap = document.getElementById('rootZap');
zapPage.renderItem(zapPage.products);
zapPage.sortAscending();
console.log(zapPage.products);
zapPage.sortDescending();
// console.log(zapPage.products);
