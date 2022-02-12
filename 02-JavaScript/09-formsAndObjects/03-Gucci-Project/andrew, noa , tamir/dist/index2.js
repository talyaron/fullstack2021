// let filterBar = document.querySelectorAll('.drop');
// filterBar.forEach(item => {
//     item.addEventListener('click', handleNavClick)
// });
// let filterDropBar = document.querySelector('.filter-dropbar');
// function handleNavClick() {
//     filterDropBar.classList.toggle("visible");
//     console.log('click');
// }
// let currencyButton = document.querySelector('#currency-button');
// let currencySelector = document.querySelector('.currency-selector');
// let currencyOption = document.querySelectorAll('.currency');
// currencyButton.addEventListener('click', handleCurrencySelectorClick);
// function handleCurrencySelectorClick() {
//     currencySelector.classList.toggle("visible");
// }
// currencyOption.forEach(currency => {
//     currency.addEventListener('click', handleCurrencyOptionClick)
// });
// function setCurrency() {
//     switch (aviator.currency) {
//         case "USD":
//             swichToUsd()
//             break;
//         case "EUR":
//             swichToEur()
//             break;
//         case "GBP":
//             swichToGbp()
//             break;
//     }
// }
// function swichToUsd() {
//     let prices: any = document.querySelectorAll(".category-wrapper__card__price");
//     let cartPrices: any = document.querySelectorAll(".cart__card--price");
//     prices.forEach(price => {
//         price.classList.add("USD");
//         price.classList.remove("EUR", "GBP");
//     });
//     cartPrices.forEach(price => {
//         price.classList.add("USD");
//         price.classList.remove("EUR", "GBP");
//     });
// };
// function swichToEur() {
//     let prices: any = document.querySelectorAll(".category-wrapper__card__price");
//     let cartPrices: any = document.querySelectorAll(".cart__card--price");
//     prices.forEach(price => {
//         price.classList.add("EUR");
//         price.classList.remove("USD", "GBP");
//     });
//     cartPrices.forEach(price => {
//         price.classList.add("EUR");
//         price.classList.remove("USD", "GBP");
//     });
// };
// function swichToGbp() {
//     let prices: any = document.querySelectorAll(".category-wrapper__card__price");
//     let cartPrices: any = document.querySelectorAll(".cart__card--price");
//     prices.forEach(price => {
//         price.classList.add("GBP");
//         price.classList.remove("EUR", "USD");
//     });
//     cartPrices.forEach(price => {
//         price.classList.add("GBP");
//         price.classList.remove("EUR", "USD");
//     });
// };
// function handleCurrencyOptionClick(ev) {
//     let id = ev.target.id;
//     console.log(id);
//     currencyButton.innerHTML = `ISRAEL (${id})`;
//     switch (id) {
//         case "USD":
//             aviator.currency = "USD"
//             break;
//         case "EUR":
//             aviator.currency = "EUR"
//             break;
//         case "GBP":
//             aviator.currency = "GBP"
//             break;
//     }
//     setCurrency()
// }
// document.querySelectorAll(".category-wrapper__card__price").forEach(price => {
//     price.classList.add("USD");
// });
// document.querySelectorAll(".cart__card--price").forEach(price => {
//     price.classList.add("USD");
// });
// const cartIcon = document.querySelector("#cart-icon");
// cartIcon.addEventListener('click', handleCartClick);
// function handleCartClick() {
//     const cart: any = document.querySelector(".wow");
//     cart.classList.toggle("visible");
//     console.log(cart.classList);
// }
