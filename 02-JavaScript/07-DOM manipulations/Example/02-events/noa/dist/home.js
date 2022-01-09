var img = document.querySelectorAll('img');
console.log('img');
img.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        text.innerHTML = item.alt;
        console.log('MouseEnter');
    });
});
