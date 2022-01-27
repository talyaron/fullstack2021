let zapAfterDelete;
let tech = document.getElementById(`container_Tech`);
let newItem: typeof Item;
let container = document.querySelectorAll('[id*="container_"]');
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function Item(
  name: string,
  model: string,
  description: string,
  price: number,
  deliveryPrice: any,
  category: string,
  id?: number
) {
  this.name = name;
  this.model = model;
  this.description = description;
  this.price = price;
  this.deliveryPrice = deliveryPrice;
  this.category = category;
  this.id = uid();
}
// class Item  {
//     constructor(name:string, model:string, price:number, deliveryPrice:any, category:string){
//         this.name=name
//         this.model=model;
//         this.price:Number=price;
//         this.deliveryPrice=deliveryPrice;
//         this.category:String=category;
// }};
interface Market {
  items: Array<typeof Item>;
  addNewItem: Function;
  deleteItem: Function;
  renderThis: Function;
  clear: Function;
  ascNow: Function;
  descNow: Function;
  reset: Function;
  maxFiltered?: Function;
  minFiltered?: Function;
  categoryFiltered: Function;
  //   pickUpMinNMax: Function;
}
let zap: Market = {
  items: [
    new Item(`Bestand`, `Gray`, "", 3, `Free`, `Books`),
    new Item(`Bestand Laptop`, `Gray`, "", 28, `Free`, `Tech`),
    new Item(`Bestand Laptop`, `Gray`, "", 23, `Free`, `Tech`),
    new Item(
      `Among US`,
      `Nintendo switch`,
      "Impostor Edition",
      49.99,
      `Free`,
      `Games`
    ),
    new Item(`Bestand Laptop`, `Gray`, "", 49.99, `Free`, `Books`),
    new Item(`Sony PlayStation 5`, `White`, "standard", 659, `Free`, `Tech`),
    new Item(
      `Nintendo switch console `,
      `Red/Black`,
      "standard",
      349.99,
      `Free`,
      `Tech`
    ),
    new Item(
      `Black Card Revoked`,
      `Original flavor`,
      "Original",
      14.49,
      `+10`,
      `Games`
    ),
  ],
  addNewItem(item: typeof Item) {
    const id = uid();
    this.items.push(id, item);
  },
  deleteItem(id) {
    let zapAfterDelete = this.items;
    this.items = this.items.filter((item) => item.id !== id);
    console.dir(zapAfterDelete);
    zap.clear();
    this.renderThis(zapAfterDelete);
  },
  renderThis(array) {
    let html = ``;
    array.forEach((Item) => {
      html = `<div price='${Item.price}' id='card' class='${Item.category}'>
      <i class="fa fa-times" onclick="handleDeleteItem('${Item.id}')"></i>
                    <h1 contenteditable="true">${Item.name}</h1>
                    <p class="model">${Item.model}</p>
                    <p class="description">${Item.description}</p>
                    <p class="price">${Item.price || ""}$</p>
                    <p>${Item.deliveryPrice || ""} Shipping</p>`;

      if (Item.category === "Tech") {
        document.getElementById(`container_Tech`).innerHTML += html;
      } else if (Item.category === "Books") {
        document.getElementById(`container_Books`).innerHTML += html;
      } else if (Item.category === "Games") {
        document.getElementById(`container_Games`).innerHTML += html;
      } else {
        document.getElementById(`container_---`).innerHTML += html;
      }
    });
  },
  clear() {
    container.forEach((field) => {
      field.innerHTML = "";
    });
  },
  ascNow() {
    zap.clear();
    zap.items.sort(asc);
    zap.renderThis(this.items);
    console.log(zap);
  },
  descNow() {
    zap.clear();
    zap.items.sort(desc);
    zap.renderThis(this.items);
    console.log(zap);
  },
  reset() {
    zap.clear();
    zap.renderThis(this.items);
  },
  maxFiltered(e: any) {
    let ZapItemsFiltered = this.items;
    if (e.value == "") {
      this.clear();
      this.renderThis(this.items);
      return;
    } else {
      ZapItemsFiltered = this.items.filter((item) => item.price <= e.value);
      zap.clear();
      this.renderThis(ZapItemsFiltered);
    }
    console.log(ZapItemsFiltered);
    console.log(this.items);
  },
  minFiltered(e: any) {
    let ZapItemsFiltered = this.items;
    if (e.value == "") {
      this.clear();
      this.renderThis(this.items);
      return;
    } else {
      ZapItemsFiltered = this.items.filter((item) => item.price >= e.value);
      zap.clear();
      this.renderThis(ZapItemsFiltered);
    }
  },
  categoryFiltered(e: any) {
    if (e.target.value === "all") {
      this.clear();
      this.renderThis(this.items);
      return;
    } else {
      let zapItemsFiltered = this.items;
      console.dir(e.target);
      zapItemsFiltered = this.items.filter(
        (item) => item.category === e.target.value
      );
      zap.clear();
      this.renderThis(zapItemsFiltered);
    }
  },
};

function handleSubmit(ev: any) {
  ev.preventDefault();
  console.dir(ev.target);

  newItem = new Item(
    ev.target.elements.name.value,
    ev.target.elements.model.value,
    ev.target.elements.description.value,
    ev.target.elements.price.valueAsNumber,
    ev.target.elements.deliveryPrice.value,
    ev.target.elements.category.value
  );
  ev.target.reset();
  zap.addNewItem(newItem);
  zap.clear();
  zap.renderThis(zap.items);

  console.log(zap);
}

zap.renderThis(zap.items);
function asc(a, b) {
  return a.price - b.price;
}
function desc(a, b) {
  return b.price - a.price;
}
function reset(a, b) {
  return a.addDate - b.addDate;
}
let min = document.getElementById("min");

function handleDeleteItem(id) {
  zap.deleteItem(id);
}

let maxPrice = Math.max.apply(
  Math,
  zap.items.map(function (item) {
    return item.price;
  })
);

// document.getElementById('maxPrice').innerHTML = maxPrice
let minPrice = Math.min.apply(
  Math,
  zap.items.map(function (item) {
    return item.price;
  })
);
function handleAB(ev) {
  ev.preventDefault();
  const a = ev.target.elements.a.valueAsNumber;
  const b = ev.target.elements.b.valueAsNumber;
  let dif = 0;
  ev.target.reset();
  if (a > b) {
    dif = a - b;
    console.log(`num1 = ${a}, num2 = ${b} and their diffrence is: ${dif}`);
    if (dif < a && dif < b) {
      console.log("These two are very close!");
    } else {
return;
    }
  } else if (a < b) {
    dif = b - a;
    console.log(`num1 = ${a}, num2 = ${b}, and their diffrence is: ${dif}`);
    if (dif < a && dif < b) {
      console.log("These two are very close!");
    }else {
return; }
} else {
  console.log (`${a} & ${b} are even.`)
}

}
