var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var gucci = {
    items: [
        {
            name: "Red Whool dress",
            price: 3800,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1608574504/644564_XKBNZ_6176_001_100_0000_Light-Wool-dress-with-contrast-trim.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_40_632x790/1608574504/644564_XKBNZ_6176_002_100_0000_Light.jpg",
            gender: "women",
            type: "dresses",
            id: 0
        },
        {
            name: "Pleated dress ",
            price: 5980,
            imgTop: "//media.gucci.com/style/DarkGray_South_0_160_316x316/1634249776/669260_ZAH0J_9782_001_100_0000_Light-Pleated-dress-with-chevron-vintage-Web.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1634249778/669260_ZAH0J_9782_002_100_0000_Light.jpg",
            gender: "women",
            type: "dresses",
            id: 1
        },
        {
            name: "Silk mohair sweater  ",
            price: 2500,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1640195126/670625_XKB1V_1043_001_100_0000_Light-Silk-mohair-sweater-with-feathers.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1640195129/670625_XKB1V_1043_002_100_0000_Light.jpg",
            gender: "women",
            type: "sweaters",
            id: 2
        },
        {
            name: "Leather ankle boot with belt",
            price: 1190,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1537468210/550036_DKS00_1000_001_100_0000_Light-Leather-ankle-boot-with-belt.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1537468210/550036_DKS00_1000_002_100_0000_Light.jpg",
            gender: "women",
            type: "boots",
            id: 3
        },
        {
            name: "Women's ankle boot ",
            price: 790,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633042815/670407_JCCP0_3154_001_100_0000_Light-Womens-ankle-boot-with-Horsebit.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1633042815/670407_JCCP0_3154_002_100_0000_Light.jpg",
            gender: "women",
            type: "boots",
            id: 4
        },
        {
            name: "Baby cat print linen coat",
            price: 1150,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634315425/680518_ZAIDY_9376_001_100_0000_Light-Baby-cat-print-cotton-dress.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1635528628/680534_XWARS_9376_002_100_0000_Light.jpg",
            gender: "children",
            type: "clothes",
            id: 5
        },
        {
            name: "Double G cotton jacket",
            price: 635,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633043710/671075_XWARC_3472_001_100_0000_Light-Childrens-Double-G-cotton-jacket.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1633043710/671075_XWARC_3472_002_100_0000_Light.jpg",
            gender: "children",
            type: "clothes",
            id: 6
        },
        {
            name: "GG cotton hat with ear flaps",
            price: 295,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632819610/683064_3HAG1_4969_001_100_0000_Light-Baby-GG-cotton-hat-with-ear-flaps.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1632819610/683064_3HAG1_4969_002_100_0000_Light.jpg",
            gender: "children",
            type: "hats",
            id: 7
        },
        {
            name: "Straw effect hat with ribbon",
            price: 300,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634251518/684920_3HAHA_9266_001_100_0000_Light-Baby-straw-effect-hat-with-ribbon.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1634251520/684920_3HAHA_9266_002_100_0000_Light.jpg",
            gender: "children",
            type: "hats",
            id: 8
        },
        {
            name: "The North Face x",
            price: 950,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638553515/663766_ZLX45_3475_001_100_0000_Light-The-North-Face-x-Gucci-pant.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1638553518/663766_ZLX45_3475_002_100_0000_Light.jpg",
            gender: "men",
            type: "pants",
            id: 9
        },
        {
            name: "Gucci crocodile loafer",
            price: 3200,
            imgTop: "//media.gucci.com/style/DarkGray_South_0_160_470x470/1459942203/406994_EC200_1000_001_100_0000_Light.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1459942203/406994_EC200_1000_002_100_0000_Light.jpg",
            gender: "men",
            type: "shoes",
            id: 10
        },
        {
            name: "GG leather pant",
            price: 4600,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1636738256/669071_XNAPN_1000_001_100_0000_Light-GG-leather-pant.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1636738258/669071_XNAPN_1000_002_100_0000_Light.jpg",
            gender: "men",
            type: "pants",
            id: 11
        },
        {
            name: "Cotton piquet polo ",
            price: 690,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634749231/653380_XJDF8_3495_001_100_0000_Light-Cotton-piquet-polo-with-Interlocking-G.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1634749233/653380_XJDF8_3495_002_100_0000_Light.jpg",
            gender: "men",
            type: "shirts",
            id: 12
        },
        {
            name: "GG kaleidoscope silk shirt",
            price: 1250,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638550829/675446_ZAH3W_1128_001_100_0000_Light-GG-kaleidoscope-silk-bowling-shirt.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1638550833/675446_ZAH3W_1128_002_100_0000_Light.jpg",
            gender: "men",
            type: "shirts",
            id: 13
        },
        {
            name: "Grip watch, 38mm",
            price: 1900,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584905/596509_I8600_8740_001_100_0000_Light-Grip-watch-38mm.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1567584905/596509_I8600_8740_002_100_0000_Light.jpg",
            gender: "menWatches",
            type: "rolex",
            id: 14
        },
        {
            name: "Grip watch, 35mm",
            price: 1700,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584903/584271_ICBA0_8576_001_100_0000_Light-Grip-watch-35mm.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1567584903/584271_ICBA0_8576_002_100_0000_Light.jpg",
            gender: "menWatches",
            type: "omega",
            id: 15
        },
        {
            name: "GUCCI 25H watch, 40mm",
            price: 9500,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1627285507/673127_I1600_1108_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1627285508/673127_I1600_1108_002_100_0000_Light.jpg",
            gender: "menWatches",
            type: "rolex",
            id: 16
        },
        {
            name: "Gucci Tiger, 38 mm",
            price: 1020,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634838345/692078_ICZA0_8521_001_100_0000_Light-Gucci-Tiger-G-Timeless-watch-38-mm.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1634838347/692078_ICZA0_8521_002_100_0000_Light.jpg",
            gender: "menWatches",
            type: "omega",
            id: 17
        },
        {
            name: "Double G flower",
            price: 390,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1522084508/527394_J8474_8517_001_100_0000_Light-Double-G-flower-ring.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1522084508/527394_J8474_8517_002_100_0000_Light.jpg",
            gender: "womenJewlery",
            type: "rings",
            id: 18
        },
        {
            name: "Beaded necklace with flower",
            price: 2300,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1626885905/675291_J1D50_8061_001_100_0000_Light-Beaded-necklace-with-flower.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1626885905/675291_J1D50_8061_002_100_0000_Light.jpg",
            gender: "womenJewlery",
            type: "necklaces",
            id: 19
        },
        {
            name: "Lion head ring with crystal",
            price: 430,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1628098205/675305_I6658_8489_001_100_0000_Light-Lion-head-ring-with-crystal.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1628098206/675305_I6658_8489_002_100_0000_Light.jpg",
            gender: "womenJewlery",
            type: "rings",
            id: 20
        },
        {
            name: "Interlocking G crystal hoops",
            price: 1150,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1629877504/680275_J3F42_8162_001_100_0000_Light-Interlocking-G-crystal-hoop-earrings.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1629877505/680275_J3F42_8162_002_100_0000_Light.jpg",
            gender: "womenJewlery",
            type: "earrings",
            id: 21
        },
        {
            name: "Gucci Diana small crocodile",
            price: 35000,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1618321510/660195_EZINT_2582_001_067_0000_Light-Gucci-Diana-small-crocodile-tote-bag.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1618321510/660195_EZINT_2582_002_067_0000_Light.jpg",
            gender: "womenBags",
            type: "purses",
            id: 22
        },
        {
            name: "Backpack with Interlocking G",
            price: 2500,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265210/674147_UQHGE_8679_001_081_0000_Light-Backpack-with-Interlocking-G.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1632265210/674147_UQHGE_8679_002_081_0000_Light.jpg",
            gender: "womenBags",
            type: "backpack",
            id: 23
        },
        {
            name: "Valentine's Day small heart",
            price: 1800,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638432995/678131_UP2AV_5575_001_060_0000_Light-Valentines-Day-small-heart-bag.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
            gender: "womenBags",
            type: "purses",
            id: 24
        },
        {
            name: "Ophidia GG small backpack",
            price: 1790,
            imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1533573917/547965_9U8BT_8994_001_089_0000_Light-Ophidia-GG-small-backpack.jpg",
            imgBottom: "https://media.gucci.com/style/White_South_0_160_540x540/1533573917/547965_9U8BT_8994_002_089_0000_Light.jpg",
            gender: "womenBags",
            type: "backpack",
            id: 25
        },
    ],
    cartItems: [],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.items));
    },
    getData: function () {
        var clothesStorage = JSON.parse(localStorage.getItem("storeData"));
        if (Array.isArray(clothesStorage)) {
            this.items = clothesStorage;
        }
    },
    addItems: function (name, price, imgTop, imgBottom, gender, type) {
        var id = uid();
        this.items.push({ name: name, price: price, imgTop: imgTop, imgBottom: imgBottom, gender: gender, type: type, id: id });
        this.storeData();
    },
    removeItems: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
            this.storeData();
        }
    },
    updateItems: function (itemName, newPrice) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        console.log(index);
        if (index >= 0) {
            this.items[index].name = itemName;
            this.items[index].price = newPrice;
            this.storeData();
            this.getData();
        }
    },
    filterByItemNameAndGender: function (gender, itemName) {
        return this.items
            .filter(function (item) { return item.gender === gender; })
            .filter(function (item) { return item.name === itemName; });
    },
    filterMaxPriceAndGender: function (gender, price) {
        return this.items
            .filter(function (item) { return item.gender === gender; })
            .filter(function (item) { return item.price < price; });
    },
    sortByAscending: function (price) {
        this.items.sort(function (a, b) {
            return a.price - b.price;
        });
    },
    sortByDescending: function (price) {
        this.items.sort(function (a, b) {
            return b.price - a.price;
        });
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"items\">\n        <p>" + item.name + "</p>\n        <img class=\"imgTop\" src=\"" + item.imgTop + "\" >\n        <img class=\"imgBottom\" src=\"" + item.imgBottom + "\" >\n        <p>" + item.price + "$</p>\n        <button class=\"cartButton\" onclick=\"addToCart(" + item.id + ")\">Add To Cart</button>\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllitems: function (domElement) {
        var items = this.items;
        this.render(items, domElement);
    },
    renderFilterByItemName: function (filteredByItemName, domElement) {
        this.render(filteredByItemName, domElement);
    },
    renderMaxPrice: function (filtered, domElement) {
        this.render(filtered, domElement);
    },
    filterByGenderAndType: function (type, gender) {
        console.log(type, gender);
        return this.items
            .filter(function (item) { return item.type === type; })
            .filter(function (item) { return item.gender === gender; });
    },
    renderFilterByGenderAndType: function (filterGender, filterType, domElement) {
        var filterByGenderAndType = this.filterByGenderAndType(filterGender, filterType);
        this.render(filterByGenderAndType, domElement);
    },
    filterByGender: function (gender) {
        return this.items.filter(function (item) { return item.gender === gender; });
    },
    renderByGender: function (gender, domElement) {
        var filterByGender = this.filterByGender(gender);
        this.render(filterByGender, domElement);
    }
};
function handleShowItems() {
    console.log(gucci.items);
}
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function handleAddItems(ev) {
    ev.preventDefault();
    try {
        var name = ev.target.name.value;
        var price = ev.target.price.value;
        var imgTop = ev.target[2].value;
        var imgBottom = ev.target[3].value;
        var gender = ev.target[4].value;
        var type = ev.target[5].value;
        var id = uid;
        var root = document.getElementById("root");
        gucci.getData();
        gucci.storeData();
        ev.target.reset();
        if (!root)
            throw new Error("no root in DOM");
        gucci.addItems(name, price, imgTop, imgBottom, gender, type, id);
        gucci.renderFilterByGenderAndType(gender, type, root);
    }
    catch (error) {
        console.error(error);
    }
}
function addToCart(id) {
    console.log(id);
    if (gucci.cartItems.some(function (item) { return item.id === id; })) {
        alert("Item Already in Cart");
    }
    else {
        var product = gucci.items.find(function (item) { return item.id === id; });
        gucci.cartItems.push(__assign({}, product));
    }
    console.log(gucci.cartItems);
    updateCart();
}
function removeItemFromCart(id) {
    gucci.cartItems = gucci.cartItems.filter(function (item) { return item.id !== id; });
    updateCart();
}
var cartRoot = document.getElementById("cartRoot");
function renderCartItems() {
    cartRoot.innerHTML = "";
    gucci.cartItems.forEach(function (item) {
        cartRoot.innerHTML +=
            "<div class=\"cartItems\">\n   \n                <p>" + item.name + "</p>\n                <img src=\"" + item.imgTop + "\" alt=\"" + item.name + "\">      \n                <p>" + item.price + "$</p>\n                <button class=\"cartButton\" onclick=\"removeItemFromCart(" + item.id + ")\">Remove Item</button>\n            \n        </div>";
    });
}
function updateCart() {
    renderCartItems();
}
function handleRemoveItems(ev) {
    ev.preventDefault();
    try {
        var name = ev.target.elements.remove.value;
        var root = document.getElementById("root");
        gucci.storeData();
        ev.target.reset();
        if (!root)
            throw new Error("no root in DOM");
        gucci.removeItems(name);
        gucci.render(gucci.items, root);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdate(ev) {
    ev.preventDefault();
    try {
        var itemName = ev.target.elements.itemName.value;
        var newPrice = ev.target.elements.newPrice.value;
        console.log(ev.target.elements.newPrice.value);
        var root = document.getElementById("root");
        gucci.getData();
        gucci.storeData();
        ev.target.reset();
        if (!root)
            throw new Error("no root in DOM");
        // if(!itemName) throw new Error ('newPrice was not caught');
        // if(!newPrice) throw new Error ('newItem was not caught');
        gucci.updateItems(itemName, newPrice);
        gucci.render(gucci.items, root);
    }
    catch (error) {
        console.error(error);
    }
}
function handleFilterByPrice(ev) {
    ev.preventDefault();
    try {
        var price = ev.target.valueAsNumber;
        var gender = ev.target.dataset.gender;
        var root = document.querySelector("#root");
        var filtered = gucci.filterMaxPriceAndGender(gender, price);
        if (!root)
            throw new Error("no root in DOM");
        if (price) {
            gucci.renderMaxPrice(filtered, root);
        }
        else {
            gucci.renderByGender(gender, root);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handlePriceAsc(ev, price) {
    var root = document.getElementById("root");
    var gender = ev.target.dataset.gender;
    gucci.sortByAscending(price);
    gucci.renderByGender(gender, root);
}
function handlePriceDesc(ev, price) {
    gucci.sortByDescending(price);
    var root = document.getElementById("root");
    var gender = ev.target.dataset.gender;
    gucci.renderByGender(gender, root);
}
function handleSelect(ev) {
    try {
        var gender = ev.target.dataset.gender;
        var type = ev.target.value;
        var root = document.getElementById("root");
        if (!root)
            throw new Error("no root in DOM");
        if (type === "all") {
            gucci.renderByGender(gender, root);
        }
        else {
            gucci.renderFilterByGenderAndType(type, gender, root);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderByGender(gender) {
    try {
        var root = document.getElementById("root");
        gucci.getData();
        if (!gender)
            throw new Error("gender was not caught in handleRenderByGender");
        if (!root)
            throw new Error("no root in DOM");
        gucci.renderByGender(gender, root);
    }
    catch (error) {
        console.error(error);
    }
}
// function handleShowCart() {
//   try {
//     const cartRoot = document.getElementById("cartRoot");
//     if (!cartRoot) throw new Error("no cartRoot in DOM");
//     if (cartRoot.style.display === "none") {
//       cartRoot.style.display = "block";
//     } 
//     else {
//       cartRoot.style.display = "none";
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
function handleSearch(ev) {
    //const name= ev.target.value;
    try {
        var searchTerm_1 = ev.target.value;
        console.log(searchTerm_1);
        var root_1 = document.getElementById("root");
        var gender_1 = ev.target.dataset.gender;
        var regExp_1 = new RegExp(searchTerm_1, "i");
        if (!root_1)
            throw new Error("no root in DOM");
        root_1.innerHTML = "";
        console.log(gender_1);
        if (searchTerm_1.length > 0) {
            var foundItem = gucci.items.filter(function (item) {
                if (regExp_1.test(item.name))
                    return true;
                var filteredByItemName = gucci.filterByItemNameAndGender(gender_1, searchTerm_1);
                gucci.renderFilterByItemName(filteredByItemName, root_1);
            });
            var html = foundItem
                .map(function (item) {
                return "<div class=\"items\">\n        <p>" + item.name + "</p>\n        <img class=\"imgTop\" src=\"" + item.imgTop + "\" >\n        <img class=\"imgBottom\" src=\"" + item.imgBottom + "\" >        \n        <p>" + item.price + "$</p>\n        <button class=\"cartButton\" onclick=\"addToCart(" + item.id + ")\">Add To Cart</button>\n        </div>";
            })
                .join("");
            root_1.innerHTML = html;
            console.log(foundItem);
        }
        else {
            gucci.renderByGender(gender_1, root_1);
        }
    }
    catch (error) {
        console.error(error);
    }
}
