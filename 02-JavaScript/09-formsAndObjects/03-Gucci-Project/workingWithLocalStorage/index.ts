interface Store {
  products: Array<Product>;
  addProducts();
  storeData();
  getData();
}

interface Product {
  name: string;
  price: number;
  id: string;
}

const myStore: Store = {
  products: [],
  addProducts() {
    this.products = [
      { name: "pr1", price: 11, id: 1 },
      { name: "pr2", price: 22, id: 2 },
      { name: "pr3", price: 33, id: 3 },
    ];
    this.storeData();
  },
  storeData(){
      sessionStorage.setItem('storeData', JSON.stringify(this.products))
  },
  getData(){
    this.products = JSON.parse( sessionStorage.getItem('storeData'))
  }
};
function handleAddProducts():void {
  myStore.addProducts();
}
function handleShowProducts():void{
    console.log(myStore.products)
}
function handleGetProducts():void{
    myStore.getData();
}

myStore.getData();
console.log('-- start page products --')
console.log(myStore.products);
console.log('-- ------------------- --');

const a = 42;
