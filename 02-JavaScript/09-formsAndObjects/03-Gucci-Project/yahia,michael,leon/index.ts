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
  deleteItemCustomer(idItem: string)
  updateItem(idItem: string, newValue: string);
  addToCarts(name: string, type: string);
  selectItem(type: "shoes" | "hoodie");
  renderSelctedItem(customerRoot: any, type: "shoes" | "hoodie");
  renderAllData(ownerRoot: any);
  renderAllCarts(ownerRoot: any);
  render(ownerRoot: any, list: any,);
  getData(),
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
    localStorage.setItem('storeData', JSON.stringify(this.items))
  },
  sortAsc() {
    this.items.sort((a, b) => a.price - b.price);
  },
  sortDes() {
    this.items.sort((a, b) => b.price - a.price);
  },
  deleteItem(idItem) {
    const datasOfLocalStorage = JSON.parse(localStorage.getItem("storeData"))
    const index = datasOfLocalStorage.findIndex(data => data.idItem === idItem)
  
    if(index >= 0){
      console.log(`before the delete`);
      console.log(datasOfLocalStorage);
      
      
      let newLocal = datasOfLocalStorage.splice(index , 1);
      console.log(`after the delete `);
      console.log(newLocal);
      
    }
  },
  deleteItemCustomer(idItem) {


    this.carts = this.carts.filter(type => type.idCustomer !== idItem);
  },
  updateItem(idItem, newValue) {
    const i = this.items.findIndex((item) => item.idItem === idItem);
    this.items[i].name = newValue;
  },
  addToCarts(name: string, type: type) {
    let idCustomer = uid();
    this.carts.push({ idCustomer: idCustomer, name: name, type: type });
  },

  selectItem(type) {

    return this.carts.filter((item) => item.type === type);
  },
  renderAllData(ownerRoot: any) {
    const list = this.items;
    this.render(ownerRoot, list);
  },
  renderSelctedItem(customerRoot, type) {

    let selected = this.selectItem(type);

    this.renderCarts(customerRoot, selected);
  },
  renderAllCarts(customerRoot) {

    this.renderCarts(customerRoot, this.carts);
  },
  renderCarts(customerRoot, list) {


    let htmlCustomer: string = "";
    list.forEach((type) => {

      htmlCustomer += `<div class= 'card1'><h4>The Item You Want:</h4> <p>${type.name}</p>
      <button onclick="handleDeleteCustomer('${type.idCustomer}')">delete</button></div>`

    });
    customerRoot.innerHTML = htmlCustomer;
  },
  render(ownerRoot: any, list) {
    let html: string = "";

    list.forEach((item) => {
      html += `<div class = 'card'> <p>${item.name}:${item.price}</p>
            <button onclick="handleDelete('${item.idItem}')">delete</button>
            <form onsubmit="handleupdate(event,'${item.idItem}')">
            <input type="text" name="nameUpdate" placeholder="change item">
            <input type="submit" value="submit">
            </form>
            </div>`;
    });
    ownerRoot.innerHTML = html;
  },
  getData() {
    const storeData = JSON.parse(localStorage.getItem('storeData'))


    const ownerRoot = document.getElementById("ownerRoot");
    const customerRoot = document.getElementById("customerRoot")
    if (ownerRoot) {
      this.render(ownerRoot, storeData)
    }
    if (customerRoot) {
      this.render(customerRoot, storeData)
    }

  }
};

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.elements.description.value;
  const price = event.target.elements.price.value;
  nikeItems.additems(name, price);

  const ownerRoot = document.getElementById("ownerRoot");
  nikeItems.renderAllData(ownerRoot);

  event.target.reset(); // poner el tu pajina
}

function handleAsce() {
  nikeItems.sortAsc();
  const ownerRoot = document.getElementById("ownerRoot");
  nikeItems.renderAllData(ownerRoot);
}
function handleDesce() {
  nikeItems.sortDes();
  const ownerRoot = document.getElementById("ownerRoot");

  nikeItems.renderAllData(ownerRoot);
}
function handleDelete(id) {




  nikeItems.deleteItem(id);
  const ownerRoot = document.getElementById("ownerRoot");
  nikeItems.renderAllData(ownerRoot);
}

function handleDeleteCustomer(id) {

  // console.log(id);

  nikeItems.deleteItemCustomer(id);
  const customerRoot = document.getElementById("customerRoot");
  nikeItems.renderAllCarts(customerRoot);
}
function handleupdate(event, id) {
  event.preventDefault();
  const updateditem = event.target.elements.nameUpdate.value;
  nikeItems.updateItem(id, updateditem);
  const ownerRoot = document.getElementById("ownerRoot");
  nikeItems.renderAllData(ownerRoot);
}
function handleGetProduct() {
  nikeItems.getData()



}
//customer
function handleCart(event) {
  const shoes = event.target.id;


  nikeItems.addToCarts(shoes, 'shoes');
  const rooto = document.getElementById("customerRoot");
  nikeItems.renderAllCarts(rooto);
}
function handlehoodie(ev) {
  const hoodie = ev.target.id;

  nikeItems.addToCarts(hoodie, 'hoodie');
  const rooto = document.getElementById("customerRoot");
  nikeItems.renderAllCarts(rooto);
}

function handleSelect(event) {
  const type = event.target.value;
  const customerRoot = document.getElementById("customerRoot");

  if (type === "all") {
    nikeItems.renderAllCarts(customerRoot);
  } else {
    nikeItems.renderSelctedItem(customerRoot, type);
  }
}
