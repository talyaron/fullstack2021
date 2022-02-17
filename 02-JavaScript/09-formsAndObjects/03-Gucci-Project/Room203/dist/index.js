var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    // id:0,
    products: [],
    wishlistArr: [],
    cartArr: [],
    getData: function () {
        var products = JSON.parse(localStorage.getItem("Adidas"));
        if (products) {
            this.products = products;
        }
    },
    setData: function () {
        localStorage.setItem("Adidas", JSON.stringify(this.products));
    },
    addItem: function (title, price, gender, category, pictureFront, pictureBack, color, description, shoeSize) {
        var id = uid();
        this.getData();
        this.products.push({
            id: id,
            title: title,
            price: price,
            gender: gender,
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
        console.log(list);
        var html = "";
        this.products.forEach(function (product) {
            var text = document.URL;
            var customer = text.includes("customer");
            var owner = text.includes("owner");
            if (customer) {
                html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n      <i class=\"fa-solid fa-heart fa-beat\"  onclick=\"handleWishList('" + product.id + "')\"></i>\n          <i class=\"fa-solid fa-circle-plus fa-beat\"  onclick=\"handleCart('" + product.id + "')\"></i>\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"color\">\n      <p><b> Color: </b> " + product.color + "</p>\n      </div>\n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          <p>" + product.description + "</p>\n          <p>" + product.price + "\u20AA</p> \n      </div>\n          </div>   ";
            }
            else if (owner) {
                html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <i class=\"far fa-heart\"  onclick=\"handleWishList('" + product.id + "')\"></i>\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"color\">\n      <p><b> Color: </b> " + product.color + "</p>\n      </div>\n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          <p>" + product.description + "</p>\n          <p>" + product.price + "\u20AA</p> \n      </div>\n\n      <form onsubmit=\"handleUpdate(event, '" + product.id + "')\">\n      <input type=\"text\" name=\"newTitle\" placeholder=\"new title\" value=\"" + product.title + "\">\n      <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" value=\"" + product.price + "\">\n      <input type=\"text\" name=\"newCategory\" placeholder=\"new category\" value=\"" + product.category + "\">\n      <input type=\"text\" name=\"newPictureFront\" placeholder=\"new picture front\" value=\"" + product.pictureFront + "\">\n      <input type=\"text\" name=\"newPictureBack\" placeholder=\"new picture back\" value=\"" + product.pictureBack + "\">\n      <input type=\"text\" name=\"newColor\" placeholder=\"new color\" value=\"" + product.color + "\">\n      <input type=\"text\" name=\"newGender\" placeholder=\"new gender\" value=\"" + product.gender + "\">\n      <input type=\"text\" name=\"newDescription\" placeholder=\"new description\" value=\"" + product.description + "\">\n      <input type=\"number\" name=\"newShoeSize\" placeholder=\"new shoeSize\" value=\"" + product.shoeSize + "\">\n      <button type=\"submit\">Update</button>\n      </form>\n\n      <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n          </div>   ";
            }
        });
        // const button = document.getElementById("button");
        //console.log(button);
        domElement.innerHTML = html;
    },
    renderWish: function (list, domElement) {
        //onsole.log(list);
        var html = "";
        this.wishlistArr.forEach(function (product) {
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
        });
        domElement.innerHTML = html;
    },
    renderCart: function (list, domElement) {
        //console.log(list);
        var html = "";
        this.cartArr.forEach(function (product) {
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
        });
        domElement.innerHTML = html;
    },
    updateItem: function (id, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index >= 0) {
            this.products[index].title = newTitle;
            this.products[index].price = newPrice;
            this.products[index].gender = newGender;
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
    },
    renderAllWish: function (domElement) {
        this.renderWish(this.wishlistArr, domElement);
    },
    renderAllCart: function (domElement) {
        this.renderCart(this.cartArr, domElement);
    },
    filterItems: function (highPrice, lowPrice) {
        return this.products.filter(function (item) { return item.price >= lowPrice && item.price <= highPrice; });
    },
    shoeSizeFilter: function (size) {
        return (this.products = this.products.filter(function (item) { return item.shoeSize === size; }));
    },
    sortItemsAsc: function () {
        this.products.sort(function (x, y) { return y.price - x.price; });
    },
    sortItemsDsc: function () {
        this.products.sort(function (x, y) { return x.price - y.price; });
    },
    sortByGender: function (item) {
        return (this.products = this.products.filter(function (element) { return element.gender === item; }));
    },
    sortByColor: function (color) {
        return (this.products = this.products.filter(function (element) { return element.color === color; }));
    },
    sortByType: function (category) {
        return (this.products = this.products.filter(function (element) { return element.category === category; }));
    },
    renderFilter: function (filterd, domElement) {
        // console.log(filterd);
        this.render(filterd, domElement);
    },
    WishList: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        //console.log(`The index:${index}.`)
        //console.log(`The id: ${id}.`)
        var item;
        item = Adidas.products[index];
        this.wishlistArr.push(item);
    },
    Cart: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        var item;
        item = Adidas.products[index];
        this.cartArr.push(item);
    },
    shoeRender: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        //console.log(`The index:${index}.`)
        //console.log(`The id: ${id}.`)
        var item;
        item = Adidas.products[index];
        this.wishlistArr.push(item);
        console.log(Adidas.wishlistArr);
    }
};
function handleSearchProduct(ev) {
    var search = ev.target.value;
    var regex = new RegExp(search, "i");
    var root = document.getElementById("rootSearch");
    root.innerHTML = "";
    if (search.length > 0) {
        var foundProducts = Adidas.products.filter(function (product) {
            if (regex.test(product.title))
                return true;
        });
        var html = foundProducts
            .map(function (product) {
            return "<p>" + product.title + "</p>";
        })
            .join("");
        root.innerHTML = html;
        console.log(foundProducts);
    }
}
function handleAddItem(ev) {
    ev.preventDefault();
    var title = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    var gender = ev.target.elements.title.value;
    var category = ev.target.elements.category.value;
    var pictureFront = ev.target.elements.pictureFront.value;
    var pictureBack = ev.target.elements.pictureBack.value;
    var color = ev.target.elements.color.value;
    var description = ev.target.elements.description.value;
    var shoeSize = ev.target.elements.shoeSize.valueAsNumber;
    Adidas.addItem(title, price, category, gender, pictureFront, pictureBack, color, description, shoeSize);
    var root = document.getElementById("rootOwner");
    Adidas.renderAllData(root);
    ev.target.reset(); //reset the form fileds
    // console.log(category);
    Adidas.setData();
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
    var newGender = ev.target.elements.newGender.value;
    var newCategory = ev.target.elements.newCategory.value;
    var newPictureFront = ev.target.elements.newPictureFront.value;
    var newPictureBack = ev.target.elements.newPictureBack.value;
    var newColor = ev.target.elements.newColor.value;
    var newDescription = ev.target.elements.newDescription.value;
    var newShoeSize = ev.target.elements.newShoeSize.valueAsNumber;
    var root = document.getElementById("rootOwner");
    Adidas.updateItem(itemId, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize);
    Adidas.renderAllData(root);
}
function handlePriceRange(ev) {
    var root = document.getElementById("rootCustomer");
    var priceLow = ev.target.valueAsNumber;
    var priceHigh = ev.target.valueAsNumber;
    if (priceLow && priceHigh) {
        // console.log(price) + `price`;
        var filterd = Adidas.filterItems(priceLow && priceHigh);
        console.log(filterd);
        Adidas.renderFilter(filterd, root);
    }
    else {
        this.renderAllData();
    }
}
function handleSort(ev) {
    ev.preventDefault();
    var sort = ev.target.value;
    var root = document.getElementById("rootCustomer");
    if (sort === "startPosition") {
        Adidas.renderAllData(root);
    }
    else if (sort === "priceAsc") {
        Adidas.sortItemsAsc();
        Adidas.renderAllData(root);
    }
    else if (sort === "priceDsc") {
        Adidas.sortItemsDsc();
        Adidas.renderAllData(root);
    }
    console.log(sort);
    Adidas.setData();
}
function handleType(ev) {
    var type = ev.target.value;
    ev.preventDefault();
    console.log(type);
    var root = document.getElementById("rootCustomer");
    if (type === "Sneakers") {
        console.log(type);
        Adidas.render(Adidas.sortByType(type), root);
        // Adidas.sortByType(type)
        //      Adidas.renderAllData(root);
        // Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else if (type === "Boots") {
        //   console.log(type);
        //  Adidas.sortByType(type)
        //    Adidas.renderAllData(root);
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else if (type === "Hi Tops") {
        //   console.log(type);
        //  Adidas.sortByType(type)
        //    Adidas.renderAllData(root);
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else if (type === "Flip Flops") {
        //   console.log(type);
        //  Adidas.sortByType(type)
        //    Adidas.renderAllData(root);
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    //  Adidas.sortByType(type)
    //  Adidas.renderAllData(root);
    // Adidas.renderFilter(Adidas.sortByType(type), root);
}
function handleColor(ev) {
    var color = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    // if(type === " ")
    return Adidas.renderFilter(Adidas.sortByColor(color), root);
}
function handleGender(ev) {
    var gender = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    if (gender === "men") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else if (gender === "women") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else if (gender === "unisex") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else {
        Adidas.renderAllData(root);
    }
}
function handleShoeSize(ev) {
    var size = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    if (size === "30") {
        console.log(size);
        Adidas.renderFilter(Adidas.shoeSizeFilter(size), root);
    }
    else if (size === "40") {
        console.log(size);
        Adidas.renderFilter(Adidas.shoeSizeFilter(size), root);
    }
    else if (size === "44") {
        console.log(size);
        Adidas.renderFilter(Adidas.shoeSizeFilter(size), root);
    }
}
function handleWishList(id) {
    //console.log(id);
    var root = document.getElementById("rootWish");
    Adidas.WishList(id);
    Adidas.renderAllWish(root);
}
function handleCart(id) {
    //console.log(id);
    var root = document.getElementById("rootCart");
    Adidas.Cart(id);
    Adidas.renderAllCart(root);
}
Adidas.addItem("superstar shoes", 300, "women", "Boots", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8953617284f4c47b613acbb011e74ee_9366/Supernova_Shoes_Black_S42722_02_standard.jpg", "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 40);
Adidas.addItem("superstar shoes", 100, "unisex", "Hi Tops", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
function handleGetData(page) {
    try {
        // console.log(page);
        Adidas.getData();
        // console.log(Adidas);
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
// function handleSetData(page: string) {
//   try {
//     console.log(page);
//     Adidas.setData();
//     console.log(Adidas);
//     if (page === "owner") {
//       const root = document.getElementById("rootOwner");
//       Adidas.renderAllData(root);
//     } else if (page === "customer") {
//       const root = document.getElementById("rootCustomer");
//       Adidas.renderAllData(root);
//     } else {
//       throw new Error(`page is not found (${page})`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
