// popup

const helloGuest: any = document.querySelector(".guest_mouseover");
const popup: any = document.querySelector(".popup_wrapper");
const closePopup: any = document.querySelector(".popup_close");

setTimeout(function popupTimeOut() {
  popup.style.visibility = "visible";
}, 2000);

helloGuest.addEventListener("mouseover", () => {
  popup.style.visibility = "visible";
});

closePopup.addEventListener("click", () => {
  popup.style.visibility = "hidden";
});

// Search input on hover CSS changing
const generalInput: any = document.querySelector(".search");

generalInput.addEventListener("click", (e) => {
  generalInput.style.backgroundColor = "rgb(58, 63, 64)";
  generalInput.style.color = "white";
});

generalInput.addEventListener("mouseout", (e) => {
  generalInput.style.backgroundColor = "rgb(58, 63, 64)";
  generalInput.style.color = "white";
});

//login popup mouse event
const login: any = document.querySelector(".login");

login.addEventListener("mouseover", () => {
  login.style.cursor = "pointer";
});

// on COMPUTERS click event
const filteCategoryComputer = document.querySelector(".category");

filteCategoryComputer.addEventListener("click", () => {
  const html = `    <div class="computers">
        <div class="computers_comp1">
            <h3>Apple MacBook Air MGN93HB / A Apple</h3>
            <h4>Prise: 4,590   &star; &bigstar; &bigstar; &bigstar; &bigstar; </h4> 
            <p>Manufacturer: Apple, Screen size: 13.3 inches, Processor type: M1, RAM: 8 GB</p>
            <p>Screen: 2560 x1600, Touch screen: without, Hard drive: 256 GB, Weight: 1.29 kg</p>
        </div>
        <div>
            <img  style="width: 80%;" class="apple" src="https://img.zap.co.il/pics/3/4/3/5/58935343c.gif" alt="">
        </div>

    </div>`;
  const root = document.getElementById("root");
  root.innerHTML = html;
});

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

interface Item {
  id: number;
  title: string;
  type: "computer" | "electronics";
  price: number;
}

interface Zap {
  id?: number;
  data: Array<Item>;

  sortAscen();
  sortDescen();
  filterMaxPrice(price: number);
  renderFilter(domElement: any, filterd: Array<Item>);
  addItem(title: string, type: "computer" | "electronics");
  addNewItem(title: string, price: number);
  deleteItem(id: string);
  deleteItemByName(itemName: string);
  render(list: Array<Item>, domElement: any);
  renderAllData(domElement: any);
  filterByType(type: "computer" | "electronics");
  renderByType(type: "computer" | "electronics", domElement: any);
}

const ZapSearch: Zap = {
  data: [],

  addItem(title, type, price) {
    const id = uid();
    this.data.push({ id, title, type, price });
  },

  addNewItem(title, price) {
    const id = uid();
    this.data.push({ id, title, price });
  },

  filterByType(type) {
    return this.data.filter((item) => item.type === type);
  },

  renderFilter(filterd, domElement) {
    this.render(domElement, filterd);
  },

  filterMaxPrice(price): Array<Item> {
    return this.data.filter((item) => item.price < price);
  },

  deleteItem(id) {
    this.data = this.data.filter((item) => item.id !== id);
  },

  deleteItemByName(itemName: string) {               // doesnt work
    const index = this.data.findIndex((item) => item.title === itemName);
    if (index >= 0) {
      this.data.splice(index, 1);
      // this.data.delete[index]
    }
  },

  sortAscen() {
    console.log("sortAscen");
    this.data = this.data.sort((a, b) => {
      return a.price - b.price;
    });
    console.log(this.data);
  },

  sortDescen() {
    console.log("sortDescen");
    this.data = this.data.sort((a, b) => {
      return b.price - a.price;
    });
    console.dir(this);
  },

  render(list, domElement) {
    let html = "";
    list.forEach((item) => {
      html += `<div class="item">
        <p>You were looking for </p> <h3> ${item.title}</h3><p>${item.type}</p> <p>for</p>
        <h3>${item.price}</h3>
        <button  style= " border-radius: 10px;
        width: 7%;
        height: 3em;
        border-color: transparent;
        font-size: 1em;
        box-shadow: 1px 2px 6px rgba(102, 95, 107, 0.4);"  
        onclick="handleDelete('${item.id}')">Delete</button>
          </div>`;
    });

    domElement.innerHTML = html;
  },

 
};

function handlePriceAscen() {
  ZapSearch.sortAscen();
  const root = document.getElementById("root");
  ZapSearch.renderAllData(root);
}

function handlePriseDescen() {
  const root = document.getElementById("root");
  ZapSearch.sortDescen();
  ZapSearch.renderAllData(root);
}

function handleSelect(e) {
  const root = document.getElementById("root");
  const type = e.target.value;
  if (type === "all") {
    ZapSearch.renderAllData(root);
  } else {
    console.log(type);
    ZapSearch.renderByType(type, root);
  }
}

function handleDeleteByName(e) {    // doesnt work
  e.preventDefault();
  const title = e.target.elements.delete.value;
  ZapSearch.deleteItemByName(title);
  const root = document.getElementById("root");
  ZapSearch.renderAllData(root);
}

function handleDelete(id) {
  console.log(id);
  const root = document.getElementById("root");
  ZapSearch.deleteItem(id);
  ZapSearch.renderAllData(root);
}

function handleSubmit(e) {
  e.preventDefault();
  console.dir(e.target);
  const root: any = document.querySelector("#root");
  const title: any = e.target.elements.title.value;
  const price: number = e.target.elements.price.value;
  ZapSearch.addNewItem(title, price);
  ZapSearch.renderAllData(root);

  e.target.reset();
}

function handleFilter(e) {
  const price = e.target.valueAsNumber;
  const root = document.getElementById("root");
  if (price) {
    // console.log(price);
    const filterd = ZapSearch.filterMaxPrice(price);
    // console.log(filterd);
    ZapSearch.renderFilter(root, filterd);
  } else {
    ZapSearch.renderAllData(root);
  }
}

ZapSearch.addItem("Apple MacBook Air MGN93HB/A", "computer", 4.567);
ZapSearch.addItem("TV Xiaomi L65M5-5ASP 4K", "electronics", 3.499);
ZapSearch.addItem("Dell Inspiron 3511 IN-RD33-13121", "computer", 3.109);
ZapSearch.addItem("Asus X515EA-BQ950", "computer", 2.449);
ZapSearch.addItem("Apple AirPods Pro True Wireless", "electronics", 1.203);

const root = document.getElementById("root");
ZapSearch.renderAllData(root);
