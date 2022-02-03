const itemId = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
interface cloths {
    Tshirts: Array<item>;
    pants: Array<item>;
    shoes: Array<item>;
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
    renderCustomerPage(list, display, catagory);
    renderCustomerPageTshirts(display, catagory);
    renderCustomerPageShoes(display, catagory);
    renderCustomerPagePants(display, catagory);
    SortCustomerPage(list, catagory, sortOption, display)

}
interface item {
    id?: any;
    brand: string;
    size: string;
    price: number;
}
// { brand: 'nike', size: ' medium', price: 450 }, { brand: 'adidas', size: ' medium', price: 220 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }
// { brand: 'diesel', size: ' 42', price: 900 }, { brand: 'levis', size: ' 42', price: 400 }

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
           </div> `
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
    deleteItemTshirts(id){
        this.Tshirts = this.Tshirts.filter((item) => item.id !== id);
    },
    deleteItemShoes(id) {
        this.shoes = this.shoes.filter((item) => item.id !== id);
    },
    deleteItemPants(id) {
        this.pants = this.pants.filter((item) => item.id !== id)
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
        return list.filter((item) =>
            filterPriceFromInput < item.price && item.price < filterPriceUpToInput);
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
    renderCustomerPage(list, display, catagory) {
        let html = "";
        list.forEach((element) => {
            html += ` 
                <div class="container_catagories-display-card">
                <div class="container_catagories-display-card-details">
                <h3 class="container_catagories-display-card-head">${element.brand} ${catagory}</h3>
                <p class="container_catagories-display-card-para"> Size : ${element.size}</p>
               <p class="container_catagories-display-card-para"> Price : ${element.price} </p>
               <button class="container_catagories-display-card-btn" onclick="addToCart('${element.id}')">Add To Cart</button>
               </div>
               <div id="itemImg" class="container_catagories-display-card-img"></div>
               </div>
                `;
        });
        display.innerHTML = html;
    },
    renderCustomerPageTshirts(display, catagory) {
        this.renderCustomerPage(display, catagory);
    },
    renderCustomerPageShoes(display, catagory) {
        this.renderCustomerPage(display, catagory);
    },
    renderCustomerPagePants(display, catagory) {
        this.renderCustomerPage(display, catagory);
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
    },
}

function display(ev): void {
    ev.preventDefault();
    console.log(ev.target);

    // receiving inputs values ----------

    // console.log(clothsList.Tshirts);

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
            clothsList.renderBySize(
                clothsList.Tshirts,
                filterSizeInput,
                TshirtsBox,
                "Tshirts"
            );
        } else if (catagory == "shoes") {
            clothsList.renderBySize(
                clothsList.shoes,
                filterSizeInput,
                shoesBox,
                "Shoes"
            );
        } else if (catagory == "pants") {
            clothsList.renderBySize(clothsList.pants, filterSizeInput, pantsBox, "Pants");
        }
    } else if (filterPriceFromInput && filterPriceUpToInput) {
        console.log("lala");
        if (catagory == "Tshirts") {
            clothsList.renderByPrice(clothsList.Tshirts, filterPriceFromInput, filterPriceUpToInput, TshirtsBox, "Tshirts");
        } else if (catagory == "shoes") {
            clothsList.renderByPrice(
                clothsList.shoes,
                filterPriceFromInput,
                filterPriceUpToInput,
                shoesBox,
                "Shoes"
            );
        } else if (catagory == "pants") {
            clothsList.renderByPrice(
                clothsList.pants,
                filterPriceFromInput,
                filterPriceUpToInput,
                pantsBox,
                "Pants"
            );
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
        clothsList.renderCustomerPage(clothsList.Tshirts, display, "Tshirt");
    } else if (id == "shoes") {
        sortANDfilterBtnsPants.innerHTML = ``;
        sortANDfilterBtnsTshirts.innerHTML = ``;
        clothsList.getDataShoes();
        clothsList.renderCustomerPage(clothsList.shoes, display, "Shoes");
        sortANDfilterBtnsShoes.innerHTML = html;
    } else if (id == "pants") {
        sortANDfilterBtnsTshirts.innerHTML = ``;
        sortANDfilterBtnsShoes.innerHTML = ``;
        clothsList.getDataPants();
        clothsList.renderCustomerPage(clothsList.pants, display, "Pants");
        sortANDfilterBtnsPants.innerHTML = html;
    }
}
function handleSort(ev) {

    const sortValue = ev.target.value;
    const boxId = ev.target.id

    if (sortValue == "sortAtoZ"){
        console.log('lala');
    } else if (sortValue == "sortZtoA") {
        console.log('lili');
    } else if (sortValue == "sortLowToHigh") {
        console.log('dadad');
    } else if (sortValue == "sortHighToLow") {
        console.log('rarara');
    }
}


function handleFilter(ev) {

    const boxId = ev.target.id
    const filterBy = ev.target.value
    const displayBoxes = document.querySelectorAll('.container_sortANDfilterBtns-box')
    const filterBrandOption = document.getElementById('filterBrandOption')
    const filterSizeOption = document.getElementById('filterSizeOption')
    const filterPriceOption = document.getElementById('filterPriceOption')

    const sortANDfilterBtnsTshirts = document.getElementById("sortANDfilterBtnsTshirts");
    const sortANDfilterBtnsShoes = document.getElementById("sortANDfilterBtnsShoes");
    const sortANDfilterBtnsPants = document.getElementById("sortANDfilterBtnsPants");
    let catagory;
    console.log();

    // console.log(filterBy);
    if (boxId == "Tshirts") {
        if (filterBy == "brand") {
            sortANDfilterBtnsTshirts.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type brand...">`
        } else if (filterBy == "size") {
            sortANDfilterBtnsTshirts.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type size...">`
        } else if (filterBy == "price") { sortANDfilterBtnsTshirts.innerHTML = `<input type="number" class="main_form-filterInputsCustomer" placeholder="from..."><input class="main_form-filterInputsCustomer" type="number" placeholder="up to...">` }
    } else if (boxId == "shoes") {
        if (filterBy == "brand") {
            sortANDfilterBtnsShoes.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type brand...">`
        } else if (filterBy == "size") {
            sortANDfilterBtnsShoes.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type size...">`
        } else if (filterBy == "price") { sortANDfilterBtnsShoes.innerHTML = `<input type="number" class="main_form-filterInputsCustomer" placeholder="from..."><input class="main_form-filterInputsCustomer" type="number" placeholder="up to...">` }
    } else if (boxId == "pants") {
        if (filterBy == "brand") {
            sortANDfilterBtnsPants.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type brand...">`
        } else if (filterBy == "size") {
            sortANDfilterBtnsPants.innerHTML = `<input type="text" class="main_form-filterInputsCustomer" placeholder="type size...">`
        } else if (filterBy == "price") { sortANDfilterBtnsPants.innerHTML = `<input type="number" class="main_form-filterInputsCustomer" placeholder="from..."><input class="main_form-filterInputsCustomer" type="number" placeholder="up to...">` }
    }


}
