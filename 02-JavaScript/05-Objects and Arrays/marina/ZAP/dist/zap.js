// popup
var helloGuest = document.querySelector(".guest_mouseover");
var popup = document.querySelector(".popup_wrapper");
var closePopup = document.querySelector(".popup_close");
setTimeout(function popupTimeOut() { popup.style.visibility = 'visible'; }, 2000);
helloGuest.addEventListener('mouseover', function () {
    popup.style.visibility = 'visible';
});
closePopup.addEventListener('click', function () {
    popup.style.visibility = 'hidden';
});
// popup.addEventListener('click', (e) => {       // does`nt work
//     console.log(e);
//     popup.style.visibility = 'hidden';
// });
// Search input on hover CSS changing
var generalInput = document.querySelector(".search");
generalInput.addEventListener("click", function (e) {
    generalInput.style.backgroundColor = "rgb(58, 63, 64)";
    generalInput.style.color = "white";
});
generalInput.addEventListener("mouseout", function (e) {
    generalInput.style.backgroundColor = "rgb(58, 63, 64)";
    generalInput.style.color = "white";
});
//login popup mouse event
var login = document.querySelector(".login");
login.addEventListener("mouseover", function () {
    login.style.cursor = "pointer";
});
// on COMPUTERS click event
var filteCategoryComputer = document.querySelector(".category");
filteCategoryComputer.addEventListener("click", function () {
    var html = "    <div class=\"computers\">\n        <div class=\"computers_comp1\">\n            <h3>Apple MacBook Air MGN93HB / A Apple</h3>\n            <h4>Prise: 4,590   &star; &bigstar; &bigstar; &bigstar; &bigstar; </h4> \n            <p>Manufacturer: Apple, Screen size: 13.3 inches, Processor type: M1, RAM: 8 GB</p>\n            <p>Screen: 2560 x1600, Touch screen: without, Hard drive: 256 GB, Weight: 1.29 kg</p>\n        </div>\n        <div>\n            <img  style=\"width: 80%;\" class=\"apple\" src=\"https://img.zap.co.il/pics/3/4/3/5/58935343c.gif\" alt=\"\">\n        </div>\n\n    </div>";
    var rootComp = document.querySelector("#rootComputer");
    rootComp.innerHTML = html;
});
var rootComp = document.querySelector("#rootComputer");
var myZapSearch = {
    computers: [],
    addComputer: function (computer) {
        this.computers.push(computer);
    },
    removeComputer: function (compTitle) {
        var index = this.computers.findIndex(function (computer) { return computer.titleComp === compTitle; });
        if (index >= 0) {
            this.computers.splice(index, 1);
        }
    },
    filterMaxPrice: function (price) {
        return this.computers.filter(function (computer) { return computer.price < price; });
    },
    sortAscen: function () {
        console.log('sortAscen');
        this.computers = this.computers.sort(function (a, b) { return a.price - b.price; });
        console.log(this.computers);
    },
    sortDescen: function () {
        console.log('sortDescen');
        this.computers = this.computers.sort(function (a, b) { return b.price - a.price; });
        console.dir(this);
    },
    renderAllComputers: function (domElement) {
        var computers = this.computers;
        this.renderComputerList(domElement, computers);
    },
    renderFilter: function (domElement, filterd) {
        this.renderComputerList(domElement, filterd);
    },
    renderComputerList: function (domElement, list) {
        var html = "";
        list.forEach(function (computer) {
            html += "<div class = \"computers\">\n            <p>You were looking for</p>\n            <h3>" + computer.compDescription + "</h3>\n            <p>for</p> <h4>" + computer.price + "</h4></div>";
        });
        // console.log(html);
        domElement.innerHTML = html;
    }
};
function handlePriceAscen() {
    myZapSearch.sortAscen();
    var rootComp = document.querySelector("#rootComputer");
    myZapSearch.renderAllComputers(rootComp);
    // myZapSearch.sortAscen(ev.target.elements.ascending.name);
}
function handlePriseDescen(e) {
    //   console.log(e, e.targit);
    var rootComp = document.querySelector("#rootComputer");
    myZapSearch.sortDescen();
    myZapSearch.renderAllComputers(rootComp);
}
function handleDelete(e) {
    //   console.log(e, e.targit);
    e.preventDefault();
    myZapSearch.renderAllComputers(rootComp);
}
function handleSubmit(e) {
    e.preventDefault();
    console.dir(e.target);
    var rootComp = document.querySelector("#rootComputer");
    var compDescription = e.target.elements.comp_title.value;
    var price = e.target.elements.price.value;
    myZapSearch.addComputer({ compDescription: compDescription, price: price });
    myZapSearch.renderAllComputers(rootComp);
    e.target.reset();
}
// Filtering (M.F)
function handleFilter(e) {
    var price = e.target.valueAsNumber;
    var rootComp = document.getElementById("rootComputer");
    if (price) {
        console.log(price);
        var filterd = myZapSearch.filterMaxPrice(price);
        console.log(filterd);
        myZapSearch.renderFilter(rootComp, filterd);
    }
    else {
        myZapSearch.renderAllComputers();
    }
}
// function FilterIt(filterNumber) {
//   let filtered: Array<Computer> = [];
//   filtered = myZapSearch.computers.filter((priceFilter) => {
//     return priceFilter.price < filterNumber;
//   });
//   renderFilter(filtered, rootComp);
// }
// function renderFilter(compFiltered, rootComp) {
//   let filteredHtml = "";
//   for (let i in compFiltered) {
//     filteredHtml += `<div class="card"><p>${compFiltered[i].titleComp}: ${compFiltered[i].price}</p></div>`;
//   }
//   rootComp.innerHTML = filteredHtml;
// }
