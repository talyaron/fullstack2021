// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// interface shop {
//   id?: number;
//   products: Array<product>;
//   wishlistArr: Array<any>;
//   cartArr: Array<any>;
//   addItem(
//     title: string,
//     price: number,
//     gender: string,
//     category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops",
//     pictureFront: string,
//     pictureBack: string,
//     color: string,
//     description: string,
//     shoeSize: number
//   );
//   deleteItem(id: number);
//   render(list: Array<product>, domElement: any);
//   renderWish(list: Array<product>, domElement: any);
//   renderCart(list: Array<product>, domElement: any);
//   renderAllData(domElement: any);
//   renderAllWish(domElement);
//   renderAllCart(domElement);
//   deleteItem(id: number);
//   updateItem(
//     id: number,
//     newTitle: string,
//     newPrice: number,
//     newGender: string,
//     newCategory: string,
//     newPictureFront: string,
//     newPictureBack: string,
//     newColor: string,
//     newDescription: string,
//     newShoeSize: number
//   );
//   shoeSizeFilter(size);
//   sortItemsAsc();
//   sortItemsDsc();
//   sortByGender(item);
//   sortByColor(color);
//   sortByType(type);
//   filterItems(highPrice?: number, lowPrice?: number);
//   renderFilter(filterd: Array<product>, domElement);
//   getData();
//   setData();
//   WishList(id);
//   Cart(id);
//   shoeRender(id);
// }
// interface product {
//   id: number;
//   title: string;
//   price: number;
//   gender: string;
//   category: "Sneakers" | "Boots" | "Hi Tops" | "Flip Flops";
//   pictureFront: string;
//   pictureBack: string;
//   color: string;
//   description: string;
//   shoeSize: number;
// }
// const Adidas: shop = {
//   // id:0,
//   products: [],
//   wishlistArr: [],
//   cartArr: [],
//   getData() {
//     const products = JSON.parse(localStorage.getItem("Adidas"));
//     if (products) {
//       this.products = products;
//     }
//   },
//   setData() {
//     localStorage.setItem("Adidas", JSON.stringify(this.products));
//   },
//   addItem(
//     title,
//     price,
//     gender,
//     category,
//     pictureFront,
//     pictureBack,
//     color,
//     description,
//     shoeSize
//   ) {
//     const id = uid();
//     this.getData();
//     this.products.push({
//       id,
//       title,
//       price,
//       gender,
//       category,
//       pictureFront,
//       pictureBack,
//       color,
//       description,
//       shoeSize,
//     });
//     this.setData();
//   },
//   deleteItem(id) {
//     this.products = this.products.filter((product) => product.id !== id);
//     this.setData();
//   },
function render(list, domElement) {
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
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <i class=\"far fa-heart\"  onclick=\"handleWishList('" + product.id + "')\"></i>\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"color\">\n      <p><b> Color: </b> " + product.color + "</p>\n      </div>\n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          <p>" + product.description + "</p>\n          <p>" + product.price + "\u20AA</p> \n      </div>;\n\n      <form onsubmit=\"handleUpdate(event, '" + product.id + "')\">\n      <input type=\"text\" name=\"newTitle\" placeholder=\"new title\" value=\"" + product.title + "\">\n      <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" value=\"" + product.price + "\">\n      <input type=\"text\" name=\"newCategory\" placeholder=\"new category\" value=\"" + product.category + "\">\n      <input type=\"text\" name=\"newPictureFront\" placeholder=\"new picture front\" value=\"" + product.pictureFront + "\">\n      <input type=\"text\" name=\"newPictureBack\" placeholder=\"new picture back\" value=\"" + product.pictureBack + "\">\n      <input type=\"text\" name=\"newColor\" placeholder=\"new color\" value=\"" + product.color + "\">\n      <input type=\"text\" name=\"newGender\" placeholder=\"new gender\" value=\"" + product.gender + "\">\n      <input type=\"text\" name=\"newDescription\" placeholder=\"new description\" value=\"" + product.description + "\">\n      <input type=\"number\" name=\"newShoeSize\" placeholder=\"new shoeSize\" value=\"" + product.shoeSize + "\">\n      <button type=\"submit\">Update</button>\n      </form>\n\n      <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n          </div>   ";
        }
    });
    // const button = document.getElementById("button");
    //console.log(button);
    domElement.innerHTML = html;
}
function renderWish(list, domElement) {
    //onsole.log(list);
    var html = "";
    this.wishlistArr.forEach(function (product) {
        html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
    });
    domElement.innerHTML = html;
}
function renderCart(list, domElement) {
    //console.log(list);
    var html = "";
    this.cartArr.forEach(function (product) {
        html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
    });
    domElement.innerHTML = html;
}
//   updateItem(
//     id,
//     newTitle,
//     newPrice,
//     newGender,
//     newCategory,
//     newPictureFront,
//     newPictureBack,
//     newColor,
//     newDescription,
//     newShoeSize
//   ) {
//     const index = this.products.findIndex((product) => product.id === id);
//     if (index >= 0) {
//       this.products[index].title = newTitle;
//       this.products[index].price = newPrice;
//       this.products[index].gender = newGender;
//       this.products[index].category = newCategory;
//       this.products[index].pictureFront = newPictureFront;
//       this.products[index].pictureBack = newPictureBack;
//       this.products[index].color = newColor;
//       this.products[index].description = newDescription;
//       this.products[index].shoeSize = newShoeSize;
//       console.log(index);
//       this.setData();
//     }
//   },
function renderAllData(domElement) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            this.render(this.products, domElement);
            return [2 /*return*/];
        });
    });
}
function renderAllWish(domElement) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            this.renderWish(this.wishlistArr, domElement);
            return [2 /*return*/];
        });
    });
}
function renderAllCart(domElement) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            this.renderCart(this.cartArr, domElement);
            return [2 /*return*/];
        });
    });
}
//   filterItems(highPrice, lowPrice) {
//     return this.products.filter(
//       (item) => item.price >= lowPrice && item.price <= highPrice
//     );
//   },
//   shoeSizeFilter(size) {
//     return (this.products = this.products.filter(
//       (item) => item.shoeSize === size
//     ));
//   },
//   sortItemsAsc() {
//     this.products.sort((x, y) => y.price - x.price);
//   },
//   sortItemsDsc() {
//     this.products.sort((x, y) => x.price - y.price);
//   },
//   sortByGender(item) {
//     return this.products.filter(
//       (element) => element.gender === item
//     );
//   },
//   sortByColor(color) {
//     return this.products.filter(
//       (element) => element.color === color
//     );
//   },
//   sortByType(category) {
//     return this.products.filter(
//       (element) => element.category === category
//     );
//   },
//   renderFilter(filterd, domElement) {
//     // console.log(filterd);
//     this.render(filterd, domElement);
//   },
//   WishList(id) {
//     const index = this.products.findIndex((product) => product.id === id);
//     //console.log(`The index:${index}.`)
//     //console.log(`The id: ${id}.`)
//     let item;
//     item = Adidas.products[index];
//     this.wishlistArr.push(item);
//   },
//   Cart(id) {
//     const index = this.products.findIndex((product) => product.id === id);
//     let item;
//     item = Adidas.products[index];
//     this.cartArr.push(item);
//   },
//   shoeRender(id) {
//     const index = this.products.findIndex((product) => product.id === id);
//     //console.log(`The index:${index}.`)
//     //console.log(`The id: ${id}.`)
//     let item;
//     item = Adidas.products[index];
//     this.wishlistArr.push(item);
//     console.log(Adidas.wishlistArr);
//   },
// };
// function handleSearchProduct(ev) {
//   const search = ev.target.value;
//   const regex = new RegExp(search, "i");
//   const root = document.getElementById("rootSearch");
//   root.innerHTML = "";
//   if (search.length > 0) {
//     const foundProducts = Adidas.products.filter((product) => {
//       if (regex.test(product.title)) return true;
//     });
//     const html = foundProducts
//       .map((product) => {
//         return `<p>${product.title}</p>`;
//       })
//       .join("");
//     root.innerHTML = html;
//     console.log(foundProducts);
//   }
// }
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
console.log("start");
getAllData();
console.log("end");
function getAllData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-all-products")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    data.renderAllData(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddItem(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, price, gender, category, pictureFront, pictureBack, color, description, shoeSize, data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    price = ev.target.elements.price.valueAsNumber;
                    gender = ev.target.elements.title.value;
                    category = ev.target.elements.category.value;
                    pictureFront = ev.target.elements.pictureFront.value;
                    pictureBack = ev.target.elements.pictureBack.value;
                    color = ev.target.elements.color.value;
                    description = ev.target.elements.description.value;
                    shoeSize = ev.target.elements.shoeSize.valueAsNumber;
                    return [4 /*yield*/, axios.post("/add-shoes", { title: title, price: price, gender: gender, category: category, pictureFront: pictureFront, pictureBack: pictureBack, color: color, description: description, shoeSize: shoeSize })];
                case 1:
                    data = (_a.sent()).data;
                    root = document.getElementById("rootOwner");
                    data.renderAllData(root);
                    ev.target.reset(); //reset the form fileds
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById("rootOwner");
    Adidas.deleteItem(id);
    Adidas.renderAllData(root);
}
function handleUpdate(ev, itemId) {
    return __awaiter(this, void 0, void 0, function () {
        var newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize, data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    newTitle = ev.target.elements.newTitle.value;
                    newPrice = ev.target.elements.newPrice.valueAsNumber;
                    newGender = ev.target.elements.newGender.value;
                    newCategory = ev.target.elements.newCategory.value;
                    newPictureFront = ev.target.elements.newPictureFront.value;
                    newPictureBack = ev.target.elements.newPictureBack.value;
                    newColor = ev.target.elements.newColor.value;
                    newDescription = ev.target.elements.newDescription.value;
                    newShoeSize = ev.target.elements.newShoeSize.valueAsNumber;
                    return [4 /*yield*/, axios.post("/add-shoes", { newTitle: newTitle, newPrice: newPrice, newGender: newGender, newCategory: newCategory, newPictureFront: newPictureFront, newPictureBack: newPictureBack, newColor: newColor, newDescription: newDescription, newShoeSize: newShoeSize })];
                case 1:
                    data = (_a.sent()).data;
                    root = document.getElementById("rootOwner");
                    data.renderAllData(root);
                    return [2 /*return*/];
            }
        });
    });
}
function handleSort(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var sort, data, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    sort = ev.target.value;
                    return [4 /*yield*/, axios.get("/get-all-data")];
                case 1:
                    data = (_a.sent()).data;
                    root = document.getElementById("rootCustomer");
                    if (sort === "priceAsc") {
                        Adidas.sortItemsAsc();
                        Adidas.renderAllData(root);
                    }
                    else if (sort === "priceDsc") {
                        Adidas.sortItemsDsc();
                        Adidas.renderAllData(root);
                    }
                    else {
                        Adidas.renderAllData(root);
                    }
                    console.log(sort);
                    Adidas.setData();
                    return [2 /*return*/];
            }
        });
    });
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
    else {
        Adidas.renderAllData(root);
    }
    //  Adidas.sortByType(type)
    //  Adidas.renderAllData(root);
    // Adidas.renderFilter(Adidas.sortByType(type), root);
}
function handleColor(ev) {
    var color = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    if (color === "red") {
        return Adidas.renderFilter(Adidas.sortByColor(color), root);
    }
    else if (color === "blue") {
        return Adidas.renderFilter(Adidas.sortByColor(color), root);
    }
    else {
        Adidas.renderAllData(root);
    }
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
Adidas.addItem("superstar shoes", 100, "unisex", "Hi Tops", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086956_x-speedflow1-messi-firm-ground-boots_fy6879_top-portrait-view.jpeg", "https://st-adidas-isr.mncdn.com/content/images/thumbs/0086954_x-speedflow1-messi-firm-ground-boots_fy6879_side-lateral-center-view.jpeg", "blue", "B-ball legend. Street symbol. Cultural icon. Still going strong after five decades, the adidas Superstar Shoes have millions of stories to tell. Smooth leather combines with serrated 3-Stripes and the authentic rubber shell toe. Ready for the next fifty years of iconic adidas style? Lets do it.", 44);
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
