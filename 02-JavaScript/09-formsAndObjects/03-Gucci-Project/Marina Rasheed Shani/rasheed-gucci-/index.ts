interface Store {
  items: Array<Item>;
  storeData(): any;
  getData(): any;
  addClothes(name: string, price: number, type: string, department: 'clothes' | 'watches' | 'jewelry' | 'bags', gender: 'men' | 'women', id: any): any;
  removeItems(itemTitle: string):any;
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
}

interface Item {
  name: string;
  price: number;
  type?: string;
  department: 'clothes' | 'watches' | 'jewelry' | 'bags';
  gender: 'men' | 'women';
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
    this.items.push({ name, price, type, department, gender, id });
    this.storeData();
  },
  removeItems(itemTitle: string) {
    const index = this.items.findIndex(item => item.title === itemTitle);
    if (index >= 0) {
      this.items.splice(index, 1)

    }
  },
  render(list, domElement) {
    let html = "";
    list.forEach((product) => {
      html += `<div class='result-card'>
        <p> item : ${product.name} , <img src="" id="imgDisplay">  ${product.price}$</p>
        
        </div>`;
    });
    domElement.innerHTML = html;
  },
  renderAllitems(domElement) {
    const items = this.items;
    this.render(items, domElement);
  }
};



function handleShowClothes() {
  gucci.getData();
  const root = document.getElementById("root");
  gucci.renderAllitems(root);
}

function handleAddclothes(ev) {
  ev.preventDefault();
  console.dir(ev.target)
  const name = ev.target.name.value;
  const price = ev.target.price.value;
  const department = ev.target[2].value;
  const gender = ev.target[3].value;
  const type = ev.target[4].value;
  let id = uid
  gucci.addClothes(name, price, department, gender, type, id);
  console.log(gucci.items);
  gucci.storeData();
}

function handleTestDepartment() {
  gucci.getData();
  const root = document.getElementById("rootTest");
  gucci.renderAllitems(root);
}

function handleremoveItems(ev) {
  ev.preventDefault();
  const name = ev.target.elements.remove.value;
  gucci.removeItems(name);
  const root = document.getElementById('root');
  gucci.renderAllitems(root);
}

function loadImage(event) {
  const image = (<HTMLInputElement>document.getElementById("imgDisplay"))
  image.src = URL.createObjectURL(event.target.files[0]);
}


gucci.getData();

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};