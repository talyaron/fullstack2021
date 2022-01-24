"use strict";

var productObj = {
  products: [],
  addProducts: function addProducts(product) {
    this.products.push(product);
  },
  sortDesc: function sortDesc(orderByDesc) {
    orderByDesc === 'desc';
    this.products.sort(function (a, b) {
      return a.price - b.price;
    });
  },
  sortAsc: function sortAsc(orderByAsc) {
    orderByAsc === 'asc';
    this.products.sort(function (a, b) {
      return b.price - a.price;
    });
  },
  renderProducts: function renderProducts(array) {
    var html = '';
    array.forEach(function (product) {
      html += "<div class='card'>\n            <p>" + product.description + "," + product.price + "$</p></div>";
    }); // const rootProducts = document.getElementById('cardResult');

    rootProducts.innerHTML = html;
  },
  filterByPrice: function filterByPrice(valueInput) {
    if (valueInput == "") {
      this.renderProducts(this.products);
      return;
    }

    var filteredList = this.products.filter(function (product) {
      return product.price < Number(valueInput);
    });
    this.renderProducts(filteredList);
    ;
  }
};

function handleSubmit(ev) {
  ev.preventDefault();
  var description = ev.target.elements.description.value;
  var price = ev.target.elements.price.valueAsNumber;
  productObj.addProducts({
    description: description,
    price: price
  });
  productObj.renderProducts(productObj.products);
  ev.target.reset();
}

function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;

  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert('Please input valid Product Name');
    return false;
  }
}

function handleDesc(ev) {
  var desc = ev.target.value;
  productObj.sortDesc(desc);
  var rootProducts = document.getElementById('cardResult');
  productObj.renderProducts(rootProducts);
}

function handleAsc(ev) {
  var asc = ev.target.value;
  productObj.sortAsc(asc);
  var rootProducts = document.getElementById('cardResult');
  productObj.renderProducts(rootProducts);
}

function handleInput(ev) {
  productObj.filterByPrice(ev.target.value);
}

productObj.addProducts({
  description: 'banana',
  price: 99
});
productObj.addProducts({
  description: 'apples',
  price: 5
});
productObj.addProducts({
  description: 'orange',
  price: 17
});
productObj.addProducts({
  description: 'milk',
  price: 99
});
productObj.addProducts({
  description: 'water',
  price: 5
});
productObj.addProducts({
  description: 'orange',
  price: 17
});
var rootProducts = document.getElementById('cardResult');
productObj.renderProducts(rootProducts);