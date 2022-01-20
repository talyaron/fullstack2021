var zapPage = {
    products: [{ description: "clock", price: 20 }],
    addItem: function (product) {
        this.products.push(product);
    }
};
zapPage.addItem({ description: "paper", price: 5 });
console.log(zapPage);
