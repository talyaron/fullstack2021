var filterBar = document.querySelectorAll('.filter-bar__item');
filterBar.forEach(function (item) {
    item.addEventListener('click', handleNavClick);
});
var filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick() {
    filterDropBar.classList.toggle("visible");
    console.log('click');
}
var currencyButton = document.querySelector('#currency-button');
var currencySelector = document.querySelector('.currency-selector');
var currencyOption = document.querySelectorAll('.currency');
currencyButton.addEventListener('click', handleCurrencySelectorClick);
function handleCurrencySelectorClick() {
    currencySelector.classList.toggle("visible");
}
currencyOption.forEach(function (currency) {
    currency.addEventListener('click', handleCurrencyOptionClick);
});
function handleCurrencyOptionClick(ev) {
    var id = ev.target.id;
    console.log(id);
    currencyButton.innerHTML = "ISRAEL (" + id + ")";
}
