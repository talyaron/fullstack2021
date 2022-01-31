var gucci = {
    menClothes: [],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.menClothes));
    },
    getData: function () {
        this.menClothes = JSON.parse(localStorage.getItem("storeData"));
    },
    addClothes: function (name, price) {
        this.menClothes.push({ name: name, price: price });
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
function handleAddclothes(ev) {
    ev.preventDefault();
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    gucci.addClothes(name, price);
    console.log(gucci.menClothes);
    gucci.storeData();
}
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('Pants' , 552)
// gucci.addClothes('Jeans' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
