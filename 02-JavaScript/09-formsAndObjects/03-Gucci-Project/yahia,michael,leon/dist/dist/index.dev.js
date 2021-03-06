"use strict";

var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

var nikeItems = {
  items: [],
  carts: [],
  additems: function additems(name, price, type) {
    var idItem = uid();
    this.items.push({
      name: name,
      price: price,
      type: type,
      idItem: idItem
    });
  },
  sortAsc: function sortAsc() {
    this.items.sort(function (a, b) {
      return a.price - b.price;
    });
  },
  sortDes: function sortDes() {
    this.items.sort(function (a, b) {
      return b.price - a.price;
    });
  },
  deleteItem: function deleteItem(idItem) {
    this.items = this.items.filter(function (item) {
      return item.idItem !== idItem;
    });
  },
  updateItem: function updateItem(idItem, newValue) {
    var i = this.items.findIndex(function (item) {
      return item.idItem === idItem;
    });
    this.items[i].name = newValue;
  },
  addToCarts: function addToCarts(type) {
    this.carts.push(type);
  },
  renderAllCarts: function renderAllCarts(root) {
    var list = this.carts;
    this.renderCarts(root, list);
  },
  selectItem: function selectItem(type) {
    this.carts.filter(function (type) {});
  },
  renderAllData: function renderAllData(root) {
    var list = this.items;
    this.render(root, list);
  },
  renderCarts: function renderCarts(root, list) {
    var htmlCustomer = "";
    list.forEach(function (type) {
      htmlCustomer += "<div class= 'card1'><h4>The Item You Want:</h4> <p>" + type.name + "</p></div>";
    });
    root.innerHTML = htmlCustomer;
  },
  render: function render(root, list) {
    var html = '';
    list.forEach(function (item) {
      html += "<div class = 'card'> <p>" + item.name + "</p>\n            <button onclick=\"handleDelete('" + item.idItem + "')\">delete</button>\n            <form onsubmit=\"handleupdate(event,'" + item.idItem + "')\">\n            <input type=\"text\" name=\"nameUpdate\" placeholder=\"change item\">\n            <input type=\"submit\" value=\"submit\">\n            </form>\n            </div>";
    });
    root.innerHTML = html;
  }
};

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.elements.description.value;
  var price = event.target.elements.price.value;
  nikeItems.additems(name, price);
  var root = document.getElementById('root');
  nikeItems.renderAllData(root);
  event.target.reset(); // poner el tu pajina 
}

function handleAsce() {
  nikeItems.sortAsc();
  var root = document.getElementById('root');
  nikeItems.renderAllData(root);
}

function handleDesce() {
  nikeItems.sortDes();
  var root = document.getElementById('root');
  nikeItems.renderAllData(root);
}

function handleDelete(id) {
  nikeItems.deleteItem(id);
  var root = document.getElementById('root');
  nikeItems.renderAllData(root);
}

function handleupdate(event, id) {
  event.preventDefault();
  var updateditem = event.target.elements.nameUpdate.value;
  nikeItems.updateItem(id, updateditem);
  var root = document.getElementById('root');
  nikeItems.renderAllData(root);
} //customer


function handleCart(event) {
  var shoes = event.target.id;
  nikeItems.addToCarts(shoes);
  var rooto = document.getElementById('root1');
  nikeItems.renderAllCarts(rooto);
}

function handlehoodie(ev) {
  var hoodie = ev.target.value;
  nikeItems.addToCarts(hoodie);
  var root1 = document.getElementById('root1');
  nikeItems.renderAllCarts(root1);
}

function handleSelect(ev) {
  var theType = ev.target.value;
  var root1 = document.getElementById('root1');
  var selected;

  if (theType === "all") {
    nikeItems.renderAllCarts(root1);
  } else {
    selected = nikeItems.selectItem(theType);
  }

  nikeItems.renderCarts(root1, selected);
}