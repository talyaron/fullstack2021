"use strict";

exports.__esModule = true;

var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

var sushiMenu = {
  dishes: [{
    id: uid(),
    name: "Maguro Nigiri",
    price: 70,
    description: "Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs",
    category: "firsts"
  }, {
    id: uid(),
    name: "Mexican Tuna",
    price: 68,
    description: "Red tuna carpaccio served on crispy tortilla, topped with anchovy aioli, hot green pepper, black olives, cherry tomatoes and baby greens.",
    category: "firsts"
  }, {
    id: uid(),
    name: "Tuna Tartare",
    price: 66,
    description: "Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs",
    category: "firsts"
  }, {
    id: uid(),
    name: "Crispy Cabbage Salad",
    price: 54,
    description: "Cabbage mix, crispy tortilla, crispy chicken strips, cherry tomatoes, coriander and black sesame, in peanut butter and caramel sauce.",
    category: "salads"
  }, {
    id: uid(),
    name: "Soba Noodles Salad",
    price: 50,
    description: "oba noodles, red cabbage, carrot, cherry tomatoes, cucumber, sprouts, green onion, coriander, wasabi peas and black sesame, in Japanese goma sauce.",
    category: "salads"
  }, {
    id: uid(),
    name: "Tempura Sea Bass Salad",
    price: 56,
    description: "Sea bass coated in crispy tempura, mint, basil, coriander, cherry tomatoes, papaya, radishes and shallots. In fish sauce, red chili and lemon sauce.",
    category: "salads"
  }, {
    id: uid(),
    name: "Japanese corn Cream",
    price: 38,
    description: "Japanese corn soup with kaffir lime, lemongrass, english pepper and milk . Served with tortilla sticks.",
    category: "soups"
  }, {
    id: uid(),
    name: "White miso",
    price: 35,
    description: "Miso, dashi, tofu cubes, nameko mushrooms, green onion and wakame seaweed,Vietnamese style chicken broth, chicken dumplings/chicken breast, rice noodles, red onion, green onion and cilantro",
    category: "soups"
  }, {
    id: uid(),
    name: "Pho soup",
    price: 64,
    description: "Vietnamese style chicken broth, chicken dumplings/chicken breast, rice noodles, red onion, green onion and cilantro",
    category: "soups"
  }, {
    id: uid(),
    name: "Portobello Bun",
    price: 52,
    description: "Tempura Portobello mushroom, smoked teriyaki, Thai beans, red onion and daikon.",
    category: "buns"
  }, {
    id: uid(),
    name: "Crispy Chicken Bun",
    price: 54,
    description: "Crispy chicken breast, wasabi-yuzu aioli, iceberg lettuce and cucumber kimchi",
    category: "buns"
  }, {
    id: uid(),
    name: "Meat Bun",
    price: 56,
    description: "Slow-cooked meat, wasabi-yuzu aioli, iceberg lettuce and cucumber kimchi",
    category: "buns"
  }, {
    id: uid(),
    name: "Cabbage and Spinach Gyoza",
    price: 52,
    description: "Dumplings seared in butter, stuffed with spinach leaves and cabbage, seasoned with ginger and sesame oil.",
    category: "gyoza"
  }, {
    id: uid(),
    name: "Shrimp Gyoza",
    price: 52,
    description: "Rice dumplings seared in butter, stuffed with steamed shrimps.",
    category: "gyoza"
  }, {
    id: uid(),
    name: "Chicken Gyoza",
    price: 56,
    description: "Butter seared dumplings, stuffed with chicken, leek, ginger, spring onion and sesame oil.",
    category: "gyoza"
  }, {
    id: uid(),
    name: "Salmon Yakitori",
    price: 60,
    description: "Glazed with miso, served with grilled vegetables and ponzu sauce.",
    category: "robta-yaki"
  }, {
    id: uid(),
    name: "Chicken pullet satay Yakitori",
    price: 60,
    description: "Thai satay sauce, serve with grilled vegetables and ponzu sauce.",
    category: "robta-yaki"
  }, {
    id: uid(),
    name: "Chopped chicken barbecue pullet Yakitori",
    price: 60,
    description: "In Korean barbecue glaze, serve with grilled vegetables and ponzu sauce.",
    category: "robta-yaki"
  }, {
    id: uid(),
    name: "Curry Dun",
    price: 72,
    description: "Egg noodles with tofu/chicken/sirloin/shrimps in red curry and coconut milk, peanuts, green onions and coriander",
    category: "wok"
  }, {
    id: uid(),
    name: "Pad Thai",
    price: 72,
    description: "Rice noodles with tofu/chicken/sirloin/shrimps, omelet, bean sprouts, green onion, white cabbage, crushed peanuts, and coriander in red tamarind sauce. (contains oyster sause).",
    category: "wok"
  }, {
    id: uid(),
    name: "Sechuan beef",
    price: 72,
    description: "Flank steak strips, portobello mushrooms, hot red chili, green onion and caramelized cashew. Soy sauce, oyster, tamarind, garlic and ginger. Served with  steamed rice on the side",
    category: "wok"
  }, {
    id: uid(),
    name: "Sea Bream",
    price: 108,
    description: "Tempura tofu bites in coconut milk and yellow curry sauce, Thai beans and cauliflower. Served with a side of coconut rice with toasted coconut shavings.",
    category: "main"
  }, {
    id: uid(),
    name: "Steamd salmon",
    price: 104,
    description: "Salmon fillet, broccoli, shimeji mushrooms, zucchini, sprouts and shallot flakes in peanut butter and soy sauce.",
    category: "main"
  }, {
    id: uid(),
    name: "Thai Roll",
    price: 62,
    description: "Shrimp tempura, spicy tuna and avocado topped with seared salmon.",
    category: "inside-out"
  }, {
    id: uid(),
    name: "Sake Yaki Roll",
    price: 64,
    description: "Baked salmon, spicy mayonnaise, steamed shrimp, avocado and lettuce topped with tempura flakes.",
    category: "inside-out"
  }, {
    id: uid(),
    name: "Purple Rain",
    price: 64,
    description: "Spicy Yellow Tail and avocado topped with crunchy beetroot chips.",
    category: "inside-out"
  }, {
    id: uid(),
    name: "Mountain Roll",
    price: 64,
    description: "Spicy salmon and avocado maki, topped with shrimps tempura bites, yuzu chili aioli and chives. 6 pcs",
    category: "specials"
  }, {
    id: uid(),
    name: "Lemon Twist",
    price: 64,
    description: "Spicy tuna, cucumber and oshinku, wrapped in spicy tuna and topped with sliced lemon. 8 pcs",
    category: "specials"
  }, {
    id: uid(),
    name: "Out of Control",
    price: 66,
    description: "Spicy tuna and tempura bits wrapped with tuna and avocado.",
    category: "specials"
  }, {
    id: uid(),
    name: "Salmon Avocad",
    price: 40,
    description: "Roll wrapped in nori filled with fish / seafood / vegetables and rice. 6 pcs",
    category: "maki-sushi"
  }, {
    id: uid(),
    name: "Tamago",
    price: 34,
    description: "Japanese omelet & cucumber Maki Roll wrapped in nori filled with fish / seafood / vegetables and rice. 6 pcs",
    category: "maki-sushi"
  }, {
    id: uid(),
    name: "Tempura Shrimp",
    price: 40,
    description: "Roll wrapped in nori filled with fish / seafood / vegetables and rice. 6 pcs",
    category: "maki-sushi"
  }, {
    id: uid(),
    name: "Salmon & Avocado Sandwich",
    price: 56,
    description: "Topped with black sesame.",
    category: "sandwich-sushi"
  }, {
    id: uid(),
    name: "Spicy Salmon Sandwich",
    price: 56,
    description: "Spicy salmon and avocado topped with tempura flakes.",
    category: "sandwich-sushi"
  }, {
    id: uid(),
    name: "Fu Cheese Sandwich",
    price: 62,
    description: "Salmon, avocado and hard cheese fried in tempura, topped with teriyaki sauce.",
    category: "sandwich-sushi"
  }, {
    id: uid(),
    name: "Tamago Nigiri",
    price: 32,
    description: "Rice fingers with fish / vegetable. (2 pcs)",
    category: "nigiri"
  }, {
    id: uid(),
    name: "Bass Nigiri",
    price: 34,
    description: "Rice fingers with fish / vegetable. (2 pcs)",
    category: "nigiri"
  }, {
    id: uid(),
    name: "Red Tuna Nigiri",
    price: 40,
    description: "Rice fingers with fish / vegetable. (2 pcs)",
    category: "nigiri"
  }, {
    id: uid(),
    name: "Sea Bass Sashimi",
    price: 54,
    description: "Raw fish filet sliced thick/finely - 3/5 pcs",
    category: "sashimi"
  }, {
    id: uid(),
    name: "Salmon Sashimi",
    price: 52,
    description: "Raw fish filet sliced thick/finely - 3/5 pcs",
    category: "sashimi"
  }, {
    id: uid(),
    name: "Yellow Tail Sashimi",
    price: 56,
    description: "Raw fish filet sliced thick/finely - 3/5 pcs",
    category: "sashimi"
  }, {
    id: uid(),
    name: "Double Combo (20 pcs)",
    price: 138,
    description: "Fish and chips (4 pcs), Salmon and avocado inside out (4 pcs), Spicy Salmon Sandwich (4 pcs), Tuna and green onion maki (3 pcs), Salmon avocado maki (3 pcs), Salmon nigiri (1), Bass nigiri (1). Spicy Salmon Sandwich",
    category: "combinations"
  }, {
    id: uid(),
    name: "Crispy Combo (14 pcs)",
    price: 96,
    description: "Inside out shrimp tempura (4 pcs), Inside out salmon and avocado (4 pcs), Hot salmon futomaki (2 pcs), Hot salmon maki (3 pcs)",
    category: "combinations"
  }, {
    id: uid(),
    name: "Special Combo (21 pcs)",
    price: 210,
    description: "Tuna sashimi (2 pcs), Salmon sashimi (2 pcs), Sea bass sashimi (2 pcs), Golden roll (4 pcs), Inside out salmon and avocado (4 pcs), Fu cheese (4 pcs), Tuna nigiri (1 pcs), Salmon nigiri (1 pcs), Sea bass nigiri (1 pcs)",
    category: "combinations"
  }, {
    id: uid(),
    name: "Chicken Little",
    price: 44,
    description: "Crispy coated chicken breast mini schnitzels along with steamed rice with ketchup on the side.",
    category: "kids"
  }, {
    id: uid(),
    name: "Kid Noodles",
    price: 42,
    description: "Egg noodles with chicken breast and omelet in sweet soy sauce (half order available - Baby Noodles 29).",
    category: "kids"
  }, {
    id: uid(),
    name: "Tempura Sweet Potato",
    price: 44,
    description: "Tempura sweet potato strips Served with sweet & sour sauce.",
    category: "kids"
  }, {
    id: uid(),
    name: "Chicken Little",
    price: 44,
    description: "Crispy coated chicken breast mini schnitzels along with steamed rice with ketchup on the side.",
    category: "gonkan"
  }, {
    id: uid(),
    name: "Kid Noodles",
    price: 42,
    description: "Egg noodles with chicken breast and omelet in sweet soy sauce (half order available - Baby Noodles 29).",
    category: "gonkan"
  }, {
    id: uid(),
    name: "Tempura Sweet Potato",
    price: 44,
    description: "Tempura sweet potato strips Served with sweet & sour sauce.",
    category: "gonkan"
  }, {
    id: uid(),
    name: "Martini Lychee",
    price: 48,
    description: "Gin, Martini Bianco, lychee puree, creme de cassis, lemon juice.",
    category: "cocktails"
  }, {
    id: uid(),
    name: "Thai Martini",
    price: 48,
    description: "Gin, lemon juice, st germain liquor, sugar cane syrup, cucumber, basil.",
    category: "cocktails"
  }, {
    id: uid(),
    name: "Fuji Flower",
    price: 48,
    description: "sake nigori (“the perfect snow”), cava, aperol, watermelon, lime, scented like green tea.",
    category: "cocktails"
  }],
  cartDishes: [],
  searchDishes: [],
  addDish: function addDish(name, price, description, category) {
    try {
      var id = uid();
      this.dishes.push({
        id: id,
        name: name,
        price: price,
        description: description,
        category: category
      });
      this.storeData();
    } catch (error) {
      console.error(error);
    }
  },
  addCartDish: function addCartDish(cartObj) {
    try {
      var quantity = void 0;
      var cartIndex = sushiMenu.cartDishes.findIndex(function (dish) {
        return dish.id === cartObj.id;
      });

      if (cartIndex < 0) {
        cartObj.quantity = 1;
        this.cartDishes.push(cartObj);
      } else {
        this.cartDishes[cartIndex].quantity += 1;
      }
    } catch (error) {
      console.error(error);
    }
  },
  removeDish: function removeDish(id) {
    try {
      this.dishes = this.dishes.filter(function (dish) {
        return dish.id !== id;
      });
      this.storeData();
    } catch (error) {
      console.error(error);
    }
  },
  removeCartDish: function removeCartDish(id) {
    try {
      var cartRoot = document.getElementById("cart__root");
      this.cartDishes = this.cartDishes.filter(function (dish) {
        return dish.id !== id;
      });
      this.storeData();
      this.renderCart(sushiMenu.cartDishes, cartRoot);
    } catch (error) {
      console.error(error);
    }
  },
  updateDish: function updateDish(id, newDish) {
    try {
      var index = this.dishes.findIndex(function (dish) {
        return dish.id === id;
      });

      if (index >= 0) {
        this.dishes[index] = newDish;
      }

      this.storeData();
    } catch (error) {
      console.error(error);
    }
  },
  filterByCategory: function filterByCategory(category) {
    try {
      return this.dishes.filter(function (dish) {
        return dish.category === category;
      });
    } catch (error) {
      console.error(error);
    }
  },
  renderDishesStore: function renderDishesStore(list, domElement) {
    try {
      var html_1 = "";
      list.forEach(function (item) {
        html_1 += "<div class=\"dishes\" id = \"" + item.id + "\"> \n        \n        <div class = \"dishes__title\"> \n           <h3 class =\"dishes__title__name\">" + item.name + "&nbsp</h3> \n           <p class =\"dishes__title__price\">" + item.price + " <button onclick=\"handleAddToCart(event)\" id=\"" + item.id + "\">+</button> </p>\n        </div>\n           <p class =\"dishes__desc\">" + item.description + "</p>\n        </div>";
      });
      domElement.innerHTML = html_1;
    } catch (error) {
      console.error(error);
    }
  },
  renderDishesERP: function renderDishesERP(list, domElement) {
    var html = "<section class=\"dishesWrap\" > ";
    list.forEach(function (item) {
      html += "<div class=\"dishesERP\"> \n          <input type=\"checkbox\" id=" + item.id + "></input>\n           <h3 class =\"dishesERP__title__name\">" + item.name + "</h3> \n           <p class =\"dishesERP__desc\">" + item.description + "</p>\n           <p class =\"dishesERP__title__price\">" + item.price + " \u20AA</p>\n           <p class =\"dishesERP__title__category\"> " + item.category + "</p>\n          <form onsubmit=\"handleUpdateDish(event)\" id=\"" + item.id + "\">\n           <input type=\"text\" name=\"name\" id=\"\" placeholder=\"Dish Name\"/>\n           <input type=\"number\" name=\"price\" id=\"\" placeholder=\"Dish Price\"/>\n           <input type=\"text\" name=\"description\" id=\"\" placeholder=\"Add Dish description\"/>\n           <select name=\"category\" id=\"updated-category\">\n               <option value=\"Choose\" selected disabled>Select category</option>\n               <option value=\"firsts\">Firsts</option>\n               <option value=\"soups\">Soups</option>\n               <option value=\"salads\">Salads</option>\n               <option value=\"buns\">Buns</option>\n               <option value=\"robta-yaki\">Robta Yaki</option>\n               <option value=\"gyoza\">Gyoza</option>\n               <option value=\"inside-out\">Inside Out</option>\n               <option value=\"specials\">Specials</option>\n               <option value=\"kids\">Kids Dishes</option>\n               <option value=\"main\">Main Dishes</option>\n               <option value=\"wok\">Wok</option>\n               <option value=\"cokctails\">Cokctails</option>\n               <option value=\"combinations\">Combinations</option>\n               <option value=\"sashimi\">Sashimi</option>\n               <option value=\"nigiri\">Nigiri</option>\n               <option value=\"sandwich-sushi\">Sandwich Sushi</option>\n               <option value=\"maki-sushi\">Maki Sushi</option>\n               <option value=\"gonkan\">Gonkan Maki</option>\n           </select>\n           <input type=\"submit\" value=\"Update\"/>\n           </form>\n  \n           \n        </div>";
    });
    html += '</section>';
    domElement.innerHTML = html;
  },
  renderCart: function renderCart(list, domElement) {
    try {
      var html_2 = "";
      list.forEach(function (item) {
        html_2 += "<div class=\"cart__dishes\" id = \"" + item.id + "\"> \n        \n           <h3 class =\"dishes__title__name\">" + item.name + "&nbsp <span>Qnt</span>: " + item.quantity + "</h3> \n           <p class =\"dishes__title__price\">" + item.price + "\u20AA <button onclick=\"handleDeleteFromCart(event)\" id=\"" + item.id + "\">-</button></p>\n           </div>";
      });
      domElement.innerHTML = html_2;
    } catch (error) {
      console.error(error);
    }
  },
  sumCartPrice: function sumCartPrice(list) {
    try {
      var sum_1 = 0;
      list.forEach(function (dish) {
        sum_1 += dish.price * dish.quantity;
      });
      return sum_1;
    } catch (error) {
      console.error(error);
    }
  },
  storeData: function storeData() {
    try {
      localStorage.setItem("storeData", JSON.stringify(this.dishes));
    } catch (error) {
      console.error(error);
    }
  },
  getData: function getData() {
    try {
      var dishes = JSON.parse(localStorage.getItem("storeData"));

      if (dishes && Array.isArray(dishes)) {
        this.dishes = dishes;
      }
    } catch (error) {
      console.error(error);
    }
  }
};
renderSushiMenu();

function renderSushiMenu() {
  try {
    sushiMenu.getData();
    var rootStore_1 = document.getElementById("rootStore");
    var rootERP = document.getElementById("rootERP");

    if (rootStore_1) {
      sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore_1);
    }

    if (rootERP) {
      sushiMenu.renderDishesERP(sushiMenu.dishes, rootERP);
    }
  } catch (error) {
    console.error(error);
  }
}

function handleAddDish(ev) {
  try {
    ev.preventDefault();
    var dishName = ev.target.elements.name.value;
    var dishPrice = ev.target.elements.price.valueAsNumber;
    var dishDesc = ev.target.elements.description.value;
    var dishCategory = document.getElementById("category").value;
    sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
    renderSushiMenu();
    ev.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function log(str) {
  console.dir(str);
  console.log(str);
}

function handleDeleteDish() {
  var children = document.querySelector('.dishesWrap').children;
  Array.from(children).forEach(function (el) {
    var _a = el.children[0],
        checked = _a.checked,
        id = _a.id;

    if (checked) {
      sushiMenu.removeDish(id);
    }
  });
  renderSushiMenu();
}

function handleUpdateDish(ev) {
  ev.preventDefault();

  try {
    var dishName = ev.target.elements.name.value;
    var dishPrice = ev.target.elements.price.valueAsNumber;
    var dishDesc = ev.target.elements.description.value;
    var dishCategory = document.getElementById("updated-category").value;
    var dishId_1 = ev.target.id;
    var index = sushiMenu.dishes.findIndex(function (dish) {
      return dish.id === dishId_1;
    });
    var newDish = {
      id: dishId_1,
      name: dishName,
      price: dishPrice,
      description: dishDesc,
      category: dishCategory
    };

    if (!dishName) {
      newDish.name = sushiMenu.dishes[index].name;
    }

    if (!dishPrice) {
      newDish.price = sushiMenu.dishes[index].price;
    }

    if (!dishDesc) {
      newDish.description = sushiMenu.dishes[index].description;
    }

    console.log(dishCategory);

    if (dishCategory === 'Choose') {
      newDish.category = sushiMenu.dishes[index].category;
    }

    sushiMenu.updateDish(dishId_1, newDish);
    sushiMenu.getData();
    renderSushiMenu();
  } catch (error) {
    console.error(error);
  }
}

var rootStore = document.getElementById("rootStore");

if (rootStore) {
  sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
}

function handleSearch(ev) {
  try {
    var searchTerm = ev.target.value;
    var regex_1 = new RegExp(searchTerm, "i");
    var html_3 = "";
    var root = document.querySelector("#rootERP");

    if (searchTerm == 0) {
      renderSushiMenu();
      return;
    }

    sushiMenu.dishes.forEach(function (item) {
      if (regex_1.test(item.name)) {
        html_3 += "<div class=\"dishesERP\"> \n        <input type=\"checkbox\" id=" + item.id + "></input></form>\n         <h3 class =\"dishesERP__title__name\">" + item.name + "</h3> \n         <p class =\"dishesERP__desc\">" + item.description + "</p>\n         <p class =\"dishesERP__title__price\">" + item.price + " \u20AA</p>\n         <p class =\"dishesERP__title__category\"> " + item.category + "</p>\n         <form onsubmit=\"handleUpdateDish(event)\" id=\"" + item.id + "\">\n         <input type=\"text\" name=\"name\" id=\"\" placeholder=\"Dish Name\">\n         <input type=\"number\" name=\"price\" id=\"\" placeholder=\"Dish Price\">\n         <input type=\"text\" name=\"description\" id=\"\" placeholder=\"Add Dish description\">\n         <select name=\"category\" id=\"updated-category\">\n             <option value=\"Choose\" selected disabled>Select category</option>\n             <option value=\"firsts\">Firsts</option>\n             <option value=\"soups\">Soups</option>\n             <option value=\"salads\">Salads</option>\n             <option value=\"buns\">Buns</option>\n             <option value=\"robta-yaki\">Robta Yaki</option>\n             <option value=\"gyoza\">Gyoza</option>\n             <option value=\"inside-out\">Inside Out</option>\n             <option value=\"specials\">Specials</option>\n             <option value=\"kids\">Kids Dishes</option>\n             <option value=\"main\">Main Dishes</option>\n             <option value=\"wok\">Wok</option>\n             <option value=\"cokctails\">Cokctails</option>\n             <option value=\"combinations\">Combinations</option>\n             <option value=\"sashimi\">Sashimi</option>\n             <option value=\"nigiri\">Nigiri</option>\n             <option value=\"sandwich-sushi\">Sandwich Sushi</option>\n             <option value=\"maki-sushi\">Maki Sushi</option>\n             <option value=\"gonkan\">Gonkan Maki</option>\n         </select>\n         <input type=\"submit\" value=\"Update\">\n         </form>\n\n         \n      </div>";
      }
    });
    root.innerHTML = html_3;
  } catch (error) {
    console.error(error);
  }
} // ---- CSS MANIPULATION --- //


function navSlide() {
  try {
    var burger_1 = document.querySelector(".burger");
    var nav_1 = document.querySelector(".navtags");

    if (burger_1 && nav_1) {
      burger_1.addEventListener("click", function () {
        nav_1.classList.toggle("navtags-active");
        burger_1.classList.toggle("burger-active");
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function popMenuActive() {
  try {
    var picWrap = document.querySelectorAll(".picwrap");
    var pop_1 = document.querySelector(".popmenu");
    var close = document.querySelector(".popmenu__x");
    var blur_1 = document.querySelector(".blurwrapper");
    var overflow_1 = document.querySelector("body");

    if (picWrap && pop_1 && close && blur_1 && overflow_1) {
      blur_1.addEventListener("click", function () {
        pop_1.classList.toggle("popmenu-active");
        blur_1.classList.toggle("blurwrapper-active");
        overflow_1.classList.toggle("body-active");
      });
      close.addEventListener("click", function () {
        pop_1.classList.toggle("popmenu-active");
        blur_1.classList.toggle("blurwrapper-active");
        overflow_1.classList.toggle("body-active");
      });
      picWrap.forEach(function (cell) {
        cell.addEventListener("click", function () {
          var list = sushiMenu.filterByCategory(cell.id);
          renderSushiMenu();
          sushiMenu.renderDishesStore(list, rootStore);
          pop_1.classList.toggle("popmenu-active");
          blur_1.classList.toggle("blurwrapper-active");
          overflow_1.classList.toggle("body-active");
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
}

popMenuActive();
navSlide();

function popNavBarActive() {
  try {
    var categories_1 = document.querySelectorAll(".popCategory");
    categories_1.forEach(function (category) {
      category.addEventListener("click", function () {
        var list = sushiMenu.filterByCategory(category.id);
        renderSushiMenu();
        sushiMenu.renderDishesStore(list, rootStore);
        categories_1.forEach(function (category) {
          category.classList.remove("popCategory-active");
        });
        category.classList.add("popCategory-active");
      });
    });
  } catch (error) {
    console.error(error);
  }
}

popNavBarActive();

function popCartActive() {
  try {
    var cartBox_1 = document.querySelector(".cart__box");
    var cartImg = document.querySelector(".cart__img");
    var cartClose_1 = document.querySelector(".cart__close");
    var cart_1 = document.querySelector(".cart");
    var cartFooter_1 = document.querySelector(".cart__footer");
    var cartQnt_1 = document.querySelector(".cart__box__Qnt");

    if (cartBox_1 && cartImg && cartClose_1 && cart_1 && cartFooter_1 && cartQnt_1) {
      cartImg.addEventListener("click", function () {
        cart_1.classList.add("cart-active");
        cartBox_1.classList.add("cart__box-active");
        cartClose_1.classList.add("cart__close-active");
        cartFooter_1.classList.add("cart__footer-active");
        cartQnt_1.style.display = 'none';
      });
      cartClose_1.addEventListener("click", function () {
        cart_1.classList.remove("cart-active");
        cartBox_1.classList.remove("cart__box-active");
        cartClose_1.classList.remove("cart__close-active");
        cartFooter_1.classList.remove("cart__footer-active");
        cartQnt_1.style.display = 'block';
      });
    }
  } catch (error) {
    console.error(error);
  }
}

popCartActive();

function handlePlaceOrder(ev) {
  ev.preventDefault();

  try {
    window.alert("place order");
  } catch (error) {
    console.error(error);
  }
}

function handleAddToCart(ev) {
  try {
    var idToCart_1 = ev.target.id;
    var index = sushiMenu.dishes.findIndex(function (dish) {
      return dish.id === idToCart_1;
    });
    var cartRoot = document.getElementById("cart__root");
    var cartBox = document.querySelector(".cart__box");

    if (cartBox.classList.contains("cart__box-click")) {
      cartBox.classList.remove("cart__box-click");
    }

    if (!cartBox.classList.contains("cart__box-click")) {
      cartBox.classList.add("cart__box-click");
    }

    sushiMenu.addCartDish(sushiMenu.dishes[index]);
    sushiMenu.renderCart(sushiMenu.cartDishes, cartRoot);
    totalPrice(sushiMenu.cartDishes);
  } catch (error) {
    console.error(error);
  }
}

function totalPrice(list) {
  try {
    var sumCartAdd = 0;
    var sumCart = sushiMenu.sumCartPrice(list);
    sumCartAdd += sumCart;
    var totalPriceRoot = document.querySelector(".totalprice");

    if (totalPriceRoot) {
      totalPriceRoot.innerHTML = "Total Price " + sumCartAdd + "\u20AA";
    }
  } catch (error) {
    console.error(error);
  }
}

totalPrice(sushiMenu.cartDishes);

function handleDeleteFromCart(ev) {
  try {
    var idFromCart = ev.target.id;
    sushiMenu.removeCartDish(idFromCart);
    totalPrice(sushiMenu.cartDishes);
  } catch (error) {
    console.error(error);
  }
}