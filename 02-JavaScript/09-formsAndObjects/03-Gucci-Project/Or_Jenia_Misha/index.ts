const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};



interface Menu {
  dishes: Array<Dish>;

  addDish(name: string, price: number, description: string, category: string);
  removeDish(id: string);
  updateDish(id: string, newDish: Dish);
  renderDishesStore(list: any, domElement: any);
  renderDishesERP(list: any, domElement: any);
  storeData();
  getData();
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

  renderDishesStore(list, domElement) {

    let html = "";

    list.forEach((item) => {
      html += `<div class="dishes"> 
      
      <div class = "dishes__title"> 
         <h3 class ="dishes__title__name">${item.name}</h3> 
         <p class ="dishes__title__price">${item.price}</p>
      </div>
         <p class ="dishes__desc">${item.description}</p>
      </div>`;
    });

    domElement.innerHTML = html;
  },

  renderDishesERP(list, domElement) {
    let html = "<form onsubmit=`handleDeleteDish(event)`>";

    list.forEach((item) => {
      html += `<div class="dishes"> 
        <input type="checkbox"></input>
         <h3 class ="dishes__title__name">${item.name}</h3> 
         <p class ="dishes__desc">${item.description}</p>
         <p class ="dishes__title__price">${item.price}</p>
         
      </div>`;
    });

    html += `</form>`

    domElement.innerHTML = html;
  },

  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.dishes));
  },

  getData() {
    const dishes = JSON.parse(localStorage.getItem("storeData"));
    if (dishes && Array.isArray(dishes)) {
      this.dishes = dishes;
    }
  },

};

const rootStore = document.getElementById("rootStore");
const rootERP = document.getElementById("rootERP");


console.log(rootStore);

sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
sushiMenu.renderDishesERP(sushiMenu.dishes, rootERP);


function handleAddDish(ev) {
  ev.preventDefault();
  const dishName = ev.target.elements.name.value;
  const dishPrice = ev.target.elements.price.valueAsNumber;
  const dishDesc = ev.target.elements.description.value;
  const dishCategory = (<HTMLSelectElement>document.getElementById("category"))
    .value;
  sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
  const rootStore = document.getElementById("rootStore");
  const rootERP = document.getElementById("rootERP");
  sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
  sushiMenu.renderDishesERP(sushiMenu.dishes, rootERP);
  ev.target.reset();
}

function handleDeleteDish(ev){

  ev.preventDefault();


}

sushiMenu.getData();



// sushiMenu.renderDishesStore(sushiMenu.dishes, root);


// ---- CSS MANIPULATION --- //

function navSlide() {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navtags');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navtags-active');
  });

}

navSlide();