// popup
var helloGuest = document.querySelector('.guest_mouseover');
var popup = document.querySelector('.popup_wrapper');
var closePopup = document.querySelector('.popup_close');
// setTimeout(function popupTimeOut() { popup.style.visibility = 'visible'; }, 2000);
// helloGuest.addEventListener('mouseover', () => {
//     popup.style.visibility = 'visible';
// });
// closePopup.addEventListener('click', () => {
//     popup.style.visibility = 'hidden';
// });
// popup.addEventListener('click', (e) => {     // does`nt work
//     console.log(e);
//     popup.style.visibility = 'hidden';
// });
// Search input on hover CSS changing
var generalInput = document.querySelector('.search');
generalInput.addEventListener('click', function (e) {
    generalInput.style.backgroundColor = 'rgb(58, 63, 64)';
    generalInput.style.color = 'white';
});
//login mouse event
var login = document.querySelector('.login');
login.addEventListener('mouseover', function () {
    login.style.cursor = 'pointer';
});
// on COMPUTERS click event
var filteCategoryComputer = document.querySelector('.category');
// const subMenuComputer = document.querySelector('subMenuComputer');
filteCategoryComputer.addEventListener('click', function () {
    var html = "    <div class=\"computers\">\n        <div class=\"computers_comp1\">\n            <h3>Apple MacBook Air MGN93HB / A Apple</h3>\n            <h4>Prise: 4,590   &star; &bigstar; &bigstar; &bigstar; &bigstar; </h4> \n            <p>Manufacturer: Apple, Screen size: 13.3 inches, Processor type: M1, RAM: 8 GB</p>\n            <p>Screen: 2560 x1600, Touch screen: without, Hard drive: 256 GB, Weight: 1.29 kg</p>\n        </div>\n        <div>\n            <img  style=\"width: 80%;\" class=\"apple\" src=\"https://img.zap.co.il/pics/3/4/3/5/58935343c.gif\" alt=\"\">\n        </div>\n\n    </div>";
    var rootComp = document.querySelector('#rootComputer');
    rootComp.innerHTML = html;
});
var rootComp = document.querySelector('#rootComputer');
;
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
    renderComp: function (domElement) {
        var html = "";
        this.computers.forEach(function (computer) {
            html += "<div class = \"computers\">\n            <p>You were looking for</p>\n            <h3>" + computer.compDescription + "</h3>\n            <p>for</p> <h4>" + computer.compPrice + "</h4></div>";
        });
        // console.log(html);
        domElement.innerHTML = html;
    },
    sortPrice: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'ascending'; }
        if (orderBy === 'ascending') {
            this.computers.sort(function (a, b) { return a.price - b.price; });
        }
        else if (orderBy === 'descending') {
            this.computers.sort(function (a, b) { return b.price - a.price; });
        }
    }
};
// myZapSearch.addComputer();
// console.log(myZapSearch.computers);
function handleSubmit(e) {
    e.preventDefault();
    console.dir(e.target);
    var rootComp = document.querySelector('#rootComputer');
    var compDescription = e.target.elements.comp_title.value;
    var compPrice = e.target.elements.comp_price.value;
    myZapSearch.addComputer({ compDescription: compDescription, compPrice: compPrice });
    myZapSearch.renderComp(rootComp);
    e.target.reset();
}
myZapSearch.addComputer({ compDescription: "Dell Inspiron 5410 IN-RD33-13162", compPrice: "4,689" });
myZapSearch.addComputer({ compDescription: "Lenovo", compPrice: "3.057" });
myZapSearch.addComputer({ compDescription: " Apple MacBook Pro 13 MYD82HB/A", compPrice: "5,890" });
myZapSearch.addComputer({ compDescription: "Asus X413EA-EK2009W", compPrice: "3,590 " });
