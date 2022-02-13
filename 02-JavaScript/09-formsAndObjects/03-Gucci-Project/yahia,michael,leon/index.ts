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
  deleteItemCustomer(idItem:string)
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
    this.items = this.items.filter((item) => item.idItem !== idItem);
  },
  deleteItemCustomer(idItem) {
    this.items = this.items.filter((item) => item.idItem !== idItem);
  },
  updateItem(idItem, newValue) {
    const i = this.items.findIndex((item) => item.idItem === idItem);
    this.items[i].name = newValue;
  },
  addToCarts(name: string, type: type) {
    this.carts.push({ name: name, type: type });
  },

  selectItem(type) {
    // console.log('selectItem', type);
    // console.log(this.carts)
    return this.carts.filter((item) => item.type === type);
  },
  renderAllData(ownerRoot: any) {
    const list = this.items;
    this.render(ownerRoot, list);
  },
  renderSelctedItem(customerRoot, type) {
    // console.log('at renderSelctedItem type:', type)
    let selected = this.selectItem(type);
    // console.log(selected)
    this.renderCarts(customerRoot, selected);
  },
  renderAllCarts(customerRoot) {
    // console.log(this.carts);
    this.renderCarts(customerRoot, this.carts);
  },
  renderCarts(customerRoot, list) {
    // console.log(customerRoot,list);

    let htmlCustomer: string = "";
    list.forEach((type) => {
      htmlCustomer += `<div class= 'card1'><h4>The Item You Want:</h4> <p>${type.name}</p>
      <button onclick="handleDeleteCustomer('${type.idItem}')">delete</button></div>`
    
    });
    customerRoot.innerHTML = htmlCustomer;
  },
  render(root:any, list) {
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
    root.innerHTML = html;
  },
  getData() {
    const storeData = JSON.parse(localStorage.getItem('storeData'))
    console.log(storeData);
    
    const ownerRoot = document.getElementById("ownerRoot");
    const customerRoot = document.getElementById("customerRoot")
     if (ownerRoot){
      this.render(ownerRoot,storeData)
     }
      if(customerRoot){
        this.render(customerRoot,storeData)
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

function handleDeleteCustomer(id){
  console.log("handleDeleteCustomer");
nikeItems.deleteItemCustomer(id);
const customerRoot=document.getElementById("customerRoot");
nikeItems.render(customerRoot,nikeItems.carts);
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
  console.log("handleGetProduct");
  

}
//customer
function handleCart(event) {
  const shoes = event.target.id;
  console.log(shoes);
  
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
