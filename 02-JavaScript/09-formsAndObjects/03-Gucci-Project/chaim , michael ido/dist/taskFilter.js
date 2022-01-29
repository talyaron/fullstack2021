var itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
// { brand: 'nike', size: ' medium', price: 450 }, { brand: 'adidas', size: ' medium', price: 220 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }
var clothsList = {
    Tshirts: [{ brand: 'allstains', size: ' medium', price: 450 }, { brand: 'polo', size: ' large', price: 220 }],
    pants: [{ brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 41', price: 400 }],
    shoes: [{ brand: 'adidas', size: ' 42', price: 800 }, { brand: 'nike', size: ' 42', price: 2100 }],
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
        var html = '';
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
            sortedList = list.sort(function (a, b) { return (a.brand.toLowerCase() > b.brand.toLowerCase()) ? 1 : ((b.brand.toLowerCase() > a.brand.toLowerCase()) ? -1 : 0); });
        }
        else if (sortOption == "sortZtoA") {
            sortedList = list.sort(function (a, b) { return (b.brand.toLowerCase() > a.brand.toLowerCase()) ? 1 : ((a.brand.toLowerCase() > b.brand.toLowerCase()) ? -1 : 0); });
        }
        console.log(sortedList);
        this.render(sortedList, display, catagory);
    }, SortTshirts: function (sortOption, display, catagory) {
        this.Sort(this.Tshirts, catagory, sortOption, display);
    }, SortShoes: function (sortOption, display, catagory) {
        this.Sort(this.shoes, catagory, sortOption, display);
    }, SortPants: function (sortOption, display, catagory) {
        this.Sort(this.pants, catagory, sortOption, display);
    }, deleteItemTshirts: function (id) {
        this.Tshirts = this.Tshirts.filter(function (item) { return item.id !== id; });
    }, deleteItemShoes: function (id) {
        this.shoes = this.shoes.filter(function (item) { return item.id !== id; });
    }, deleteItemPants: function (id) {
        this.pants = this.pants.filter(function (item) { return item.id !== id; });
    }, filterByBrand: function (list, filterBrandInput) {
        return list.filter(function (item) { return item.brand === filterBrandInput; });
    }, renderByBrand: function (list, filterBrandInput, display, catagory) {
        var filteredByBrand = this.filterByBrand(list, filterBrandInput);
        this.render(filteredByBrand, display, catagory);
    }
};
function display(ev) {
    ev.preventDefault();
    // console.log(ev.target);
    // receiving inputs values ----------
    var catagory;
    var brand;
    var price;
    var size;
    var sortOption;
    var filterBrandInput = " ";
    var filterPriceInput;
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
            else if (field.name == "inputFilterPrice") {
                filterPriceInput = field.value;
            }
            else if (field.name == "selectFilterSize") {
                filterSizeInput = field.value;
            }
        }
    }
    console.log(filterBrandInput);
    console.log(filterSizeInput);
    var filterBrand = document.querySelector('.main_form-filterBrand');
    var filterSize = document.querySelector('.main_form-filterSize');
    // const filterPrice = document.querySelector(' ')
    var sortOptions = document.querySelectorAll('.main_form-selectCatagory-sortOptions');
    var TshirtsBox = document.getElementById('TshirtsBox');
    var shoesBox = document.getElementById('shoesBox');
    var pantsBox = document.getElementById('pantsBox');
    // console.log(filterBrand);
    // console.dir(filterSize);
    // console.log(filterBrandInput);
    // console.dir(filterBrandInput);
    // add function 
    if (brand && size && price) {
        clothsList.addTshirt(brand, size, price, catagory);
        clothsList.addPants(brand, size, price, catagory);
        clothsList.addShoe(brand, size, price, catagory);
    }
    // display functions ------------
    clothsList.renderTshirts(TshirtsBox, 'Tshirt');
    clothsList.renderShoes(shoesBox, 'Shoes');
    clothsList.renderPants(pantsBox, 'Pants');
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
    // filter by brand -----------------------
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
    // if(filterSizeInput !== ""){
    //     console.log('lilili');
    // if (catagory == "Tshirts") {
    //     // clothsList.renderBySize(clothsList.Tshirts, filterSizeInput, TshirtsBox, "Tshirts")
    // } else if (catagory == "shoes") {
    //     clothsList.renderBySize(clothsList.shoes, filterSizeInput, shoesBox, "Shoes")
    // } else if (catagory == "pants") {
    //     clothsList.renderBySize(clothsList.pants, filterSizeInput, pantsBox, "Pants")
    // }
    // }
    setAlerts(catagory);
    // ev.target.reset()
}
// getting buttons vars ---------
var actionsBtns = document.querySelectorAll('.main_form-actions-btn');
var options = document.querySelector('.main_form-displayOptions');
// display options -------------
actionsBtns.forEach(function (btn) {
    btn.addEventListener('click', activeBtns);
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
        html = "\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterBrand\" id=\"filterBrand\" value=\"By Brand\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterSize\" id=\"filterSize\" value=\"By Size\" >\n        <input class=\"main_form-filter-btn\" type=\"button\" name=\"filterPrice\" id=\"filterPrice\" value=\"By Price\" >";
    }
    options.innerHTML = html;
    var filterBtns = document.querySelectorAll('.main_form-filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', filterOptionsDisplay);
    });
}
// display filter options -----------------------
function filterOptionsDisplay(btn) {
    var id = btn.target.id;
    // console.log(id);
    var html;
    if (id == "filterBrand") {
        html = "\n        <input type\"text\" class=\"main_form-filterBrand\" name=\"selectFilterBrand\" placeholder = \"type Brand\" required>";
    }
    else if (id == "filterSize") {
        html = "\n        <input type\"text\" class=\"main_form-filterSize\" name=\"selectFilterSize\" placeholder = \"type size\" required>";
    }
    else if (id == "filterPrice") {
        html = "<input type=\"number\" class=\"main_form-selectCatagory-filterOptions\" name=\"inputFilterPrice\" placeholder = \"type price\" required>";
    }
    options.innerHTML = html;
}
function deleteCard(id) {
    console.log(id);
    var TshirtsBox = document.getElementById('TshirtsBox');
    var shoesBox = document.getElementById('shoesBox');
    var pantsBox = document.getElementById('pantsBox');
    clothsList.deleteItemTshirts(id);
    clothsList.deleteItemShoes(id);
    clothsList.deleteItemPants(id);
    clothsList.renderTshirts(TshirtsBox, 'Tshirt');
    clothsList.renderShoes(shoesBox, 'Shoes');
    clothsList.renderPants(pantsBox, 'Pants');
}
function setAlerts(catagory) {
    if (catagory == "empty") {
        alert("You Must Choose Catagory");
    }
}
// customer page --------------------------------------
function set_timeImgs() {
    setInterval(changingImgsBox, 2500);
}
function changingImgsBox() {
    var count = 1;
    var ImgsBox = document.getElementById('ImgsBox');
    var background;
    if (count == 1) {
        background = "url(https://teelabs.in/wp-content/uploads/2021/06/banner-img.jpg)";
    }
    else {
        count = 0;
    }
    ImgsBox.style.backgroundImage = background;
    count++;
}
