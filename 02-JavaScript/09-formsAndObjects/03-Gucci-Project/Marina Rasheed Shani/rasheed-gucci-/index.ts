interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addItems(
    name: string,
    price: number,
    img: any,
    department:
      | "clothes"
      | "watches"
      | "jewelry"
      | "bags"
      | "shoes"
      | "children",
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
  filterByDepartment(department: string);
  filterByGender(gender: string);
  filterByType(type: string);
  filterByGenderAndType(type: string, gender: string);
  filterByGenderAndTypeAndDepartment(
    type: string,
    gender: string,
    department: string
  );
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
    {
      name: "Retro tweed dress",
      price: 3800,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265215/674469_ZAH8I_6535_001_100_0000_Light-Retro-tweed-dress-with-velvet-trims.jpg",
      department: "clothes",
      gender: "women",
      type: "dresses",
    },
    {
      name: "Pleated dress ",
      price: 5980,
      img: "//media.gucci.com/style/DarkGray_South_0_160_316x316/1634249776/669260_ZAH0J_9782_001_100_0000_Light-Pleated-dress-with-chevron-vintage-Web.jpg",
      department: "clothes",
      gender: "women",
      type: "dresses",
    },
    {
      name: "Silk mohair sweater with feathers ",
      price: 2500,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1640195126/670625_XKB1V_1043_001_100_0000_Light-Silk-mohair-sweater-with-feathers.jpg",
      department: "clothes",
      gender: "women",
      type: "sweaters",
    },
    {
      name: "Leather ankle boot with belt",
      price: 1190,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1537468210/550036_DKS00_1000_001_100_0000_Light-Leather-ankle-boot-with-belt.jpg",
      department: "shoes",
      gender: "women",
      type: "boots",
    },
    {
      name: "Women's ankle boot with Horsebit",
      price: 790,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633042815/670407_JCCP0_3154_001_100_0000_Light-Womens-ankle-boot-with-Horsebit.jpg",
      department: "shoes",
      gender: "women",
      type: "boots",
    },
    {
      name: "Baby cat print linen coat",
      price: 1150,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634315425/680518_ZAIDY_9376_001_100_0000_Light-Baby-cat-print-cotton-dress.jpg",
      department: "children",
      type: "clothes",
    },
    {
      name: "Double G cotton jacket",
      price: 635,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633043710/671075_XWARC_3472_001_100_0000_Light-Childrens-Double-G-cotton-jacket.jpg",
      department: "children",
      type: "clothes",
    },
    {
      name: "GG cotton hat with ear flaps",
      price: 295,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632819610/683064_3HAG1_4969_001_100_0000_Light-Baby-GG-cotton-hat-with-ear-flaps.jpg",
      department: "children",
      type: "hats",
    },
    {
      name: "Straw effect hat with ribbon",
      price: 300,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634251518/684920_3HAHA_9266_001_100_0000_Light-Baby-straw-effect-hat-with-ribbon.jpg",
      department: "children",
      type: "hats",
    },
    {
      name: "The North Face x",
      price: 950,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638553515/663766_ZLX45_3475_001_100_0000_Light-The-North-Face-x-Gucci-pant.jpg",
      department: "clothes",
      gender: "men",
      type: "pants",
    },
    {
      name: "Gucci Jordaan crocodile loafer",
      price: 3200,
      img: "//media.gucci.com/style/DarkGray_South_0_160_470x470/1459942203/406994_EC200_1000_001_100_0000_Light.jpg",
      department: "clothes",
      gender: "men",
      type: "shoes",
    },
    {
      name: "GG leather pant",
      price: 4600,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1636738256/669071_XNAPN_1000_001_100_0000_Light-GG-leather-pant.jpg",
      department: "clothes",
      gender: "men",
      type: "pants",
    },
    {
      name: "Cotton piquet polo ",
      price: 690,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634749231/653380_XJDF8_3495_001_100_0000_Light-Cotton-piquet-polo-with-Interlocking-G.jpg",
      department: "clothes",
      gender: "men",
      type: "shirts",
    },   
    {
      name: "GG kaleidoscope silk bowling shirt",
      price: 1250,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638550829/675446_ZAH3W_1128_001_100_0000_Light-GG-kaleidoscope-silk-bowling-shirt.jpg",
      department: "clothes",
      gender: "men",
      type: "shirts",
    },   
    {
      name: "Grip watch, 38mm",
      price: 1900,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584905/596509_I8600_8740_001_100_0000_Light-Grip-watch-38mm.jpg",
      department: "watches",
      type: "rolex",
    },
    {
      name: "Grip watch, 35mm",
      price: 1700,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584903/584271_ICBA0_8576_001_100_0000_Light-Grip-watch-35mm.jpg",
      department: "watches",
      type: "omega",
    },
    {
      name: "GUCCI 25H watch, 40mm",
      price: 9500,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1627285507/673127_I1600_1108_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
      department: "watches",
      type: "rolex",
    },
    {
      name: "Gucci Tiger G-Timeless, 38 mm",
      price: 1020,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634838345/692078_ICZA0_8521_001_100_0000_Light-Gucci-Tiger-G-Timeless-watch-38-mm.jpg",
      department: "watches",
      type: "omega",
    },
    {
      name: "Double G flower",
      price: 390,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1522084508/527394_J8474_8517_001_100_0000_Light-Double-G-flower-ring.jpg",
      department: "jewelry",
      type: "rings",
    },
    {
      name: "Beaded necklace with flower",
      price: 2300,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1626885905/675291_J1D50_8061_001_100_0000_Light-Beaded-necklace-with-flower.jpg",
      department: "jewelry",
      type: "necklace",
    },
    {
      name: "Lion head ring with crystal",
      price: 430,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1628098205/675305_I6658_8489_001_100_0000_Light-Lion-head-ring-with-crystal.jpg",
      department: "jewelry",
      type: "rings",
    },
    {
      name: "Interlocking G crystal hoops",
      price: 1150,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1629877504/680275_J3F42_8162_001_100_0000_Light-Interlocking-G-crystal-hoop-earrings.jpg",
      department: "jewelry",
      type: "earrings",
    },
    
    {
      name: "Gucci Diana small crocodile",
      price: 35000,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1618321510/660195_EZINT_2582_001_067_0000_Light-Gucci-Diana-small-crocodile-tote-bag.jpg",
      department: "bags",
      type: "purses",
    },
    {
      name: "Backpack with Interlocking G",
      price: 2500,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265210/674147_UQHGE_8679_001_081_0000_Light-Backpack-with-Interlocking-G.jpg",
      department: "bags",
      type: "backpack",
    },
    {
      name: "Valentine's Day small heart",
      price: 1800,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638432995/678131_UP2AV_5575_001_060_0000_Light-Valentines-Day-small-heart-bag.jpg",
      department: "bags",
      type: "purses",
    },
    {
      name: "Ophidia GG small backpack",
      price: 1790,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1533573917/547965_9U8BT_8994_001_089_0000_Light-Ophidia-GG-small-backpack.jpg",
      department: "bags",
      type: "backpack",
    },



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
  filterByGenderAndTypeAndDepartment(type, gender, department) {
    return this.items
      .filter((item) => item.type === type)
      .filter((item) => item.gender === gender)
      .filter((item) => item.department === department);
  },
  filterByGenderAndType(type, gender) {
    console.log(type, gender);
    return this.items
      .filter((item) => item.type === type)
      .filter((item) => item.gender === gender);
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
    this.render(filterByDepartment, domElement);
  },
  renderByGender(gender, domElement) {
    const filterByGender = this.filterByGender(gender);
    this.render(filterByGender, domElement);
  },
  renderByType(type, domElement) {
    const filterByType = this.filterByType(type);
    this.render(filterByType, domElement);
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
gucci.storeData(); /// delete later
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
  const gender = ev.target.dataset.gender;
  const type = ev.target.value;

  const root = document.getElementById("root");
  const filterd = gucci.filterByGenderAndType(type, gender);

}

// gucci.getData();

// const root = document.getElementById("root");
// gucci.renderAllitems(root);

function handleRenderByGender(gender: string) {
  const root = document.getElementById("root");
  gucci.getData();
  gucci.renderByGender(gender, root);
}

function handleRenderByDepartment(department: string) {
  const root = document.getElementById("root");
  gucci.getData();
  gucci.renderByDepartment(department, root);
}
