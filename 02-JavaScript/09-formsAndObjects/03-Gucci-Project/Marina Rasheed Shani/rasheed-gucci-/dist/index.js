var gucci = {
    menClothes: [],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.menClothes));
    },
    getData: function () {
        this.menClothes = JSON.parse(localStorage.getItem("storeData"));
    },
    addMoremenClothes: function (item, price) {
        this.menClothes.push({ item: item, price: price });
        this.storeData();
    },
    render: function (list, domElement) {
        var html = "";
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
gucci.getData();
function handleShowClothes() {
    gucci.getData();
    var root = document.getElementById("root");
    gucci.renderAllmenClothes(root);
}
function handleAddMoreProducts(ev) {
    ev.preventDefault();
    var item = ev.target.item.value;
    var price = ev.target.price.value;
    gucci.addMoremenClothes(item, price);
    console.log(gucci.menClothes);
    gucci.storeData();
}
