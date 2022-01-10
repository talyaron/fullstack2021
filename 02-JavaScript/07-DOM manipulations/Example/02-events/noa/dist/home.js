var img = document.querySelectorAll('img');
console.log('img');
var text = document.getElementById('text');
img.forEach(function (item) {
    item.addEventListener('mouseenter', function (e) {
        text.innerHTML = item.alt;
        console.log('MouseEnter');
    });
});
