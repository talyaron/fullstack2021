// interface shop {
//   items: Array<Item>;
//   tempItems?: Array<Item>;
//   addItem(item: Item);
//   render(list: Array<Item>, domElement: any);
//   renderItem(domElement: any);
//   renderTempItem?(domElement: any);
//   sortItemAsc();
//   sortItemDesc();
// }

// interface Item {
//   description: string;
//   price: number;
//   type: "computer" | "kitchen accessory" | "smartphone";
// }

// const zapShop: shop = {
//   items: [],
//   tempItems: [],

//   addItem(item: Item) {
//     this.items.push(item);
//   },

//   render(list, domElement: any) {
//     let html = "";
//     list.forEach((item) => {
//       html += `<div class = 'card_item'>
//             <p> ${item.description} | Price: ${item.price}$</p>`;
//     });

//     html += `</div>`;
//     domElement.innerHTML = html;
//   },

//   renderItem(domElement: any) {
//     this.render(this.items, domElement);
//   },

//   renderTempItem(domElement: any) {
//     this.render(this.tempItems, domElement);
//   },

//   sortItemAsc() {
//     this.items.sort((a, b) => {
//       return a.price - b.price;
//     });
//   },

//   sortItemDesc() {
//     this.items.sort((a, b) => {
//       return b.price - a.price;
//     });
//   },
// };

// zapShop.addItem({
//   type: "computer",
//   description: "Lenovo ThinkPadT15p",
//   price: 850,
// });
// zapShop.addItem({
//   type: "smartphone",
//   description: "Apple iPhone 13",
//   price: 700,
// });
// zapShop.addItem({
//   type: "kitchen accessory",
//   description: "cutting board",
//   price: 30,
// });
// const rootItems = document.getElementById("rootItems");
// zapShop.renderItem(rootItems);

// function handleItem(ev) {
//   ev.preventDefault();
//   console.dir(ev);
//   const description: string = ev.target.elements.description.value;
//   const price: number = ev.target.elements.price.valueAsNumber;
//   const type: "computer" | "kitchen accessory" | "smartphone" =
//     ev.target.elements.type.value;
//   zapShop.addItem({ type, description, price });
//   const rootItems = document.getElementById("rootItems");
//   zapShop.renderItem(rootItems);
// }

// function handleSortDesc(ev) {
//   ev.preventDefault();
//   zapShop.sortItemDesc();
//   const rootItems = document.getElementById("rootItems");
//   zapShop.renderItem(rootItems);
// }

// function handleSortAsc(ev) {
//   ev.preventDefault();
//   zapShop.sortItemAsc();
//   const rootItems = document.getElementById("rootItems");
//   zapShop.renderItem(rootItems);
// }

// function handlePrice(ev) {
//   const amonut = ev.target.valueAsNumber;
//   zapShop.tempItems = zapShop.items.filter((ele) => {
//     return ele.price < amonut;
//   });
//   if (zapShop.tempItems.length > 0) {
//     const rootItems = document.getElementById("rootItems");
//     zapShop.renderTempItem(rootItems);
//   } else {
//     const rootItems = document.getElementById("rootItems");
//     zapShop.renderItem(rootItems);
//   }
// }

interface list {
  items: Array<{ id: any; description: string; price: number; type: string }>;
  renderList?: any;
  sortListAsc(): any;
  sortListDesc(): any;
  filterList?(maxPrice): void;
  deleteItem;
  filterType;
  renderByType;
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
const list: list = {
  items: [],

  renderList(array) {
    let HTML = "";
    array.forEach((item) => {
      HTML += `<li><p><H2>${item.type}:<H2/> The ${item.description} costs: ${item.price}$
          <i onclick="handleDelete('${item.id}')" class="fas fa-times-circle"></i></p></li>`;
    });
    document.getElementById(`rootList`).innerHTML = HTML;
  },
  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
    this.renderList(this.items);
  },
  sortListAsc() {
    this.items.sort((a, b) => a.price - b.price);
  },
  sortListDesc() {
    this.items.sort((a, b) => b.price - a.price);
  },
  filterType(type) {
    return this.items.filter((item) => item.type === type);
  },
  renderByType(type) {
    const filterd = this.filterType(type);
    this.renderList(filterd);
  },
  filterList(maxPrice) {
    if (maxPrice === "") {
      this.renderList(this.items);
      return;
    }
    let newFilter = this.items.filter((item) => item.price <= maxPrice);
    list.renderList(newFilter);
    console.log(newFilter);
  },
};
list.renderList(list.items);
function handleDelete(id) {
  console.log(id);
  list.deleteItem(id);
}
function handleSubmit(ev) {
  console.dir(ev.target);
  ev.preventDefault();
  const description = ev.target.elements.description.value;
  const price = ev.target.elements.price.valueAsNumber;
  const type = ev.target.elements.type.value;
  const id = uid();
  list.items.push({ id, type, description, price });
  list.renderList(list.items);
  ev.target.reset();
}
function handleClick(ev) {
  switch (ev.target.id) {
    case `asc`:
      list.sortListAsc();
      break;
    case `desc`:
      list.sortListDesc();
      break;
  }
  list.renderList(list.items);
}
function handleFilter(ev) {
  console.log(ev.target.value);
  list.filterList(ev.target.value);
  // list.renderList(list.items)
}
function handleSelect(ev) {
  const type = ev.target.value;
  if (type === "all") {
    list.renderList(list.items);
  } else {
    console.log(type);
    list.renderByType(type);
  }
}

console.log(list);
