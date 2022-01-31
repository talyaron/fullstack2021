interface Store {
  menClothes: Array<Product>;
  storeData();
  getData();
  addMoremenClothes(item: string, price: number): any;
  render(list: any, domElement: any): any;
  renderAllmenClothes(domElement: any): any;
}

interface Product {
  name: string;
  price: number;
  id: number;
}

const gucci: Store = {
  menClothes: [],

  storeData() {
    localStorage.setItem("storeData", JSON.stringify(this.menClothes));
  },
  getData() {
    this.menClothes = JSON.parse(localStorage.getItem("storeData"));
  },

  addMoremenClothes(item, price) {
    this.menClothes.push({ item, price });
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

function handleAddMoreProducts(ev) {
  ev.preventDefault();
 
  const item = ev.target.item.value;
  const price = ev.target.price.value;
  gucci.addMoremenClothes(item, price);
  console.log(gucci.menClothes);
  gucci.storeData();
}
