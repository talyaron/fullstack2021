var itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
// { brand: 'nike', size: ' medium', price: 450 }, { brand: 'adidas', size: ' medium', price: 220 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }
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
            console.log(this);
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
            sortedList = list.sort(function (a, b) {
                return b.brand.toLowerCase() > a.brand.toLowerCase()
                    ? 1
                    : a.brand.toLowerCase() > b.brand.toLowerCase()
                        ? -1
                        : 0;
            });
        }
        console.log(sortedList);
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
        console.log(filteredBySize);
        this.render(filteredBySize, display, catagory);
    },
    filterByPrice: function (list, filterPriceFromInput, filterPriceUpToInput) {
        return list.filter(function (item) {
            return filterPriceFromInput < item.price && item.price < filterPriceUpToInput;
        });
    },
    renderByPrice: function (list, filterPriceFromInput, filterPriceUpToInput, display, catagory) {
        var filteredByPrice = this.filterByPrice(list, filterPriceFromInput, filterPriceUpToInput);
        console.log(filteredByPrice);
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
    renderCustomerPage: function (list, display, catagory) {
        var html = "";
        list.forEach(function (element) {
            html += " \n                <div class=\"container_catagories-display-card\">\n                <div class=\"container_catagories-display-card-details\">\n                <h3 class=\"container_catagories-display-card-head\">" + element.brand + " " + catagory + "</h3>\n                <p class=\"container_catagories-display-card-para\"> Size : " + element.size + "</p>\n               <p class=\"container_catagories-display-card-para\"> Price : " + element.price + " </p>\n               <button class=\"container_catagories-display-card-btn\" onclick=\"addToCart('" + element.id + "')\">Add To Cart</button>\n               </div>\n               <div id=\"itemImg\" class=\"container_catagories-display-card-img\"></div>\n               </div>\n                ";
        });
        display.innerHTML = html;
    },
    renderCustomerPageTshirts: function (display, catagory) {
        this.renderCustomerPage(display, catagory);
    },
    renderCustomerPageShoes: function (display, catagory) {
        this.renderCustomerPage(display, catagory);
    },
    renderCustomerPagePants: function (display, catagory) {
        this.renderCustomerPage(display, catagory);
    }, SortCustomerPage: function (list, sortValue, display, catagory) {
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
        this.renderCustomerPage(sortedListCustomer, display, catagory);
    }
};
function display(ev) {
    ev.preventDefault();
    // console.log(ev.target);
    // receiving inputs values ----------
    // console.log(clothsList.Tshirts);
    console.log(clothsList.Tshirts);
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
    console.log(sortOption);
    // console.log(filterPriceFromInput);
    // console.log(filterPriceUpToInput);
    var sortOptions = document.querySelectorAll(".main_form-selectCatagory-sortOptions");
    var TshirtsBox = document.getElementById("TshirtsBox");
    var shoesBox = document.getElementById("shoesBox");
    var pantsBox = document.getElementById("pantsBox");
    // clothsList.renderBySize(clothsList.Tshirts, filterSizeInput, TshirtsBox, "Tshirts")
    // console.log(clothsList.renderBySize(clothsList.Tshirts, filterSizeInput, TshirtsBox, "Tshirts"))
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
        console.log("lala");
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
        html = "\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterBrand\" id=\"filterBrand\" value=\"By Brand\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterSize\" id=\"filterSize\" value=\"By Size\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterPrice\" id=\"filterPrice\" value=\"By Price\" > ";
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
    // console.log(id);
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
    console.log(id);
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
        background =
            "url(https://s18670.pcdn.co/wp-content/uploads/Top-20-Teacher-T-Shirts-on-Etsy.png)";
    }
    else if (count == 2) {
        background =
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrhcOcZCZbfuu4U9-6j0d66_c8hEInD5rvW0arp8TU9D9eR6cziUe3TFP0rw4AkoShM0&usqp=CAU)";
    }
    else if (count == 3) {
        background =
            "url(https://a.espncdn.com/photo/2019/0715/Sneaker%20Center.jpg)";
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
    var html = "\n    <select class=\"container-select\" name=\"chooseSort\" id=\"" + boxId + "\" onchange=\"handleSort(event)\">\n   <option class=\"\"container-select-Options\" disabled selected>Sort By</option>\n   <option class=\"\"container-select-Options\" value=\"sortAtoZ\">A ---> Z</option>\n   <option class=\"\"container-select-Options\" value=\"sortZtoA\">Z ---> A</option>\n   <option class=\"\"container-select-Options\" value=\"sortLowToHigh\">$ Low to High $</option>\n   <option class=\"\"container-select-Options\" value=\"sortHighToLow\">$ High to Low $</option>\n   </select>   \n   <select class=\"container-select\" name=\"chooseFilter\" id=\"" + boxId + "\" onchange=\"handleFilter(event)\">\n   <option class=\"main_form-select-Options\" disabled selected>Filter By</option>\n   <option class=\"main_form-select-Options\" value=\"brand\">Brand</option>\n   <option class=\"main_form-select-Options\" value=\"size\" >Size</option>\n   <option class=\"main_form-select-Options\" value=\"price\">Price</option>\n   </select> ";
    // const cardImg = document.getElementById('itemImg')
    var sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    var sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    var sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");
    var display = document.querySelector(".container_catagories-display");
    var id = box.target.id;
    if (id == "Tshirts") {
        // console.log(cardImg);
        sortANDfilterBtnsPants.innerHTML = "";
        sortANDfilterBtnsShoes.innerHTML = "";
        clothsList.getDataTshirts();
        sortANDfilterBtnsTshirts.innerHTML = html;
        clothsList.renderCustomerPage(clothsList.Tshirts, display, "Tshirt");
    }
    else if (id == "shoes") {
        sortANDfilterBtnsPants.innerHTML = "";
        sortANDfilterBtnsTshirts.innerHTML = "";
        clothsList.getDataShoes();
        clothsList.renderCustomerPage(clothsList.shoes, display, "Shoes");
        sortANDfilterBtnsShoes.innerHTML = html;
    }
    else if (id == "pants") {
        sortANDfilterBtnsTshirts.innerHTML = "";
        sortANDfilterBtnsShoes.innerHTML = "";
        clothsList.getDataPants();
        clothsList.renderCustomerPage(clothsList.pants, display, "Pants");
        sortANDfilterBtnsPants.innerHTML = html;
    }
}
function handleSort(ev) {
    var sortValue = ev.target.value;
    var boxId = ev.target.id;
    console.log(boxId);
    console.log(sortValue);
    var ListDisplay = document.querySelector('.container_catagories-display');
    if (boxId == 'Tshirts') {
        clothsList.SortCustomerPage(clothsList.Tshirts, sortValue, ListDisplay, "Shoes");
    }
    else if (boxId == "shoes") {
        clothsList.SortCustomerPage(clothsList.shoes, sortValue, ListDisplay, "Shoes");
    }
    else if (boxId == "pants") {
        clothsList.SortCustomerPage(clothsList.pants, sortValue, ListDisplay, "Pants");
    }
}
