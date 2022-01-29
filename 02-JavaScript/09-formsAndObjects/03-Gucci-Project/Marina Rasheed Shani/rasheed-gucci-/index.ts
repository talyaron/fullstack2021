interface Store {
  products: Array<Product>;
  addProducts();
  storeData();
  getData();
  addMoreProducts(item: string, price: number): any
  render(list: any, domElement: any): any;
  renderAllProducts(domElement:any):any;
}

interface Product {
  name: string;
  price: number;
  id: number;
}

const myStore: Store = {
  products: [],
  addProducts() {
    this.products = [
      { name: "T-Shirt", price: 110, id: 1 },
      { name: "Sweather", price: 220, id: 2 },
      { name: "long-Shirt", price: 450, id: 3 },
      { name: "Tank-Top", price: 456, id: 4 },
      { name: "Slim-jeans", price: 33, id: 5 },
      { name: "Shorts", price: 33, id: 6 },
      { name: "Wide-Jeans", price: 33, id: 7 },
      { name: "Sport Suit", price: 33, id: 8 },
      { name: "Shoes", price: 33, id: 9 },
      { name: "Hats", price: 33, id: 10 }
    ];
    this.storeData();
  },
  storeData() {
    localStorage.setItem('storeData', JSON.stringify(this.products))

  },
  getData() {
    this.products = JSON.parse(localStorage.getItem('storeData'))
  },

  addMoreProducts(item, price) {
    this.products.push({ item, price })
    this.storeData();
    
  },
  render(list, domElement) {
    let html = '';
    list.forEach(product => {
      html += `<div class='result-card'>
        <p> item : ${product.name} , price :  ${product.price}$</p>
        </div>`
    })
    domElement.innerHTML = html
  },
  renderAllProducts(domElement) {
    const products = this.products;
    this.render(products, domElement);
},
};
function handleAddProducts() {
  myStore.addProducts()
  myStore.getData();
  const root = document.getElementById('root')
  myStore.renderAllProducts(root)
}

function handleAddMoreProducts(ev) {
  ev.preventDefault();
  myStore.addProducts()
  const item = ev.target.item.value
  const price = ev.target.price.value
  myStore.addMoreProducts(item, price)
  console.log(myStore.products)
  myStore.storeData();
  
}