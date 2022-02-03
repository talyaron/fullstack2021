let filterBar = document.querySelectorAll('.filter-bar__item');
filterBar.forEach(item => {
    item.addEventListener('click',handleNavClick)

});
let filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick(){
    filterDropBar.classList.toggle("visible");
    console.log('click');
}

let currencyButton =document.querySelector('#currency-button');
let currencySelector = document.querySelector('.currency-selector');
let currencyOption = document.querySelectorAll('.currency');
currencyButton.addEventListener('click',handleCurrencySelectorClick);
function handleCurrencySelectorClick(){
    currencySelector.classList.toggle("visible");
}
currencyOption.forEach(currency => {
    currency.addEventListener('click', handleCurrencyOptionClick)
    
});
function handleCurrencyOptionClick(ev){
    let id = ev.target.id;
    let prices:any = document.querySelectorAll(".category-wrapper__card__price");
    console.log(id);
    currencyButton.innerHTML = `ISRAEL (${id})`;
    prices.forEach(price => {
        switch (id){
            case "USD":
                price.classList.add("USD");
                price.classList.remove("EUR","GBP");
            break;
            case "EUR":
                price.classList.add("EUR");
                price.classList.remove("USD","GBP");
            break;
            case "GBP":
                price.classList.add("GBP");
                price.classList.remove("EUR","USD");
            break;
        }
    });
    
}
document.querySelectorAll(".category-wrapper__card__price").forEach(price => {
    price.classList.add("USD");
});

const cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener('click',handleCartClick);

function handleCartClick(){
    const cart:any = document.querySelector(".wow");
    cart.classList.toggle("visible");
    console.log(cart.classList);
    
}




