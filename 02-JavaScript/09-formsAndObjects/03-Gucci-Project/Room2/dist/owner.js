var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    products: [],
    addItem: function (title, price, category, picture, color, description, shoeSize) {
        var id = uid();
        this.products.push({ id: id, title: title, price: price, category: category, picture: picture, color: color, description: description, shoeSize: shoeSize });
    },
    deleteItem: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    },
    render: function (list, domElement) {
        var html = '';
        list.forEach(function (product) {
            html += "<div style=\"width: 35%;border: 1px solid red\">\n          <p><b>Title: </b> " + product.title + "</p>\n          <p><b> Price: </b> " + product.price + "\u20AA</p>\n          <p><b> picture: </b> </p>\n          <p><img src=\"" + product.picture + "\" style=\"width: 200px; height: 200px;\"></p>\n          <p><b> Color: </b> " + product.color + "</p>\n          <p><b> Description: </b> " + product.description + "</p>\n          <p><b> Size: </b> " + product.shoeSize + "</p>\n          <p><b> category: </b> " + product.category + "</p>\n          <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n          </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllData: function (domElement) {
        this.render(this.products, domElement);
    }
};
Adidas.addItem('superstar shoes', 200, 'Sneakers', 'https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg', 'red', 'B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.', 44);
var root = document.getElementById('root');
Adidas.renderAllData(root);
function handleAddItem(ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    var category = ev.target.elements.category.value;
    var picture = ev.target.elements.picture.value;
    var color = ev.target.elements.color.value;
    var description = ev.target.elements.description.value;
    var shoeSize = ev.target.elements.shoeSize.valueAsNumber;
    Adidas.addItem(title, price, category, picture, color, description, shoeSize);
    Adidas.renderAllData(root);
    ev.target.reset(); //reset the form fileds
    console.log(category);
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById('root');
    Adidas.deleteItem(id);
    Adidas.renderAllData(root);
}
