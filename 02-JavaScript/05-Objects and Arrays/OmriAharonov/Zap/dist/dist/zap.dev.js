"use strict";

var zapShop = {
  items: [],
  tempItem: [],
  addItem: function addItem(item) {
    this.items.push(item);
  },
  renderItem: function renderItem(domElement) {
    var html = '';
    this.items.forEach(function (item) {
      html += "<div class = 'card_item'>\n            <p> Item: " + item.description + " | Price: " + item.price + "$</p>";
    });
    html += "</div>";
    domElement.innerHTML = html;
  },
  renderTempItem: function renderTempItem(domElement) {
    var html = '';
    this.tempItem.forEach(function (item) {
      html += "<div class = 'card_item'>\n            <p>  " + item.description + "  : " + item.price + "$</p>";
    });
    html += "</div>";
    domElement.innerHTML = html;
  },
  sortItemAsc: function sortItemAsc() {
    this.items.sort(function (a, b) {
      return a.price - b.price;
    });
    this.tempItem.sort(function (a, b) {
      return a.price - b.price;
    });
  },
  sortItemDesc: function sortItemDesc() {
    this.items.sort(function (a, b) {
      return b.price - a.price;
    });
    this.tempItem.sort(function (a, b) {
      return b.price - a.price;
    });
  }
};
zapShop.addItem({
  description: 'Curved Monitor LG 32"',
  price: 180
});
zapShop.addItem({
  description: 'JBL Headphones',
  price: 200
});
zapShop.addItem({
  description: 'Vtech router',
  price: 18
});
zapShop.addItem({
  description: 'SONY playstation 5',
  price: 1500
});
var rootItems = document.getElementById('rootItems');
zapShop.renderItem(rootItems);

function handleItem(ev) {
  ev.preventDefault();
  console.dir(ev);
  var description = ev.target.elements.description.value;
  var price = ev.target.elements.price.valueAsNumber;
  zapShop.addItem({
    description: description,
    price: price
  });
  var rootItems = document.getElementById('rootItems');
  zapShop.renderItem(rootItems);
  ev.target.reset();
}

function handleSortDesc(ev) {
  ev.preventDefault();
  zapShop.sortItemDesc();
  var rootItems = document.getElementById('rootItems');
  zapShop.renderItem(rootItems);
}

function handleSortAsc(ev) {
  ev.preventDefault();
  zapShop.sortItemAsc();
  var rootItems = document.getElementById('rootItems');
  zapShop.renderItem(rootItems);
}

function handlePrice(ev) {
  var amonut = ev.target.valueAsNumber;
  zapShop.tempItem = zapShop.items.filter(function (ele) {
    return ele.price < amonut;
  });

  if (zapShop.tempItem.length > 0) {
    var rootItems_1 = document.getElementById('rootItems');
    zapShop.renderTempItem(rootItems_1);
  } else {
    var rootItems_2 = document.getElementById('rootItems');
    zapShop.renderItem(rootItems_2);
  }
}