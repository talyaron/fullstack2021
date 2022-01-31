console.log('owner');
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var stock = {
    items: [
        { name: 'DOUGLAS DAY 41', price: 45, img: "https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp" },
        { name: 'DOUGLAS DAY-DATE 41', price: 55, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.276.4.webp' },
        { name: 'DOUGLAS', price: 35, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.2.237.4.webp' },
        { name: 'tamir', price: 57, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.277.4.webp' },
        { name: 'avi', price: 140, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.280.4.webp' },
        { name: 'nir', price: 60, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.274.4.webp' }
    ],
    addItem: function () {
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    var newItem = { name: "", price: 0, img: "", group: "", Collection: "", "function": "" };
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.log(field.value);
        var name = field.name;
        switch (name) {
            case "name":
                newItem.name = field.value;
                break;
            case "price":
                newItem.price = field.value;
                break;
        }
    }
}
