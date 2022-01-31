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
    console.log(id);
    currencyButton.innerHTML = `ISRAEL (${id})`;
    switch (id){
        
    }
    
}


