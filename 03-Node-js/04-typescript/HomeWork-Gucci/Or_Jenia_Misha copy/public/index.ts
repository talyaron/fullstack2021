import { dir } from "console";



function renderDishesStore(list, domElement) {
  try {
    let html = "";

    list.forEach((item) => {
      html += `<div class="dishes" id = "${item.id}"> 
      
      <div class = "dishes__title"> 
         <h3 class ="dishes__title__name">${item.name}&nbsp</h3> 
         <p class ="dishes__title__price">${item.price} <button onclick="handleAddToCart(event)" id="${item.id}">+</button> </p>
      </div>
         <p class ="dishes__desc">${item.description}</p>
      </div>`;
    });

    domElement.innerHTML = html;

  } catch (error) {
    console.error(error);
  }
}


  function renderDishesERP(list, domElement) {

    let html = `<section class="dishesWrap" > `;

    list.forEach((item) => {

      html += `<div class="dishesERP"> 
          <input type="checkbox" id=${item.id}></input>
           <h3 class ="dishesERP__title__name">${item.name}</h3> 
           <p class ="dishesERP__desc">${item.description}</p>
           <p class ="dishesERP__title__price">${item.price} ₪</p>
           <p class ="dishesERP__title__category"> ${item.category}</p>
          <form onsubmit="handleUpdateDish(event)" id="${item.id}">
           <input type="text" name="name" id="" placeholder="Dish Name"/>
           <input type="number" name="price" id="" placeholder="Dish Price"/>
           <input type="text" name="description" id="" placeholder="Add Dish description"/>
           <select name="category" id="updated-category">
               <option value="Choose" selected disabled>Select category</option>
               <option value="firsts">Firsts</option>
               <option value="soups">Soups</option>
               <option value="salads">Salads</option>
               <option value="buns">Buns</option>
               <option value="robta-yaki">Robta Yaki</option>
               <option value="gyoza">Gyoza</option>
               <option value="inside-out">Inside Out</option>
               <option value="specials">Specials</option>
               <option value="kids">Kids Dishes</option>
               <option value="main">Main Dishes</option>
               <option value="wok">Wok</option>
               <option value="cokctails">Cokctails</option>
               <option value="combinations">Combinations</option>
               <option value="sashimi">Sashimi</option>
               <option value="nigiri">Nigiri</option>
               <option value="sandwich-sushi">Sandwich Sushi</option>
               <option value="maki-sushi">Maki Sushi</option>
               <option value="gonkan">Gonkan Maki</option>
           </select>
           <input type="submit" value="Update"/>
           </form>
  
           
        </div>`;
    });

    html += '</section>'
    domElement.innerHTML = html;

  }


  function renderCart(list, domElement) {
    try {
      let html = "";

      list.forEach((item) => {
        html += `<div class="cart__dishes" id = "${item.id}"> 
        
           <h3 class ="dishes__title__name">${item.name}&nbsp <span>Qnt</span>: ${item.quantity}</h3> 
           <p class ="dishes__title__price">${item.price}₪ <button onclick="handleDeleteFromCart(event)" id="${item.id}">-</button></p>
           </div>`;
      });

      domElement.innerHTML = html;

    } catch (error) {
      console.error(error);
    }
  }



renderSushiMenu();

function renderSushiMenu() {
  try {
    sushiMenu.getData();
    const rootStore = document.getElementById("rootStore");
    const rootERP = document.getElementById("rootERP");

    if (rootStore) {
      sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
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
    const dishName = ev.target.elements.name.value;
    const dishPrice = ev.target.elements.price.valueAsNumber;
    const dishDesc = ev.target.elements.description.value;
    const dishCategory = (<HTMLSelectElement>document.getElementById("category"))
      .value;
    sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);

    renderSushiMenu();
    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

function log(str) {
  console.dir(str)
  console.log(str)
}

function handleDeleteDish() {

  const { children } = document.querySelector('.dishesWrap')
  Array.from(children).forEach(el => {
    const { checked ,id} = <HTMLInputElement>el.children[0]
    if(checked){
      sushiMenu.removeDish(id)
    }

  })

  renderSushiMenu();

}
function handleUpdateDish(ev) {

  ev.preventDefault();

  try {

    const dishName = ev.target.elements.name.value;
    const dishPrice = ev.target.elements.price.valueAsNumber;
    const dishDesc = ev.target.elements.description.value;
    const dishCategory = (<HTMLSelectElement>document.getElementById("updated-category")).value;
    const dishId = ev.target.id;

    const index = sushiMenu.dishes.findIndex((dish) => dish.id === dishId);

    const newDish = { id: dishId, name: dishName, price: dishPrice, description: dishDesc, category: dishCategory };

    if (!dishName) {
      newDish.name = sushiMenu.dishes[index].name
    }

    if (!dishPrice) {
      newDish.price = sushiMenu.dishes[index].price
    }

    if (!dishDesc) {
      newDish.description = sushiMenu.dishes[index].description
    }

    console.log(dishCategory);

    if (dishCategory === 'Choose') {
      newDish.category = sushiMenu.dishes[index].category
    }

    sushiMenu.updateDish(dishId, newDish);
    sushiMenu.getData();
    renderSushiMenu();

  } catch (error) {
    console.error(error);
  }

}


const rootStore = document.getElementById("rootStore");

if (rootStore) {
  sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
}

function handleSearch(ev) {
  try {
    const searchTerm = ev.target.value;
    const regex = new RegExp(searchTerm, "i");
    let html = "";
    const root = document.querySelector("#rootERP");
    if (searchTerm == 0) {
      renderSushiMenu();
      return;
    }
    sushiMenu.dishes.forEach(item => {
      if (regex.test(item.name)) {
        html += `<div class="dishesERP"> 
        <input type="checkbox" id=${item.id}></input></form>
         <h3 class ="dishesERP__title__name">${item.name}</h3> 
         <p class ="dishesERP__desc">${item.description}</p>
         <p class ="dishesERP__title__price">${item.price} ₪</p>
         <p class ="dishesERP__title__category"> ${item.category}</p>
         <form onsubmit="handleUpdateDish(event)" id="${item.id}">
         <input type="text" name="name" id="" placeholder="Dish Name">
         <input type="number" name="price" id="" placeholder="Dish Price">
         <input type="text" name="description" id="" placeholder="Add Dish description">
         <select name="category" id="updated-category">
             <option value="Choose" selected disabled>Select category</option>
             <option value="firsts">Firsts</option>
             <option value="soups">Soups</option>
             <option value="salads">Salads</option>
             <option value="buns">Buns</option>
             <option value="robta-yaki">Robta Yaki</option>
             <option value="gyoza">Gyoza</option>
             <option value="inside-out">Inside Out</option>
             <option value="specials">Specials</option>
             <option value="kids">Kids Dishes</option>
             <option value="main">Main Dishes</option>
             <option value="wok">Wok</option>
             <option value="cokctails">Cokctails</option>
             <option value="combinations">Combinations</option>
             <option value="sashimi">Sashimi</option>
             <option value="nigiri">Nigiri</option>
             <option value="sandwich-sushi">Sandwich Sushi</option>
             <option value="maki-sushi">Maki Sushi</option>
             <option value="gonkan">Gonkan Maki</option>
         </select>
         <input type="submit" value="Update">
         </form>

         
      </div>`;
      }
    })
    root.innerHTML = html;

  } catch (error) {
    console.error(error);
  }
}

// ---- CSS MANIPULATION --- //

function navSlide() {
  try {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navtags");
    if (burger && nav) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("navtags-active");
        burger.classList.toggle("burger-active");
      });
    }

  } catch (error) {
    console.error(error);
  }

}

function popMenuActive() {
  try {
    const picWrap = document.querySelectorAll(".picwrap");
    const pop = document.querySelector(".popmenu");
    const close = document.querySelector(".popmenu__x")
    const blur = document.querySelector(".blurwrapper")
    const overflow = document.querySelector("body")

    if (picWrap && pop && close && blur && overflow) {

      blur.addEventListener("click", () => {
        pop.classList.toggle("popmenu-active");
        blur.classList.toggle("blurwrapper-active")
        overflow.classList.toggle("body-active")
      });

      close.addEventListener("click", () => {
        pop.classList.toggle("popmenu-active");
        blur.classList.toggle("blurwrapper-active")
        overflow.classList.toggle("body-active")
      });

      picWrap.forEach((cell) => {

        cell.addEventListener("click", () => {
          const list = sushiMenu.filterByCategory(cell.id);
          renderSushiMenu();
          sushiMenu.renderDishesStore(list, rootStore);
          pop.classList.toggle("popmenu-active");
          blur.classList.toggle("blurwrapper-active")
          overflow.classList.toggle("body-active")
        });

      })
    }

  } catch (error) {
    console.error(error);
  }
}

popMenuActive()

navSlide();

function popNavBarActive() {
  try {
    const categories = document.querySelectorAll(".popCategory");
    categories.forEach(category => {
      category.addEventListener("click", () => {
        const list = sushiMenu.filterByCategory(category.id);
        renderSushiMenu();
        sushiMenu.renderDishesStore(list, rootStore);
        categories.forEach(category => {
          category.classList.remove("popCategory-active");
        })
        category.classList.add("popCategory-active");

      })
    })

  } catch (error) {
    console.error(error);
  }
}
popNavBarActive();

function popCartActive() {

  try {
    const cartBox = document.querySelector(".cart__box");
    const cartImg = document.querySelector(".cart__img");
    const cartClose = document.querySelector(".cart__close");
    const cart: any = document.querySelector(".cart");
    const cartFooter: any = document.querySelector(".cart__footer");
    const cartQnt: any = document.querySelector(".cart__box__Qnt")

    if (cartBox && cartImg && cartClose && cart && cartFooter && cartQnt) {

      cartImg.addEventListener("click", function () {
        cart.classList.add("cart-active");
        cartBox.classList.add("cart__box-active");
        cartClose.classList.add("cart__close-active");
        cartFooter.classList.add("cart__footer-active");
        cartQnt.style.display = 'none';
      });

      cartClose.addEventListener("click", function () {
        cart.classList.remove("cart-active");
        cartBox.classList.remove("cart__box-active");
        cartClose.classList.remove("cart__close-active");
        cartFooter.classList.remove("cart__footer-active");
        cartQnt.style.display = 'block';
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
    const idToCart = ev.target.id;
    const index = sushiMenu.dishes.findIndex((dish) => dish.id === idToCart);
    const cartRoot = document.getElementById("cart__root");
    const cartBox = document.querySelector(".cart__box");

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
    let sumCartAdd = 0;
    let sumCart = sushiMenu.sumCartPrice(list);
    sumCartAdd += sumCart;

    const totalPriceRoot = document.querySelector(".totalprice");

    if (totalPriceRoot) {
      totalPriceRoot.innerHTML = `Total Price ${sumCartAdd}₪`;
    }

  } catch (error) {
    console.error(error);
  }

}

totalPrice(sushiMenu.cartDishes);

function handleDeleteFromCart(ev) {
  try {
    const idFromCart = ev.target.id;
    sushiMenu.removeCartDish(idFromCart);
    totalPrice(sushiMenu.cartDishes);

  } catch (error) {
    console.error(error);
  }

}