const women: any = document.querySelector(".title_mouseover"); 
const popup: any = document.querySelector(".category__women");
const closePopup: any = document.querySelector(".popup_close");

women.addEventListener("mouseover", () => {
  popup.style.visibility = "visible";
});

closePopup.addEventListener("click", () => {
  popup.style.visibility = "hidden";
});



interface Item {
  // id: number;
  title: string,
  price: number,
  type: "dress" | "pans"
}

interface Gucci {
  id?: number,
  data: Array<Item>,
  addItem(title: string, type: "dress" | "pants", price: number),
  filterByType(type: "dress" | "pants"),
  filterMaxPrice(price: number),
  sortAscen(),
  sortDescen(),

  render(list: Array<Item>, domElement: any),
  renderFilter(domElement: any, filterd: Array<Item>),
  renderAllData(domElement: any),
  renderByType(type: "dress" | "pants", domElement),
}

const gucciShop: Gucci = {
  data: [],

  addItem(title, type, price) {
    // const id = uid();
    this.data.push({ title, price, type });
  },

  filterMaxPrice(price): Array<Item> {
    return this.data.filter((item) => item.price < price);
  },

  filterByType(type) {
    return this.data.filter((item) => item.type === type);
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

  renderByType(type, domElement) {
    const filterd = this.filterByType(type);
    this.render(filterd, domElement);
  },

  renderFilter(filterd, domElement) {
    this.render(domElement, filterd);
  },

  render(list, domElement) {
    let html = "";
    list.forEach((item) => {
      html += `<div class="item">
        <h3> ${item.title}</h3><p>${item.type}</p>
        <h3>${item.price}</h3>
        </div>`;
    });

    domElement.innerHTML = html;
  },

  renderAllData(domElement) {
    this.render(this.data, domElement);
  },
};



function handlePriceAscen() {
  gucciShop.sortAscen();
  const root = document.getElementById("root");
  gucciShop.renderAllData(root);
}

function handlePriseDescen() {
  const root = document.getElementById("root");
  gucciShop.sortDescen();
  gucciShop.renderAllData(root);
}

function handleSelect(e) {
  const root = document.getElementById("root");
  const type = e.target.value;
  if (type === "all") {
    gucciShop.renderAllData(root);
  } else {
    console.log(type);
    gucciShop.renderByType(type, root);
  }
}

function handleFilter(e) {
  const price = e.target.valueAsNumber;
  const root = document.getElementById("root");
  if (price) {
    // console.log(price);
    const filterd = gucciShop.filterMaxPrice(price);
    // console.log(filterd);
    gucciShop.renderFilter(root, filterd);
  } else {
    gucciShop.renderAllData(root);
  }
}

gucciShop.addItem("Gucci Tiger denim shorts with embroidery", "dress", 1800);
gucciShop.addItem("Shiny leather pant", "pants", 3800);

const root = document.getElementById("root");
gucciShop.renderAllData(root);
gucciShop.renderByType("pants",root)
