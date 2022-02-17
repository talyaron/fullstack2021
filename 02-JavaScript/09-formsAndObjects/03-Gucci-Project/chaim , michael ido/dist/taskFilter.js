var itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var searchList;
(function (searchList) {
    searchList["Tshirts"] = "Tshirts";
    searchList["shoes"] = "Shoes";
    searchList["pants"] = "Pants";
})(searchList || (searchList = {}));
var clothsList = {
    Tshirts: [
        { id: "lala", brand: "allstains", size: "medium", price: 450 },
        { id: "lili", brand: "polo", size: "large", price: 220 },
        { id: "one", brand: "allstains", size: "medium", price: 150 },
        { id: "two", brand: "polo", size: "large", price: 250 },
    ],
    pants: [
        { id: "kaka", brand: "diesel", size: "42", price: 900 },
        { id: "lolo", brand: "levis", size: "41", price: 400 },
        { id: "four", brand: "zara", size: "34", price: 220 },
        { id: "three", brand: "zara", size: "38", price: 180 },
    ],
    shoes: [
        { id: "kuku", brand: "adidas", size: "42", price: 800 },
        { id: "lulu", brand: "nike", size: "42", price: 2100 },
        { id: "five", brand: "adidas", size: "45", price: 650 },
        { id: "six", brand: "nike", size: "45", price: 1500 },
    ],
    shoppingCart: [],
    addTshirt: function (brand, size, price, catagory) {
        var id = itemId();
        if (catagory == "Tshirts") {
            this.Tshirts.push({ id: id, brand: brand, size: size, price: price });
        }
    },
    addShoe: function (brand, size, price, catagory) {
        var id = itemId();
        if (catagory == "shoes") {
            this.shoes.push({ id: id, brand: brand, size: size, price: price });
        }
    },
    addPants: function (brand, size, price, catagory) {
        var id = itemId();
        if (catagory == "pants") {
            this.pants.push({ id: id, brand: brand, size: size, price: price });
        }
    },
    render: function (list, display, catagory) {
        var html = "";
        list.forEach(function (element) {
            html += "<div class=\"main_scrollmenu-box-card\"><h3 class=\"main_scrollmenu-box-card-head\">" + element.brand + " " + catagory + "</h3>\n            <p class=\"main_scrollmenu-box-card-para\"> Size : " + element.size + "</p>\n           <p class=\"main_scrollmenu-box-card-para\"> Price : " + element.price + " </p>\n           <button class=\"main_scrollmenu-box-card-btn\" onclick=\"deleteCard('" + element.id + "')\">Delete Item</button>\n           </div> ";
        });
        display.innerHTML = html;
    },
    renderTshirts: function (display, catagory) {
        this.render(this.Tshirts, display, catagory);
    },
    renderShoes: function (display, catagory) {
        this.render(this.shoes, display, catagory);
    },
    renderPants: function (display, catagory) {
        this.render(this.pants, display, catagory);
    },
    Sort: function (list, catagory, sortOption, display) {
        var sortedList;
        if (sortOption == "sortLowToHigh") {
            sortedList = list.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (sortOption == "sortHighToLow") {
            sortedList = list.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (sortOption == "sortAtoZ") {
            sortedList = list.sort(function (a, b) {
                return a.brand.toLowerCase() > b.brand.toLowerCase()
                    ? 1
                    : b.brand.toLowerCase() > a.brand.toLowerCase()
                        ? -1
                        : 0;
            });
        }
        else if (sortOption == "sortZtoA") {
            sortedList = list.sort(function (a, b) { return b.brand.toLowerCase() > a.brand.toLowerCase() ? 1
                : a.brand.toLowerCase() > b.brand.toLowerCase()
                    ? -1
                    : 0; });
        }
        this.render(sortedList, display, catagory);
    },
    SortTshirts: function (sortOption, display, catagory) {
        this.Sort(this.Tshirts, catagory, sortOption, display);
    },
    SortShoes: function (sortOption, display, catagory) {
        this.Sort(this.shoes, catagory, sortOption, display);
    },
    SortPants: function (sortOption, display, catagory) {
        this.Sort(this.pants, catagory, sortOption, display);
    },
    deleteItemTshirts: function (id) {
        this.Tshirts = this.Tshirts.filter(function (item) { return item.id !== id; });
    },
    deleteItemShoes: function (id) {
        this.shoes = this.shoes.filter(function (item) { return item.id !== id; });
    },
    deleteItemPants: function (id) {
        this.pants = this.pants.filter(function (item) { return item.id !== id; });
    },
    filterByBrand: function (list, filterBrandInput) {
        return list.filter(function (item) { return item.brand === filterBrandInput; });
    },
    renderByBrand: function (list, filterBrandInput, display, catagory) {
        var filteredByBrand = this.filterByBrand(list, filterBrandInput);
        this.render(filteredByBrand, display, catagory);
    },
    filterBySize: function (list, filterSizeInput) {
        return list.filter(function (item) { return item.size === filterSizeInput; });
    },
    renderBySize: function (list, filterSizeInput, display, catagory) {
        var filteredBySize = this.filterBySize(list, filterSizeInput);
        this.render(filteredBySize, display, catagory);
    },
    filterByPrice: function (list, filterPriceFromInput, filterPriceUpToInput) {
        return list.filter(function (item) { return filterPriceFromInput < item.price && item.price < filterPriceUpToInput; });
    },
    renderByPrice: function (list, filterPriceFromInput, filterPriceUpToInput, display, catagory) {
        var filteredByPrice = this.filterByPrice(list, filterPriceFromInput, filterPriceUpToInput);
        this.render(filteredByPrice, display, catagory);
    },
    storeDataTshirts: function () {
        localStorage.setItem("TshirtsData", JSON.stringify(this.Tshirts));
    },
    storeDataShoes: function () {
        localStorage.setItem("shoesData", JSON.stringify(this.shoes));
    },
    storeDataPants: function () {
        localStorage.setItem("pantsData", JSON.stringify(this.pants));
    },
    getDataTshirts: function () {
        this.Tshirts = JSON.parse(localStorage.getItem("TshirtsData"));
    },
    getDataShoes: function () {
        var shoes = JSON.parse(localStorage.getItem("shoesData"));
        if (shoes && Array.isArray(shoes)) {
            this.shoes = shoes;
        }
    },
    getDataPants: function () {
        this.pants = JSON.parse(localStorage.getItem("pantsData"));
    },
    renderCustomerPage: function (list, display, catagory, imgCard) {
        var html = "";
        list.forEach(function (element) {
            html += " \n                <div class=\"container_catagories-display-card\">\n                <div class=\"container_catagories-display-card-details\">\n                <h3 class=\"container_catagories-display-card-head\">" + element.brand + " " + catagory + "</h3>\n                <p class=\"container_catagories-display-card-para\"> Size : " + element.size + "</p>\n               <p class=\"container_catagories-display-card-para\"> Price : " + element.price + " </p>\n               <button class=\"container_catagories-display-card-btn\" name='" + catagory + "' onclick=\"addToCart(event ,'" + element.id + "')\">Add To Cart</button>\n               </div>\n               <div id=\"itemImg\" class=\"container_catagories-display-card-img\" style=\"background-image:url('" + imgCard + "')\"></div>\n               </div>\n                ";
        });
        display.innerHTML = html;
    }, SortCustomerPage: function (list, sortValue, display, catagory, imgCard) {
        var sortedListCustomer;
        if (sortValue == "sortLowToHigh") {
            sortedListCustomer = list.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (sortValue == "sortHighToLow") {
            sortedListCustomer = list.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (sortValue == "sortAtoZ") {
            sortedListCustomer = list.sort(function (a, b) {
                return a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : b.brand.toLowerCase() > a.brand.toLowerCase() ? -1 : 0;
            });
        }
        else if (sortValue == "sortZtoA") {
            sortedListCustomer = list.sort(function (a, b) { return b.brand.toLowerCase() > a.brand.toLowerCase() ? 1
                : a.brand.toLowerCase() > b.brand.toLowerCase() ? -1 : 0; });
        }
        this.renderCustomerPage(sortedListCustomer, display, catagory, imgCard);
    }, renderCustomerByBrand: function (list, inputBrand, display, catagory, imgCard) {
        var filteredByBrand = this.filterByBrand(list, inputBrand);
        this.renderCustomerPage(filteredByBrand, display, catagory, imgCard);
    }, renderCustomerBySize: function (list, inputSize, display, catagory, imgCard) {
        var filteredBySize = this.filterBySize(list, inputSize);
        this.renderCustomerPage(filteredBySize, display, catagory, imgCard);
    }, renderCustomerByPrice: function (list, inputFrom, inputUpTo, display, catagory, imgCard) {
        var filteredCustomerByPrice = this.filterByPrice(list, inputFrom, inputUpTo);
        this.renderCustomerPage(filteredCustomerByPrice, display, catagory, imgCard);
    }, addToCart: function (id, catagory) {
        var itemArr;
        var itemToCart;
        if (catagory == "Tshirts") {
            itemArr = this.Tshirts.filter(function (item) { return item.id == id; });
            itemToCart = itemArr[0];
            itemToCart.name = catagory;
        }
        else if (catagory == "shoes") {
            itemArr = this.shoes.filter(function (item) { return item.id == id; });
            itemToCart = itemArr[0];
            itemToCart.name = catagory;
        }
        else if (catagory == "pants") {
            itemArr = this.pants.filter(function (item) { return item.id == id; });
            itemToCart = itemArr[0];
            itemToCart.name = catagory;
        }
        this.shoppingCart.push(itemToCart);
        console.log(this.shoppingCart);
    }, renderShoppingCart: function (list, display, catagory) {
        var shoppingCartDisplay = document.querySelector('.container-shoppingCart');
        if (this.shoppingCart.length > 0) {
            shoppingCartDisplay.style.display = "grid";
        }
        else {
            shoppingCartDisplay.style.display = "none";
        }
        var html = "";
        list.forEach(function (item) {
            html += " \n            <div class=\"container-shoppingCart_display-item\">\n                <h1 class=\"container-shoppingCart_display-item-header\">" + item.brand + " " + item.name + "</h1>\n                <p class=\"container-shoppingCart_display-item-size\">size: " + item.size + "</p>\n                <p class=\"container-shoppingCart_display-item-price\">price: " + item.price + "</p>\n                <button class=\"container-shoppingCart_display-item-deleteBtn\" name=\"" + catagory + "\" id=\"" + item.id + "\" type=\"button\" onclick=\"deleteItemFromCart(event)\">remove</button>\n            </div>";
        });
        display.innerHTML = html;
    }, deleteItemFromShoppingCart: function (id) {
        this.shoppingCart = this.shoppingCart.filter(function (item) { return item.id !== id; });
    }, TotalCartPrice: function (display) {
        var sum = 0;
        this.shoppingCart.forEach(function (item) {
            sum += item.price;
        });
        display.textContent = "Total : " + sum;
    }, renderCartDropDown: function (display) {
        var html = '';
        this.shoppingCart.forEach(function (item) {
            html += "\n                <div class=\"container_header-dropDown-box-item\">\n                <h1 class=\"container_header-dropDown-box-item-header\">" + item.brand + " " + item.name + "</h1>\n                <p class=\"container_header-dropDown-box-item-size\">size: " + item.size + "</p>\n                <p class=\"container_header-dropDown-box-item-price\">price: " + item.price + "</p>\n                <button class=\"container_header-dropDown-box-item-deleteBtn\" lang=\"dropDown\" name=\"" + item.name + "\" id=\"" + item.id + "\" type=\"button\" onclick=\"deleteItemFromCart(event)\">remove</button>\n                </div>";
        });
        display.innerHTML = html;
    }
};
function display(ev) {
    ev.preventDefault();
    console.log(ev.target);
    // receiving inputs values ----------
    var catagory;
    var brand;
    var price;
    var size;
    var sortOption;
    var filterBrandInput;
    var filterPriceFromInput;
    var filterPriceUpToInput;
    var filterSizeInput;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== "submit") {
            if (field.name == "Catagory") {
                catagory = field.value;
            }
            else if (field.name == "inputBrand") {
                brand = field.value;
            }
            else if (field.name == "inputSize") {
                size = field.value;
            }
            else if (field.name == "inputPrice") {
                price = parseInt(field.value);
            }
            else if (field.name == "chooseSort") {
                sortOption = field.value;
            }
            else if (field.name == "selectFilterBrand") {
                filterBrandInput = field.value;
            }
            else if (field.name == "inputFilterPriceFrom") {
                filterPriceFromInput = field.value;
            }
            else if (field.name == "inputFilterPriceUpTo") {
                filterPriceUpToInput = field.value;
            }
            else if (field.name == "selectFilterSize") {
                filterSizeInput = field.value;
            }
        }
    }
    clothsList.getDataTshirts();
    clothsList.getDataShoes();
    clothsList.getDataPants();
    var sortOptions = document.querySelectorAll(".main_form-selectCatagory-sortOptions");
    var TshirtsBox = document.getElementById("TshirtsBox");
    var shoesBox = document.getElementById("shoesBox");
    var pantsBox = document.getElementById("pantsBox");
    // add function ---------------
    if (brand && size && price) {
        clothsList.addTshirt(brand, size, price, catagory);
        clothsList.addPants(brand, size, price, catagory);
        clothsList.addShoe(brand, size, price, catagory);
    }
    // display functions ------------
    clothsList.renderTshirts(TshirtsBox, "Tshirt");
    clothsList.renderShoes(shoesBox, "Shoes");
    clothsList.renderPants(pantsBox, "Pants");
    // sort function -------------
    if (sortOptions.length > 0) {
        if (catagory == "Tshirts") {
            clothsList.SortTshirts(sortOption, TshirtsBox, catagory);
        }
        else if (catagory == "shoes") {
            clothsList.SortShoes(sortOption, shoesBox, catagory);
        }
        else if (catagory == "pants") {
            clothsList.SortPants(sortOption, pantsBox, catagory);
        }
    }
    // filter by brand Size and Price-----------------------
    if (filterBrandInput) {
        if (catagory == "Tshirts") {
            clothsList.renderByBrand(clothsList.Tshirts, filterBrandInput, TshirtsBox, "Tshirts");
        }
        else if (catagory == "shoes") {
            clothsList.renderByBrand(clothsList.shoes, filterBrandInput, shoesBox, "shoes");
        }
        else if (catagory == "pants") {
            clothsList.renderByBrand(clothsList.pants, filterBrandInput, pantsBox, "pants");
        }
    }
    else if (filterSizeInput) {
        if (catagory == "Tshirts") {
            clothsList.renderBySize(clothsList.Tshirts, filterSizeInput, TshirtsBox, "Tshirts");
        }
        else if (catagory == "shoes") {
            clothsList.renderBySize(clothsList.shoes, filterSizeInput, shoesBox, "Shoes");
        }
        else if (catagory == "pants") {
            clothsList.renderBySize(clothsList.pants, filterSizeInput, pantsBox, "Pants");
        }
    }
    else if (filterPriceFromInput && filterPriceUpToInput) {
        if (catagory == "Tshirts") {
            clothsList.renderByPrice(clothsList.Tshirts, filterPriceFromInput, filterPriceUpToInput, TshirtsBox, "Tshirts");
        }
        else if (catagory == "shoes") {
            clothsList.renderByPrice(clothsList.shoes, filterPriceFromInput, filterPriceUpToInput, shoesBox, "Shoes");
        }
        else if (catagory == "pants") {
            clothsList.renderByPrice(clothsList.pants, filterPriceFromInput, filterPriceUpToInput, pantsBox, "Pants");
        }
    }
    setAlerts(catagory);
    // ev.target.reset()
}
// getting buttons vars ---------
var actionsBtns = document.querySelectorAll(".main_form-actions-btn");
var options = document.querySelector(".main_form-displayOptions");
// display options -------------
actionsBtns.forEach(function (btn) {
    btn.addEventListener("click", activeBtns);
});
function activeBtns(btn) {
    var id = btn.target.id;
    var html;
    if (id == "add") {
        html = "\n        <input class=\"main_add\" id=\"inputBrand\" name=\"inputBrand\" type=\"text\" placeholder=\"Brand\" required>\n        <input class=\"main_add\" id=\"inputSize\" name=\"inputSize\" type=\"text\" placeholder=\"Size\" required>\n        <input class=\"main_add\" id=\"inputPrice\" name=\"inputPrice\" type=\"text\" placeholder=\"Price\" required>";
    }
    else if (id == "sort") {
        html = " \n         <select class=\"main_form-selectCatagory\" name=\"chooseSort\" id=\"selectCatagory\">\n        <option class=\"main_form-selectCatagory-sortOptions\" disabled selected>Sort By</option>\n        <option class=\"main_form-selectCatagory-sortOptions\" value=\"sortAtoZ\">A ---> Z</option>\n        <option class=\"main_form-selectCatagory-sortOptions\" value=\"sortZtoA\">Z ---> A</option>\n        <option class=\"main_form-selectCatagory-sortOptions\" value=\"sortLowToHigh\">Price Low to High</option>\n        <option class=\"main_form-selectCatagory-sortOptions\" value=\"sortHighToLow\">Price High to Low</option>\n        </select> ";
    }
    else if (id == "filter") {
        html = "\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterBr and\" id=\"filterBrand\" value=\"By Brand\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterSize\" id=\"filterSize\" value=\"By Size\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterPrice\" id=\"filterPrice\" value=\"By Price\" > ";
    }
    options.innerHTML = html;
    var filterBtns = document.querySelectorAll(".main_form-filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", filterOptionsDisplay);
    });
}
// display filter options -----------------------
function filterOptionsDisplay(btn) {
    var id = btn.target.id;
    var html;
    if (id == "filterBrand") {
        html = "\n        <input type\"text\" class=\"main_form-filterInputs\" name=\"selectFilterBrand\" placeholder = \"type Brand\" required>";
    }
    else if (id == "filterSize") {
        html = "\n        <input type\"text\" class=\"main_form-filterInputs\" name=\"selectFilterSize\" placeholder = \"type size\" required>";
    }
    else if (id == "filterPrice") {
        html = "<input type=\"number\" class=\"main_form-selectCatagory-filterInputs\" name=\"inputFilterPriceFrom\" placeholder = \"From..\" required>\n        <input type=\"number\" class=\"main_form-selectCatagory-filterInputs\" name=\"inputFilterPriceUpTo\" placeholder = \"Up To..\" required>";
    }
    options.innerHTML = html;
}
function deleteCard(id) {
    var TshirtsBox = document.getElementById("TshirtsBox");
    var shoesBox = document.getElementById("shoesBox");
    var pantsBox = document.getElementById("pantsBox");
    clothsList.deleteItemTshirts(id);
    clothsList.deleteItemShoes(id);
    clothsList.deleteItemPants(id);
    clothsList.renderTshirts(TshirtsBox, "Tshirt");
    clothsList.renderShoes(shoesBox, "Shoes");
    clothsList.renderPants(pantsBox, "Pants");
}
function setAlerts(catagory) {
    if (catagory == "empty") {
        alert("You Must Choose Catagory");
    }
}
function SaveInLocalStorage() {
    clothsList.storeDataTshirts();
    clothsList.storeDataShoes();
    clothsList.storeDataPants();
}
// customer page --------------------------------------
function set_timeImgs() {
    setInterval(changingImgsBox, 2500);
}
var count = 1;
function changingImgsBox() {
    var ImgsBox = document.getElementById("ImgsBox");
    var background;
    if (count == 1) {
        background = "url(https://s18670.pcdn.co/wp-content/uploads/Top-20-Teacher-T-Shirts-on-Etsy.png)";
    }
    else if (count == 2) {
        background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrhcOcZCZbfuu4U9-6j0d66_c8hEInD5rvW0arp8TU9D9eR6cziUe3TFP0rw4AkoShM0&usqp=CAU)";
    }
    else if (count == 3) {
        background = "url(https://a.espncdn.com/photo/2019/0715/Sneaker%20Center.jpg)";
    }
    else {
        count = 0;
    }
    ImgsBox.style.backgroundImage = background;
    count++;
}
var catagoriesBoxes = document.querySelectorAll(".container_catagories-box");
catagoriesBoxes.forEach(function (box) {
    var boxId = box.id;
    box.addEventListener("click", function (ev) { showOptions(ev, boxId); });
});
function showOptions(box, boxId) {
    var html = "\n    <select class=\"container-select\" name=\"chooseSort\" id=\"" + boxId + "\" onchange=\"handleSort(event)\">\n   <option class=\"\"container-select-Options\" disabled selected>Sort By</option>\n   <option class=\"\"container-select-Options\" value=\"sortAtoZ\">A ---> Z</option>\n   <option class=\"\"container-select-Options\" value=\"sortZtoA\">Z ---> A</option>\n   <option class=\"\"container-select-Options\" value=\"sortLowToHigh\">$ Low to High $</option>\n   <option class=\"\"container-select-Options\" value=\"sortHighToLow\">$ High to Low $</option>\n   </select>   \n   <select class=\"container-select\" name=\"chooseFilter\" id=\"" + boxId + "\" onchange=\"handleFilter(event)\">\n   <option class=\"main_form-select-Options\" disabled selected>Filter By</option>\n   <option class=\"main_form-select-Options\" id=\"filterBrandOption\" value=\"brand\">Brand</option>\n   <option class=\"main_form-select-Options\" id=\"filterSizeOption\" value=\"size\">Size</option>\n   <option class=\"main_form-select-Options\" id=\"filterPriceOption\" value=\"price\">Price</option>\n   </select> ";
    // const cardImg = document.getElementById('itemImg')
    var sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    var sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    var sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");
    var display = document.querySelector(".container_catagories-display");
    var id = box.target.id;
    if (id == "Tshirts") {
        sortANDfilterBtnsPants.innerHTML = "";
        sortANDfilterBtnsShoes.innerHTML = "";
        clothsList.getDataTshirts();
        sortANDfilterBtnsTshirts.innerHTML = html;
        clothsList.renderCustomerPage(clothsList.Tshirts, display, id, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
    }
    else if (id == "shoes") {
        sortANDfilterBtnsPants.innerHTML = "";
        sortANDfilterBtnsTshirts.innerHTML = "";
        clothsList.getDataShoes();
        clothsList.renderCustomerPage(clothsList.shoes, display, id, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
        sortANDfilterBtnsShoes.innerHTML = html;
    }
    else if (id == "pants") {
        sortANDfilterBtnsTshirts.innerHTML = "";
        sortANDfilterBtnsShoes.innerHTML = "";
        clothsList.getDataPants();
        clothsList.renderCustomerPage(clothsList.pants, display, id, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
        sortANDfilterBtnsPants.innerHTML = html;
    }
}
function handleSort(ev) {
    var sortValue = ev.target.value;
    var boxId = ev.target.id;
    var display = document.querySelector(".container_catagories-display");
    if (boxId == "Tshirts") {
        clothsList.SortCustomerPage(clothsList.Tshirts, sortValue, display, boxId, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
    }
    else if (boxId == "shoes") {
        clothsList.SortCustomerPage(clothsList.shoes, sortValue, display, boxId, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
    }
    else if (boxId == "pants") {
        clothsList.SortCustomerPage(clothsList.pants, sortValue, display, boxId, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
    }
}
// showing filter input options
function handleFilter(ev) {
    var boxId = ev.target.id;
    var filterBy = ev.target.value;
    var sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    var sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    var sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");
    if (boxId == "Tshirts") {
        if (filterBy == "brand") {
            sortANDfilterBtnsTshirts.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputBrand\" placeholder=\"type brand...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
        else if (filterBy == "size") {
            sortANDfilterBtnsTshirts.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputSize\" placeholder=\"type size...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
        else if (filterBy == "price") {
            sortANDfilterBtnsTshirts.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputFrom\" placeholder=\"From...\" required>\n            <input class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputUpTo\" placeholder=\"Up to...\" required >\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>\n            ";
        }
    }
    else if (boxId == "shoes") {
        if (filterBy == "brand") {
            sortANDfilterBtnsShoes.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputBrand\" placeholder=\"type brand...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>\n            ";
        }
        else if (filterBy == "size") {
            sortANDfilterBtnsShoes.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputSize\" placeholder=\"type size...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
        else if (filterBy == "price") {
            sortANDfilterBtnsShoes.innerHTML = "\n            <form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputFrom\" placeholder=\"From...\" required>\n            <input class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputUpTo\" placeholder=\"Up to...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
    }
    else if (boxId == "pants") {
        if (filterBy == "brand") {
            sortANDfilterBtnsPants.innerHTML = "<form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputBrand\" placeholder=\"type brand...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
        else if (filterBy == "size") {
            sortANDfilterBtnsPants.innerHTML = "<form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input  class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"text\" id=\"" + boxId + "\" name=\"inputSize\" placeholder=\"type brand...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
        else if (filterBy == "price") {
            sortANDfilterBtnsPants.innerHTML = "<form class=\"container_sortANDfilterBtns-box_form\" onsubmit=\"displayFilter(event)\">\n            <input class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputFrom\" placeholder=\"From...\" required>\n            <input class=\"container_sortANDfilterBtns-box_form-filterInput\" type=\"number\" id=\"" + boxId + "\" name=\"inputUpTo\" placeholder=\"Up to...\" required>\n            <button class=\"container_sortANDfilterBtns-box_form-submit\" type=\"submit\">Filter</button></form>";
        }
    }
}
// display after filtered
function displayFilter(ev) {
    ev.preventDefault();
    var display = document.querySelector('.container_catagories-display');
    // const filterType = ev.target.name;
    // const InputFilterValue = ev.target.value;
    var boxId;
    var inputFrom;
    var inputUpTo;
    var inputBrand;
    var inputSize;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name == "inputFrom") {
            inputFrom = field.value;
            boxId = field.id;
        }
        else if (field.name == "inputUpTo") {
            inputUpTo = field.value;
            boxId = field.id;
        }
        else if (field.name == "inputBrand") {
            inputBrand = field.value;
            boxId = field.id;
        }
        else if (field.name == "inputSize") {
            inputSize = field.value;
            boxId = field.id;
        }
    }
    if (boxId == "Tshirts") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.Tshirts, inputBrand, display, boxId, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
        }
        else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.Tshirts, inputSize, display, boxId, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
        }
        else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.Tshirts, inputFrom, inputUpTo, display, boxId, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
        }
    }
    else if (boxId == "shoes") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.shoes, inputBrand, display, boxId, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
        }
        else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.shoes, inputSize, display, boxId, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
        }
        else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.shoes, inputFrom, inputUpTo, display, boxId, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
        }
    }
    else if (boxId == "pants") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.pants, inputBrand, display, boxId, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
        }
        else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.pants, inputSize, display, boxId, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
        }
        else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.pants, inputFrom, inputUpTo, display, boxId, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
        }
    }
}
function addToCart(ev, id) {
    var displayTotal = document.querySelector('.totalCart');
    var display = document.querySelector('.container-shoppingCart_display');
    var catagory = ev.target.name;
    clothsList.addToCart(id, catagory);
    clothsList.renderShoppingCart(clothsList.shoppingCart, display, catagory);
    clothsList.TotalCartPrice(displayTotal);
}
function showDropDown(ev) {
    var dropDownDisplay = document.querySelector('.container_header-dropDown');
    var id = ev.target.id;
    var html = '';
    var htmlCart;
    if (id == "notificationsBtn") {
        html = "<div id=\"notifications\" class=\"container_header-dropDown-box notifications\" \">\n        <p style=\"font-size: 12px; font-weight:1000;height:200%;\">No new notifications</p>\n     </div> ";
    }
    else if (id == "signInBtn") {
        html = "<div id=\"signIn\" class=\"container_header-dropDown-box signIn\">\n        <input class=\"container_header-dropDown-box-signInInput\" type=\"email\" name=\"UserName\" id=\"userName\" placeholder=\"User Name\" >\n        <input class=\"container_header-dropDown-box-signInInput\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\">\n        <button type=\"button\" class=\"container_header-dropDown-box-signInInput-btn\">Sign In</button>\n    </div>";
    }
    else if (id == "yourOrdersBtn") {
        html = "<div id=\"yourOrders\" class=\"container_header-dropDown-box yourOrders\">\n        <p style=\"font-size: 12px;font-weight:bold\">No Orders yet...</p>\n       </div>";
    }
    else if (id == "shoppingCartBtn") {
        html = '<div id="shoppingCart" class="container_header-dropDown-box shoppingCart">Your cart is empty..</div>';
    }
    dropDownDisplay.innerHTML = html;
    if (id == "shoppingCartBtn") {
        var dropDownCart = document.querySelector('.shoppingCart');
        clothsList.renderCartDropDown(dropDownCart);
    }
}
function deleteItemFromCart(ev) {
    var displayShoppingCart = document.querySelector('.container-shoppingCart_display');
    var dropDownCart = document.querySelector('.shoppingCart');
    var displayTotal = document.querySelector('.totalCart');
    var catagory = ev.target.name;
    var id = ev.target.id;
    var lang = ev.target.lang;
    console.log(lang);
    clothsList.deleteItemFromShoppingCart(id);
    displayShoppingCart.innerHTML = '';
    console.log(clothsList.shoppingCart);
    clothsList.renderShoppingCart(clothsList.shoppingCart, displayShoppingCart, catagory);
    if (lang == "dropDown") {
        clothsList.renderCartDropDown(dropDownCart);
    }
    clothsList.TotalCartPrice(displayTotal);
}
function creatDataList() {
    var dataList = document.querySelector('.container_header-search-dataList');
    dataList.innerHTML = "\n    <option class=\"container_header-search-dataList-options\" value=\"" + searchList.Tshirts + "\"></option>\n    <option class=\"container_header-search-dataList-options\" value=\"" + searchList.shoes + "\"></option>\n    <option class=\"container_header-search-dataList-options\" value=\"" + searchList.pants + "\"></option>";
}
creatDataList();
document.querySelector('.container_header-search-input').addEventListener('change', scrollPage);
function scrollPage(ev) {
    ev.preventDefault();
    var itemMenu = document.querySelector('.container-imgsBox');
    var display = document.querySelector('.container_catagories-display');
    console.log(itemMenu);
    var value = ev.target.value;
    console.log(value);
    itemMenu.scrollTop += 50;
    switch (value) {
        case 'Tshirts':
            clothsList.renderCustomerPage(clothsList.Tshirts, display, value, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg");
            break;
        case 'Shoes':
            clothsList.renderCustomerPage(clothsList.shoes, display, value, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
            break;
        case 'Pants':
            clothsList.renderCustomerPage(clothsList.pants, display, value, "https://assets.ajio.com/medias/sys_master/root/h89/hbe/13459792265246/-473Wx593H-440995277-olive-MODEL2.jpg");
            break;
    }
}
function thankYou() {
    var shoppingCartDisplay = document.querySelector('.container-shoppingCart');
    shoppingCartDisplay.innerHTML = '<p style="width:100vw;text-align:center;font-size:30px">Thank you for your order</p>';
}
