

interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addItems(
    name: string,
    price: number,
    type: string,
    department: "clothes" | "watches" | "jewelry" | "bags",
    gender: "men" | "women",
    id: any
  ): any;
  removeItems(itemName: string):any
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
}

interface Item {
  name: string;
  price: number;
  department: "clothes" | "watches" | "jewelry" | "bags";
  gender: "men" | "women";
  type: string;
  id?: any;
  topImg?:any;
  backImg?:any;
}

const gucci: Store = {
  items: [],
  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.items));
  },
  getData() {
    const clothesStorage = JSON.parse(localStorage.getItem("storeData"));
    if (Array.isArray(clothesStorage)) {
      this.items = clothesStorage;
    }
  },
  addItems(name, price, department, gender,type, id) {
    console.log(this);
    this.items.push({ name, price, department, gender, type });
    this.storeData();
  },
  removeItems(itemName: string) {
    const index = this.items.findIndex(item => item.name === itemName);
    if (index >= 0) {
        this.items.splice(index, 1)
    }
},
  render(list, domElement) {
    let html = "";
    list.forEach((product) => {
      html += `<div class="items">
        <p> item : ${product.name} , price : ${product.price}$</p>
        <img class="img-back" src="${product.topImg}" >
        <img class="img-top" src="${product.backImg}"  >
       
        </div>`;
    });
    domElement.innerHTML = html;
  },
  renderAllitems(domElement) {
    const items = this.items;
    this.render(items, domElement);
  },
};

// function handleShowItems(){
//   console.log(gucci.items)
// }

gucci.getData();

function handleShowItems() {
  gucci.getData();
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
}

function handleAddItems(ev) {
  ev.preventDefault();
  console.dir(ev.target[4].value)
  const name = ev.target.name.value;
  const price = ev.target.price.value;
  const department = ev.target[2].value;
  const gender = ev.target[3].value;
  const type = ev.target[4].value;
  let id = uid;
  gucci.addItems(name, price, department, gender, type, id);
  console.log(gucci.items);
  gucci.storeData();
}

function handleRemoveItems(ev) {
  ev.preventDefault();
  const name = ev.target.elements.remove.value;
  gucci.removeItems(name);
  const root = document.getElementById('root');
  gucci.renderAllitems(root);
  gucci.storeData();
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


// render(list, domElement) {
//   let html = "";
//   list.forEach((product) => {
//     html += `<div class='result-card'>
//       <p> item : ${product.name} , price :  ${product.price}$</p>
//       </div>`;
//   });
//   domElement.innerHTML = html;
// },
