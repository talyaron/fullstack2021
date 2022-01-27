var zapitems = {
    items: [],
    filteritem: [],
    additem: function (newitem) {
        this.items.push(newitem);
    },
    renderitem: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class='card'>\n            you looking for:<h3> " + item.nameofitem + " </h3> and his price is: " + item.price + "$ \n            \n             </div>";
        });
        domElement.innerHTML = html;
    },
    renderitem2: function (domElement) {
        var html = '';
        this.filteritem.forEach(function (item) {
            html += "<div class='card'>\n            you looking for:<h3> " + item.nameofitem + " </h3> and his price is: " + item.price + "$ \n           </div>";
        });
        domElement.innerHTML = html;
    },
    sortitemsDES: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemacs: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    removeitem: function (newtitle) {
        var index = this.items.findIndex(function (item) { return item.nameofitem == newtitle; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    }
};
zapitems.additem({ nameofitem: 'tamir', price: 54, type: 'tamir1' });
zapitems.additem({ nameofitem: 'avi', price: 54, type: 'tamir' });
zapitems.additem({ nameofitem: 'yosi', price: 54, type: 'tamir1' });
// מוסיף אובייקט לפי דרישה
function handleadditem(ev) {
    ev.preventDefault();
    var type = ev.target.elements.type.value;
    var nameofitem = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    zapitems.additem({ nameofitem: nameofitem, price: price, type: type });
    zapitems.renderitem(rootitems);
    ev.target.reset();
}
// ממיין את הרשימה לפי מחיר מלמעלה למטה
function handlesortitem(ev) {
    ev.preventDefault();
    zapitems.sortitemsDES();
    zapitems.renderitem(rootitems);
}
// ממיין את הרשימה לפי מחיר מלמטה למעלה
function handlesortitemacs(ev) {
    ev.preventDefault();
    zapitems.sortitemacs();
    zapitems.renderitem(rootitems);
}
// ברגע שהמשתמש מרים את היד מהמקלדת הפונקציה מתחילה לעבוד
function handleprice(ev) {
    var price2 = ev.target.valueAsNumber;
    zapitems.filteritem = zapitems.items.filter(function (item) { return item.price < price2; });
    if (zapitems.filteritem.length > 0) {
        var rootitems_1 = document.getElementById('renderitems');
        zapitems.renderitem2(rootitems_1);
    }
    else {
        var rootItems = document.getElementById('renderitems');
        zapitems.renderitem(rootitems);
    }
}
// מוחקת איטם אחד מהמסך לפי בחירה של המשתמש
function handleremoveitem(ev) {
    ev.preventDefault();
    var newtitle = ev.target.itemName.value;
    zapitems.removeitem(newtitle);
    zapitems.renderitem(rootitems);
    ev.target.reset();
}
var rootitems = document.getElementById('renderitems');
zapitems.renderitem(rootitems);
