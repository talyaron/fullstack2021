interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addItems(
    name: string,
    price: number,
    imgTop: any,
    imgBottom: any,
    gender: "men" | "women" | "children" | "menWatches" | "womenJewlery" | "womenBags",
    type: string,
    id: any
  ): any;
  removeItems(itemName: string): any;
  updateItems(id: any, newPrice: number, itemName: string): any;
  filterMaxPriceAndGender(gender: string, price: number);
  sortByAscending(price: number);
  sortByDescending(price: number);
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
  renderMaxPrice(filtered: Array<Item>, domElement: any): any;
  filterByGenderAndType(type: string, gender: string);
  renderFilterByGenderAndType(filterGender: any, filterType: any, domElement: any): any;
  filterByGender(gender: string);
  renderByGender(gender: string, domElement: any): any;



}

interface Item {
  name: string;
  price: number;
  imgTop: any,
  imgBottom: any,
  gender: "men" | "women" | "children" | "menWatches" | "womenJewlery" | "womenBags";
  type: string;
  id?: any;
}

const gucci: Store = {
  items: [
    {
      name: "Retro tweed dress",
      price: 3800,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265215/674469_ZAH8I_6535_001_100_0000_Light-Retro-tweed-dress-with-velvet-trims.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "women",
      type: "dresses",
    },
    {
      name: "Pleated dress ",
      price: 5980,
      imgTop: "//media.gucci.com/style/DarkGray_South_0_160_316x316/1634249776/669260_ZAH0J_9782_001_100_0000_Light-Pleated-dress-with-chevron-vintage-Web.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "women",
      type: "dresses",
    },
    {
      name: "Silk mohair sweater  ",
      price: 2500,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1640195126/670625_XKB1V_1043_001_100_0000_Light-Silk-mohair-sweater-with-feathers.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "women",
      type: "sweaters",
    },
    {
      name: "Leather ankle boot with belt",
      price: 1190,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1537468210/550036_DKS00_1000_001_100_0000_Light-Leather-ankle-boot-with-belt.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "women",
      type: "boots",
    },
    {
      name: "Women's ankle boot ",
      price: 790,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633042815/670407_JCCP0_3154_001_100_0000_Light-Womens-ankle-boot-with-Horsebit.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "women",
      type: "boots",
    },
    {
      name: "Baby cat print linen coat",
      price: 1150,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634315425/680518_ZAIDY_9376_001_100_0000_Light-Baby-cat-print-cotton-dress.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "children",
      type: "clothes",
    },
    {
      name: "Double G cotton jacket",
      price: 635,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1633043710/671075_XWARC_3472_001_100_0000_Light-Childrens-Double-G-cotton-jacket.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "children",
      type: "clothes",
    },
    {
      name: "GG cotton hat with ear flaps",
      price: 295,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632819610/683064_3HAG1_4969_001_100_0000_Light-Baby-GG-cotton-hat-with-ear-flaps.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "children",
      type: "hats",
    },
    {
      name: "Straw effect hat with ribbon",
      price: 300,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634251518/684920_3HAHA_9266_001_100_0000_Light-Baby-straw-effect-hat-with-ribbon.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "children",
      type: "hats",
    },
    {
      name: "The North Face x",
      price: 950,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638553515/663766_ZLX45_3475_001_100_0000_Light-The-North-Face-x-Gucci-pant.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "men",
      type: "pants",
    },
    {
      name: "Gucci Jordaan crocodile loafer",
      price: 3200,
      imgTop: "//media.gucci.com/style/DarkGray_South_0_160_470x470/1459942203/406994_EC200_1000_001_100_0000_Light.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "men",
      type: "shoes",
    },
    {
      name: "GG leather pant",
      price: 4600,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1636738256/669071_XNAPN_1000_001_100_0000_Light-GG-leather-pant.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "men",
      type: "pants",
    },
    {
      name: "Cotton piquet polo ",
      price: 690,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634749231/653380_XJDF8_3495_001_100_0000_Light-Cotton-piquet-polo-with-Interlocking-G.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "men",
      type: "shirts",
    },
    {
      name: "GG kaleidoscope silk shirt",
      price: 1250,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638550829/675446_ZAH3W_1128_001_100_0000_Light-GG-kaleidoscope-silk-bowling-shirt.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "men",
      type: "shirts",
    },
    {
      name: "Grip watch, 38mm",
      price: 1900,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584905/596509_I8600_8740_001_100_0000_Light-Grip-watch-38mm.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "menWatches",
      type: "rolex",
    },
    {
      name: "Grip watch, 35mm",
      price: 1700,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584903/584271_ICBA0_8576_001_100_0000_Light-Grip-watch-35mm.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "menWatches",
      type: "omega",
    },
    {
      name: "GUCCI 25H watch, 40mm",
      price: 9500,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1627285507/673127_I1600_1108_001_100_0000_Light-GUCCI-25H-watch-40mm.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "menWatches",
      type: "rolex",
    },
    {
      name: "Gucci Tiger G-Timeless, 38 mm",
      price: 1020,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634838345/692078_ICZA0_8521_001_100_0000_Light-Gucci-Tiger-G-Timeless-watch-38-mm.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "menWatches",
      type: "omega",
    },
    {
      name: "Double G flower",
      price: 390,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1522084508/527394_J8474_8517_001_100_0000_Light-Double-G-flower-ring.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenJewlery",
      type: "rings",

    },
    {
      name: "Beaded necklace with flower",
      price: 2300,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1626885905/675291_J1D50_8061_001_100_0000_Light-Beaded-necklace-with-flower.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenJewlery",
      type: "necklaces",

    },
    {
      name: "Lion head ring with crystal",
      price: 430,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1628098205/675305_I6658_8489_001_100_0000_Light-Lion-head-ring-with-crystal.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenJewlery",
      type: "rings",

    },
    {
      name: "Interlocking G crystal hoops",
      price: 1150,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1629877504/680275_J3F42_8162_001_100_0000_Light-Interlocking-G-crystal-hoop-earrings.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenJewlery",
      type: "earrings",

    },

    {
      name: "Gucci Diana small crocodile",
      price: 35000,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1618321510/660195_EZINT_2582_001_067_0000_Light-Gucci-Diana-small-crocodile-tote-bag.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenBags",
      type: "purses",
    },
    {
      name: "Backpack with Interlocking G",
      price: 2500,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265210/674147_UQHGE_8679_001_081_0000_Light-Backpack-with-Interlocking-G.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenBags",
      type: "backpack",
    },
    {
      name: "Valentine's Day small heart",
      price: 1800,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638432995/678131_UP2AV_5575_001_060_0000_Light-Valentines-Day-small-heart-bag.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenBags",
      type: "purses",
    },
    {
      name: "Ophidia GG small backpack",
      price: 1790,
      imgTop: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1533573917/547965_9U8BT_8994_001_089_0000_Light-Ophidia-GG-small-backpack.jpg",
      imgBottom: "https://media.gucci.com/style/White_South_0_160_316x316/1638433872/678131_UP2AV_5575_006_060_0000_Light.jpg",
      gender: "womenBags",
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
  addItems(name, price, imgTop,imgBottom, gender, type) {
    const id = uid();
    this.items.push({ name, price, imgTop,imgBottom, gender, type, id });
    this.storeData();
  },
  removeItems(itemName: string) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index >= 0) {
      this.items.splice(index, 1);
      this.storeData();
    }
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

  filterMaxPriceAndGender(gender, price) {

    return this.items
      .filter((item) => item.gender === gender)
      .filter((item) => item.price < price);





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
  render(list, domElement) {
    let html = "";
    list.forEach((product: any) => {
      html += `<div class="items">
        <p>${product.name}</p>
        <img class="imgTop" src="${product.imgTop}" >
        <img class="imgBottom" src="${product.imgBottom}" >
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
  renderMaxPrice(filtered, domElement) {
    this.render(filtered, domElement);
  },
  filterByGenderAndType(type, gender) {
    console.log(type, gender);
    return this.items
      .filter((item) => item.type === type)
      .filter((item) => item.gender === gender);
  },
  renderFilterByGenderAndType(filterGender, filterType, domElement) {
    const filterByGenderAndType = this.filterByGenderAndType(filterGender, filterType);
    this.render(filterByGenderAndType, domElement)



  },
  filterByGender(gender) {
    return this.items.filter((item) => item.gender === gender);
  },
  renderByGender(gender, domElement) {
    const filterByGender = this.filterByGender(gender);
    this.render(filterByGender, domElement);
  },


};
gucci.storeData(); /// delete later


function handleShowItems() {
  console.log(gucci.items);
}


const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


function handleAddItems(ev) {
  ev.preventDefault();

  const name = ev.target.name.value;
  const price = ev.target.price.value;
  const imgTop = ev.target[2].value;
  const imgBottom = ev.target[2].value;
  const gender = ev.target[3].value;
  const type = ev.target[4].value;
  let id = uid;
  gucci.addItems(name, price, imgTop,imgBottom, gender, type, id);

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


function handleUpdate(ev, id) {
  ev.preventDefault();

  const root = document.getElementById("root");
  gucci.renderAllitems(root);
  const itemName = ev.target.elements.itemName.value;
  const NewPrice = ev.target.elements.update.value;
  gucci.updateItems(id, NewPrice, itemName);
  gucci.storeData();
}


function handleFilterByPrice(ev) {
  ev.preventDefault();

  const price = ev.target.valueAsNumber;
  const gender = ev.target.dataset.gender;
  const root = document.querySelector("#root");
  const filtered = gucci.filterMaxPriceAndGender(gender, price);



  if (price) {

    gucci.renderMaxPrice(filtered, root);

  } else {
    gucci.renderByGender(gender, root);
  }
}


function handlePriceAsc(ev, price) {
  gucci.sortByAscending(price);
  const root = document.getElementById("root");

  const gender = ev.target.dataset.gender;
  console.dir(ev)
  gucci.renderByGender(gender, root);
}

function handlePriceDesc(ev, price) {
  gucci.sortByDescending(price);
  const root = document.getElementById("root");

  const gender = ev.target.dataset.gender;
  console.dir(ev)
  gucci.renderByGender(gender, root);
}






function handleSelect(ev) {

  const gender = ev.target.dataset.gender;
  const type = ev.target.value;
  const root = document.getElementById("root");



  if (type === "all") {
    gucci.renderByGender(gender, root)

  } else {
    gucci.renderFilterByGenderAndType(type, gender, root)

  }

}


function handleRenderByGender(gender: string) {
  const root = document.getElementById("root");
  gucci.getData();
  gucci.renderByGender(gender, root);
}



