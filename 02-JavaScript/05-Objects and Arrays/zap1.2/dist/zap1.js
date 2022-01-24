var zapLaptops = {
    laptops: [],
    addLaptop: function (addLaptop) {
        this.laptops.push(addLaptop);
    },
    renderLaptop: function (laptopOnDom) {
        var laptopHtml = '';
        this.laptops.forEach(function (laptop) {
            laptopHtml = "<div class=\"card\"><p>" + laptop.company + ": " + laptop.price + "</p></div>";
        });
        laptopOnDom.innerHTML += laptopHtml;
    },
    ascLaptops: function () {
        //console.log(ascLaptops);//לבצע ת זה עם התניה של אין אורדר
        this.laptops.sort(function (a, b) { return a.price - b.price; });
        this.renderAsc(this.laptops, rootLaptops);
    },
    descLaptops: function () {
        this.laptops.sort(function (a, b) { return b.price - a.price; });
        this.renderDesc(this.laptops, rootLaptops);
    },
    renderAsc: function (sortedArray, rootLaptops) {
        var sortedAscHtml = '';
        for (var i in sortedArray) {
            sortedAscHtml += "<div class=\"card\"><p>" + sortedArray[i].company + ": " + sortedArray[i].price + "</p></div>";
        }
        rootLaptops.innerHTML = sortedAscHtml;
    },
    renderDesc: function (sortedArray, rootLaptops) {
        var sortedDescHtml = '';
        for (var i in sortedArray) {
            sortedDescHtml += "<div class=\"card\"><p>" + sortedArray[i].company + ": " + sortedArray[i].price + "</p></div>";
        }
        rootLaptops.innerHTML = sortedDescHtml;
    }
};
function handleSubmit(event) {
    event.preventDefault();
    var company = event.target.elements.description.value;
    var price = event.target.elements.price.valueAsNumber;
    zapLaptops.addLaptop({ company: company, price: price });
    zapLaptops.renderLaptop(rootLaptops);
    event.target.reset();
}
function handleAsc(ev) {
    ev.preventDefault();
    zapLaptops.ascLaptops();
}
function handleDesc(ev) {
    ev.preventDefault();
    zapLaptops.descLaptops();
}
//I decided to Diversify & to put filter outside the object----------
function handleFilter(e) {
    var fiterEvent = e.target.valueAsNumber;
    FilterIt(fiterEvent);
}
function FilterIt(filterNumber) {
    var filtered = [];
    filtered = zapLaptops.laptops.filter(function (priceFilter) { return priceFilter.price < filterNumber; });
    renderFilter(filtered, rootLaptops);
}
function renderFilter(laptopsFiltered, rootLaptops) {
    var filteredHtml = '';
    for (var i in laptopsFiltered) {
        filteredHtml += "<div class=\"card\"><p>" + laptopsFiltered[i].company + ": " + laptopsFiltered[i].price + "</p></div>";
    }
    rootLaptops.innerHTML = filteredHtml;
}
var rootLaptops = document.getElementById("rootLaptops");
zapLaptops.renderLaptop(rootLaptops);
