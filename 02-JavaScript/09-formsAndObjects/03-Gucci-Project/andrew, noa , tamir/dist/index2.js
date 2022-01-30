var filterBar = document.querySelectorAll('.filter-bar__item');
filterBar.forEach(function (item) {
    item.addEventListener('click', handleNavClick);
});
var filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick() {
    filterDropBar.classList.toggle("visible");
    console.log('click');
}
