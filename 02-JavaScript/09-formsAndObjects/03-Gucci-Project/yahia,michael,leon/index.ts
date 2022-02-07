const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Object {
  items: Array<item>;
  carts: Array<type>;
  additems(name: string, price: number);
  sortAsc();
  sortDes();
  deleteItem(idItem: string);
  updateItem(idItem: string, newValue: string);
  addToCarts(name:string, type: string);
  selectItem(type: "shoes" | "hoodie");
  renderSelctedItem(root1: any, type: "shoes" | "hoodie");
  renderAllData(root: any);
  renderAllCarts(root: any);
  render(root: any, list: any);
}
interface type {
  type: "shoes" | "hoodie";
  name: string;
}

interface item {
  name: string;
  price: number;
  id: string;
  type: "shoes" | "hoodie";
}

let nikeItems: object = {
  items: [],
  carts: [],
  additems(name, price) {
    const idItem = uid();
    this.items.push({ name, price, idItem });
  },
  sortAsc() {
    this.items.sort((a, b) => a.price - b.price);
  },
  sortDes() {
    this.items.sort((a, b) => b.price - a.price);
  },
  deleteItem(idItem) {
    this.items = this.items.filter((item) => item.idItem !== idItem);
  },
  updateItem(idItem, newValue) {
    const i = this.items.findIndex((item) => item.idItem === idItem);
    this.items[i].name = newValue;
  },
  addToCarts(name:string, type: type) {
    this.carts.push({  name:name, type: type });
  },

  selectItem(type) {
    console.log('selectItem',type);
console.log(this.carts)
    return this.carts.filter((item) => item.type === type);
  },
  renderAllData(root: any) {
    const list = this.items;
    this.render(root, list);
  },
  renderSelctedItem(root1, type) {
      console.log('at renderSelctedItem type:', type)
    let selected = this.selectItem(type);
    console.log(selected)
    this.renderCarts(root1, selected);
  },
  renderAllCarts(root1) {
    console.log(this.carts);
    this.renderCarts(root1, this.carts);
  },
  renderCarts(root1, list) {
    // console.log(root1,list);

    let htmlCustomer: string = "";
    list.forEach((type) => {
      htmlCustomer += `<div class= 'card1'><h4>The Item You Want:</h4> <p>${type.name}</p></div>`;
    });
    root1.innerHTML = htmlCustomer;
  },
  render(root: any, list) {
    let html: string = "";

    list.forEach((item) => {
      html += `<div class = 'card'> <p>${item.name}</p>
            <button onclick="handleDelete('${item.idItem}')">delete</button>
            <form onsubmit="handleupdate(event,'${item.idItem}')">
            <input type="text" name="nameUpdate" placeholder="change item">
            <input type="submit" value="submit">
            </form>
            </div>`;
    });
    root.innerHTML = html;
  },
};

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.description.value;
  const price = event.target.elements.price.value;
  nikeItems.additems(name, price);

  const root = document.getElementById("root");
  nikeItems.renderAllData(root);

  event.target.reset(); // poner el tu pajina
}

function handleAsce() {
  nikeItems.sortAsc();
  const root = document.getElementById("root");
  nikeItems.renderAllData(root);
}
function handleDesce() {
  nikeItems.sortDes();
  const root = document.getElementById("root");

  nikeItems.renderAllData(root);
}
function handleDelete(id) {
  nikeItems.deleteItem(id);
  const root = document.getElementById("root");
  nikeItems.renderAllData(root);
}
function handleupdate(event, id) {
  event.preventDefault();
  const updateditem = event.target.elements.nameUpdate.value;
  nikeItems.updateItem(id, updateditem);
  const root = document.getElementById("root");
  nikeItems.renderAllData(root);
}
//customer
function handleCart(event) {
  const shoes = event.target.id;
  nikeItems.addToCarts(shoes, 'shoes');
  const rooto = document.getElementById("root1");
  nikeItems.renderAllCarts(rooto);
}
function handlehoodie(ev) {
  const hoodie = ev.target.id;
    
  nikeItems.addToCarts(hoodie, 'hoodie');
  const rooto = document.getElementById("root1");
  nikeItems.renderAllCarts(rooto);
}

function handleSelect(event) {
  const type = event.target.value;
  const root1 = document.getElementById("root1");

  if (type === "all") {
    nikeItems.renderAllCarts(root1);
  } else {
    nikeItems.renderSelctedItem(root1, type);
  }
}
