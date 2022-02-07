var filterBar = document.querySelectorAll('.drop');
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
    var prices = document.querySelectorAll(".category-wrapper__card__price");
    console.log(id);
    currencyButton.innerHTML = "ISRAEL (" + id + ")";
    prices.forEach(function (price) {
        switch (id) {
            case "USD":
                price.classList.add("USD");
                price.classList.remove("EUR", "GBP");
                break;
            case "EUR":
                price.classList.add("EUR");
                price.classList.remove("USD", "GBP");
                break;
            case "GBP":
                price.classList.add("GBP");
                price.classList.remove("EUR", "USD");
                break;
        }
    });
}
document.querySelectorAll(".category-wrapper__card__price").forEach(function (price) {
    price.classList.add("USD");
});
var cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener('click', handleCartClick);
function handleCartClick() {
    var cart = document.querySelector(".wow");
    cart.classList.toggle("visible");
    console.log(cart.classList);
}
