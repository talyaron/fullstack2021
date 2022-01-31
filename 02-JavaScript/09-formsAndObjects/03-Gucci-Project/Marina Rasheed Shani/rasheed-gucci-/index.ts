interface Store {
  menClothes: Array<menClothes>;
  storeData();
  getData();
  addClothes(name: string, price: number): any;
  render(list: any, domElement: any): any;
  renderAllmenClothes(domElement: any): any;
}

interface menClothes {
  name: string;
  price: number;
  type?: "menClother" | "Watches";
  id?: number;
}

const gucci: Store = {
  menClothes: [],
  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.menClothes));
  },
  getData() {
    const clothesStorage = JSON.parse(localStorage.getItem("storeData"));
    if (Array.isArray(clothesStorage)) {
      this.menClothes = clothesStorage;
    }
  },
  addClothes(name, price) {
    console.log(this);
    this.menClothes.push({ name, price });
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
  renderAllmenClothes(domElement) {
    const menClothes = this.menClothes;
    this.render(menClothes, domElement);
  },
};

gucci.getData();

function handleShowClothes() {
  gucci.getData();
  const root = document.getElementById("root");
  gucci.renderAllmenClothes(root);
}

function handleAddclothes(ev) {
  ev.preventDefault();

  const name = ev.target.name.value;
  const price = ev.target.price.value;
  gucci.addClothes(name, price);
  console.log(gucci.menClothes);
  gucci.storeData();
}

// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('Pants' , 552)
// gucci.addClothes('Jeans' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
// gucci.addClothes('T-Shirt' , 552)
