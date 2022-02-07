interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addItems(
    name: string,
    price: number,
    img: any,
    department: "clothes" | "watches" | "jewelry" | "bags" | "shoes" | "children",
    gender: "men" | "women",
    type: string,
    id: any
  ): any;
  removeItems(itemName: string): any;
  updateItems(id: any, newPrice: number, itemName: string): any;
  filterMaxPrice(price: number);
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
  renderByDepartment(department: string, domElement: any): any;
  renderByGender(gender: string, domElement: any): any;
  renderByType(type: string, domElement: any): any;
  sortByAscending(price: number);
  sortByDescending(price: number);
  renderMaxPrice(filtered: Array<Item>, domElement);
  filterByDepartment(department: string)
  filterByGender(gender: string)
  filterByType(type: string)
}

interface Item {
  name: string;
  price: number;
  img: any;
  department: "clothes" | "watches" | "jewelry" | "bags" | "shoes" | "children";
  gender?: "men" | "women";
  type: string;
  id?: any;
}

const gucci: Store = {
  items: [
    { name: "Retro tweed dress", price: 3800, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265215/674469_ZAH8I_6535_001_100_0000_Light-Retro-tweed-dress-with-velvet-trims.jpg", department: "clothes", gender: "women", type: "dresses" },
    { name: "Pleated dress ", price: 5980, img: "//media.gucci.com/style/DarkGray_South_0_160_316x316/1634249776/669260_ZAH0J_9782_001_100_0000_Light-Pleated-dress-with-chevron-vintage-Web.jpg", department: "clothes", gender: "women", type: "dresses" },
    { name: "The North Face x", price: 950, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638553515/663766_ZLX45_3475_001_100_0000_Light-The-North-Face-x-Gucci-pant.jpg", department: "clothes", gender: "men", type: "pants" },
    { name: "Gucci Jordaan crocodile loafer", price: 3200, img: "//media.gucci.com/style/DarkGray_South_0_160_470x470/1459942203/406994_EC200_1000_001_100_0000_Light.jpg", department: "clothes", gender: "men", type: "shoes" },
    { name: "Cotton piquet polo ", price: 690, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634749231/653380_XJDF8_3495_001_100_0000_Light-Cotton-piquet-polo-with-Interlocking-G.jpg", department: "clothes", gender: "men", type: "shirts" },
    { name: "Double G flower", price: 390, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1522084508/527394_J8474_8517_001_100_0000_Light-Double-G-flower-ring.jpg", department: "jewelry", type: "rings" },
    { name: "Gucci Diana small crocodile", price: 35000, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1618321510/660195_EZINT_2582_001_067_0000_Light-Gucci-Diana-small-crocodile-tote-bag.jpg", department: "bags", type: "purses" },
    { name: "Grip watch, 38mm", price: 1900, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584905/596509_I8600_8740_001_100_0000_Light-Grip-watch-38mm.jpg", department: "watches", type: "rolex" },
    { name: "Leather ankle boot with belt", price: 1190, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1537468210/550036_DKS00_1000_001_100_0000_Light-Leather-ankle-boot-with-belt.jpg", department: "shoes", gender: "women", type: "boots" },
    { name: "Baby cat print linen coat", price: 1150, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634315425/680518_ZAIDY_9376_001_100_0000_Light-Baby-cat-print-cotton-dress.jpg", department:"children", type: "clothes" }


  ],
  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.items));
  },
  getData() {
    const clothesStorage = JSON.parse(localStorage.getItem("storeData"));
    if (Array.isArray(clothesStorage)) {
      this.items = clothesStorage;
    }
  },
  addItems(name, price, img, department, gender, type) {
    const id = uid();
    this.items.push({ name, price, img, department, gender, type, id });
    this.storeData();
  },
  removeItems(itemName: string) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.storeData();
    }
  },

  filterMaxPrice(price) {
    return this.items.filter((item) => item.price < price);
  },

  renderMaxPrice(filtered, domElement) {
    this.render(filtered, domElement);
  },

  updateItems(id, newPrice, itemName) {
    itemName = this.items.name;
    const index = this.items.findIndex((item) => item.id === id);
    if (index >= 0) {
      this.items[index].price = newPrice;
      // this.items[index].name = itemName;
      this.storeData();
    }
  },
  render(list, domElement) {
    let html = "";
    list.forEach((product: any) => {
      html += `<div class="items">
        <p>${product.name}</p>
        <img class="img" src="${product.img}" >
        <p>${product.price}$</p>
        <input onclick="handleAddToCart()" id="addToCart" type="button" value="ADD TO CART">
        </div>`;
    });
    domElement.innerHTML = html;
  },
  renderAllitems(domElement) {
    const items = this.items;
    this.render(items, domElement);
  },
  renderByDepartment(department, domElement) {
    const filterByDepartment = this.filterByDepartment(department);
    this.render(filterByDepartment, domElement)
  },
  renderByGender(gender, domElement) {
    const filterByGender = this.filterByGender(gender);
    this.render(filterByGender, domElement)
  },
  renderByType(type, domElement) {
    const filterByType = this.filterByType(type);
    this.render(filterByType, domElement)
  },

  sortByAscending(price) {
    this.items.sort((a, b) => {
      return a.price - b.price;
    });
  },
  sortByDescending(price) {
    this.items.sort((a, b) => {
      return b.price - a.price;
    });
  },
  filterByDepartment(department) {
    return this.items.filter((item) => item.department === department);



  },
  filterByGender(gender) {
    return this.items.filter((item) => item.gender === gender);

  },
  filterByType(type) {
    return this.items.filter((item) => item.type === type);

  },


};

function handleUpdate(ev, id) {
  ev.preventDefault();

  const root = document.getElementById("root");
  gucci.renderAllitems(root);
  const itemName = ev.target.elements.itemName.value;
  const NewPrice = ev.target.elements.update.value;
  gucci.updateItems(id, NewPrice, itemName);
  gucci.storeData();
}

function handleShowItems() {
  console.log(gucci.items);
}

function handleShowDropDown(ev) {
  console.log(ev);

  const id = ev.target.id;

  const dropDown = document.getElementById(`${id}-dropdown`);
  if (ev.type === "mouseleave") {
    // dropDown.classList.replace("show", "hide");
  } else if (ev.type === "mouseenter") {
    //all dropdowns class hide
    dropDown.classList.replace("hide", "show");
  }
}

function handleAddItems(ev) {
  ev.preventDefault();

  const name = ev.target.name.value;
  const price = ev.target.price.value;
  const img = ev.target[2].value;
  const department = ev.target[3].value;
  const gender = ev.target[4].value;
  const type = ev.target[5].value;
  let id = uid;
  gucci.addItems(name, price, img, department, gender, type, id);

  const root = document.getElementById("root");
  gucci.renderAllitems(root);
  console.log(gucci.items);
  gucci.storeData();

  ev.target.reset();
}

function handleRemoveItems(ev) {
  ev.preventDefault();
  const name = ev.target.elements.remove.value;
  gucci.removeItems(name);
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
  gucci.storeData();
  ev.target.reset();
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function handlePriceAsc(price) {
  gucci.sortByAscending(price);
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
}
function handlePriceDesc(price) {
  gucci.sortByDescending(price);
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
}

function handleFilterByPrice(ev) {
  ev.preventDefault();
  const price = ev.target.valueAsNumber;
  const root = document.querySelector("#root");
  if (price) {
    const filtered = gucci.filterMaxPrice(price);
    gucci.renderMaxPrice(filtered, root);
  } else {
    gucci.renderAllitems(root);
  }
}

function handleSelect(ev) {

  const type = ev.target.value
  const root = document.getElementById("root");



  if (type === "allWomen") {
    handleRenderByGender("women")
  } else {

    gucci.renderByType(type, root);

  }

  

  if  (type === "allChildren") {

    handleRenderByDepartment("children")
  }
  else {
    gucci.renderByType(type, root);
  }



  if (type === "allMen") {

    handleRenderByGender("men")
  }
  else  {
    gucci.renderByType(type, root);
  }

  
  

  // if (type === "allWatches") {

  //   handleRenderByDepartment("watches")
  // }
  // else {
  //   gucci.renderByType(type, root);
  // }


  // if (type === "allJewelry") {

  //   handleRenderByDepartment("jewelry")
  // }
  // else {
  //   gucci.renderByType(type, root);
  // }
  
  

  

  // if (type === "allBags") {

  //   handleRenderByDepartment("bags")
  // }
  // else {
  //   gucci.renderByType(type, root);
  // }


 



}





// gucci.getData();

// const root = document.getElementById("root");
// gucci.renderAllitems(root);

function handleRenderByGender(gender: string) {
  const root = document.getElementById("root");
  gucci.getData();
  gucci.renderByGender(gender, root)

}

function handleRenderByDepartment(department: string) {
  const root = document.getElementById("root");
  gucci.getData();
  gucci.renderByDepartment(department, root)

}
