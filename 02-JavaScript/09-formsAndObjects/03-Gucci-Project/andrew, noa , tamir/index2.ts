let filterBar = document.querySelectorAll('.filter-bar__item');
filterBar.forEach(item => {
    item.addEventListener('click',handleNavClick)

});
let filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick(){
    filterDropBar.classList.toggle("visible");
    console.log('click');
}


