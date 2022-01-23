var zapitems = {
    items: [],
    additem: function (newitem) {
        this.items.push(newitem);
    },
    renderitem: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class='card'>\n            you looking for: " + item.nameofitem + "  and is price his: " + item.price + "  </div>";
        });
        domElement.innerHTML = html;
    },
    sortitemsDES: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemacs: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    },
    thelowerprice: function (ev) {
    }
};
// מוסיף אובייקט לפי דרישה
function handleadditem(ev) {
    ev.preventDefault();
    var nameofitem = ev.target.elements.title.value;
    var price = ev.target.elements.price.valueAsNumber;
    zapitems.additem({ nameofitem: nameofitem, price: price });
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
function handlethelowerprice(ev) {
    zapitems.thelowerprice(ev);
    zapitems.renderitem(rootitems);
}
var rootitems = document.getElementById('renderitems');
zapitems.renderitem(rootitems);
