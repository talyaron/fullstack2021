var zapPage = {
    products: [{ description: "clock", price: 20 }],
    addItem: function (product) {
        this.products.push(product);
    },
    renderItem: function (domElement) {
        var html = "";
        this.products.forEach(function (item) {
            html += "<div class='card'>\n            <p>" + item.description + ", " + item.price + "</p></div>";
        });
        domElement.innerHTML = html;
    },
    sortAscending: function () {
        // const ascending = document.getElementById('Ascending')
        // ascending.addEventListener('click', (product) => {
        //     this.product.sort((a, b) => { return a.price - b.price })
        // })
        document.getElementById("ascending").addEventListener("click", this.products.sort(function (a, b) { return a.price - b.price; }));
    },
    sortDescending: function () {
        this.products.sort(function (a, b) { return b.price - a.price; });
    },
    lowerThan: function () {
        this.products.filter(function (product) { return product.price > 20; });
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
    var rootZap = document.getElementById('rootZap');
    zapPage.renderItem(rootZap);
    //zapPage.sortAscending({description, price})
    ev.target.reset();
}
function handleInput(ev) {
    console.log(ev.target.value);
}
zapPage.addItem({ description: "paper", price: 5 });
console.log(zapPage);
var rootZap = document.getElementById('rootZap');
zapPage.renderItem(rootZap);
zapPage.sortAscending();
console.log(zapPage.products);
// zapPage.sortDescending();
// console.log(zapPage.products);
//zapPage.lowerThan();
