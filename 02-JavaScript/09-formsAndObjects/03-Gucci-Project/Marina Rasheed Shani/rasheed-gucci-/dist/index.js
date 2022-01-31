var gucci = {
    menClothes: [],
    addMenClothes: function () {
        this.menClothes = [
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
        localStorage.setItem('storeData', JSON.stringify(this.menClothes));
    },
    getData: function () {
        this.menClothes = JSON.parse(localStorage.getItem('storeData'));
    },
    addMoremenClothes: function (item, price) {
        this.menClothes.push({ item: item, price: price });
        this.storeData();
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (product) {
            html += "<div class='result-card'>\n        <p> item : " + product.name + " , price :  " + product.price + "$</p>\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllmenClothes: function (domElement) {
        var menClothes = this.menClothes;
        this.render(menClothes, domElement);
    }
};
function handleAddmenClothes() {
    gucci.addMenClothes();
    gucci.getData();
    var root = document.getElementById('root');
    gucci.renderAllmenClothes(root);
}
function handleAddMoremenClothes(ev) {
    ev.preventDefault();
    gucci.addMenClothes();
    var item = ev.target.item.value;
    var price = ev.target.price.value;
    gucci.addMoremenClothes(item, price);
    console.log(gucci.menClothes);
    gucci.storeData();
}
