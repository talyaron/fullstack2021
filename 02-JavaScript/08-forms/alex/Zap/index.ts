interface shop {
  products: Array<product>;
  addItem(product: product)
  renderZap(domElement: any);
  filterItems(pricing?: number)
  sortItems(orderBy?: string)
}

interface product {
  item: string;
  price: number;
}

const Zap: shop = {
  products: [
    { item: 'helo', price: 5 },
    { item: 'bye', price: 10 },
  ],
  addItem(product: product) {
    this.products.push(product)
  },
  renderZap(domElement) {
    let html = '';
    this.products.forEach(product => {
      html += `<div class='card'>
      <p>${product.item}, ${product.price} </p></div>`
    });
    domElement.innerHTML = html;
  },
  sortItems(orderBy = 'asc') {
    if (orderBy === 'asc') {
      this.products.sort((a, b) => {
        return a.price - b.price
      })
    }
    else if (orderBy === 'dsc') {
      this.products.sort((a, b) => {
        return b.price - a.price
      })
    }
  },
  filterItems(pricing): Array<product> {
    return this.products.filter((product) => {
      return product.price > pricing

    })
  }

}

function handleChange(event):void {
  event.preventDefault();
  const price = event.target.valueAsNumber;
  Zap.filterItems(price);
  const rootItems = document.getElementById('rootItems');
  Zap.renderZap(rootItems);
  // const rootItems = document.getElementById('rootItems');
  // Zap.renderZap(rootItems);
  console.log(event.target.valueAsNumber)

  const filterd = Zap.filterItems(price)
  console.log(filterd)
}

// const filterItems = Zap.filterItems(5);
// console.log(filterItems);


function handleAddItem(event): void {
  event.preventDefault();
  const item = event.target.item.value;
  const price = event.target.price.valueAsNumber;
  Zap.addItem({ item, price });
  const rootItems = document.getElementById('rootItems');
  Zap.renderZap(rootItems);
  event.target.reset();
}



// const rootItems = document.getElementById('rootItems').innerHTML;
// Zap.renderZap(rootItems);

// console.log(Zap);






