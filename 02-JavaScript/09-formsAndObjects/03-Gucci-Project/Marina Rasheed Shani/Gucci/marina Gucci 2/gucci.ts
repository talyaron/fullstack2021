// popup
const women: any = document.querySelector(".title_mouseover");
const popup: any = document.querySelector(".category__women");
const closePopup: any = document.querySelector(".popup_close");

women.addEventListener("mouseover", () => {
  popup.style.visibility = "visible";
});

closePopup.addEventListener("click", () => {
  popup.style.visibility = "hidden";
});




const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

<<<<<<< HEAD
interface Item {

  id: string;
  title: string;
  price: number;
  category: "dress" | "pans";
}


interface Gucci {
  id?: string;
  data: Array<Item>;
  addItem(title: string, category: "dress" | "pans", price: number);
  filterByType(category: "dress" | "pans");
  filterMaxPrice(price: number);

  sortAscen();
  sortDescen();
  deleteItem(id: string);
  deleteItemByName(itemName: string);

  updateItem(id: string, newName: string);
=======
interface Store {
  products: Array<Product>;
  addItem(title: string, category: string, price: number, id: string);
  addNewItem(title: string, category: string, price: number); //there was property of id
  //if you don't send id to function, you don't need to declare it.
  //Be sure you use the same type of values in function parameters
<<<<<<< HEAD
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
=======
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
  storeData();
  getData();

  render(list: Array<Item>, domElement: any);
  renderAllData(domElement: any);
  renderFilter(domElement: any, filtered: Array<Item>);
  renderByType(category: "dress" | "pans", domElement);
}


<<<<<<< HEAD
const gucciShop: Gucci = {
  data: [],

  addItem(title, category, price) {
    const id = uid();
    this.data = [
      { title: "Tiger denim shorts", price: 120, category: "short", id: "1" },
      { title: "Shiny leather pant", price: 450, category: "pants", id: "2" },
=======
const gucci: Store = {
  products: [
    { title: "pants", price: 450, category: "women", id: "2" }
  ],

  addItem() {
    this.products = [
      { title: "short", price: 120, category: "women", id: "1" },
      //if your id is string - he must to be writen like string (was 1 not "1")
      //also you have uid, use him to create id, ex:
      { title: "pants", price: 450, category: "women", id: uid() },
      { title: "dress", price: 378, category: "women", id: "3" },
<<<<<<< HEAD
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
=======
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
    ];
    this.data.push({ title, price, category });
    this.storeData();
  },

<<<<<<< HEAD
  filterMaxPrice(price): Array<Item> {
    return this.data.filter((item) => item.price < price);
  },

  filterByType(category) {
    return this.data.filter((item) => item.category === category);
  },

  sortAscen() {
    console.log("sortAscen");
    this.data = this.data.sort((a, b) => {
      return a.price - b.price;
    });
    console.log(this.data);
  },

  sortDescen() {
    console.log("sortDescen");
    this.data = this.data.sort((a, b) => {
      return b.price - a.price;
    });
    console.dir(this);
  },

  deleteItem(id) {
    this.data = this.data.filter((item) => item.id !== id);
  },

  deleteItemByName(itemName: string) {
    const index = this.data.findIndex((item) => item.title === itemName);
    if (index >= 0) {
      this.data.splice(index, 1);
    }
  },

  updateItem(id, newName) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.data[index].title = newName;
    }
  },

=======
  addNewItem(title, price, category) {

    const id = uid();
    const item = { title, price, category, id }
    console.log(item)

    console.log(this.products)

    if (item) {
      try {
        console.log(this.products)
        this.products.push(item)
        console.log(`pushed`)
      } catch (error) {
        console.log(error)
      }
    }
    // this.products.push(item);
    // this.storeData();
  },


<<<<<<< HEAD
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
=======
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.products));
  },

  getData() {
    this.products = JSON.parse(localStorage.getItem("storeData"));
  },



  renderByType(category, domElement) {
    const filtered = this.filterByType(category);
    this.render(filtered, domElement);
  },

  renderFilter(filtered, domElement) {
    this.render(domElement, filtered);
  },

  render(list, domElement) {
    let html = "";
    list.forEach((item) => {
      html += `<div class="item">
        <h3> ${item.title}</h3><p>${item.category}</p>
        <h3>${item.price}</h3>

         <button onclick="handleDelete('${item.id}')">Delete</button>

        </div>`;
    });

    domElement.innerHTML = html;
  },

  renderAllData(domElement) {
    this.render(this.data, domElement);
  },
}

console.log(gucci.products)
<<<<<<< HEAD



function handlePriceAscen() {
  const root = document.getElementById("root");
  gucciShop.sortAscen(); 
  gucciShop.renderAllData(root);
}

function handlePriseDescen() {
  const root = document.getElementById("root");
  gucciShop.sortDescen();
  gucciShop.renderAllData(root);
}
=======
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f

function handleSelect(e) {
  const root = document.getElementById("root");
  const category = e.target.value;
  if (category === "all") {
    gucciShop.renderAllData(root);
  } else {
    console.log(category);
    gucciShop.renderByType(category, root);
  }
}

function handleFilter(e) {
   e.preventDefault();
  const price = e.target.valueAsNumber;
  const root = document.getElementById("root");
  if (price) {
    // console.log(price);
    const filtered = gucciShop.filterMaxPrice(price);
    // console.log(filtered);
    gucciShop.renderFilter(filtered, root) ;
  } else {
    gucciShop.renderAllData(root);
  }
}

function handleSubmit(e) {
  e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
  console.dir(e.target);
=======

>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
=======

>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
  const root: any = document.querySelector("#root");

  const title: string = e.target.elements.title.value; //was any
  const price: number = e.target.elements.price.value;
<<<<<<< HEAD
<<<<<<< HEAD
  const category: "dress" | "pans" = e.target.elements.category.value;
  gucciShop.addItem(title, category, price);
  gucciShop.renderAllData(root);

  e.target.reset();
=======
=======
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
  const category: string = e.target.elements.category.value; //was number

  console.log(`title is ${title} category ${category} price ${price}`)

  gucci.addNewItem(title, category, price);

  gucci.renderAllData(root);
>>>>>>> bb55c569c908d6802651ea8f5cf3a116f372f57f
}

function handleDeleteByName(e) {
  e.preventDefault();
  const title = e.target.elements.delete.value;
  gucciShop.deleteItemByName(title);
  const root = document.getElementById("root");
  gucciShop.renderAllData(root);
}

function handleDelete(id) {
  console.log(id);
  const root = document.getElementById("root");
  gucciShop.deleteItem(id);
  gucciShop.renderAllData(root);
}

function handleUpdate(e: any, itemId: string) {
  e.preventDefault();
  const root = document.getElementById("root");
  const newName: string = e.target.elements.newName.value;
  gucciShop.updateItem(itemId, newName);
  gucciShop.renderAllData(root);
}

function handleAddProducts(): void {
  gucciShop.addItem();
}

function handleShowProducts(): void {
  console.log(gucciShop.data);
}

function handleGetProducts(): void {
  gucciShop.getData();
}

gucciShop.addItem("Gucci Tiger denim shorts with embroidery", "dress", 180);
gucciShop.addItem("Shiny leather pant", "pans", 380);

// const root = document.getElementById("root");
gucciShop.renderAllData(root);

gucciShop.getData();










































// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };

// interface Store {
//   products: Array<Product>;
//   addItem(title: string, category: string, price: number, id: string);
//   addNewItem(title: string, category: string, price: number, id: string);
//   storeData();
//   getData();
//   render(list: any, domElement: any);
//   renderAllData(domElement: any);
// }

// interface Product {
//   title: string;
//   price: number;
//   id: string;
//   category: string;
// }






// const gucci: Store = {
//   products: [],

//   addItem() {
//     this.products = [
//       { title: "short", price: 120, category: "women", id: 1 },
//       { title: "pants", price: 450, category: "women", id: 2 },
//       { title: "dress", price: 378, category: "women", id: 3 },
//     ];
//     this.storeData();
//   },

//   addNewItem(title, price, category) {
//     const id = uid();
//     this.products.push({ title, price, category, id });
//     this.storeData();
//   },

  
//   storeData() {
//     localStorage.setItem("storeData", JSON.stringify(this.products));
//   },

//   getData() {
//     this.products = JSON.parse(localStorage.getItem("storeData"));
//   },

//   render(list, domElement) {
//     let html = "";
//     list.forEach((item) => {
//       html += `<div class="item">
//         <p>You were looking for </p> <h3> ${item.title}</h3><p>${item.category}</p> <p>for</p>
//         <h3>${item.price}</h3>
//        </div>`;
//     });
//   },

//   renderAllData(domElement) {
//     const products = this.products;
//     this.render(products, domElement);
//   },
// };

// function handleAddNewItemSubmit(e) {
//   e.preventDefault();
//   gucci.addNewItem(title, price, category);
//   const root: any = document.querySelector("#root");
//   const title: any = e.target.elements.title.value;
//   const price: number = e.target.elements.price.value;
//   const category: number = e.target.elements.category.value;
//   gucci.renderAllData(root);
// }

// // function handleShowProducts(): void {
// //   console.log(gucci.products);
// // }

// // function handleGetProducts(): void {
// //   gucci.getData();
// // }

// gucci.getData();




