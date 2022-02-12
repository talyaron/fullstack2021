var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    // id:0,
    products: [],
    // wishList: [],
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
        this.getData();
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
        console.log(list);
        var html = "";
        this.products.forEach(function (product) {
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <i class=\"far fa-heart\" id=\"\" onclick=\"handleFindIndex(id)\"></i>\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"color\">\n      <p><b> Color: </b> " + product.color + "</p>\n      </div>\n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          <p>" + product.description + "</p>\n          <p>" + product.price + "\u20AA</p> \n      </div>\n          </div>   ";
            console.log("render");
        });
        // const button = document.getElementById("button");
        // console.log(button);
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
    },
    filterItems: function (highPrice, lowPrice) {
        return this.products.filter(function (item) { return item.price >= lowPrice && item.price <= highPrice; });
    },
    shoeSizeFilter: function (size) {
        return this.products.filter(function (item) { return item.size === size; });
    },
    sortItemsAsc: function () {
        this.products.sort(function (x, y) { return y.price - x.price; });
    },
    sortItemsDsc: function () {
        this.products.sort(function (x, y) { return x.price - y.price; });
    },
    sortByGender: function (item) {
        return this.products.filter(function (element) { return element.gender === item; });
    },
    sortByColor: function (color) {
        return this.products.filter(function (element) { return element.color === color; });
    },
    sortByType: function (category) {
        return this.products.filter(function (element) { return element.category === category; });
    },
    renderFilter: function (domElement, filterd) {
        this.render(domElement, filterd);
    },
    // addWishList(id){
    //     const index = this.products.findIndex((product) => product.id === id);
    //     if (index >= 0) {
    //       console.log(index);
    //       this.setData();
    //     }
    // },
    FindIndex: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index >= 0) {
            console.log(index);
            this.setData();
        }
    }
};
// function HandleWishList(ev) {
// const wish = ev.target.value;
// Adidas.addWishList()
// }
function handleFindIndex(id) {
    var index = this.products.findIndex(function (product) { return product.id === id; });
    if (index >= 0) {
        console.log(index);
        this.setData();
    }
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
    function handlePriceRange(ev) {
        var root = document.getElementById("rootCart");
        var priceLow = ev.target.valueAsNumber;
        var priceHigh = ev.target.valueAsNumber;
        if (priceLow && priceHigh) {
            // console.log(price) + `price`;
            var filterd = Adidas.filterItems(priceLow && priceHigh);
            console.log(filterd);
            Adidas.renderFilter(root, filterd);
        }
        else {
            this.renderAll();
        }
    }
    function handleSort(ev) {
        var sort = ev.target.value;
        ev.preventDefault();
        var root = document.getElementById("rootCards");
        if (sort === ev.target.value.priceAsc) {
            Adidas.renderAllData(this.sortItemsAsc(root));
        }
        else if (sort === ev.target.value.priceDsc) {
            Adidas.renderAllData(this.sortItemsDsc(root));
        }
        else if (sort === ev.target.value.startPosition) {
            ev.target.reset();
        }
        console.log(sort);
        this.setData();
    }
    function handleType(ev) {
        var type = ev.target.value;
        ev.preventDefault();
        var root = document.getElementById("rootCards");
        // if(type === " ")
        return Adidas.renderFilter(root, Adidas.sortByType(type));
    }
    function handleColor(ev) {
        var color = ev.target.value;
        ev.preventDefault();
        var root = document.getElementById("rootCards");
        // if(type === " ")
        return Adidas.renderFilter(root, Adidas.sortByColor(color));
    }
    function handleGender(ev) {
        var gender = ev.target.value;
        ev.preventDefault();
        var root = document.getElementById("rootCards");
        // if(type === " ")
        return Adidas.renderFilter(root, Adidas.sortByGender(gender));
    }
    function handleShoeSize(ev) {
        var size = ev.target.value;
        ev.preventDefault();
        var root = document.getElementById("rootCards");
        Adidas.renderFilter(root, Adidas.shoeSizeFilter(size));
        // if(type === " ")
        //Adidas.shoeSizeFilter(size);
    }
    Adidas.addItem("superstar shoes", 200, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
    Adidas.addItem("superstar shoes", 300, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0002509_superstar-shoes_eg4957_side-lateral-center-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
    Adidas.addItem("superstar shoes", 100, "Sneakers", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", "red", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
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
                var root = document.getElementById("rootCards");
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
    //       const root = document.getElementById("rootCards");
    //       Adidas.renderAllData(root);
    //     } else {
    //       throw new Error(`page is not found (${page})`);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
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
//       const root = document.getElementById("rootCards");
//       Adidas.renderAllData(root);
//     } else {
//       throw new Error(`page is not found (${page})`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
