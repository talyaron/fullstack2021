var myStore = {
    products: [],
    addProducts: function () {
        this.products = [
            { name: "T-Shirt", price: 110, id: 1 },
            { name: "Sweather", price: 220, id: 2 },
            { name: "long-Shirt", price: 450, id: 3 },
            { name: "Tank-Top", price: 456, id: 4 },
            { name: "Slim-jeans", price: 33, id: 5 },
            { name: "Shorts", price: 33, id: 6 },
            { name: "Wide-Jeans", price: 33, id: 7 },
            { name: "Sport Suit", price: 33, id: 8 },
            { name: "Shoes", price: 33, id: 9 },
            { name: "Hats", price: 33, id: 10 }
        ];
        this.storeData();
    },
    storeData: function () {
        localStorage.setItem('storeData', JSON.stringify(this.products));
    },
    getData: function () {
        this.products = JSON.parse(localStorage.getItem('storeData'));
    },
    addMoreProducts: function (item, price) {
        this.products.push({ item: item, price: price });
        this.storeData();
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (product) {
            html += "<div class='result-card'>\n        <p> item : " + product.name + " , price :  " + product.price + "$</p>\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllProducts: function (domElement) {
        var products = this.products;
        this.render(products, domElement);
    }
};
function handleAddProducts() {
    myStore.addProducts();
    myStore.getData();
    var root = document.getElementById('root');
    myStore.renderAllProducts(root);
}
function handleAddMoreProducts(ev) {
    ev.preventDefault();
    myStore.addProducts();
    var item = ev.target.item.value;
    var price = ev.target.price.value;
    myStore.addMoreProducts(item, price);
    console.log(myStore.products);
    myStore.storeData();
}
