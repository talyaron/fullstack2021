const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navtags');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navtags-active');
  });

}

navSlide();


interface Menu {
  dishes: Array<Dish>;

  addDish?(name: string, price: number, description: string, category: string);
  removeDish?(id: string);
  updateDish?(id: string, newDish: Dish);
  renderDishes?(list: any, domElement: any);
  storeData?();
  getData?();
}

interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

let sushiMenu: Menu = {
  dishes: [
    {
      id: "a1",
      name: "Maguro Nigiri",
      price: 70,
      description:
        "Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs",
      category: "firsts",
    },
  ],

  addDish(name, price, description, category) {
    let id = uid();
    this.dishes.push({ id, name, price, description, category });
    this.storeData();
    this.getData();
  },

  removeDish(id) {
    this.dishes = this.dishes.filter((dish) => dish.id !== id);
  },

  updateDish(id, newDish) {
    const index = this.dishes.findIndex((dish) => dish.id === id);

    if (index >= 0) {
      this.dishes[index] = newDish;
    }
  },
  renderDishes(list, domElement) {
    let html = "";
    list.forEach((item) => {
      html += `<div class="dishes"> <div class = "dishes__title"> <h3 class ="dishes__title__name">${item.name}</h3> <p class ="dishes__title__price">${item.price}</p></div><p class ="dishes__desc">${item.description}</p></div>`;
    });

    domElement.innerHTML = html;
  },
  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.dishes));
  },
  getData() {
    const dishes = JSON.parse(localStorage.getItem("storeData"));
    if (dishes && Array.isArray(dishes)) {
      this.dishes= dishes;
    }
  },
};
const root = document.getElementById("root");
sushiMenu.renderDishes(sushiMenu.dishes, root);

function handleAddDish(ev) {
  ev.preventDefault();
  const dishName = ev.target.elements.name.value;
  const dishPrice = ev.target.elements.price.valueAsNumber;
  const dishDesc = ev.target.elements.description.value;
  const dishCategory = (<HTMLSelectElement>document.getElementById("category"))
    .value;
  sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
  const root = document.getElementById("root");
  sushiMenu.renderDishes(sushiMenu.dishes, root);
  ev.target.reset();
}

sushiMenu.getData();

sushiMenu.renderDishes(sushiMenu.dishes, root);
