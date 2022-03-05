interface shop {
  products: Array<product>;
  addItem(products:product);
  renderZap(domElement: any);
  filterItems(pricing?: number)
  sortItemsAsc();
  sortItemsDsc();
  sortByType(item);
}

interface product {
  // id: number;
  item: "computer" | "headphones";
  price: number;
}

const Zap: shop = {
  products: [],
  addItem(product) {
    this.products.push(product);
  },
  renderZap(domElement) {
    let html = '';
    this.products.forEach(product => {
      html += `<div class='card'>
      <p>${product.item}, ${product.price} </p></div>`
    });
    domElement.innerHTML = html;
  },

  sortItemsAsc() {
    this.products.sort((a, b) => { return a.price - b.price })
  },
  sortItemsDsc() {
    this.products.sort((a, b) => { return b.price - a.price })
  },


  filterItems(pricing): Array<product> {
    return this.products.filter((product) => {
      return product.price > pricing
    })
  },
  sortByType(item): Array<product> {
    return this.products.filter((product) => {
      return product.item === item;
    })
  }
}

function handleSelect(event) {
  event.preventDefault();
  const item = event.target.value;
  const select = Zap.sortByType(item)
  console.log(select);
}

function handleChange(event): void {
  event.preventDefault();
  const price = event.target.valueAsNumber;
  const filterd = Zap.filterItems(price)
  console.log(filterd)
}

function handleSortAsc(event): void {
  event.preventDefault();
  Zap.sortItemsAsc();
  console.log(Zap.products);
}

function handleSortDsc(event): void {
  event.preventDefault();
  Zap.sortItemsDsc();
  console.log(Zap.products);
}


// const filterItems = Zap.sortItems(5);

// console.log(filterItems);


function handleAddItem(event): void {
  event.preventDefault();
  const item = event.target.item.value;
  const price = event.target.price.valueAsNumber;
  Zap.addItem({item,price});
  const rootItems = document.getElementById('rootItems');
  Zap.renderZap(rootItems);
  event.target.reset();
}


// const root = document.getElementById('rootItems').innerHTML;
// if (type === 'All') {
//   Zap.renderZap(root);
// } else {
//   console.log(type);






// console.log(Zap);






