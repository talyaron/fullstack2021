"use strict";

var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

var productObj = {
  products: [],
  addProducts: function addProducts(name, price, type) {
    var id = uid();
    this.products.push({
      id: id,
      name: name,
      price: price,
      type: type
    });
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
  deleteProducts: function deleteProducts(id) {
    this.products = this.products.filter(function (product) {
      return product.id !== id;
    });
  },
  updatePrice: function updatePrice(id) {
    this.products = this.products.update();
  },
  filterByPrice: function filterByPrice(price) {
    return this.products.filter(function (product) {
      return product.price < price;
    });
  },
  filterByType: function filterByType(type) {
    return this.products.filter(function (product) {
      return product.type === type;
    });
  },
  render: function render(list, domElement) {
    var html = '';
    list.forEach(function (product) {
      html += "<div class='result-card'>\n            <p> " + product.name + "<i class=\"fas fa-gamepad fa-spin\"></i></p>\n            <p id=\"log\" > " + product.price + "$</p>\n            <form onclick=\"handleUpdate(event)\">\n            <input id=\"updatePrice\" type=\"number\" name=\"price\" placeholder=\"New Price...\">\n            <input type=\"submit\" value=\"update\"></form>\n            <button id='deleteBtn' onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n            </div>";
    });
    domElement.innerHTML = html;
  },
  renderAllProducts: function renderAllProducts(domElement) {
    var products = this.products;
    this.render(products, domElement);
  },
  renderByType: function renderByType(type, domElement) {
    var filterdByType = this.filterByType(type);
    this.render(filterdByType, domElement);
  },
  renderByPrice: function renderByPrice(price, domElement) {
    var filterd = this.filterByPrice(price);
    this.render(filterd, domElement);
  },
  renderUpdate: function renderUpdate(price, domElement) {
    var update = this.updatePrice(price);
    this.render(update, domElement);
  }
};

function handleSubmit(ev) {
  ev.preventDefault();
  console.dir(ev.target);
  var name = ev.target[0].value;
  var price = ev.target[1].value;
  var type = ev.target[2].value;
  productObj.addProducts(name, price, type);
  var root = document.getElementById('root');
  productObj.renderAllProducts(root);
  ev.target.reset();
}

function handleDesc(ev) {
  var desc = ev.target.value;
  productObj.sortDesc(desc);
  var root = document.getElementById('root');
  productObj.renderAllProducts(root);
}

function handleAsc(ev) {
  var asc = ev.target.value;
  productObj.sortAsc(asc);
  var root = document.getElementById('root');
  productObj.renderAllProducts(root);
}

function handleInput(ev) {
  var price = ev.target.valueAsNumber;
  var root = document.getElementById('root');

  if (price) {
    productObj.renderByPrice(price, root);
  } else {
    productObj.renderAllProducts(root);
  }
}

function handleDelete(id) {
  var root = document.getElementById('root');
  productObj.deleteProducts(id);
  productObj.renderAllProducts(root);
}

function handleUpdate(ev) {
  ev.preventDefault();
  var updatePrice = ev.path[1][0].value; // const log = document.getElementById('log');

  var root = document.getElementById('root');
  productObj.updatePrice(updatePrice);
  productObj.renderAllProducts(root);
}

function handleSelect(ev) {
  var root = document.getElementById('root');
  var type = ev.target.value;

  if (type === 'all') {
    productObj.renderAllProducts(root);
  } else {
    productObj.renderByType(type, root);
  }
}

productObj.addProducts('Halo', 99.99, 'pc games');
productObj.addProducts('Dark Siders', 103.99, 'pc games');
productObj.addProducts('Icy Tower', 5.99, 'pc games');
productObj.addProducts('The Witcher', 89.99, 'pc games');
productObj.addProducts('Daying Light', 106.99, 'pc games');
productObj.addProducts('Angry Birds', 4.99, 'mobile games');
productObj.addProducts('Asphalt ', 6.99, 'mobile games');
productObj.addProducts("Poker", 5.99, 'mobile games');
productObj.addProducts("Top war", 1.99, 'mobile games');
productObj.addProducts("Sonic Dash", 0.99, 'mobile games');
var root = document.getElementById('root');
productObj.renderAllProducts(root);