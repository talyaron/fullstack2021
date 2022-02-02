

interface Store {
  items: Array<Item>;
  storeData();
  getData();
  addItems(
    name: string,
    price: number,
    img: any,
    department: "clothes" | "watches" | "jewelry" | "bags",
    gender: "men" | "women",
    type: string,
    id: any
  ): any;
  removeItems(itemName: string): any
  updateItems(newPrice:number,itemName:string):any
  render(list: any, domElement: any): any;
  renderAllitems(domElement: any): any;
  sortByAscending?(price: number);
  sortByDescending?(price: number);
}

interface Item {
  name: string;
  price: number;
  img: any;
  department: "clothes" | "watches" | "jewelry" | "bags";
  gender: "men" | "women";
  type: string;
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
  addItems(name, price, img, department, gender, type) {
    const id = uid()
    this.items.push({ name, price, img, department, gender, type, id});
    this.storeData();
  },
  removeItems(itemName: string) {
    const index = this.items.findIndex(item => item.name === itemName);
    if (index >= 0) {
      this.items.splice(index, 1)
      this.storeData();
    }
  },
  updateItems(newPrice, itemName) {
    const index =  this.items.findIndex(item => item.name === itemName);
    if (index >= 0){
    this.items[index].price = newPrice;
    this.storeData();
    }
  },
  render(list, domElement) {
    let html = "";
    list.forEach((product:any) => {
      html += `<div class="items">
        <p> item : ${product.name}</p>
        <img class="img" src="${product.img}" >
        <p> price : ${product.price}$</p>
        <input onclick="handleAddToCart()" id="addToCart" type="button" value="ADD TO CART">
        </div>`;
    });
    domElement.innerHTML = html;
  },
  renderAllitems(domElement) {
    const items = this.items;
    this.render(items, domElement);
  },
  sortByAscending(price) {
    this.items.sort((a, b) => {
      return a.price - b.price;
    })
  },
  sortByDescending(price) {
    this.items.sort((a, b) => {
      return b.price - a.price;
    })
  },
};

function handleUpdate(ev) {
  ev.preventDefault();

  const root = document.getElementById('root');
  gucci.renderAllitems(root);
const itemName =  ev.target.elements.itemName.value
  const NewPrice = ev.target.elements.update.value;
  gucci.updateItems(NewPrice,itemName)
  gucci.storeData();
}
  



function handleShowItems() {
  console.log(gucci.items)
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

  const root = document.getElementById('root');
  gucci.renderAllitems(root);
  console.log(gucci.items);
  gucci.storeData();

  ev.target.reset();
}

function handleRemoveItems(ev) {
  ev.preventDefault();
  const name = ev.target.elements.remove.value;
  gucci.removeItems(name);
  const root = document.getElementById('root');
  gucci.renderAllitems(root);
  gucci.storeData();
  ev.target.reset();
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function handlePriceAsc(price) {
  gucci.sortByAscending(price);
  const root = document.getElementById('root');
  gucci.renderAllitems(root);
}
function handlePriceDesc(price) {
  gucci.sortByDescending(price);
  const root = document.getElementById('root');
  gucci.renderAllitems(root);

}







let navBar = document.querySelectorAll('.container__navBar__catergory');
navBar.forEach(item => {
  item.addEventListener('mouseover', handleNavMouseover)
});

let dropDown = document.querySelector('.container__dropdawn')
function handleNavMouseover() {
  dropDown.classList.toggle('visible')
}



navBar.forEach(item => {
  item.addEventListener('mouseleave', handleNavMouseleave)
})
function handleNavMouseleave() {
  dropDown.classList.toggle('hidden')
}

gucci.getData();



const root = document.getElementById('root');
gucci.renderAllitems(root);
