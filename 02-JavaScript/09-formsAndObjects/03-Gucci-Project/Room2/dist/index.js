var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    // id:0,
    products: [],
    getData: function () {
        var products = JSON.parse(localStorage.getItem("Adidas"));
        if (products) {
            this.products = products;
        }
    },
    setData: function () {
        localStorage.setItem("Adidas", JSON.stringify(this.products));
    },
    addItem: function (title, price, category, pictureFront, pictureBack, color, description, shoeSize) {
        var id = uid();
        this.products.push({
            id: id,
            title: title,
            price: price,
            category: category,
            pictureFront: pictureFront,
            pictureBack: pictureBack,
            color: color,
            description: description,
            shoeSize: shoeSize
        });
        this.setData();
    },
    deleteItem: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
        this.setData();
    },
    render: function (list, domElement) {
        var html = "";
        this.products.forEach(function (product) {
            html +=
                //     `
                //     <div class="cards__item">
                //     <div class="picture">
                //         <i class="far fa-heart"></i>
                //         <img src="https://st-adidas-isr.mncdn.com/content/images/thumbs/0095730_ultraboost-22-shoes_gx5462_side-lateral-center-view.jpeg"
                //             alt="Card Back">
                //         <img src="https://st-adidas-isr.mncdn.com/content/images/thumbs/0095732_ultraboost-22-shoes_gx5462_top-portrait-view.jpeg"
                //             class="img-top" alt="Card Front">
                //     </div>
                //     <div class="color">
                //         <div class="color--item"></div>
                //         <div class="color--item"></div>
                //     </div>
                //     <div class="description">
                //         <p>4DFWD Pulse Shoes</p>
                //         <p>Men's Running</p>
                //         <p>₪ 299.90</p>
                //     </div>
                // </div>
                //     `
                "<div style=\"width: 35%;border: 1px solid red\">\n          <p><b>Title: </b> " + product.title + "</p>\n          <p><b> Price: </b> " + product.price + "\u20AA</p>\n          <p><b> picture: </b> </p>\n          <p><img src=\"" + product.picture + "\" style=\"width: 200px; height: 200px;\"></p>\n          <p><b> Color: </b> " + product.color + "</p>\n          <p><b> Description: </b> " + product.description + "</p>\n          <p><b> Size: </b> " + product.shoeSize + "</p>\n          <p><b> category: </b> " + product.category + "</p>\n\n\n          <form onsubmit=\"handleUpdate(event, '" + product.id + "') \">\n\n          <input type=\"text\" name=\"newTitle\" placeholder=\"new title\" value=\"" + product.title + "\">\n          <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" value=\"" + product.price + "\">\n          <input type=\"text\" name=\"newCategory\" placeholder=\"new category\" value=\"" + product.category + "\">\n          <input type=\"text\" name=\"newPictureFront\" placeholder=\"new picture Front\" value=\"" + product.pictureFront + "\">\n          <input type=\"text\" name=\"newPictureBack\" placeholder=\"new picture Back\" value=\"" + product.pictureBack + "\">\n          <input type=\"text\" name=\"newColor\" placeholder=\"new color\" value=\"" + product.color + "\">\n          <input type=\"text\" name=\"newDescription\" placeholder=\"new description\" value=\"" + product.description + "\">\n          <input type=\"number\" name=\"newShoeSize\" placeholder=\"new shoeSize\" value=\"" + product.shoeSize + "\">\n          <button id =\"button\" type=\"submit\">Update</button>\n\n          </form>\n\n          <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n\n          </div>";
        });
        var button = document.getElementById("button");
        console.log(button);
        domElement.innerHTML = html;
    },
    updateItem: function (id, newTitle, newPrice, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index >= 0) {
            this.products[index].title = newTitle;
            this.products[index].price = newPrice;
            this.products[index].category = newCategory;
            this.products[index].pictureFront = newPictureFront;
            this.products[index].pictureBack = newPictureBack;
            this.products[index].color = newColor;
            this.products[index].description = newDescription;
            this.products[index].shoeSize = newShoeSize;
            console.log(index);
            this.setData();
        }
    },
    renderAllData: function (domElement) {
        this.render(this.products, domElement);
    }
};
function handleAddItem(ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    var category = ev.target.elements.category.value;
    var pictureFront = ev.target.elements.pictureFront.value;
    var pictureBack = ev.target.elements.pictureBack.value;
    var color = ev.target.elements.color.value;
    var description = ev.target.elements.description.value;
    var shoeSize = ev.target.elements.shoeSize.valueAsNumber;
    Adidas.addItem(title, price, category, pictureFront, pictureBack, color, description, shoeSize);
    var root = document.getElementById("rootOwner");
    Adidas.renderAllData(root);
    ev.target.reset(); //reset the form fileds
    // console.log(category);
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById("rootOwner");
    Adidas.deleteItem(id);
    Adidas.renderAllData(root);
}
function handleUpdate(ev, itemId) {
    ev.preventDefault();
    var newTitle = ev.target.elements.newTitle.value;
    var newPrice = ev.target.elements.newPrice.valueAsNumber;
    var newCategory = ev.target.elements.newCategory.value;
    var newPictureFront = ev.target.elements.newPictureFront.value;
    var newPictureBack = ev.target.elements.newPictureBack.value;
    var newColor = ev.target.elements.newColor.value;
    var newDescription = ev.target.elements.newDescription.value;
    var newShoeSize = ev.target.elements.newShoeSize.valueAsNumber;
    var root = document.getElementById("rootOwner");
    Adidas.updateItem(itemId, newTitle, newPrice, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize);
    Adidas.renderAllData(root);
}
Adidas.addItem("superstar shoes", 200, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
Adidas.addItem("superstar shoes", 300, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
Adidas.addItem("superstar shoes", 100, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
function handleGetData(page) {
    try {
        console.log(page);
        Adidas.getData();
        console.log(Adidas);
        if (page === "owner") {
            var root = document.getElementById("rootOwner");
            Adidas.renderAllData(root);
        }
        else if (page === "customer") {
            var root = document.getElementById("rootCustomer");
            Adidas.renderAllData(root);
        }
        else {
            throw new Error("page is not found (" + page + ")");
        }
    }
    catch (err) {
        console.log(err);
    }
}
