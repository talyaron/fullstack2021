const itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface cloths {
    Tshirts: Array<item>;
    pants: Array<item>;
    shoes: Array<item>;
    shoppingCart: Array<item>
    addTshirt(brand, size, price, catagory);
    addShoe(brand, size, price, catagory);
    addPants(brand, size, price, catagory);
    render(list, display, catagory);
    renderTshirts(display, catagory);
    renderPants(display, catagory);
    renderShoes(display, catagory);
    Sort(list, catagory, sortOption, display);
    SortTshirts(sortOption, display, catagory);
    SortPants(sortOption, display, catagory);
    SortShoes(sortOption, display, catagory);
    deleteItemTshirts(id);
    deleteItemShoes(id);
    deleteItemPants(id);
    filterByBrand(list, filterBrandInput);
    renderByBrand(list, filterBrandInput, display, catagory);
    filterBySize(list, filterSizeInput);
    renderBySize(list, filterSizeInput, display, catagory);
    filterByPrice(list, filterPriceFromInput, filterPriceUpToInput);
    renderByPrice(list, filterPriceFromInput, filterPriceUpToInput, display, catagory);
    storeDataTshirts();
    storeDataShoes();
    storeDataPants();
    getDataTshirts();
    getDataShoes();
    getDataPants();
    renderCustomerPage(list, display, catagory,background);
    SortCustomerPage(list, catagory, sortOption, display)
    renderCustomerByBrand(list, inputBrand, display, catagory)
    renderCustomerBySize(list, inputBrand, display, catagory)
    renderCustomerByPrice(list, inputFrom, inputUpTo, display, catagory)
    addToCart(id, catagory)
    renderShoppingCart(display, catagory)
    deleteItemFromCard(id)
    changeItemTshirt(id, Card)
    changeItempants(id, Card)
    changeItemshoes(id, Card)
}
interface item {
    id?: any;
    brand: string;
    size: string;
    price: number;
}

let clothsList: cloths = {
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

    addTshirt(brand, size, price, catagory) {
        const id = itemId();
        if (catagory == "Tshirts") {
            this.Tshirts.push({ id, brand, size, price });
        }
    },
    addShoe(brand, size, price, catagory) {
        const id = itemId();
        if (catagory == "shoes") {
            this.shoes.push({ id, brand, size, price });
        }
    },
    addPants(brand, size, price, catagory) {
        const id = itemId();
        if (catagory == "pants") {
            this.pants.push({ id, brand, size, price });
            console.log(this);
        }
    },
    render(list, display, catagory) {
        let html = "";
        list.forEach((element) => {
            html += `<div class="main_scrollmenu-box-card"><h3 class="main_scrollmenu-box-card-head">${element.brand} ${catagory}</h3>
            <p class="main_scrollmenu-box-card-para"> Size : ${element.size}</p>
           <p class="main_scrollmenu-box-card-para"> Price : ${element.price} </p>
           <button class="main_scrollmenu-box-card-btn" onclick="deleteCard('${element.id}')">Delete Item</button>
           <button class="main_scrollmenu-box-card-btn" onclick="updateCard('${element.id}')">Delete Item</button>
           <button class="main_scrollmenu-box-card-btn" onclick="updatecard('${element.id}')">update item</button>
           </div>`
        });


        display.innerHTML = html;
    },
    renderTshirts(display, catagory) {
        this.render(this.Tshirts, display, catagory);
    },
    renderShoes(display, catagory) {
        this.render(this.shoes, display, catagory);
    },
    renderPants(display, catagory) {
        this.render(this.pants, display, catagory);
    },
    Sort(list, catagory, sortOption, display) {
        let sortedList;
        if (sortOption == "sortLowToHigh") {
            sortedList = list.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sortOption == "sortHighToLow") {
            sortedList = list.sort((a, b) => {
                return b.price - a.price;
            });
        } else if (sortOption == "sortAtoZ") {
            sortedList = list.sort((a, b) =>
                a.brand.toLowerCase() > b.brand.toLowerCase()
                    ? 1
                    : b.brand.toLowerCase() > a.brand.toLowerCase()
                        ? -1
                        : 0
            );
        } else if (sortOption == "sortZtoA") {
            sortedList = list.sort((a, b) =>
                b.brand.toLowerCase() > a.brand.toLowerCase()
                    ? 1
                    : a.brand.toLowerCase() > b.brand.toLowerCase()
                        ? -1
                        : 0
            );
        }
        console.log(sortedList);
        this.render(sortedList, display, catagory);
    },
    SortTshirts(sortOption, display, catagory) {
        this.Sort(this.Tshirts, catagory, sortOption, display);
    },
    SortShoes(sortOption, display, catagory) {
        this.Sort(this.shoes, catagory, sortOption, display);
    },
    SortPants(sortOption, display, catagory) {
        this.Sort(this.pants, catagory, sortOption, display);
    },
    deleteItemTshirts(id) {
        this.Tshirts = this.Tshirts.filter((item) => item.id !== id);
    },
    deleteItemShoes(id) {
        this.shoes = this.shoes.filter((item) => item.id !== id);
    },
    deleteItemPants(id) {
        this.pants = this.pants.filter((item) => item.id !== id)
    },
    changeItemTshirt(id) {
        this.Tshirts = this.Tshirts.update((item) => item.id !== id);
    },
    changeItempants(id) {
        this.Tshirts = this.pants.update((item) => item.id !== id);
    },
    changeItemshoes(id) {
        this.Tshirts = this.shoes.update((item) => item.id !== id);
    },

    filterByBrand(list, filterBrandInput) {
        return list.filter((item) => item.brand === filterBrandInput);
    },
    renderByBrand(list, filterBrandInput, display, catagory) {
        const filteredByBrand = this.filterByBrand(list, filterBrandInput);
        this.render(filteredByBrand, display, catagory);
    },
    filterBySize(list, filterSizeInput) {
        return list.filter((item) => item.size === filterSizeInput);
    },
    renderBySize(list, filterSizeInput, display, catagory) {
        const filteredBySize = this.filterBySize(list, filterSizeInput);
        console.log(filteredBySize);
        this.render(filteredBySize, display, catagory);
    },
    filterByPrice(list, filterPriceFromInput, filterPriceUpToInput) {
        return list.filter((item) => filterPriceFromInput < item.price && item.price < filterPriceUpToInput);
    },
    renderByPrice(list, filterPriceFromInput, filterPriceUpToInput, display, catagory) {
        const filteredByPrice = this.filterByPrice(list, filterPriceFromInput, filterPriceUpToInput);
        console.log(filteredByPrice);
        this.render(filteredByPrice, display, catagory);
    },
    storeDataTshirts() {
        localStorage.setItem("TshirtsData", JSON.stringify(this.Tshirts));
    },
    storeDataShoes() {
        localStorage.setItem("shoesData", JSON.stringify(this.shoes));
    },
    storeDataPants() {
        localStorage.setItem("pantsData", JSON.stringify(this.pants));
    },
    getDataTshirts() {
        this.Tshirts = JSON.parse(localStorage.getItem("TshirtsData"));
    },
    getDataShoes() {
        const shoes = JSON.parse(localStorage.getItem("shoesData"));
        if (shoes && Array.isArray(shoes)) {
            this.shoes = shoes;
        }
    },
    getDataPants() {
        this.pants = JSON.parse(localStorage.getItem("pantsData"));
    },
    renderCustomerPage(list, display, catagory, background){
        let html = "";
        list.forEach((element) => {
            html += ` 
                <div class="container_catagories-display-card">
                <div class="container_catagories-display-card-details">
                <h3 class="container_catagories-display-card-head">${element.brand} ${catagory}</h3>
                <p class="container_catagories-display-card-para"> Size : ${element.size}</p>
               <p class="container_catagories-display-card-para"> Price : ${element.price} </p>
               <button class="container_catagories-display-card-btn" name='${catagory}' onclick="addToCart(event ,'${element.id}')">Add To Cart</button>
               </div>
               <div id="itemImg" class="container_catagories-display-card-img"></div>
               </div>
                `;
        });
        display.innerHTML = html;
    }, SortCustomerPage(list, sortValue, display, catagory) {
        let sortedListCustomer;
        if (sortValue == "sortLowToHigh") {
            sortedListCustomer = list.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sortValue == "sortHighToLow") {
            sortedListCustomer = list.sort((a, b) => {
                return b.price - a.price;
            });
        } else if (sortValue == "sortAtoZ") {
            sortedListCustomer = list.sort((a, b) =>
                a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : b.brand.toLowerCase() > a.brand.toLowerCase() ? -1 : 0
            );
        } else if (sortValue == "sortZtoA") {
            sortedListCustomer = list.sort((a, b) => b.brand.toLowerCase() > a.brand.toLowerCase() ? 1
                : a.brand.toLowerCase() > b.brand.toLowerCase() ? -1 : 0
            );
        }
        this.renderCustomerPage(sortedListCustomer, display, catagory)
    }, renderCustomerByBrand(list, inputBrand, display, catagory) {
        const filteredByBrand = this.filterByBrand(list, inputBrand);
        this.renderCustomerPage(filteredByBrand, display, catagory)
    }, renderCustomerBySize(list, inputSize, display, catagory) {
        const filteredBySize = this.filterBySize(list, inputSize);
        this.renderCustomerPage(filteredBySize, display, catagory)
    }, renderCustomerByPrice(list, inputFrom, inputUpTo, display, catagory) {
        const filteredCustomerByPrice = this.filterByPrice(list, inputFrom, inputUpTo);
        this.renderCustomerPage(filteredCustomerByPrice, display, catagory)
    }, addToCart(id, catagory) {
        let itemToCart;
        if (catagory == "Tshirts") {
            itemToCart = this.Tshirts.filter((item) => item.id === id)
            itemToCart[0].id = catagory
        } else if (catagory == "shoes") {
            itemToCart = this.shoes.filter((item) => item.id === id)
            itemToCart[0].id = catagory
        } else if (catagory == "pants") {
            itemToCart = this.pants.filter((item) => item.id === id)
            itemToCart[0].id = catagory
        }
        this.shoppingCart.push(itemToCart)
    }, renderShoppingCart(display, catagory) {
        const shoppingCartDisplay = document.querySelector('.container-shoppingCart_display') as HTMLDivElement
        shoppingCartDisplay.style.display = "flex"
        let html;
        this.shoppingCart.forEach((item) => {
            html = ` 
            <div class="container-shoppingCart_display-item">
                <h1 class="container-shoppingCart_display-item-header">${item[0].brand} ${catagory}</h1>
                <p class="container-shoppingCart_display-item-size">size: ${item[0].size}</p>
                <p class="container-shoppingCart_display-item-price">price: ${item[0].price}</p>
                <button class="container-shoppingCart_display-item-deleteBtn" name="${catagory}" type="button" onclick="deleteItem(event,'${item[0].id}')">remove</button>
            </div>`
        });
        display.innerHTML += html

    }, deleteItemFromCard(id) {
        this.shoppingCart = this.shoppingCart.filter((item) => item[0].id !== id)
    }
    
}
function display(ev): void {
    ev.preventDefault();
    console.log(ev.target);

    // receiving inputs values ----------

    let catagory;
    let brand;
    let price: number;
    let size: any;
    let sortOption;
    let filterBrandInput;
    let filterPriceFromInput;
    let filterPriceUpToInput;
    let filterSizeInput;

    for (let field of ev.target) {
        if (field.name !== "submit") {
            if (field.name == "Catagory") {
                catagory = field.value;
            } else if (field.name == "inputBrand") {
                brand = field.value;
            } else if (field.name == "inputSize") {
                size = field.value;
            } else if (field.name == "inputPrice") {
                price = parseInt(field.value);
            } else if (field.name == "chooseSort") {
                sortOption = field.value;
            } else if (field.name == "selectFilterBrand") {
                filterBrandInput = field.value;
            } else if (field.name == "inputFilterPriceFrom") {
                filterPriceFromInput = field.value;
            } else if (field.name == "inputFilterPriceUpTo") {
                filterPriceUpToInput = field.value;
            } else if (field.name == "selectFilterSize") {
                filterSizeInput = field.value;
            }
        }
    }

    console.log(sortOption);
    clothsList.getDataTshirts();
    clothsList.getDataShoes();
    clothsList.getDataPants();

    const sortOptions = document.querySelectorAll(".main_form-selectCatagory-sortOptions");
    const TshirtsBox = document.getElementById("TshirtsBox");
    const shoesBox = document.getElementById("shoesBox");
    const pantsBox = document.getElementById("pantsBox");

    console.log(sortOptions.length);


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
        } else if (catagory == "shoes") {
            clothsList.SortShoes(sortOption, shoesBox, catagory);
        } else if (catagory == "pants") {
            clothsList.SortPants(sortOption, pantsBox, catagory);
        }
    }

    // filter by brand Size and Price-----------------------

    if (filterBrandInput) {
        if (catagory == "Tshirts") {
            clothsList.renderByBrand(clothsList.Tshirts, filterBrandInput, TshirtsBox, "Tshirts");
        } else if (catagory == "shoes") {
            clothsList.renderByBrand(clothsList.shoes, filterBrandInput, shoesBox, "shoes");
        } else if (catagory == "pants") {
            clothsList.renderByBrand(
                clothsList.pants,
                filterBrandInput,
                pantsBox,
                "pants"
            );
        }
    } else if (filterSizeInput) {
        if (catagory == "Tshirts") {
            clothsList.renderBySize(clothsList.Tshirts, filterSizeInput, TshirtsBox, "Tshirts");
        } else if (catagory == "shoes") {
            clothsList.renderBySize(clothsList.shoes, filterSizeInput, shoesBox, "Shoes"
            );
        } else if (catagory == "pants") {
            clothsList.renderBySize(clothsList.pants, filterSizeInput, pantsBox, "Pants");
        }
    } else if (filterPriceFromInput && filterPriceUpToInput) {
        console.log("lala");
        if (catagory == "Tshirts") {
            clothsList.renderByPrice(clothsList.Tshirts, filterPriceFromInput, filterPriceUpToInput, TshirtsBox, "Tshirts");
        } else if (catagory == "shoes") {
            clothsList.renderByPrice(clothsList.shoes, filterPriceFromInput, filterPriceUpToInput, shoesBox, "Shoes");
        } else if (catagory == "pants") {
            clothsList.renderByPrice(clothsList.pants, filterPriceFromInput, filterPriceUpToInput, pantsBox, "Pants");
        }
    }
    setAlerts(catagory);
    // ev.target.reset()
}

// getting buttons vars ---------

const actionsBtns = document.querySelectorAll(".main_form-actions-btn");
const options = document.querySelector(".main_form-displayOptions");

// display options -------------

actionsBtns.forEach((btn) => {
    btn.addEventListener("click", activeBtns);
});
function activeBtns(btn): void {
    const id = btn.target.id;
    let html;
    if (id == "add") {
        html = `
        <input class="main_add" id="inputBrand" name="inputBrand" type="text" placeholder="Brand" required>
        <input class="main_add" id="inputSize" name="inputSize" type="text" placeholder="Size" required>
        <input class="main_add" id="inputPrice" name="inputPrice" type="text" placeholder="Price" required>`;
    } else if (id == "sort") {
        html = ` 
         <select class="main_form-selectCatagory" name="chooseSort" id="selectCatagory">
        <option class="main_form-selectCatagory-sortOptions" disabled selected>Sort By</option>
        <option class="main_form-selectCatagory-sortOptions" value="sortAtoZ">A ---> Z</option>
        <option class="main_form-selectCatagory-sortOptions" value="sortZtoA">Z ---> A</option>
        <option class="main_form-selectCatagory-sortOptions" value="sortLowToHigh">Price Low to High</option>
        <option class="main_form-selectCatagory-sortOptions" value="sortHighToLow">Price High to Low</option>
        </select> `;
    } else if (id == "filter") {
        html = `
        <input class="main_form-filter-btn" type="button" name="filterBr and" id="filterBrand" value="By Brand" >
        <input class="main_form-filter-btn" type="button" name="filterSize" id="filterSize" value="By Size" >
        <input class="main_form-filter-btn" type="button" name="filterPrice" id="filterPrice" value="By Price" > `;
    }
    else if (id=='update'){
    html=`
    <input class="ain_scrollmenu-box-card" type="button" name="update and" id="updateTshirts" value="By Tshirts" >
    <input class="ain_scrollmenu-box-card" type="button" name="update and" id="updatepants" value="By pants" >
    <input class="ain_scrollmenu-box-card" type="button" name="update and" id="updateshoes" value="By shoes" > `;
}

    options.innerHTML = html;
    const filterBtns = document.querySelectorAll(".main_form-filter-btn");
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", filterOptionsDisplay);
    });
}
// display filter options -----------------------

function filterOptionsDisplay(btn): void {
    const id = btn.target.id;
    // console.log(id);
    let html;
    if (id == "filterBrand") {
        html = `
        <input type"text" class="main_form-filterInputs" name="selectFilterBrand" placeholder = "type Brand" required>`;
    } else if (id == "filterSize") {
        html = `
        <input type"text" class="main_form-filterInputs" name="selectFilterSize" placeholder = "type size" required>`;
    } else if (id == "filterPrice") {
        html = `<input type="number" class="main_form-selectCatagory-filterInputs" name="inputFilterPriceFrom" placeholder = "From.." required>
        <input type="number" class="main_form-selectCatagory-filterInputs" name="inputFilterPriceUpTo" placeholder = "Up To.." required>`;
    }
    options.innerHTML = html;
}

function deleteCard(id) {
    console.log(id);

    const TshirtsBox = document.getElementById("TshirtsBox");
    const shoesBox = document.getElementById("shoesBox");
    const pantsBox = document.getElementById("pantsBox");

    clothsList.deleteItemTshirts(id);
    clothsList.deleteItemShoes(id);
    clothsList.deleteItemPants(id);
    clothsList.renderTshirts(TshirtsBox, "Tshirt");
    clothsList.renderShoes(shoesBox, "Shoes");
    clothsList.renderPants(pantsBox, "Pants");
}

export async function completedCheckbox_change(event) {
    const completed = event.target.value;
    const itemId = event.context.itemId;
    const item = await this.get('Tasks', itemId);
    const updatedItem = Object.assign({}, item, { completed });
    await this.update('Tasks', updatedItem);
    }
function setAlerts(catagory) {
    if (catagory == "empty") {
        alert("You Must Choose Catagory");
    }
}
function SaveInLocalStorage(): void {
    clothsList.storeDataTshirts();
    clothsList.storeDataShoes();
    clothsList.storeDataPants();
}

// customer page --------------------------------------

function set_timeImgs() {
    setInterval(changingImgsBox, 2500);
}
let count = 1;
function changingImgsBox() {
    const ImgsBox = document.getElementById("ImgsBox");
    let background;
    if (count == 1) {
        background =
            "url(https://s18670.pcdn.co/wp-content/uploads/Top-20-Teacher-T-Shirts-on-Etsy.png)";
    } else if (count == 2) {
        background =
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrhcOcZCZbfuu4U9-6j0d66_c8hEInD5rvW0arp8TU9D9eR6cziUe3TFP0rw4AkoShM0&usqp=CAU)";
    } else if (count == 3) {
        background =
            "url(https://a.espncdn.com/photo/2019/0715/Sneaker%20Center.jpg)";
    } else {
        count = 0;
    }
    ImgsBox.style.backgroundImage = background;
    count++;
}

const catagoriesBoxes = document.querySelectorAll(".container_catagories-box");

catagoriesBoxes.forEach((box) => {
    const boxId = box.id;
    box.addEventListener("click", (ev) => { showOptions(ev, boxId) });
});

function showOptions(box: any, boxId: string) {
    let html = `
    <select class="container-select" name="chooseSort" id="${boxId}" onchange="handleSort(event)">
   <option class=""container-select-Options" disabled selected>Sort By</option>
   <option class=""container-select-Options" value="sortAtoZ">A ---> Z</option>
   <option class=""container-select-Options" value="sortZtoA">Z ---> A</option>
   <option class=""container-select-Options" value="sortLowToHigh">$ Low to High $</option>
   <option class=""container-select-Options" value="sortHighToLow">$ High to Low $</option>
   </select>   
   <select class="container-select" name="chooseFilter" id="${boxId}" onchange="handleFilter(event)">
   <option class="main_form-select-Options" disabled selected>Filter By</option>
   <option class="main_form-select-Options" id="filterBrandOption" value="brand">Brand</option>
   <option class="main_form-select-Options" id="filterSizeOption" value="size">Size</option>
   <option class="main_form-select-Options" id="filterPriceOption" value="price">Price</option>
   </select> `;

    // const cardImg = document.getElementById('itemImg')
    const sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    const sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    const sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");
    const display = document.querySelector(".container_catagories-display");

    let id = box.target.id;
    if (id == "Tshirts") {
        // console.log(cardImg);
        sortANDfilterBtnsPants.innerHTML = ``;
        sortANDfilterBtnsShoes.innerHTML = ``;
        clothsList.getDataTshirts();
        sortANDfilterBtnsTshirts.innerHTML = html;
        clothsList.renderCustomerPage(clothsList.Tshirts, display, id, "https://i.ebayimg.com/images/g/bWgAAOSwVH5blRYh/s-l300.jpg" );
    } else if (id == "shoes") {
        sortANDfilterBtnsPants.innerHTML = ``;
        sortANDfilterBtnsTshirts.innerHTML = ``;
        clothsList.getDataShoes();
        clothsList.renderCustomerPage(clothsList.shoes, display, id, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-image-shoes-01-1634132850.png?crop=1.00xw:1.00xh;0,0&resize=480:*");
        sortANDfilterBtnsShoes.innerHTML = html;
    } else if (id == "pants") {
        sortANDfilterBtnsTshirts.innerHTML = ``;
        sortANDfilterBtnsShoes.innerHTML = ``;
        clothsList.getDataPants();
        clothsList.renderCustomerPage(clothsList.pants, display, id, "");
        sortANDfilterBtnsPants.innerHTML = html;
    }
}
function handleSort(ev) {

    const sortValue = ev.target.value;
    const boxId = ev.target.id
    const display = document.querySelector(".container_catagories-display");

    if (boxId == "Tshirts") {
        clothsList.SortCustomerPage(clothsList.Tshirts, sortValue, display, boxId)
    } else if (boxId == "shoes") {
        clothsList.SortCustomerPage(clothsList.shoes, sortValue, display, boxId)
    } else if (boxId == "pants") {
        clothsList.SortCustomerPage(clothsList.pants, sortValue, display, boxId)
    }
}

// showing filter input options

function handleFilter(ev) {

    const boxId = ev.target.id
    const filterBy = ev.target.value

    const sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    const sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    const sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");

    if (boxId == "Tshirts") {
        if (filterBy == "brand") {
            sortANDfilterBtnsTshirts.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputBrand" placeholder="type brand..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        } else if (filterBy == "size") {
            sortANDfilterBtnsTshirts.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputSize" placeholder="type size..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        } else if (filterBy == "price") {
            sortANDfilterBtnsTshirts.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputFrom" placeholder="From..." required>
            <input class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputUpTo" placeholder="Up to..." required >
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>
            `}
    } else if (boxId == "shoes") {
        if (filterBy == "brand") {
            sortANDfilterBtnsShoes.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputBrand" placeholder="type brand..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>
            `
        } else if (filterBy == "size") {
            sortANDfilterBtnsShoes.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputSize" placeholder="type size..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        } else if (filterBy == "price") {
            sortANDfilterBtnsShoes.innerHTML = `
            <form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputFrom" placeholder="From..." required>
            <input class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputUpTo" placeholder="UP to..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        }
    } else if (boxId == "pants") {
        if (filterBy == "brand") {
            sortANDfilterBtnsPants.innerHTML = `<form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputBrand" placeholder="type brand..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        } else if (filterBy == "size") {
            sortANDfilterBtnsPants.innerHTML = `<form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input  class="container_sortANDfilterBtns-box_form-filterInput" type="text" id="${boxId}" name="inputSize" placeholder="type brand..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        } else if (filterBy == "price") {
            sortANDfilterBtnsPants.innerHTML = `<form class="container_sortANDfilterBtns-box_form" onsubmit="displayFilter(event)">
            <input class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputFrom" placeholder="From..." required>
            <input class="container_sortANDfilterBtns-box_form-filterInput" type="number" id="${boxId}" name="inputUpTo" placeholder="Up to..." required>
            <button class="container_sortANDfilterBtns-box_form-submit" type="submit">Filter</button></form>`
        }
    }
}

// display after filtered


function displayFilter(ev) {

    ev.preventDefault()

    // console.log(ev.target);

    const display = document.querySelector('.container_catagories-display')
    const filterType = ev.target.name;
    const InputFilterValue = ev.target.value
    let boxId;
    let inputFrom;
    let inputUpTo;
    let inputBrand;
    let inputSize;

    for (let field of ev.target) {
        if (field.name == "inputFrom") {
            inputFrom = field.value
            boxId = field.id
        } else if (field.name == "inputUpTo") {
            inputUpTo = field.value
            boxId = field.id
        } else if (field.name == "inputBrand") {
            inputBrand = field.value
            boxId = field.id
        } else if (field.name == "inputSize") {
            inputSize = field.value
            boxId = field.id
        }
    }
    console.log(inputBrand);
    console.log(boxId);

    if (boxId == "Tshirts") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.Tshirts, inputBrand, display, boxId)
        } else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.Tshirts, inputSize, display, boxId)
        } else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.Tshirts, inputFrom, inputUpTo, display, boxId)
        }
    } else if (boxId == "shoes") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.shoes, inputBrand, display, boxId)
        } else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.shoes, inputSize, display, boxId)
        } else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.shoes, inputFrom, inputUpTo, display, boxId)
        }
    } else if (boxId == "pants") {
        if (inputBrand) {
            clothsList.renderCustomerByBrand(clothsList.pants, inputBrand, display, boxId)
        } else if (inputSize) {
            clothsList.renderCustomerBySize(clothsList.pants, inputSize, display, boxId)
        } else if (inputFrom && inputUpTo) {
            clothsList.renderCustomerByPrice(clothsList.pants, inputFrom, inputUpTo, display, boxId)
        }
    }
}

function addToCart(ev, id) {

    const display = document.querySelector('.container-shoppingCart_display')
    let catagory = ev.target.name

    clothsList.addToCart(id, catagory)
    console.log(clothsList.shoppingCart);

    console.log(catagory);
    console.log(clothsList);
    clothsList.renderShoppingCart(display, catagory)
}
function showDropDown(ev) {

    const dropDownDisplay = document.querySelector('.container_header-dropDown')
    const id = ev.target.id;
    console.log(id);
    let html;

    if(id == "notificationsBtn"){
        html = `<div id="notifications" class="container_header-dropDown-box notifications" ">
        <p style="font-size: 10px; font-weight:bold">no notifications found</p>
     </div> `

    }else if(id == "signInBtn"){
        html = `<div id="signIn" class="container_header-dropDown-box signIn">
        <input class="container_header-dropDown-box-signInInput" type="email" name="UserName" id="userName" placeholder="User Name" >
        <input class="container_header-dropDown-box-signInInput" type="password" name="password" id="password" placeholder="Password">
        <button type="button" class="container_header-dropDown-box-signInInput-btn">Sign In</button>
    </div>`
    }else if(id == "yourOrdersBtn"){
        html = `<div id="yourOrders" class="container_header-dropDown-box yourOrders">
        <p style="font-size: 12px">no Orders yet...</p>
       </div>`
    }else if(id == "shoppingCartBtn"){
        html = `<div id="shoppingCart" class="container_header-dropDown-box shoppingCart"></div>`
    }

    const shoppingCartdisplay = document.getElementById('shoppingCart')

    dropDownDisplay.innerHTML = html;
}