interface Store {
  menClothes: Array<Product>;
  addMenClothes();
  storeData();
  getData();
  addMoremenClothes(item: string, price: number): any
  render(list: any, domElement: any): any;
  renderAllmenClothes(domElement:any):any;
}

interface Product {
  name: string;
  price: number;
  id: number;
}

const gucci: Store = {
  menClothes: [],
  addMenClothes() {
    this.menClothes = [
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
    localStorage.setItem('storeData', JSON.stringify(this.menClothes))

  },
  getData() {
    this.menClothes = JSON.parse(localStorage.getItem('storeData'))
  },

  addMoremenClothes(item, price) {
    this.menClothes.push({ item, price })
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
  renderAllmenClothes(domElement) {
    const menClothes = this.menClothes;
    this.render(menClothes, domElement);
},
};
function handleAddmenClothes() {
  gucci.addMenClothes()
  gucci.getData();
  const root = document.getElementById('root')
  gucci.renderAllmenClothes(root)
}

function handleAddMoremenClothes(ev) {
  ev.preventDefault();
  gucci.addMenClothes()
  const item = ev.target.item.value
  const price = ev.target.price.value
  gucci.addMoremenClothes(item, price)
  console.log(gucci.menClothes)
  gucci.storeData();
  
}