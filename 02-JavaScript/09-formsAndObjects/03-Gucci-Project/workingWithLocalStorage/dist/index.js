var myStore = {
    products: [],
    addProducts: function () {
        this.products = [
            { name: "pr1", price: 11, id: 1 },
            { name: "pr2", price: 22, id: 2 },
            { name: "pr3", price: 33, id: 3 },
        ];
        this.storeData();
    },
    storeData: function () {
        sessionStorage.setItem('storeData', JSON.stringify(this.products));
    },
    getData: function () {
        this.products = JSON.parse(sessionStorage.getItem('storeData'));
    }
};
function handleAddProducts() {
    myStore.addProducts();
}
function handleShowProducts() {
    console.log(myStore.products);
}
function handleGetProducts() {
    myStore.getData();
}
myStore.getData();
console.log('-- start page products --');
console.log(myStore.products);
console.log('-- ------------------- --');
var a = 42;
