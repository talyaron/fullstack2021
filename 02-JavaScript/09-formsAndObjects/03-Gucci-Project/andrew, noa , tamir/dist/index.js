var aviator = {
    items: [{ name: 'DOUGLAS DAY 41', price: 45, img: "https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp" }, { name: 'DOUGLAS DAY-DATE 41', price: 55, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.276.4.webp' },
        { name: 'DOUGLAS', price: 35, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.2.237.4.webp' },
        { name: 'tamir', price: 57, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.277.4.webp' },
        { name: 'avi', price: 140, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.280.4.webp' },
        { name: 'nir', price: 60, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.274.4.webp' }],
    filteritems: [],
    renderitem: function (domElement) {
        var html = '';
        this.items.forEach(function (item) {
            html += "<div class='category_wrapper' style=\"background-color: rgb(236, 232, 232);display: flex;\">\n                         <div class='category_wrapper__card' style=\"display: grid; width: 200px;text-align: center;\">\n                        <div class='category_wrapper__card__img'><img src=\"" + item.img + "\" alt=\"\"  style=\"width: 200px;\"></div>\n                        <div class=\"category_wrapper__card__name\">" + item.name + "</div>\n                        <div class=\"category_wrapper__card__price\" style=\"margin-top: 3px;\">" + item.price + "</div>\n                   </div>\n                   </div>";
        });
        domElement.innerHTML = html;
    },
    sortitemup: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemdown: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    }
};
function handlesortitem(ev) {
    console.log('okk');
    ev.preventDefault();
    aviator.sortitemup();
    aviator.renderitem(rootitems);
}
function handlesortitemacs(ev) {
    ev.preventDefault();
    console.log('okk');
    aviator.sortitemdown();
    aviator.renderitem(rootitems);
}
var rootitems = document.getElementById('category_wrapper');
aviator.renderitem(rootitems);
