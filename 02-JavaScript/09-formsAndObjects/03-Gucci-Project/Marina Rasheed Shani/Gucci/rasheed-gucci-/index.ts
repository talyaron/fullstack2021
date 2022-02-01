

interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addClothes(
    name: string,
    price: number,
    type: string,
    department: "clothes" | "watches" | "jewelry" | "bags",
    gender: "men" | "women",
    id: any
  ): any;
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
}

interface Item {
  name: string;
  price: number;
  type?: string;
  department: "clothes" | "watches" | "jewelry" | "bags";
  gender: "men" | "women";
  id?: any;
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
  addClothes(name, price, type, department, gender, id) {
    console.log(this);
    this.items.push({ name, price, type, department, gender });
    this.storeData();
  },
  render(list, domElement) {
    let html = "";
    list.forEach((product) => {
      html += `<div class='result-card'>
        <p> item : ${product.name} , price :  ${product.price}$</p>
        </div>`;
    });
    domElement.innerHTML = html;
  },
  renderAllitems(domElement) {
    const items = this.items;
    this.render(items, domElement);
  },
};

gucci.getData();

function handleShowClothes() {
  gucci.getData();
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
}

function handleAddclothes(ev) {
  ev.preventDefault();
  const name = ev.target.name.value;
  const price = ev.target.price.value;
  const department = (<HTMLInputElement>(
    document.getElementById("selectDepartment")
  )).value;
  const gender = (<HTMLInputElement>document.getElementById("selectGender"))
    .value;
  const type = (<HTMLInputElement>document.getElementById("selectType")).value;
  let id = uid;
  gucci.addClothes(name, price, department, gender, type, id);
  console.log(gucci.items);
  gucci.storeData();
}

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
